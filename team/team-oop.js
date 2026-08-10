// --- team-opp.js : Λογική Αντίπαλης Ομάδας (Assassin Mode με Base Stats, Moves & Auto-Save) ---

// Φόρτωση από το Local Storage ή αρχικοποίηση
// Backwards compatibility: migrate old format (array of IDs) to new format (array of objects)
(function() {
    const raw = JSON.parse(localStorage.getItem('tb_oppTeam')) || [];
    window.oppTeam = raw.map(entry => {
        if (typeof entry === 'number') return { id: entry, ability: '', item: '', level: 50, nature: '', iv: { HP: '', ATK: '', DEF: '', SPATK: '', SPDEF: '', SPD: '' }, ev: { HP: '', ATK: '', DEF: '', SPATK: '', SPDEF: '', SPD: '' }, moveNames: [], moves: [], moveCats: [] };
        return Object.assign({ ability: '', item: '', level: 50, nature: '', iv: { HP: '', ATK: '', DEF: '', SPATK: '', SPDEF: '', SPD: '' }, ev: { HP: '', ATK: '', DEF: '', SPATK: '', SPDEF: '', SPD: '' } }, entry);
    });
})();
window.showOppPanel = JSON.parse(localStorage.getItem('tb_showOppPanel')) || false;
window.oppMode = localStorage.getItem('tb_oppMode') || 'custom'; // 'custom' or 'bosses'

// Βοηθητική συνάρτηση αποθήκευσης
window.saveOpponents = function() {
    localStorage.setItem('tb_oppTeam', JSON.stringify(window.oppTeam));
    localStorage.setItem('tb_showOppPanel', JSON.stringify(window.showOppPanel));
    localStorage.setItem('tb_oppMode', window.oppMode || 'custom');
};

window.toggleOppPanel = function() {
    window.showOppPanel = !window.showOppPanel;
    window.saveOpponents();
    if(typeof renderTeamSlots === 'function') renderTeamSlots();
};

window.setOppMode = function(mode) {
    window.oppMode = mode;
    window.saveOpponents();
    if (mode === 'bosses') {
        if (typeof window.openBossesModal === 'function') window.openBossesModal();
    }
    if(typeof renderTeamSlots === 'function') renderTeamSlots();
};

window.searchAndAddOpponent = function() {
    const input = document.getElementById('oppSearchInput').value.toLowerCase().trim();
    if(!input) return;

    const normalizedInput = input.replace(/\s+/g, '-');
    const p = POKE.find(x => 
        x.name.toLowerCase() === normalizedInput || 
        x.name.toLowerCase().replace(/-/g, ' ') === input ||
        x.id.toString() === input ||
        x.name.toLowerCase().includes(normalizedInput)
    );

    if(!p) return alert('Το Pokémon δεν βρέθηκε! Δοκίμασε στα Αγγλικά (π.χ. charizard) ή το ID του.');
    if(window.oppTeam.length >= 6) return alert('Η αντίπαλη ομάδα είναι γεμάτη (Max 6)!');

    window.oppTeam.push({ id: p.id, ability: '', item: '', level: 50, nature: '', iv: { HP: '', ATK: '', DEF: '', SPATK: '', SPDEF: '', SPD: '' }, ev: { HP: '', ATK: '', DEF: '', SPATK: '', SPDEF: '', SPD: '' }, moveNames: [], moves: [], moveCats: [] });
    window.saveOpponents();

    if(document.getElementById('oppSearchInput')) document.getElementById('oppSearchInput').value = '';
    if(typeof renderTeamSlots === 'function') renderTeamSlots();
};

window.removeOpponent = function(idx) {
    window.oppTeam.splice(idx, 1);
    window.saveOpponents();
    if(typeof renderTeamSlots === 'function') renderTeamSlots();
};

window.clearOpponents = function() {
    window.oppTeam = [];
    window.saveOpponents();
    if(typeof renderTeamSlots === 'function') renderTeamSlots();
};

