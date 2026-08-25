
const STATS = [
    { key: 'hp', label: 'HP' },
    { key: 'attack', label: 'Attack ⚔️' },
    { key: 'defense', label: 'Defense 🛡️' },
    { key: 'special-attack', label: 'Sp. Atk ✨' },
    { key: 'special-defense', label: 'Sp. Def 🔮' },
    { key: 'speed', label: 'Speed ⚡' }
];

let score = 0;
let streak = 0;
let highScore = localStorage.getItem('stat_clash_high') || 0;

let currentRound = {
    stat: null,
    pokemon: [null, null],
    isAnswered: false
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('high-score').textContent = highScore;
    startNewRound();
});

// Επιλογή 2 τυχαίων διαφορετικών Pokémon από τη λίστα POKE
function getRandomPair() {
    const p1 = POKE[Math.floor(Math.random() * POKE.length)];
    let p2 = POKE[Math.floor(Math.random() * POKE.length)];
    while (p2.id === p1.id) {
        p2 = POKE[Math.floor(Math.random() * POKE.length)];
    }
    return [p1, p2];
}

// Φόρτωση στατιστικών από το PokeAPI
async function fetchPokemonData(id) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        
        const statsMap = {};
        data.stats.forEach(s => {
            statsMap[s.stat.name] = s.base_stat;
        });

        return {
            id: data.id,
            name: data.name,
            sprite: data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
            types: data.types.map(t => t.type.name),
            stats: statsMap
        };
    } catch (e) {
        console.error("Σφάλμα φόρτωσης PokeAPI:", e);
        return null;
    }
}

async function startNewRound() {
    currentRound.isAnswered = false;
    toggleControls(true);

    const spinner = document.getElementById('loading-spinner');
    const arena = document.getElementById('matchup-container');
    const feedback = document.getElementById('feedback-msg');
    const nextBtn = document.getElementById('next-btn');

    feedback.textContent = '';
    feedback.className = 'feedback-msg';
    nextBtn.classList.add('hidden');
    spinner.classList.remove('hidden');
    arena.classList.add('blurred');

    // Επιλογή Stat και 2 Pokemon
    currentRound.stat = STATS[Math.floor(Math.random() * STATS.length)];
    document.getElementById('target-stat').textContent = currentRound.stat.label;

    const [rawP1, rawP2] = getRandomPair();
    const [p1Data, p2Data] = await Promise.all([
        fetchPokemonData(rawP1.id),
        fetchPokemonData(rawP2.id)
    ]);

    if (!p1Data || !p2Data) {
        spinner.classList.add('hidden');
        feedback.textContent = "Αποτυχία σύνδεσης με το PokeAPI. Δοκιμάστε ξανά.";
        return;
    }

    currentRound.pokemon = [p1Data, p2Data];

    // Ενημέρωση UI
    renderCard(1, p1Data);
    renderCard(2, p2Data);

    spinner.classList.add('hidden');
    arena.classList.remove('blurred');
    toggleControls(false);
}

function renderCard(idx, pData) {
    const nameEl = document.getElementById(`poke-name-${idx}`);
    const imgEl = document.getElementById(`poke-img-${idx}`);
    const typesEl = document.getElementById(`poke-types-${idx}`);
    const statEl = document.getElementById(`stat-val-${idx}`);
    const cardEl = document.getElementById(`card-${idx}`);

    cardEl.className = 'poke-card';
    nameEl.textContent = pData.name.toUpperCase();
    imgEl.src = pData.sprite;
    statEl.textContent = '??';
    statEl.classList.remove('revealed');

    typesEl.innerHTML = pData.types
        .map(t => `<span class="type-pill type-${t}">${t}</span>`)
        .join('');
}

function choosePokemon(selectedIndex) {
    if (currentRound.isAnswered) return;
    currentRound.isAnswered = true;

    const statKey = currentRound.stat.key;
    const stat1 = currentRound.pokemon[0].stats[statKey];
    const stat2 = currentRound.pokemon[1].stats[statKey];

    // Αποκάλυψη στατιστικών
    const statEl1 = document.getElementById('stat-val-1');
    const statEl2 = document.getElementById('stat-val-2');
    statEl1.textContent = `${stat1} ${currentRound.stat.label}`;
    statEl2.textContent = `${stat2} ${currentRound.stat.label}`;
    statEl1.classList.add('revealed');
    statEl2.classList.add('revealed');

    const card1 = document.getElementById('card-1');
    const card2 = document.getElementById('card-2');
    const feedback = document.getElementById('feedback-msg');

    let isCorrect = false;
    if (stat1 === stat2) {
        isCorrect = true; // Ισοπαλία = αυτόματα σωστό
    } else if (selectedIndex === 0 && stat1 > stat2) {
        isCorrect = true;
    } else if (selectedIndex === 1 && stat2 > stat1) {
        isCorrect = true;
    }

    if (isCorrect) {
        score++;
        streak++;
        feedback.textContent = "Σωστά! 🎉";
        feedback.classList.add('correct');
        (selectedIndex === 0 ? card1 : card2).classList.add('win');
    } else {
        streak = 0;
        feedback.textContent = "Λάθος! ❌";
        feedback.classList.add('wrong');
        (selectedIndex === 0 ? card1 : card2).classList.add('lose');
        (selectedIndex === 0 ? card2 : card1).classList.add('win');
    }

    if (score > highScore) {
        highScore = score;
        localStorage.setItem('stat_clash_high', highScore);
        document.getElementById('high-score').textContent = highScore;
    }

    document.getElementById('current-score').textContent = score;
    document.getElementById('streak-score').textContent = `${streak} 🔥`;
    document.getElementById('next-btn').classList.remove('hidden');
}

function toggleControls(disable) {
    document.getElementById('card-1').style.pointerEvents = disable ? 'none' : 'auto';
    document.getElementById('card-2').style.pointerEvents = disable ? 'none' : 'auto';
}
