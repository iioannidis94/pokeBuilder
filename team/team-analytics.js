// --- team-analytics.js : Archetype Recognition, Speed Control, Meta Threats, Damage Calc ---

// ==========================================
// 1. ARCHETYPE RECOGNITION
// ==========================================

const WEATHER_SETTERS = {
    'drizzle':      { name: 'Rain Team 🌧️',   color: '#4dabf7', desc: 'Recommend Swift Swim attackers & Water / Thunder coverage.' },
    'drought':      { name: 'Sun Team ☀️',     color: '#ff6b35', desc: 'Recommend Chlorophyll sweepers & Fire / Solar Beam coverage.' },
    'sand-stream':  { name: 'Sand Team 🌪️',   color: '#d4a76a', desc: 'Prefer Rock / Ground / Steel types — immune to Sand chip damage.' },
    'snow-warning': { name: 'Snow Team ❄️',    color: '#74c0fc', desc: 'Recommend Slush Rush users or Blizzard spam under Snow.' },
};

function detectArchetype(selected) {
    if (!selected || !selected.length) return null;

    // Weather setters (ability-based)
    for (const mon of selected) {
        if (!mon.slot.ability) continue;
        const key = mon.slot.ability.toLowerCase().replace(/\s+/g, '-');
        if (WEATHER_SETTERS[key]) {
            return { ...WEATHER_SETTERS[key], setter: mon.p.name };
        }
    }

    // Trick Room (move-based)
    for (const mon of selected) {
        if (!mon.slot.moveNames) continue;
        if (mon.slot.moveNames.some(m => m && m.toLowerCase().replace(/\s+/g, '-') === 'trick-room')) {
            return {
                name: 'Trick Room 🔄', color: '#cc5de8',
                desc: 'Recommend slow, high-Attack Pokémon that outspeed everything under reversed Speed order.',
                setter: mon.p.name
            };
        }
    }

    // Tailwind (move-based)
    for (const mon of selected) {
        if (!mon.slot.moveNames) continue;
        if (mon.slot.moveNames.some(m => m && m.toLowerCase().replace(/\s+/g, '-') === 'tailwind')) {
            return {
                name: 'Tailwind Team 💨', color: '#63d471',
                desc: 'Team has Speed control via Tailwind — consider pairing fast sweepers.',
                setter: mon.p.name
            };
        }
    }

    return null;
}

// ==========================================
// 2. SPEED CONTROL WARNING
// ==========================================

function getSpeedControlAnalysis(selected) {
    if (!selected || !selected.length) return null;

    const speedData = selected.map(x => {
        const bs = (typeof BASE_STATS !== 'undefined' && BASE_STATS[x.p.id]) || { spe: 70 };
        return { name: x.p.name, spe: Number(bs.spe) || 70 };
    });

    const avgSpeed = Math.round(speedData.reduce((s, x) => s + x.spe, 0) / speedData.length);
    const slowMons  = speedData.filter(x => x.spe < 60);
    const fastMons  = speedData.filter(x => x.spe >= 100);

    const hasTailwind   = selected.some(x => x.slot.moveNames && x.slot.moveNames.some(m => m && m.toLowerCase().replace(/\s+/g, '-') === 'tailwind'));
    const hasTrickRoom  = selected.some(x => x.slot.moveNames && x.slot.moveNames.some(m => m && m.toLowerCase().replace(/\s+/g, '-') === 'trick-room'));
    const hasIcyWind    = selected.some(x => x.slot.moveNames && x.slot.moveNames.some(m => m && m.toLowerCase().replace(/\s+/g, '-') === 'icy-wind'));
    const hasSpeedControl = hasTailwind || hasTrickRoom || hasIcyWind;

    return {
        avgSpeed,
        slowMons,
        fastMons,
        hasSpeedControl,
        hasTailwind,
        hasTrickRoom,
        needsWarning: !hasSpeedControl && avgSpeed < 80 && slowMons.length >= 2
    };
}

// ==========================================
// 3. META THREAT INTEGRATION (VGC 2024 Reg G / PRO PvP Top 10)
// ==========================================