window.setOppMove = function(idx, moveSlot, moveName) {
    const opp = window.oppTeam[idx];
    if (!opp) return;
    opp.moveNames[moveSlot] = moveName;
    const info = (typeof MOVE_INFO !== 'undefined' && moveName) ? (MOVE_INFO[moveName] || {}) : {};
    opp.moves[moveSlot]    = info.type || '';
    opp.moveCats[moveSlot] = info.cat  || '';
    window.saveOpponents();
    if (typeof renderTeamSlots === 'function') renderTeamSlots();
};

window.setOppAbility = function(idx, ability) {
    const opp = window.oppTeam[idx];
    if (!opp) return;
    opp.ability = ability;
    window.saveOpponents();
    if (typeof renderTeamSlots === 'function') renderTeamSlots();
};

window.setOppItem = function(idx, item) {
    const opp = window.oppTeam[idx];
    if (!opp) return;
    opp.item = item;
    window.saveOpponents();
    if (typeof renderTeamSlots === 'function') renderTeamSlots();
};

// Import opponents from Showdown paste (reuses the existing parser from team-io.js)
window.importOpponentsFromShowdown = function(text) {
    if (!text || !text.trim()) return 0;
    if (typeof parseShowdownPaste !== 'function') return 0;
    const slots = parseShowdownPaste(text);
    if (!slots.length) return 0;
    let added = 0;
    for (const slot of slots) {
        if (window.oppTeam.length >= 6) break;
        window.oppTeam.push({
            id: slot.pokemonId,
            ability: slot.ability || '',
            item: slot.item || '',
            level: slot.level || 50,
            nature: slot.nature || '',
            iv: slot.iv || { HP: '', ATK: '', DEF: '', SPATK: '', SPDEF: '', SPD: '' },
            ev: slot.ev || { HP: '', ATK: '', DEF: '', SPATK: '', SPDEF: '', SPD: '' },
            moveNames: slot.moveNames || [],
            moves: slot.moves || [],
            moveCats: slot.moveCats || []
        });
        added++;
    }
    window.saveOpponents();
    if (typeof renderTeamSlots === 'function') renderTeamSlots();
    return added;
};

// Σύγκριση Base Stats & Move Categories
// oppSlotData: { moveNames, moves, moveCats } – optional, enables move-aware scoring
window.getCombatScore = function(myCandidate, oppP, oppSlotData) {
    let score = 0;
    const PRIORITY_MOVES = new Set(['fake-out', 'sucker-punch', 'bullet-punch', 'ice-shard', 'extreme-speed', 'mach-punch', 'aqua-jet', 'shadow-sneak']);

    let opBs = (typeof BASE_STATS !== 'undefined' && BASE_STATS[oppP.id]) ? BASE_STATS[oppP.id] : {hp:80, atk:80, def:80, spa:80, spd:80, spe:80};

    let myBs = (typeof BASE_STATS !== 'undefined' && BASE_STATS[myCandidate.p.id]) ? BASE_STATS[myCandidate.p.id] : {hp:80, atk:80, def:80, spa:80, spd:80, spe:80};
    let myAtk = myBs.atk + Math.floor((Number(myCandidate.slot.ev.ATK) || 0) / 4);
    let mySpa = myBs.spa + Math.floor((Number(myCandidate.slot.ev.SPATK) || 0) / 4);

    // Defensive: how well does my Pokémon resist opponent's STAB types
    oppP.types.forEach(ot => {
        let defMult = multAtkVsTypes(ot, myCandidate.p.types);
        if (defMult > 1) score -= 80;
        if (defMult < 1) score += 40;
        if (defMult === 0) score += 100;
    });

    // Defensive (move-aware): if the opponent's actual moves are known, factor in incoming damage
    if (oppSlotData && Array.isArray(oppSlotData.moves)) {
        oppSlotData.moves.forEach((mType, idx) => {
            if (!mType) return;
            const mCat = oppSlotData.moveCats && oppSlotData.moveCats[idx];
            if (mCat === 'status') return;
            const oppMoveName = ((oppSlotData.moveNames && oppSlotData.moveNames[idx]) || '').toLowerCase();
            const incomingMult = (typeof getDynamicMult === 'function')
                ? getDynamicMult(mType, myCandidate.p.types, myCandidate.slot.ability)
                : multAtkVsTypes(mType, myCandidate.p.types);
            if (incomingMult > 1) score -= 60 * incomingMult;
            if (incomingMult < 1) score += 30;
            if (incomingMult === 0) score += 80;
            if (PRIORITY_MOVES.has(oppMoveName) && incomingMult >= 1) score -= 55;
        });
    }

    // Offensive: score my moves against the opponent
    let bestMoveScore = 0;

    (myCandidate.slot.moveNames || []).forEach(mName => {
        if (!mName) return;
        let mInfo = typeof MOVE_INFO !== 'undefined' ? MOVE_INFO[mName] : null;
        if (!mInfo || mInfo.power === 0) return;

        let offMult = multAtkVsTypes(mInfo.type, oppP.types);
        let moveScore = 0;

        if (offMult > 1) moveScore += 60;
        if (offMult > 2) moveScore += 130;
        if (offMult < 1) moveScore -= 40;

        if (mInfo.cat === 'physical') {
            if (opBs.def > 105) moveScore -= 35;
            if (opBs.def < 70) moveScore += 45;
            if (myAtk > mySpa) moveScore += 20;
        } else if (mInfo.cat === 'special') {
            if (opBs.spd > 105) moveScore -= 35;
            if (opBs.spd < 70) moveScore += 45;
            if (mySpa > myAtk) moveScore += 20;
        }
        if (PRIORITY_MOVES.has(String(mName).toLowerCase())) moveScore += 45;

        if (moveScore > bestMoveScore) bestMoveScore = moveScore;
    });

    return score + bestMoveScore;
};

