// --- team-bosses.js : Boss Modal UI ---
// Διαχείριση modal Boss Trainers: λίστα, επιλογή δυσκολίας, προβολή ομάδας, φόρτωση ως αντίπαλος.

(function () {
    'use strict';

    // ─── State ────────────────────────────────────────────────────────────
    let selectedBossId   = null;
    let selectedDifficulty = null;

    const DIFFICULTY_ORDER  = ['easy', 'medium', 'hard'];
    const DIFFICULTY_LABELS = { easy: '🟢 Easy', medium: '🟡 Medium', hard: '🔴 Hard' };
    const DIFFICULTY_COLORS = { easy: '#63d471', medium: '#ffc107', hard: '#ff6b6b' };

    // EVs applied per difficulty when loading as opponent
    const DIFFICULTY_EVS = {
        easy:   0,
        medium: 252,
        hard:   400,
    };

    // Human-readable rules shown in the detail panel per difficulty
    const DIFFICULTY_RULES = {
        easy:   'Κανένα EV · Κανένο item · Εξασθενημένα moves · Χωρίς bonus συνεχόμενων νικών',
        medium: '252 EVs σε κάθε stat · Items',
        hard:   '400 EVs σε κάθε stat · Items · Απαγορεύονται τα items μάχης (Revives κ.λπ.)',
    };

    // ─── Open / Close ─────────────────────────────────────────────────────
    window.openBossesModal = function () {
        const modal = document.getElementById('bossesOverlay');
        if (!modal) return;
        modal.setAttribute('aria-hidden', 'false');
        renderBossesList();
        renderBossDetail();
    };

    window.closeBossesModal = function () {
        const modal = document.getElementById('bossesOverlay');
        if (modal) modal.setAttribute('aria-hidden', 'true');
    };

    // ─── Render Boss List (sidebar) ───────────────────────────────────────
    const REGION_ORDER  = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh'];
    const REGION_COLORS = { Kanto: '#ff6b6b', Johto: '#63d471', Hoenn: '#5bc8f5', Sinnoh: '#c084fc' };

    function renderBossesList() {
        const listEl = document.getElementById('bossListPanel');
        if (!listEl) return;

        if (!window.BOSSES || !window.BOSSES.length) {
            listEl.innerHTML = '<div style="padding:16px; color:var(--dim); font-size:13px;">Δεν βρέθηκαν bosses.</div>';
            return;
        }

        // Group bosses by region, preserving REGION_ORDER
        const grouped = {};
        for (const boss of BOSSES) {
            const region = boss.region || 'Other';
            if (!grouped[region]) grouped[region] = [];
            grouped[region].push(boss);
        }

        const regionKeys = [...REGION_ORDER.filter(r => grouped[r]), ...Object.keys(grouped).filter(r => !REGION_ORDER.includes(r))];

        listEl.innerHTML = regionKeys.map(region => {
            const color    = REGION_COLORS[region] || '#aaa';
            const bossRows = grouped[region].map(boss => {
                const diffKeys   = DIFFICULTY_ORDER.filter(d => boss.difficulties && boss.difficulties[d]);
                const diffBadges = diffKeys.map(d =>
                    `<span style="font-size:10px; color:${DIFFICULTY_COLORS[d]}; background:${DIFFICULTY_COLORS[d]}22; border:1px solid ${DIFFICULTY_COLORS[d]}; border-radius:10px; padding:2px 7px; font-weight:bold;">${d}</span>`
                ).join('');
                const isActive = selectedBossId === boss.id;
                return `<button class="bossListItem${isActive ? ' active' : ''}" type="button" data-boss-id="${boss.id}" style="
                    width:100%; text-align:left; padding:8px 14px 8px 20px; border:none; border-bottom:1px solid var(--brd);
                    background:${isActive ? 'var(--brd)' : 'transparent'}; cursor:pointer; transition:.15s;
                    display:flex; flex-direction:column; gap:4px;
                ">
                    <span style="font-size:13px; font-weight:800; color:var(--txt);">${boss.name}</span>
                    <span style="font-size:10px; color:var(--dim);">${boss.location || ''}</span>
                    <div style="display:flex; gap:4px; flex-wrap:wrap;">${diffBadges}</div>
                </button>`;
            }).join('');

            return `<div>
                <div style="padding:7px 14px; font-size:11px; font-weight:900; color:${color}; background:${color}18; border-bottom:1px solid var(--brd); letter-spacing:1px; text-transform:uppercase;">
                    ${region}
                </div>
                ${bossRows}
            </div>`;
        }).join('');
    }

    // ─── Render Boss Detail (main area) ──────────────────────────────────
    function renderBossDetail() {
        const detailEl = document.getElementById('bossDetailPanel');
        if (!detailEl) return;

        const boss = window.BOSSES && selectedBossId
            ? BOSSES.find(b => b.id === selectedBossId)
            : null;

        if (!boss) {
            detailEl.innerHTML = `
                <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; min-height:200px; color:var(--dim); gap:12px;">
                    <span style="font-size:40px;">🏆</span>
                    <span style="font-size:14px;">Επίλεξε έναν Boss από τη λίστα.</span>
                </div>`;
            return;
        }

        const diffKeys = DIFFICULTY_ORDER.filter(d => boss.difficulties && boss.difficulties[d]);
        // Auto-select first available difficulty if none selected or current not available
        if (!selectedDifficulty || !diffKeys.includes(selectedDifficulty)) {
            selectedDifficulty = diffKeys[0] || null;
        }

        const tabsHtml = diffKeys.map(d => {
            const isActive = d === selectedDifficulty;
            const color    = DIFFICULTY_COLORS[d];
            return `<button type="button" data-diff="${d}" style="
                padding:6px 18px; border-radius:20px; border:1px solid ${isActive ? color : '#555'};
                background:${isActive ? color + '28' : 'transparent'}; color:${isActive ? color : 'var(--dim)'};
                cursor:pointer; font-size:12px; font-weight:bold; transition:.15s;
            ">${DIFFICULTY_LABELS[d]}</button>`;
        }).join('');

        const teamData = selectedDifficulty && boss.difficulties[selectedDifficulty]
            ? boss.difficulties[selectedDifficulty].pokemon || []
            : [];

        const pokemonHtml = teamData.map((mon, idx) => {
            // Βρίσκουμε το ID από το POKE array αν υπάρχει
            const pokeEntry = (typeof POKE !== 'undefined')
                ? POKE.find(p =>
                    p.name.toLowerCase() === (mon.name || '').toLowerCase() ||
                    p.name.toLowerCase().replace(/-/g, ' ') === (mon.name || '').toLowerCase().replace(/-/g, ' ')
                )
                : null;

            const spriteHtml = (pokeEntry && typeof spriteImg === 'function')
                ? spriteImg(pokeEntry)
                : `<span style="font-size:28px;">❓</span>`;

            const moves = (mon.moves || []).filter(m => m && m.trim());
            const movesHtml = moves.length
                ? moves.map(m => `<span style="background:var(--brd); border-radius:6px; padding:2px 8px; font-size:11px; color:var(--txt);">${m.replace(/-/g, ' ')}</span>`).join('')
                : '<span style="font-size:11px; color:var(--dim);">—</span>';

            const effectiveItem = (selectedDifficulty === 'easy') ? '' : (mon.item || '');
            const effectiveNature = (mon.nature && mon.nature !== 'Random') ? mon.nature : '';

            return `<div style="background:var(--bg); border:1px solid var(--brd); border-radius:10px; padding:12px; display:flex; gap:10px; align-items:flex-start; min-width:0;">
                <div style="flex-shrink:0; display:flex; flex-direction:column; align-items:center; gap:4px;">
                    ${spriteHtml}
                    <span style="font-size:11px; font-weight:800; color:var(--txt); text-align:center;">${mon.name ? mon.name.replace(/-/g, ' ') : '?'}</span>
                </div>
                <div style="flex:1; min-width:0; display:flex; flex-direction:column; gap:5px;">
                    <div style="display:flex; flex-wrap:wrap; gap:8px; font-size:11px;">
                        ${effectiveNature ? `<span style="color:var(--dim);">Nature: <b style="color:var(--txt);">${effectiveNature}</b></span>` : ''}
                        ${mon.ability ? `<span style="color:var(--dim);">Ability: <b style="color:var(--txt);">${mon.ability.replace(/-/g, ' ')}</b></span>` : ''}
                        ${effectiveItem ? `<span style="color:var(--dim);">Item: <b style="color:#ffc107;">${effectiveItem.replace(/-/g, ' ')}</b></span>` : ''}
                    </div>
                    <div style="display:flex; flex-wrap:wrap; gap:4px;">${movesHtml}</div>
                </div>
            </div>`;
        }).join('');

        const loadBtnDisabled = !teamData.length ? 'disabled' : '';
        detailEl.innerHTML = `
            <div style="padding:16px 20px; display:flex; flex-direction:column; gap:14px; height:100%; box-sizing:border-box; overflow-y:auto;">
                <div>
                    <div style="font-size:19px; font-weight:900; color:var(--txt);">${boss.name}</div>
                    ${boss.title ? `<div style="font-size:12px; color:var(--dim); margin-top:2px;">${boss.title}</div>` : ''}
                    ${boss.region ? `<div style="font-size:11px; margin-top:4px;"><span style="color:${REGION_COLORS[boss.region] || '#aaa'}; font-weight:700;">${boss.region}</span>${boss.location ? ` <span style="color:var(--dim);">— ${boss.location}</span>` : ''}</div>` : ''}
                </div>
                <div style="display:flex; gap:8px; flex-wrap:wrap;" id="bossDiffTabs">${tabsHtml}</div>
                ${selectedDifficulty && DIFFICULTY_RULES[selectedDifficulty] ? `<div style="font-size:11px; color:var(--dim); background:var(--brd); border-radius:6px; padding:6px 10px; line-height:1.5;">ℹ️ ${DIFFICULTY_RULES[selectedDifficulty]}</div>` : ''}
                <div style="display:flex; flex-direction:column; gap:8px;">
                    ${teamData.length ? pokemonHtml : '<div style="color:var(--dim); font-size:13px;">Δεν υπάρχουν Pokémon για αυτή τη δυσκολία.</div>'}
                </div>
                <div style="margin-top:auto; padding-top:10px;">
                    <button type="button" id="bossLoadOppBtn" ${loadBtnDisabled} style="
                        width:100%; padding:10px; border-radius:8px; border:1px solid #ff6b6b;
                        background:rgba(255,107,107,0.12); color:#ff6b6b; font-size:14px; font-weight:bold;
                        cursor:${loadBtnDisabled ? 'not-allowed' : 'pointer'}; opacity:${loadBtnDisabled ? '0.5' : '1'}; transition:.2s;
                    ">⚔️ Φόρτωσε ως Αντίπαλος</button>
                </div>
            </div>`;

        // Difficulty tab events
        const tabsContainer = document.getElementById('bossDiffTabs');
        if (tabsContainer) {
            tabsContainer.addEventListener('click', e => {
                const btn = e.target.closest('[data-diff]');
                if (btn) { selectedDifficulty = btn.dataset.diff; renderBossDetail(); }
            });
        }

        // Load as Opponent
        const loadBtn = document.getElementById('bossLoadOppBtn');
        if (loadBtn && !loadBtnDisabled) {
            loadBtn.addEventListener('click', () => loadBossAsOpponent(boss, selectedDifficulty));
        }
    }

    // ─── Load Boss Team as Opponent ───────────────────────────────────────
    function loadBossAsOpponent(boss, difficulty) {
        if (!boss || !difficulty) return;
        const teamData = boss.difficulties[difficulty] && boss.difficulties[difficulty].pokemon;
        if (!teamData || !teamData.length) return;
        if (typeof window.clearOpponents !== 'function' || typeof window.oppTeam === 'undefined') {
            alert('Η λειτουργία αντιπάλου δεν είναι διαθέσιμη.');
            return;
        }

        window.clearOpponents();

        const evValue  = DIFFICULTY_EVS[difficulty] ?? 0;
        const isEasy   = difficulty === 'easy';

        const limited = teamData.slice(0, 6);
        for (const mon of limited) {
            const pokeEntry = (typeof POKE !== 'undefined')
                ? POKE.find(p =>
                    p.name.toLowerCase() === (mon.name || '').toLowerCase() ||
                    p.name.toLowerCase().replace(/-/g, ' ') === (mon.name || '').toLowerCase().replace(/-/g, ' ')
                )
                : null;

            if (!pokeEntry) continue;

            const moveNames  = (mon.moves || []).filter(m => m && m.trim());
            const moveTypes  = moveNames.map(n => (typeof MOVE_INFO !== 'undefined' && MOVE_INFO[n] ? MOVE_INFO[n].type || '' : ''));
            const moveCats   = moveNames.map(n => (typeof MOVE_INFO !== 'undefined' && MOVE_INFO[n] ? MOVE_INFO[n].cat  || '' : ''));

            const nature = (mon.nature && mon.nature !== 'Random') ? mon.nature : '';
            const item   = isEasy ? '' : (mon.item || '');

            const ev = { HP: evValue, ATK: evValue, DEF: evValue, SPATK: evValue, SPDEF: evValue, SPD: evValue };

            window.oppTeam.push({
                id:        pokeEntry.id,
                ability:   mon.ability || '',
                item,
                level:     50,
                nature,
                moveNames,
                moves:     moveTypes,
                moveCats,
                iv:  { HP: '', ATK: '', DEF: '', SPATK: '', SPDEF: '', SPD: '' },
                ev,
            });
        }

        window.saveOpponents();

        // Εμφανίζουμε το panel αντιπάλου αν είναι κρυφό
        if (!window.showOppPanel) {
            window.showOppPanel = true;
            window.saveOpponents();
        }

        window.closeBossesModal();
        if (typeof renderTeamSlots === 'function') renderTeamSlots();
    }

    // ─── Event delegation for boss list items ─────────────────────────────
    document.addEventListener('click', e => {
        const item = e.target.closest('.bossListItem[data-boss-id]');
        if (!item) return;
        selectedBossId    = item.dataset.bossId;
        selectedDifficulty = null;
        renderBossesList();
        renderBossDetail();
    });

    // Close on overlay backdrop click
    document.addEventListener('click', e => {
        if (e.target && e.target.id === 'bossesOverlay') window.closeBossesModal();
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('bossesOverlay');
            if (modal && modal.getAttribute('aria-hidden') === 'false') window.closeBossesModal();
        }
    });
})();