const META_THREATS = [
    { id: 987,  name: 'Flutter Mane',    types: ['ghost',    'fairy']    },
    { id: 992,  name: 'Iron Hands',      types: ['fighting', 'electric'] },
    { id: 892,  name: 'Urshifu',         types: ['fighting', 'dark']     },
    { id: 1017, name: 'Ogerpon',         types: ['grass']                },
    { id: 1021, name: 'Raging Bolt',     types: ['electric', 'dragon']   },
    { id: 727,  name: 'Incineroar',      types: ['fire',     'dark']     },
    { id: 812,  name: 'Rillaboom',       types: ['grass']                },
    { id: 591,  name: 'Amoonguss',       types: ['grass',    'poison']   },
    { id: 898,  name: 'Calyrex-Shadow',  types: ['psychic',  'ghost']    },
    { id: 279,  name: 'Pelipper',        types: ['water',    'flying']   },
];

// PRO PvP Meta — Pokemon Revolution Online (Gen 7 USUM mechanics) — 18 threats in 3 tiers
const META_THREATS_PRO = [
    // Tier 1 — Sweepers (heavy offensive threats)
    { id: 497,  name: 'Serperior',   types: ['grass'],              tier: 1 },
    { id: 445,  name: 'Garchomp',    types: ['dragon',  'ground'],  tier: 1 },
    { id: 461,  name: 'Weavile',     types: ['dark',    'ice'],     tier: 1 },
    { id: 392,  name: 'Infernape',   types: ['fire',    'fighting'],tier: 1 },
    { id: 149,  name: 'Dragonite',   types: ['dragon',  'flying'],  tier: 1 },
    { id: 308,  name: 'Medicham',    types: ['fighting','psychic'], tier: 1 },
    // Tier 2 — Pivots (bulky attackers & utility)
    { id: 376,  name: 'Metagross',   types: ['steel',   'psychic'], tier: 2 },
    { id: 130,  name: 'Gyarados',    types: ['water',   'flying'],  tier: 2 },
    { id: 468,  name: 'Togekiss',    types: ['fairy',   'flying'],  tier: 2 },
    { id: 385,  name: 'Jirachi',     types: ['steel',   'psychic'], tier: 2 },
    { id: 212,  name: 'Scizor',      types: ['bug',     'steel'],   tier: 2 },
    { id: 36,   name: 'Clefable',    types: ['fairy'],              tier: 2 },
    // Tier 3 — Walls (defensive / support anchors)
    { id: 598,  name: 'Ferrothorn',  types: ['grass',   'steel'],   tier: 3 },
    { id: 748,  name: 'Toxapex',     types: ['poison',  'water'],   tier: 3 },
    { id: 801,  name: 'Magearna',    types: ['steel',   'fairy'],   tier: 3 },
    { id: 645,  name: 'Landorus-T',  types: ['ground',  'flying'],  tier: 3 },
    { id: 248,  name: 'Tyranitar',   types: ['rock',    'dark'],    tier: 3 },
    { id: 80,   name: 'Slowbro',     types: ['water',   'psychic'], tier: 3 },
];

// Persist chosen format across page reloads
window.metaThreatFormat = localStorage.getItem('tb_metaFormat') || 'vgc';

window.setMetaFormat = function(fmt) {
    window.metaThreatFormat = fmt;
    localStorage.setItem('tb_metaFormat', fmt);
    if (typeof renderTeamSlots === 'function') renderTeamSlots();
};

