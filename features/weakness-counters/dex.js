// --- dex.js : Central Pokédex & Search ---

function card(p) {
    const { id, name, types } = p;
    const col = TC[types[0]] || '#888';
    const num = String(id).padStart(4, '0');
    const img = spriteImg(p);

    // Calculate Ability Notices
    const pokeAbilities = ABILITIES[String(id)] || [];
    let abilityNotices = [];

    pokeAbilities.forEach(a => {
        const cleanA = a.toLowerCase().replace(/-/g, ' ');
        if (ABILITY_TYPE_MODS && ABILITY_TYPE_MODS[cleanA]) {
            const effects = Object.keys(ABILITY_TYPE_MODS[cleanA]).map(t => {
                const mod = ABILITY_TYPE_MODS[cleanA][t];
                return `${t.charAt(0).toUpperCase() + t.slice(1)} ${mod === 0 ? 'Immunity' : (mod < 1 ? 'Resist' : 'Weak')}`;
            }).join(', ');
            abilityNotices.push(`<span style="font-size:10px; display:block; color:#4dabf7; margin-top:2px;">💡 ${a}: ${effects}</span>`);
        }
    });

    return `<div class="card">
    <div class="ab" style="background:${col}"></div>
    <div class="sw2">${img}</div>
    <div class="info">
      <div class="ph"><span class="num">#${num}</span><span class="pn">${name.replace(/-/g, ' ')}</span></div>
      <div class="tr">${types.map(t => tb(t)).join('')}</div>
      <div class="db">${dmgH(types)}</div>
      <div class="ability-notices" style="margin-top:8px;">${abilityNotices.join('')}</div>
    </div>
  </div>`;
}

const tfEl = document.getElementById('tf');
let activeTypes = []; // Now an array for 2 types
let activeForms = []; // NΕΟ: Array για τα Forms

function setTypeButtonState(btn, type, isActive) {
    const color = TC[type] || '#888';
    btn.classList.toggle('on', isActive);
    btn.style.setProperty('--tf-active', color);
    btn.style.setProperty('--tf-color', color);
    btn.setAttribute('aria-pressed', String(isActive));
}

const FORM_FILTER_ALIASES = {
    mega: ['mega'],
    alola: ['alola', 'alolan'],
    alolan: ['alola', 'alolan'],
    galar: ['galar', 'galarian'],
    hisui: ['hisui', 'hisuian'],
    hisuian: ['hisui', 'hisuian'],
    paldea: ['paldea', 'paldean', 'paldea-combat-breed', 'paldea-blaze-breed', 'paldea-aqua-breed'],
    therian: ['therian'],
};

AT.forEach(t => {
    const b = document.createElement('button');
    b.className = 'tf'; b.textContent = t;
    b.dataset.t = t;
    b.setAttribute('aria-label', `Toggle ${t} type filter`);
    setTypeButtonState(b, t, false);
    
    b.addEventListener('click', () => {
        if (activeTypes.includes(t)) {
            activeTypes = activeTypes.filter(x => x !== t);
            setTypeButtonState(b, t, false);
        } else {
            if (activeTypes.length >= 2) {
                // Reset αν πάει να βάλει 3ο type
                tfEl.querySelectorAll('.tf').forEach(x => {
                    setTypeButtonState(x, x.dataset.t, false);
                });
                activeTypes = [t];
                setTypeButtonState(b, t, true);
            } else {
                activeTypes.push(t);
                setTypeButtonState(b, t, true);
            }
        }
        renderDex();
    });
    tfEl.appendChild(b);
});

// ΝΕΟ: Event Listeners για τα κουμπιά των Forms
document.querySelectorAll('.form-btn').forEach(btn => {
    btn.setAttribute('aria-pressed', 'false');
    btn.addEventListener('click', (e) => {
        const form = e.target.getAttribute('data-form');
        e.target.classList.toggle('on');
        e.target.setAttribute('aria-pressed', String(e.target.classList.contains('on')));
        
        if (activeForms.includes(form)) {
            activeForms = activeForms.filter(f => f !== form);
        } else {
            activeForms.push(form);
        }
        renderDex();
    });
});

const grid = document.getElementById('grid');
const cntEl = document.getElementById('cnt');
let qDex = '';

const THEME_KEY = 'pokedex_theme_v1';
function applyTheme(theme) {
    const light = theme === 'light';
    document.body.classList.toggle('light-mode', light);
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = light ? '☀️' : '🌙';
}
const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
applyTheme(savedTheme);
document.getElementById('themeToggle')?.addEventListener('click', () => {
    const next = document.body.classList.contains('light-mode') ? 'dark' : 'light';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
});

function renderDex() {
    const ql = qDex.toLowerCase().trim();
    let list = POKE;
    
    // Filter by name/ID
    if (ql) list = list.filter(p => p.name.replace(/-/g, ' ').includes(ql) || String(p.id).includes(ql) || p.types.some(t => t.includes(ql)));
    
    // Filter by 1 or 2 types
    if (activeTypes.length > 0) {
        list = list.filter(p => activeTypes.every(t => p.types.includes(t)));
    }

    // ΝΕΟ: Filter by Special Forms
    if (activeForms.length > 0) {
        list = list.filter(p => {
            const formPart = p.name.includes('-') ? p.name.split('-').slice(1).join('-') : '';
            const formSegments = formPart ? formPart.split('-') : [];
            return activeForms.some(form => {
                const suffixes = FORM_FILTER_ALIASES[form] || [form];
                return suffixes.some(suffix =>
                    formPart === suffix ||
                    formPart.startsWith(`${suffix}-`) ||
                    formPart.endsWith(`-${suffix}`) ||
                    formPart.includes(`-${suffix}-`) ||
                    formSegments.includes(suffix)
                );
            });
        });
    }
    
    cntEl.innerHTML = `Showing <strong>${list.length}</strong> / ${POKE.length} Pokémon`;
    
    if (!list.length) {
        grid.innerHTML = '<div class="nores"><div class="em">😴</div><p>No Pokémon found for "' + ql + '"</p></div>';
        return;
    }
    grid.innerHTML = list.map(card).join('');
}

document.getElementById('search').addEventListener('input', e => { qDex = e.target.value; renderDex() });
renderDex();
