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

// Top 10 threats in Pokemon Revolution Online (PRO) PvP — Gen 7 (USUM) mechanics
const META_THREATS_PRO = [
    { id: 645,  name: 'Landorus-T',   types: ['ground',   'flying']   },
    { id: 445,  name: 'Garchomp',     types: ['dragon',   'ground']   },
    { id: 598,  name: 'Ferrothorn',   types: ['grass',    'steel']    },
    { id: 748,  name: 'Toxapex',      types: ['poison',   'water']    },
    { id: 801,  name: 'Magearna',     types: ['steel',    'fairy']    },
    { id: 36,   name: 'Clefable',     types: ['fairy']               },
    { id: 376,  name: 'Metagross',    types: ['steel',    'psychic']  },
    { id: 785,  name: 'Tapu Koko',    types: ['electric', 'fairy']   },
    { id: 130,  name: 'Gyarados',     types: ['water',    'flying']  },
    { id: 248,  name: 'Tyranitar',    types: ['rock',     'dark']    },
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
            // Check STAB types
            mon.p.types.forEach(atkType => {
                const mult = multAtkVsTypes(atkType, threat.types);
                if (mult > bestMult) { bestMult = mult; bestSource = mon.p.name; }
            });

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

// ==========================================
// 4. DAMAGE CALCULATION (Simplified Gen 9 formula)
// ==========================================

/**
 * Returns estimated damage percentage dealt by atkMon using moveInfo against defPoke.
 * defLevel defaults to 50 (standard VGC).
 */
function estimateDamagePct(atkMon, moveInfo, defPoke, defLevel) {
    if (!atkMon || !moveInfo || !defPoke || !moveInfo.power) return null;
    defLevel = defLevel || 50;

    // Attacker stats
    const atkBs  = (typeof BASE_STATS !== 'undefined' && BASE_STATS[atkMon.p.id]) || { atk: 80, spa: 80 };
    const atkLv  = Number(atkMon.slot.level) || 100;
    const isPhys = moveInfo.cat === 'physical';
    const atkBase= isPhys ? (Number(atkBs.atk) || 80) : (Number(atkBs.spa) || 80);
    const atkEv  = isPhys ? (Number((atkMon.slot.ev || {}).ATK) || 0) : (Number((atkMon.slot.ev || {}).SPATK) || 0);
    const atkStat= Math.floor(((2 * atkBase + 31 + Math.floor(atkEv / 4)) * atkLv) / 100) + 5;

    // Defender stats
    const defBs  = (typeof BASE_STATS !== 'undefined' && BASE_STATS[defPoke.id]) || { hp: 80, def: 80, spd: 80 };
    const defHP  = Math.floor(((2 * (Number(defBs.hp) || 80) + 31) * defLevel) / 100) + defLevel + 10;
    const defBase= isPhys ? (Number(defBs.def) || 80) : (Number(defBs.spd) || 80);
    const defStat= Math.floor(((2 * defBase + 31) * defLevel) / 100) + 5;

    // Type effectiveness
    const typeMult = multAtkVsTypes(moveInfo.type, defPoke.types);
    if (typeMult === 0) return null; // Immune

    // STAB
    const stab = (atkMon.p.types || []).includes(moveInfo.type) ? 1.5 : 1;

    // Damage formula (Gen 5+)
    const base = Math.floor((Math.floor(2 * atkLv / 5 + 2) * moveInfo.power * atkStat / defStat) / 50) + 2;
    const dmgMin = Math.floor(base * 0.85 * stab * typeMult);
    const dmgMax = Math.floor(base * stab * typeMult);

    const minPct = Math.min(Math.round(dmgMin / defHP * 100), 999);
    const maxPct = Math.min(Math.round(dmgMax / defHP * 100), 999);

    let label = '';
    if (minPct >= 100)       label = 'OHKO';
    else if (minPct >= 50)   label = '2HKO';
    else if (minPct >= 34)   label = '3HKO';
    else                     label = `~${minPct}%`;

    return { minPct, maxPct, label, typeMult };
}

/**
 * Returns the best damage estimate for atkMon against defPoke across all equipped moves.
 * Returns { label, minPct, maxPct, moveName } or null.
 */
function getBestDamageEstimate(atkMon, defPoke) {
    if (!atkMon || !defPoke || !atkMon.slot.moveNames) return null;

    let best = null;

    atkMon.slot.moveNames.forEach(mName => {
        if (!mName) return;
        const mInfo = (typeof MOVE_INFO !== 'undefined') ? (MOVE_INFO[mName] || MOVE_INFO[mName.toLowerCase().replace(/\s+/g, '-')]) : null;
        if (!mInfo || mInfo.cat === 'status' || !mInfo.power) return;

        const est = estimateDamagePct(atkMon, mInfo, defPoke);
        if (!est) return;

        if (!best || est.maxPct > best.maxPct) {
            best = { ...est, moveName: mName };
        }
    });

    return best;
}

// ==========================================
// 5. UI HELPERS
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

    const fmtLabel   = isPro ? 'PRO PvP Top 10' : 'VGC 2024 Top 10';
    const accentColor = isPro ? '#f5a623' : '#4dabf7';
    const scoreColor  = analysis.score >= 70 ? '#63d471' : analysis.score >= 50 ? '#ffc107' : '#ff6b6b';
    const uncovered   = analysis.results.filter(r => r.coverage < 2);

    const tabs = `<div style="display:flex; gap:4px; margin-bottom:10px;">
        <button onclick="window.setMetaFormat('vgc')" style="padding:4px 12px; border-radius:20px; border:1px solid ${!isPro ? '#4dabf7' : '#555'}; background:${!isPro ? 'rgba(77,171,247,0.18)' : 'transparent'}; color:${!isPro ? '#4dabf7' : 'var(--dim)'}; cursor:pointer; font-size:11px; font-weight:bold; transition:.15s;">VGC 2024</button>
        <button onclick="window.setMetaFormat('pro')" style="padding:4px 12px; border-radius:20px; border:1px solid ${isPro ? '#f5a623' : '#555'}; background:${isPro ? 'rgba(245,166,35,0.18)' : 'transparent'}; color:${isPro ? '#f5a623' : 'var(--dim)'}; cursor:pointer; font-size:11px; font-weight:bold; transition:.15s;">PRO PvP</button>
    </div>`;

    const threatBadges = analysis.results.map(r => {
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
    }).join('');

    return `<div style="margin:10px 0; padding:12px 14px; background:${accentColor}0d; border:1px solid ${accentColor}; border-radius:8px;">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; flex-wrap:wrap; gap:6px;">
            <strong style="color:${accentColor}; font-size:13px;">🏆 Meta Threat Check (${fmtLabel})</strong>
            <span style="font-size:13px; font-weight:900; color:${scoreColor}; background:${scoreColor}18; padding:4px 10px; border-radius:20px; border:1px solid ${scoreColor};">${analysis.score}% Win Rate</span>
        </div>
        ${tabs}
        <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:${uncovered.length ? '10px' : '0'};">
            ${threatBadges}
        </div>
        ${uncovered.length ? `<p style="margin:6px 0 0; font-size:11px; color:#ff6b6b;">⚠️ No super-effective coverage vs: <b>${uncovered.map(r => r.name).join(', ')}</b></p>` : ''}
    </div>`;
}