function getMetaThreatAnalysis(selected, threats) {
    if (!selected || !selected.length) return null;
    threats = threats || META_THREATS;

    const results = threats.map(threat => {
        let bestMult   = 0;
        let bestSource = null;

        selected.forEach(mon => {
            const teraType = mon.slot && mon.slot.teraType ? String(mon.slot.teraType).toLowerCase() : '';
            // Check STAB types
            mon.p.types.forEach(atkType => {
                const mult = multAtkVsTypes(atkType, threat.types);
                if (mult > bestMult) { bestMult = mult; bestSource = mon.p.name; }
            });
            if (teraType) {
                const mult = multAtkVsTypes(teraType, threat.types);
                if (mult > bestMult) { bestMult = mult; bestSource = `${mon.p.name} (Tera)`; }
            }

            // Check equipped moves
            (mon.slot.moves || []).forEach((moveType, i) => {
                if (!moveType || (mon.slot.moveCats || [])[i] === 'status') return;
                const mult = multAtkVsTypes(moveType, threat.types);
                if (mult > bestMult) { bestMult = mult; bestSource = mon.p.name; }
            });
        });

        return { ...threat, coverage: bestMult, source: bestSource };
    });

    const covered = results.filter(r => r.coverage >= 2).length;
    const score   = Math.round((covered / threats.length) * 100);

    return { results, covered, total: threats.length, score };
}

function getNatureMultiplier(nature, statName) {
    if (!nature) return 1;
    const n = String(nature).toLowerCase();
    const buffs = { adamant: 'ATK', brave: 'ATK', lonely: 'ATK', naughty: 'ATK', bold: 'DEF', impish: 'DEF', lax: 'DEF', relaxed: 'DEF', modest: 'SPATK', mild: 'SPATK', quiet: 'SPATK', rash: 'SPATK', calm: 'SPDEF', gentle: 'SPDEF', sassy: 'SPDEF', careful: 'SPDEF', timid: 'SPD', jolly: 'SPD', hasty: 'SPD', naive: 'SPD' };
    const nerfs = { adamant: 'SPATK', brave: 'SPD', lonely: 'DEF', naughty: 'SPDEF', bold: 'ATK', impish: 'SPATK', lax: 'SPDEF', relaxed: 'SPD', modest: 'ATK', mild: 'DEF', quiet: 'SPD', rash: 'SPDEF', calm: 'ATK', gentle: 'DEF', sassy: 'SPD', careful: 'SPATK', timid: 'ATK', jolly: 'SPATK', hasty: 'DEF', naive: 'SPDEF' };
    if (buffs[n] === statName) return 1.1;
    if (nerfs[n] === statName) return 0.9;
    return 1;
}

function getSpeedTierComparisonHTML(selected) {
    if (!selected || !selected.length) return '';
    const threats = ((typeof window !== 'undefined' && window.metaThreatFormat) || 'vgc') === 'pro' ? META_THREATS_PRO : META_THREATS;

    const myRows = selected.map(mon => {
        const bs = (typeof BASE_STATS !== 'undefined' && BASE_STATS[mon.p.id]) || { spe: 70 };
        const iv = mon.slot.iv?.SPD === '' || mon.slot.iv?.SPD === undefined ? 31 : Number(mon.slot.iv?.SPD) || 31;
        const ev = Number(mon.slot.ev?.SPD) || 0;
        const lv = Number(mon.slot.level) || 100;
        const raw = Math.floor(((2 * (Number(bs.spe) || 70) + iv + Math.floor(ev / 4)) * lv) / 100) + 5;
        const real = Math.floor(raw * getNatureMultiplier(mon.slot.nature, 'SPD'));
        return { name: mon.p.name, speed: real };
    });

    const threatRows = threats.map(threat => {
        const bs = (typeof BASE_STATS !== 'undefined' && BASE_STATS[threat.id]) || { spe: 70 };
        const speed = Math.floor(((2 * (Number(bs.spe) || 70) + 31 + Math.floor(252 / 4)) * 100) / 100) + 5;
        return { name: threat.name, speed };
    });

    const maxSpeed = Math.max(...myRows.map(r => r.speed), ...threatRows.map(r => r.speed), 1);
    const renderRow = (row, mine) => {
        const pct = Math.max(8, Math.round((row.speed / maxSpeed) * 100));
        const color = mine ? '#4dabf7' : '#ff6b6b';
        return `<div style="display:grid; grid-template-columns:120px 1fr 38px; gap:8px; align-items:center; font-size:11px;">
            <span style="color:${mine ? 'var(--txt)' : '#ffb3b3'}; font-weight:700; text-transform:capitalize; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${row.name.replace(/-/g, ' ')}</span>
            <div style="background:rgba(255,255,255,0.08); border-radius:999px; overflow:hidden; height:8px;"><div style="width:${pct}%; height:100%; background:${color};"></div></div>
            <span style="font-weight:900; color:${color}; text-align:right;">${row.speed}</span>
        </div>`;
    };

    return `<div style="margin:10px 0; padding:12px 14px; background:rgba(77,171,247,0.08); border:1px solid #4dabf7; border-radius:8px;">
        <strong style="color:#4dabf7; font-size:13px;">🏁 Speed Tier Comparison</strong>
        <div style="margin-top:8px; display:flex; flex-direction:column; gap:6px;">
            ${myRows.sort((a,b)=>b.speed-a.speed).slice(0, 6).map(r => renderRow(r, true)).join('')}
            ${threatRows.sort((a,b)=>b.speed-a.speed).slice(0, 5).map(r => renderRow(r, false)).join('')}
        </div>
    </div>`;
}