// UI της αναζήτησης
window.getOpponentUI = function() {
    const optionsHtml = typeof POKE !== 'undefined' ? POKE.map(p => `<option value="${p.name.replace(/-/g, ' ')}">`).join('') : '';

    const toggleBtn = `<button onclick="toggleOppPanel()" style="width:100%; padding:12px; background: ${window.showOppPanel ? '#555' : '#ff4d4f'}; color:white; border:none; border-radius:8px; font-weight:bold; cursor:pointer; margin-top:20px; font-size:14px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: 0.2s;">
        ${window.showOppPanel ? '❌ Κλείσιμο Πάνελ Αντιπάλου' : '🎯 Προσθήκη Αντίπαλης Ομάδας (Assassin Mode)'}
    </button>`;

    if (!window.showOppPanel) return toggleBtn;

    const oppCards = window.oppTeam.length === 0
        ? '<span style="opacity:0.6; font-size:12px; margin-top:10px;">Πρόσθεσε αντιπάλους ή χρησιμοποίησε "📋 Paste Showdown" για γρήγορη εισαγωγή με τις επιθέσεις τους!</span>'
        : window.oppTeam.map((opp, idx) => {
            const opId = typeof opp === 'number' ? opp : opp.id;
            const oppMoveNames = (typeof opp === 'object' && opp.moveNames) ? opp.moveNames : [];
            const oppAbility   = (typeof opp === 'object' && opp.ability)   ? opp.ability   : '';
            const oppItem      = (typeof opp === 'object' && opp.item)      ? opp.item      : '';
            const op = POKE.find(p => p.id === opId);
            if (!op) return '';

            const moveList     = (typeof MOVES_BY_POKEMON !== 'undefined' && MOVES_BY_POKEMON[String(op.id)]) || [];
            const abilityList  = (typeof ABILITIES        !== 'undefined' && ABILITIES[String(op.id)])        || [];

            const moveSelects = [0, 1, 2, 3].map(mi => {
                const cur = oppMoveNames[mi] || '';
                return `<select onchange="setOppMove(${idx},${mi},this.value)" title="Move ${mi+1}" style="width:100%; font-size:10px; padding:2px 4px; border-radius:4px; border:1px solid var(--brd); background:var(--bg); color:var(--txt); cursor:pointer;">
                    <option value="">Move ${mi+1}…</option>
                    ${moveList.map(mn => `<option value="${mn}" ${cur===mn?'selected':''}>${mn.replace(/-/g,' ')}</option>`).join('')}
                </select>`;
            }).join('');

            const abilitySelect = `<select onchange="setOppAbility(${idx},this.value)" title="Ability" style="width:100%; font-size:10px; padding:2px 4px; border-radius:4px; border:1px solid var(--brd); background:var(--bg); color:var(--txt); cursor:pointer;">
                <option value="">Ability…</option>
                ${abilityList.map(a => `<option value="${a}" ${oppAbility===a?'selected':''}>${a.replace(/-/g,' ')}</option>`).join('')}
            </select>`;

            const itemSelect = `<select onchange="setOppItem(${idx},this.value)" title="Item" style="width:100%; font-size:10px; padding:2px 4px; border-radius:4px; border:1px solid var(--brd); background:var(--bg); color:var(--txt); cursor:pointer;">
                <option value="">Item…</option>
                ${(typeof HELD_ITEMS !== 'undefined' ? HELD_ITEMS : []).map(it => `<option value="${it}" ${oppItem===it?'selected':''}>${it}</option>`).join('')}
            </select>`;

            return `<div style="display:flex; flex-direction:column; background:var(--bg); border:1px solid #ff4d4f; border-radius:8px; padding:8px; position:relative; min-width:160px; max-width:200px; box-shadow:0 2px 4px rgba(255,0,0,0.1); gap:5px;">
                <button onclick="removeOpponent(${idx})" style="position:absolute; top:-6px; right:-6px; background:#ff4d4f; color:white; border-radius:50%; border:none; width:20px; height:20px; font-size:11px; font-weight:bold; cursor:pointer; display:flex; align-items:center; justify-content:center;">X</button>
                <div style="display:flex; align-items:center; gap:6px;">
                    ${spriteImg(op)}
                    <span style="font-size:11px; font-weight:bold; color:var(--txt);">${op.name.replace(/-/g,' ')}</span>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:4px;">
                    ${abilitySelect}
                    ${itemSelect}
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:4px;">
                    ${moveSelects}
                </div>
            </div>`;
        }).join('');

    return toggleBtn + `
    <div class="opp-panel" style="margin-top:15px; padding:15px; background:rgba(255, 77, 79, 0.05); border:1px solid #ff4d4f; border-radius:8px;">
        <datalist id="oppPokeList">${optionsHtml}</datalist>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:6px;">
            <strong style="color:#ff4d4f; font-size:15px;">Εκτελεστής (Target Mode)</strong>
            <div style="display:flex; gap:6px; flex-wrap:wrap;">
                <button onclick="window._openOppShowdownModal && window._openOppShowdownModal()" style="background:#4dabf7; color:white; border:none; padding:5px 10px; border-radius:4px; cursor:pointer; font-size:11px; font-weight:bold;">📋 Paste Showdown</button>
                <button onclick="clearOpponents()" style="background:#ff4d4f; color:white; border:none; padding:5px 8px; border-radius:4px; cursor:pointer; font-size:11px; font-weight:bold;">Καθαρισμός</button>
            </div>
        </div>
        <div style="display:flex; gap:8px; margin-bottom:14px;">
            <button onclick="setOppMode('custom')" style="flex:1; padding:8px 10px; border-radius:6px; border:2px solid ${window.oppMode !== 'bosses' ? '#4dabf7' : '#555'}; background:${window.oppMode !== 'bosses' ? 'rgba(77,171,247,0.15)' : 'transparent'}; color:${window.oppMode !== 'bosses' ? '#4dabf7' : 'var(--dim)'}; font-size:12px; font-weight:bold; cursor:pointer; transition:.15s;">🎯 Custom Team</button>
            <button onclick="setOppMode('bosses')" style="flex:1; padding:8px 10px; border-radius:6px; border:2px solid ${window.oppMode === 'bosses' ? '#ff6b6b' : '#555'}; background:${window.oppMode === 'bosses' ? 'rgba(255,107,107,0.15)' : 'transparent'}; color:${window.oppMode === 'bosses' ? '#ff6b6b' : 'var(--dim)'}; font-size:12px; font-weight:bold; cursor:pointer; transition:.15s;">⚔️ Bosses</button>
        </div>
        <div style="display:flex; gap:10px; margin-bottom:15px;">
            <input type="text" id="oppSearchInput" list="oppPokeList" onkeydown="if(event.key === 'Enter') searchAndAddOpponent()" placeholder="Π.χ. garchomp ή 445" style="flex:1; padding:8px; border-radius:4px; border:1px solid var(--brd); background:var(--bg); color:var(--txt);">
            <button onclick="searchAndAddOpponent()" style="padding:8px 15px; cursor:pointer; background:#4dabf7; color:white; border:none; border-radius:4px; font-weight:bold;">Προσθήκη</button>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:10px; min-height:45px;">${oppCards}</div>
    </div>`;
};

