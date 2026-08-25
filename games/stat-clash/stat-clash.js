const STATS = [
    { key: 'hp', label: 'HP' },
    { key: 'atk', label: 'Attack ' },
    { key: 'def', label: 'Defense ' },
    { key: 'spa', label: 'Sp. Atk ' },
    { key: 'spd', label: 'Sp. Def ' },
    { key: 'spe', label: 'Speed ' }
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

// Select 2 random different Pokémon that exist in BASE_STATS
function getRandomPair() {
    let p1, p2;
    do {
        p1 = POKE[Math.floor(Math.random() * POKE.length)];
    } while (!BASE_STATS[String(p1.id)]);

    do {
        p2 = POKE[Math.floor(Math.random() * POKE.length)];
    } while (p2.id === p1.id || !BASE_STATS[String(p2.id)]);

    return [p1, p2];
}

function startNewRound() {
    currentRound.isAnswered = false;
    toggleControls(true);

    const arena = document.getElementById('matchup-container');
    const feedback = document.getElementById('feedback-msg');
    const nextBtn = document.getElementById('next-btn');

    feedback.textContent = '';
    feedback.className = 'feedback-msg';
    nextBtn.classList.add('hidden');
    arena.classList.add('blurred');

    // Pick random stat
    currentRound.stat = STATS[Math.floor(Math.random() * STATS.length)];
    document.getElementById('target-stat').textContent = currentRound.stat.label;

    // Pick random Pokémon pair
    const [p1, p2] = getRandomPair();
    currentRound.pokemon = [p1, p2];

    renderCard(1, p1);
    renderCard(2, p2);

    arena.classList.remove('blurred');
    toggleControls(false);
}

function renderCard(idx, p) {
    const cardEl = document.getElementById(`card-${idx}`);
    const nameEl = document.getElementById(`poke-name-${idx}`);
    const imgWrap = document.getElementById(`poke-img-wrap-${idx}`);
    const typesEl = document.getElementById(`poke-types-${idx}`);
    const statEl = document.getElementById(`stat-val-${idx}`);

    cardEl.className = 'poke-card';
    nameEl.textContent = p.name.replace(/-/g, ' ').toUpperCase();
    
    // Uses utility from utils.js
    imgWrap.innerHTML = spriteImg(p); 
    
    statEl.textContent = '??';
    statEl.classList.remove('revealed');

    // Uses utility from utils.js
    typesEl.innerHTML = p.types.map(t => tb(t)).join('');
}

function choosePokemon(selectedIndex) {
    if (currentRound.isAnswered) return;
    currentRound.isAnswered = true;

    const statKey = currentRound.stat.key;
    const p1Id = String(currentRound.pokemon[0].id);
    const p2Id = String(currentRound.pokemon[1].id);

    const stat1 = BASE_STATS[p1Id][statKey];
    const stat2 = BASE_STATS[p2Id][statKey];

    // Reveal stats
    const statEl1 = document.getElementById('stat-val-1');
    const statEl2 = document.getElementById('stat-val-2');
    statEl1.innerHTML = `<span style="color:var(--yel); font-size:24px;">${stat1}</span>`;
    statEl2.innerHTML = `<span style="color:var(--yel); font-size:24px;">${stat2}</span>`;
    statEl1.classList.add('revealed');
    statEl2.classList.add('revealed');

    const card1 = document.getElementById('card-1');
    const card2 = document.getElementById('card-2');
    const feedback = document.getElementById('feedback-msg');

    let isCorrect = false;
    if (stat1 === stat2) {
        isCorrect = true; // Tie is counted as a win
    } else if (selectedIndex === 0 && stat1 > stat2) {
        isCorrect = true;
    } else if (selectedIndex === 1 && stat2 > stat1) {
        isCorrect = true;
    }

    if (isCorrect) {
        score++;
        streak++;
        feedback.textContent = "Correct! 🎉";
        feedback.classList.add('correct');
        (selectedIndex === 0 ? card1 : card2).classList.add('win');
    } else {
        streak = 0;
        feedback.textContent = "Wrong! ❌";
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