// ==========================================
// 4. DAMAGE CALCULATION (Simplified Gen 9 formula)
// ==========================================

/**
 * Returns estimated damage percentage dealt by atkMon using moveInfo against defPoke.
 * defLevel defaults to 50 (standard VGC).
 */
function estimateDamagePct(atkMon, moveInfo, defPoke, defLevel, defSlotData) {
    if (!atkMon || !moveInfo || !defPoke || !moveInfo.power) return null;
    defLevel = defLevel || 50;

    // Attacker stats
    const atkBs  = (typeof BASE_STATS !== 'undefined' && BASE_STATS[atkMon.p.id]) || { atk: 80, spa: 80 };
    const atkLv  = Number(atkMon.slot.level) || 100;
    const isPhys = moveInfo.cat === 'physical';
    const atkBase= isPhys ? (Number(atkBs.atk) || 80) : (Number(atkBs.spa) || 80);
    const atkEv  = isPhys ? (Number((atkMon.slot.ev || {}).ATK) || 0) : (Number((atkMon.slot.ev || {}).SPATK) || 0);
    const atkIv  = isPhys ? (atkMon.slot.iv?.ATK === '' || atkMon.slot.iv?.ATK === undefined ? 31 : Number(atkMon.slot.iv?.ATK) || 31)
                          : (atkMon.slot.iv?.SPATK === '' || atkMon.slot.iv?.SPATK === undefined ? 31 : Number(atkMon.slot.iv?.SPATK) || 31);
    const atkNature = getNatureMultiplier(atkMon.slot.nature, isPhys ? 'ATK' : 'SPATK');
    const atkRaw = Math.floor(((2 * atkBase + atkIv + Math.floor(atkEv / 4)) * atkLv) / 100) + 5;
    const atkStat= Math.floor(atkRaw * atkNature);

    // Defender stats
    const defBs  = (typeof BASE_STATS !== 'undefined' && BASE_STATS[defPoke.id]) || { hp: 80, def: 80, spd: 80 };
    const hpIv = (defSlotData && defSlotData.iv && defSlotData.iv.HP !== '' && defSlotData.iv.HP !== undefined) ? Number(defSlotData.iv.HP) : 31;
    const hpEv = (defSlotData && defSlotData.ev && defSlotData.ev.HP !== '' && defSlotData.ev.HP !== undefined) ? Number(defSlotData.ev.HP) : 0;
    const defHP  = Math.floor(((2 * (Number(defBs.hp) || 80) + hpIv + Math.floor(hpEv / 4)) * defLevel) / 100) + defLevel + 10;
    const defBase= isPhys ? (Number(defBs.def) || 80) : (Number(defBs.spd) || 80);
    const defIvRaw = (defSlotData && defSlotData.iv)
        ? (isPhys ? defSlotData.iv.DEF : defSlotData.iv.SPDEF)
        : undefined;
    const defEvRaw = (defSlotData && defSlotData.ev)
        ? (isPhys ? defSlotData.ev.DEF : defSlotData.ev.SPDEF)
        : undefined;
    const defIv = defIvRaw === '' || defIvRaw === undefined ? 31 : Number(defIvRaw) || 31;
    const defEv = defEvRaw === '' || defEvRaw === undefined ? 0 : Number(defEvRaw) || 0;
    const defNature = getNatureMultiplier(defSlotData && defSlotData.nature, isPhys ? 'DEF' : 'SPDEF');
    const defRaw = Math.floor(((2 * defBase + defIv + Math.floor(defEv / 4)) * defLevel) / 100) + 5;
    const defStat= Math.floor(defRaw * defNature);

    // Type effectiveness
    const typeMult = multAtkVsTypes(moveInfo.type, defPoke.types);
    if (typeMult === 0) return null; // Immune

    // STAB
    const stab = (atkMon.p.types || []).includes(moveInfo.type) ? 1.5 : 1;

    // Damage formula (Gen 5+)
    const base = Math.floor((Math.floor(2 * atkLv / 5 + 2) * moveInfo.power * atkStat / Math.max(defStat, 1)) / 50) + 2;
    const rolls = [85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
        .map(r => Math.floor(base * (r / 100) * stab * typeMult));
    const dmgMin = Math.min(...rolls);
    const dmgMax = Math.max(...rolls);

    const minPct = Math.min(Math.round(dmgMin / defHP * 100), 999);
    const maxPct = Math.min(Math.round(dmgMax / defHP * 100), 999);

    const ohkoChance = Math.round((rolls.filter(d => d >= defHP).length / rolls.length) * 100);
    let label = '';
    if (minPct >= 100)       label = 'OHKO';
    else if (minPct >= 50)   label = '2HKO';
    else if (minPct >= 34)   label = '3HKO';
    else                     label = `~${minPct}%`;

    return { minPct, maxPct, label, typeMult, ohkoChance };
}

/**
 * Returns the best damage estimate for atkMon against defPoke across all equipped moves.
 * Returns { label, minPct, maxPct, moveName } or null.
 */
function getBestDamageEstimate(atkMon, defPoke, defSlotData) {
    if (!atkMon || !defPoke || !atkMon.slot.moveNames) return null;

    let best = null;

    atkMon.slot.moveNames.forEach(mName => {
        if (!mName) return;
        const mInfo = (typeof MOVE_INFO !== 'undefined') ? (MOVE_INFO[mName] || MOVE_INFO[mName.toLowerCase().replace(/\s+/g, '-')]) : null;
        if (!mInfo || mInfo.cat === 'status' || !mInfo.power) return;

        const est = estimateDamagePct(atkMon, mInfo, defPoke, Number(defSlotData?.level) || 50, defSlotData);
        if (!est) return;

        if (!best || est.maxPct > best.maxPct) {
            best = { ...est, moveName: mName };
        }
    });

    return best;
}

// ==========================================
// 5. STAT COMPARISON
// ==========================================

/**
 * Calculates final battle stats for a Pokémon given base stats, IV, EV, level, nature.
 * For opponents pass iv=31, ev=252, level=100, nature=null.
 */
function calcFinalStats(bs, iv, ev, level, nature) {
    const lv = Number(level) || 100;
    const statKeys = [
        { key: 'hp',  label: 'HP',   mapKey: 'HP'    },
        { key: 'atk', label: 'ATK',  mapKey: 'ATK'   },
        { key: 'def', label: 'DEF',  mapKey: 'DEF'   },
        { key: 'spa', label: 'SpA',  mapKey: 'SPATK' },
        { key: 'spd', label: 'SpD',  mapKey: 'SPDEF' },
        { key: 'spe', label: 'SPE',  mapKey: 'SPD'   },
    ];
    const result = {};
    statKeys.forEach(({ key, label, mapKey }) => {
        const base = Number(bs[key]) || 50;
        const ivVal  = iv  !== null ? (typeof iv  === 'object' ? (iv [mapKey]  === '' || iv [mapKey]  === undefined ? 31 : Number(iv [mapKey])  || 0) : iv)  : 31;
        const evVal  = ev  !== null ? (typeof ev  === 'object' ? (ev [mapKey]  === '' || ev [mapKey]  === undefined ?  0 : Number(ev [mapKey])  || 0) : ev)  :  0;
        const rawBase = Math.floor(((2 * base + ivVal + Math.floor(evVal / 4)) * lv) / 100);
        let final;
        if (key === 'hp') {
            final = rawBase + lv + 10;
        } else {
            const nat = getNatureMultiplier(nature, mapKey);
            final = Math.floor((rawBase + 5) * nat);
        }
        result[label] = final;
    });
    return result;
}

const STAT_LABELS   = ['HP', 'ATK', 'DEF', 'SpA', 'SpD', 'SPE'];
const STAT_COLORS   = { HP: '#63d471', ATK: '#ff6b6b', DEF: '#4dabf7', SpA: '#cc5de8', SpD: '#74c0fc', SPE: '#ffd43b' };

window.calcStatView = window.calcStatView || 'ATK';
window.setCalcStatView = function(stat) { window.calcStatView = stat; renderTeamSlots(); };

function getStatComparisonHTML(selected) {
    if (!selected || !selected.length) return '';

    const activeStat = window.calcStatView || 'ATK';

    // Compute my team final stats
    const myRows = selected.map(mon => {
        const bs = (typeof BASE_STATS !== 'undefined' && BASE_STATS[mon.p.id]) || {};
        const stats = calcFinalStats(bs, mon.slot.iv || {}, mon.slot.ev || {}, mon.slot.level, mon.slot.nature);
        return { name: mon.p.name.replace(/-/g, ' '), stats, isOpp: false };
    });

    // Compute opponent team at max (31 IV, 252 EV, Lv 100)
    const oppRows = [];
    if (typeof window !== 'undefined' && window.oppTeam && window.oppTeam.length) {
        window.oppTeam.forEach(opp => {
            const opId = typeof opp === 'number' ? opp : opp.id;
            const op   = (typeof POKE !== 'undefined') ? POKE.find(p => p.id === opId) : null;
            if (!op) return;
            const bs   = (typeof BASE_STATS !== 'undefined' && BASE_STATS[op.id]) || {};
            const stats = calcFinalStats(bs, 31, 252, 100, null);
            oppRows.push({ name: op.name.replace(/-/g, ' '), stats, isOpp: true });
        });
    }

    const allRows = [...myRows, ...oppRows];
    const maxVal  = Math.max(...allRows.map(r => r.stats[activeStat] || 0), 1);
    const myMax   = Math.max(...myRows.map(r => r.stats[activeStat] || 0), 1);

    const color   = STAT_COLORS[activeStat] || '#4dabf7';

    const buttons = STAT_LABELS.map(s => {
        const active = s === activeStat;
        const c      = STAT_COLORS[s];
        return `<button onclick="window.setCalcStatView('${s}')" style="padding:4px 10px; border-radius:20px; border:1px solid ${active ? c : '#555'}; background:${active ? c + '28' : 'transparent'}; color:${active ? c : 'var(--dim)'}; cursor:pointer; font-size:11px; font-weight:bold; transition:.15s;">${s}</button>`;
    }).join('');

    const renderRow = (row) => {
        const val  = row.stats[activeStat] || 0;
        const pct  = Math.max(8, Math.round((val / maxVal) * 100));
        const isBest = !row.isOpp && val === myMax && myMax > 0;
        const rowColor = row.isOpp ? '#ff6b6b' : (isBest ? color : 'rgba(255,255,255,0.55)');
        const label = row.isOpp
            ? `<span title="Max stats (31 IV / 252 EV / Lv 100)" style="font-size:9px; background:rgba(255,107,107,0.15); border:1px solid #ff6b6b; color:#ff6b6b; border-radius:2px; padding:0 4px; margin-left:3px;">MAX</span>`
            : (isBest ? `<span style="font-size:9px; background:${color}22; border:1px solid ${color}; color:${color}; border-radius:2px; padding:0 4px; margin-left:3px;">BEST</span>` : '');
        return `<div style="display:grid; grid-template-columns:130px 1fr 44px; gap:8px; align-items:center; font-size:11px;">
            <span style="color:${rowColor}; font-weight:700; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; text-transform:capitalize;">${row.name}${label}</span>
            <div style="background:rgba(255,255,255,0.08); border-radius:999px; overflow:hidden; height:8px;"><div style="width:${pct}%; height:100%; background:${rowColor};"></div></div>
            <span style="font-weight:900; color:${rowColor}; text-align:right;">${val}</span>
        </div>`;
    };

    const mySection  = myRows.sort((a,b)  => (b.stats[activeStat]||0) - (a.stats[activeStat]||0)).map(r => renderRow(r)).join('');
    const oppSection = oppRows.length
        ? `<div style="margin-top:6px; border-top:1px dashed rgba(255,107,107,0.3); padding-top:6px; display:flex; flex-direction:column; gap:6px;">${oppRows.sort((a,b) => (b.stats[activeStat]||0) - (a.stats[activeStat]||0)).map(r => renderRow(r)).join('')}</div>`
        : '';

    return `<div style="margin:10px 0; padding:12px 14px; background:${color}0d; border:1px solid ${color}55; border-radius:8px;">
        <strong style="color:${color}; font-size:13px;">📊 Stat Comparison — ${activeStat}</strong>
        <div style="display:flex; flex-wrap:wrap; gap:4px; margin:8px 0 10px;">${buttons}</div>
        <div style="display:flex; flex-direction:column; gap:6px;">${mySection}</div>
        ${oppSection}
        ${oppRows.length ? `<p style="margin:8px 0 0; font-size:10px; color:var(--dim);">🔴 Opponent stats shown at maximum (31 IV · 252 EV · Lv 100) for reference.</p>` : ''}
    </div>`;
}

// ==========================================
// 6. UI HELPERS
// ==========================================

function getArchetypeHTML(selected) {
    const arch = detectArchetype(selected);
    if (!arch) return '';
    return `<div style="margin:10px 0 8px; padding:10px 14px; background:${arch.color}18; border:1px solid ${arch.color}; border-radius:8px; display:flex; align-items:flex-start; gap:10px;">
        <div>
            <strong style="color:${arch.color}; font-size:13px;">${arch.name}</strong>
            <span style="font-size:11px; color:var(--dim); display:block; margin-top:2px;">Set by <b style="color:var(--txt)">${arch.setter}</b> · ${arch.desc}</span>
        </div>
    </div>`;
}

function getSpeedWarningHTML(selected) {
    const info = getSpeedControlAnalysis(selected);
    if (!info) return '';

    let html = '';

    if (info.needsWarning) {
        const suggestions = info.hasTrickRoom ? '' : ' Consider adding a <b>Tailwind</b>, <b>Trick Room</b>, or <b>Icy Wind</b> user.';
        html += `<div style="margin:8px 0; padding:10px 14px; background:rgba(255,193,7,0.08); border:1px solid #ffc107; border-radius:8px; font-size:12px; color:#ffc107;">
            ⚡ <b>No Speed Control!</b> Avg. team speed: <b>${info.avgSpeed}</b>${suggestions}
        </div>`;
    } else if (info.hasSpeedControl) {
        const ctrl = info.hasTrickRoom ? 'Trick Room' : info.hasTailwind ? 'Tailwind' : 'Icy Wind';
        html += `<div style="margin:8px 0; padding:8px 14px; background:rgba(99,212,113,0.08); border:1px solid #63d471; border-radius:8px; font-size:12px; color:#63d471;">
            ✅ Speed Control detected: <b>${ctrl}</b> (avg speed: ${info.avgSpeed})
        </div>`;
    }

    return html;
}

function getMetaThreatHTML(selected) {
    const fmt     = (typeof window !== 'undefined' && window.metaThreatFormat) || 'vgc';
    const isPro   = fmt === 'pro';
    const threats = isPro ? META_THREATS_PRO : META_THREATS;
    const analysis = getMetaThreatAnalysis(selected, threats);
    if (!analysis) return '';

    const fmtLabel    = isPro ? 'PRO PvP Meta (3 Tiers · 18)' : 'VGC 2024 Top 10';
    const accentColor = isPro ? '#f5a623' : '#4dabf7';
    const scoreColor  = analysis.score >= 70 ? '#63d471' : analysis.score >= 50 ? '#ffc107' : '#ff6b6b';
    const uncovered   = analysis.results.filter(r => r.coverage < 2);

    const tabs = `<div style="display:flex; gap:4px; margin-bottom:10px;">
        <button onclick="window.setMetaFormat('vgc')" style="padding:4px 12px; border-radius:20px; border:1px solid ${!isPro ? '#4dabf7' : '#555'}; background:${!isPro ? 'rgba(77,171,247,0.18)' : 'transparent'}; color:${!isPro ? '#4dabf7' : 'var(--dim)'}; cursor:pointer; font-size:11px; font-weight:bold; transition:.15s;">VGC 2024</button>
        <button onclick="window.setMetaFormat('pro')" style="padding:4px 12px; border-radius:20px; border:1px solid ${isPro ? '#f5a623' : '#555'}; background:${isPro ? 'rgba(245,166,35,0.18)' : 'transparent'}; color:${isPro ? '#f5a623' : 'var(--dim)'}; cursor:pointer; font-size:11px; font-weight:bold; transition:.15s;">PRO PvP</button>
    </div>`;

    const makeBadge = r => {
        const p = (typeof POKE !== 'undefined') ? POKE.find(x => x.id === r.id) : null;
        const sprite = (p && typeof spriteImg !== 'undefined') ? spriteImg(p, '') : '';
        const bgColor = r.coverage >= 4 ? '#2b8a3e' : r.coverage >= 2 ? '#1864ab' : '#7b2929';
        const label   = r.coverage >= 4 ? `x${r.coverage}` : r.coverage >= 2 ? 'SE' : '✗';
        const tooltip = r.source ? `${r.source} covers with x${r.coverage}` : 'No coverage';
        return `<div title="${tooltip}" style="display:flex; flex-direction:column; align-items:center; background:${bgColor}33; border:1px solid ${bgColor}; border-radius:6px; padding:5px 7px; min-width:58px; cursor:default;">
            ${sprite}
            <span style="font-size:10px; font-weight:bold; color:var(--txt); text-align:center; margin-top:3px;">${r.name.replace(/-/g, ' ')}</span>
            <span style="font-size:10px; font-weight:900; color:${r.coverage >= 2 ? '#63d471' : '#ff6b6b'};">${label}</span>
        </div>`;
    };

    let threatBadgesHTML = '';
    if (isPro) {
        const tierMeta = [
            { tier: 1, label: '⚔️ Sweepers' },
            { tier: 2, label: '🔄 Pivots' },
            { tier: 3, label: '🛡️ Walls' },
        ];
        tierMeta.forEach(({ tier, label: tLabel }) => {
            const group = analysis.results.filter(r => r.tier === tier);
            if (!group.length) return;
            threatBadgesHTML += `<div style="width:100%; margin-bottom:2px;">
                <span style="font-size:10px; font-weight:900; color:${accentColor}; letter-spacing:.5px;">${tLabel}</span>
            </div>
            <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:10px;">
                ${group.map(makeBadge).join('')}
            </div>`;
        });
    } else {
        threatBadgesHTML = `<div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:${uncovered.length ? '10px' : '0'};">
            ${analysis.results.map(makeBadge).join('')}
        </div>`;
    }

    return `<div style="margin:10px 0; padding:12px 14px; background:${accentColor}0d; border:1px solid ${accentColor}; border-radius:8px;">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; flex-wrap:wrap; gap:6px;">
            <strong style="color:${accentColor}; font-size:13px;">🏆 Meta Threat Check (${fmtLabel})</strong>
            <span style="font-size:13px; font-weight:900; color:${scoreColor}; background:${scoreColor}18; padding:4px 10px; border-radius:20px; border:1px solid ${scoreColor};">${analysis.score}% Win Rate</span>
        </div>
        ${tabs}
        ${threatBadgesHTML}
        ${uncovered.length ? `<p style="margin:6px 0 0; font-size:11px; color:#ff6b6b;">⚠️ No super-effective coverage vs: <b>${uncovered.map(r => r.name).join(', ')}</b></p>` : ''}
    </div>`;
}