// Counters UI
window.getMatchupsUI = function(selected) {
    if(!window.showOppPanel || window.oppTeam.length === 0 || !selected || selected.length === 0) return '';

    let html = `<div style="margin-top:20px; padding:12px; background:rgba(77, 171, 247, 0.05); border:1px solid #4dabf7; border-radius:8px;">
        <strong style="color:#4dabf7; font-size:14px;">🔥 Τα Καλύτερα Counters (Από την ομάδα σου):</strong>
        <div style="display:flex; flex-direction:column; gap:10px; margin-top:12px;">`;

    window.oppTeam.forEach(opp => {
        const opId = typeof opp === 'number' ? opp : opp.id;
        const oppSlotData = typeof opp === 'object' ? opp : null;
        const op = POKE.find(p => p.id === opId);
        if (!op) return;
        let bestCounter = null; let bestScore = -9999;

        selected.forEach(my => {
            let score = window.getCombatScore(my, op, oppSlotData);
            if(score > bestScore) { bestScore = score; bestCounter = my; }
        });

        // Show opponent move badges, ability, and item if available
        const oppMoveNames = oppSlotData && oppSlotData.moveNames ? oppSlotData.moveNames : [];
        const oppMoveTypes = oppSlotData && oppSlotData.moves ? oppSlotData.moves : [];
        const oppAbility   = oppSlotData && oppSlotData.ability ? oppSlotData.ability : '';
        const oppItem      = oppSlotData && oppSlotData.item    ? oppSlotData.item    : '';

        const abilityBadge = oppAbility ? `<span style="font-size:10px; background:rgba(99,212,113,0.15); border:1px solid #63d471; color:#63d471; border-radius:3px; padding:1px 6px; font-weight:bold;" title="Ability">⚙ ${oppAbility.replace(/-/g,' ')}</span>` : '';
        const itemBadge    = oppItem    ? `<span style="font-size:10px; background:rgba(255,193,7,0.15); border:1px solid #ffc107; color:#ffc107; border-radius:3px; padding:1px 6px; font-weight:bold;" title="Held Item">🎒 ${oppItem}</span>` : '';

        const movesHtml = oppMoveNames.some(Boolean)
            ? `<div style="margin-top:6px; display:flex; flex-wrap:wrap; gap:3px;">
                ${abilityBadge}${itemBadge}
                ${oppMoveNames.map((mn, i) => {
                    if (!mn) return '';
                    const mType = oppMoveTypes[i] || '';
                    const color = (typeof TC !== 'undefined' && TC[mType]) ? TC[mType] : '#555';
                    const clean = String(mn).toLowerCase();
                    const prio = ['fake-out', 'sucker-punch', 'bullet-punch', 'ice-shard', 'extreme-speed', 'mach-punch', 'aqua-jet', 'shadow-sneak'].includes(clean)
                        ? `<span style="font-size:10px; background:rgba(255,193,7,0.18); border:1px solid #ffc107; color:#ffc107; border-radius:3px; padding:1px 4px; font-weight:900;">⚡ Priority</span>`
                        : '';
                    return `<span style="font-size:10px; background:${color}; color:white; border-radius:3px; padding:1px 5px; font-weight:bold;" title="${mType}">${mn.replace(/-/g, ' ')}</span>${prio}`;
                }).join('')}
               </div>`
            : (abilityBadge || itemBadge)
                ? `<div style="margin-top:6px; display:flex; flex-wrap:wrap; gap:3px;">${abilityBadge}${itemBadge}</div>`
                : '';

        if(bestCounter) {
            // Damage estimate (best move vs opponent)
            let dmgHTML = '';
            if (typeof getBestDamageEstimate === 'function') {
                const est = getBestDamageEstimate(bestCounter, op, oppSlotData);
                if (est) {
                    const dmgColor = est.minPct >= 100 ? '#ff4d4f' : est.minPct >= 50 ? '#ffc107' : '#63d471';
                    const moveName = est.moveName ? est.moveName.replace(/-/g, ' ') : '';
                    dmgHTML = `<div style="margin-top:6px; font-size:11px; font-weight:bold; color:${dmgColor}; background:${dmgColor}18; padding:3px 8px; border-radius:4px; display:inline-block;">
                        ${est.label} · ${est.minPct}%–${est.maxPct}% via <i>${moveName}</i> · OHKO: ${est.ohkoChance || 0}%
                    </div>`;
                }
            }

            html += `<div style="display:flex; flex-direction:column; background:var(--bg); padding:10px 12px; border-radius:6px; border-left:4px solid #ff4d4f; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <div style="display:flex; align-items:center; justify-content:space-between;">
                    <div style="display:flex; align-items:center; gap:8px; width:45%;">
                        ${spriteImg(op)} <span style="font-size:12px; font-weight:bold;">${op.name}</span>
                    </div>
                    <span style="font-size:16px;">⚔️</span>
                    <div style="display:flex; align-items:center; gap:8px; width:45%; justify-content:flex-end;">
                        <span style="font-size:12px; color:#4dabf7; font-weight:bold; text-align:right;">${bestCounter.p.name}</span> ${spriteImg(bestCounter.p)}
                    </div>
                </div>
                ${dmgHTML}
                ${movesHtml}
            </div>`;
        }
    });
    return html + `</div></div>`;
};

// AI Engine
window.calcAssassinScore = function(candidate) {
    let oppScore = 0;

    window.oppTeam.forEach(opp => {
        const opId = typeof opp === 'number' ? opp : opp.id;
        const oppSlotData = typeof opp === 'object' ? opp : null;
        const oppP = POKE.find(p => p.id === opId);
        if (oppP) oppScore += window.getCombatScore(candidate, oppP, oppSlotData);
    });

    let validMovesCount = candidate.slot.moves.filter(m => m).length;
    if (validMovesCount < 4) oppScore -= (4 - validMovesCount) * 20;
    return oppScore;
};

// --- Opponent Showdown Paste Modal ---
(function injectOppShowdownModal() {
    const overlay = document.createElement('div');
    overlay.id = 'oppSdImportOverlay';
    overlay.style.cssText = [
        'display:none', 'position:fixed', 'inset:0', 'z-index:9999',
        'background:rgba(0,0,0,.75)', 'backdrop-filter:blur(4px)',
        'align-items:center', 'justify-content:center', 'padding:16px'
    ].join(';');

    overlay.innerHTML = `
      <div style="background:#13132a; border:1.5px solid #ff4d4f; border-radius:14px; width:100%; max-width:560px; padding:24px; position:relative; font-family:'Nunito',sans-serif; color:#e8e8ff;">
        <button id="oppSdClose" style="position:absolute; top:14px; right:14px; background:#1a1a30; border:1px solid #252545; color:#7070aa; border-radius:50%; width:28px; height:28px; cursor:pointer; font-size:15px; display:flex; align-items:center; justify-content:center;" title="Close">✕</button>
        <h3 style="font-family:'Press Start 2P',monospace; font-size:11px; color:#ff4d4f; margin-bottom:4px; letter-spacing:1px;">🎯 PASTE OPPONENT TEAM</h3>
        <p style="font-size:11px; color:#7070aa; margin-bottom:14px;">Paste the opponent's Pokémon in Showdown export format. Moves will be imported for more accurate counter recommendations. Multiple Pokémon should be separated by a blank line.</p>
        <textarea id="oppSdPasteArea" rows="12" spellcheck="false" style="width:100%; background:#1a1a30; border:1.5px solid #ff4d4f; border-radius:8px; color:#e8e8ff; font-family:monospace; font-size:12px; padding:10px 12px; outline:none; resize:vertical; line-height:1.5;" placeholder="Gengar\nLevel: 50\nTimid Nature\nAbility: Levitate\nEVs: 4 HP / 252 SpA / 252 Spe\nIVs: 20 HP / 10 Atk / 25 Def / 31 SpA / 28 SpD / 31 Spe\n- Shadow Ball\n- Sludge Bomb\n- Hypnosis\n- Focus Blast"></textarea>
        <div style="display:flex; gap:10px; margin-top:12px; align-items:center; flex-wrap:wrap;">
          <button id="oppSdImportBtn" style="padding:9px 22px; border-radius:50px; border:none; cursor:pointer; background:#ff4d4f; color:white; font-family:'Nunito',sans-serif; font-size:13px; font-weight:900; transition:filter .15s;">🎯 Add to Opponents</button>
          <button id="oppSdReplaceBtn" style="padding:9px 22px; border-radius:50px; border:none; cursor:pointer; background:#555; color:white; font-family:'Nunito',sans-serif; font-size:13px; font-weight:900; transition:filter .15s;">🔄 Clear & Replace</button>
          <span id="oppSdMsg" style="font-size:12px; font-weight:800; color:#51cf66; opacity:0; transition:opacity .3s;"></span>
        </div>
      </div>`;

    document.body.appendChild(overlay);

    function openOppModal() {
        overlay.style.display = 'flex';
        document.getElementById('oppSdPasteArea').focus();
    }
    function closeOppModal() {
        overlay.style.display = 'none';
        document.getElementById('oppSdPasteArea').value = '';
        document.getElementById('oppSdMsg').style.opacity = '0';
    }
    function showMsg(text) {
        const msg = document.getElementById('oppSdMsg');
        msg.textContent = text;
        msg.style.opacity = '1';
        setTimeout(() => { msg.style.opacity = '0'; }, 2500);
    }

    overlay.addEventListener('click', e => { if (e.target === overlay) closeOppModal(); });
    document.getElementById('oppSdClose').addEventListener('click', closeOppModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.style.display === 'flex') closeOppModal(); });

    document.getElementById('oppSdImportBtn').addEventListener('click', () => {
        const text = document.getElementById('oppSdPasteArea').value.trim();
        if (!text) { alert('Please paste some Pokémon data first.'); return; }
        if (window.oppTeam.length >= 6) { alert('Η αντίπαλη ομάδα είναι γεμάτη! Κάνε "Clear & Replace" ή αφαίρεσε κάποιο Pokémon.'); return; }
        const added = window.importOpponentsFromShowdown(text);
        if (!added) { alert('Could not recognise any Pokémon in the pasted text. Check spelling or formatting.'); return; }
        showMsg(`✓ Added ${added} opponent(s)!`);
        setTimeout(closeOppModal, 1400);
    });

    document.getElementById('oppSdReplaceBtn').addEventListener('click', () => {
        const text = document.getElementById('oppSdPasteArea').value.trim();
        if (!text) { alert('Please paste some Pokémon data first.'); return; }
        window.oppTeam = [];
        const added = window.importOpponentsFromShowdown(text);
        if (!added) { alert('Could not recognise any Pokémon in the pasted text.'); return; }
        showMsg(`✓ Replaced with ${added} opponent(s)!`);
        setTimeout(closeOppModal, 1400);
    });

    window._openOppShowdownModal = openOppModal;
})();

// --- Αναγκαστική εμφάνιση του UI κατά την πρώτη φόρτωση της σελίδας ---
setTimeout(() => {
    if (typeof renderTeamSlots === 'function') renderTeamSlots();
}, 50);
