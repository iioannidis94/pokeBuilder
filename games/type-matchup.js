let score = 0;
let streak = 0;
let highScore = localStorage.getItem('type_matchup_high') || 0;

let currentRound = {
    pokemon: null,
    correctTypes: [], // List of Super Effective types (x2 or x4)
    isAnswered: false
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('high-score').textContent = highScore;
    startNewRound();
});

function startNewRound() {
    currentRound.isAnswered = false;
    const feedback = document.getElementById('feedback-msg');
    const nextBtn = document.getElementById('next-btn');
    const optionsContainer = document.getElementById('options-container');

    feedback.textContent = '';
    feedback.className = 'feedback-msg';
    nextBtn.classList.add('hidden');
    optionsContainer.innerHTML = '';

    // 1. Pick a random Pokémon
    let p;
    let weaknesses = [];
    
    // Κάνουμε loop μέχρι να βρούμε Pokémon που να έχει τουλάχιστον 1 αδυναμία
    do {
        p = POKE[Math.floor(Math.random() * POKE.length)];
        // Χρησιμοποιούμε τη συνάρτησή σου dmgR από το utils.js
        const dmg = dmgR(p.types);
        weaknesses = [...dmg.x4, ...dmg.x2];
    } while (weaknesses.length === 0);

    currentRound.pokemon = p;
    currentRound.correctTypes = weaknesses;

    // 2. Render Pokémon Card
    document.getElementById('poke-name').textContent = p.name.replace(/-/g, ' ').toUpperCase();
    document.getElementById('poke-img-wrap').innerHTML = spriteImg(p);
    document.getElementById('poke-types').innerHTML = p.types.map(t => tb(t)).join('');

    // 3. Generate Options (1 Correct, 3 Wrong)
    const correctOption = weaknesses[Math.floor(Math.random() * weaknesses.length)];
    
    // Όλα τα types που ΔΕΝ είναι αδυναμίες
    const wrongTypes = AT.filter(t => !weaknesses.includes(t));
    
    // Διαλέγουμε 3 τυχαία λάθος types
    const selectedWrong = wrongTypes.sort(() => 0.5 - Math.random()).slice(0, 3);

    // Ανακατεύουμε τις 4 επιλογές
    const options = [correctOption, ...selectedWrong].sort(() => 0.5 - Math.random());

    // 4. Render Buttons
    options.forEach(type => {
        const btn = document.createElement('button');
        btn.className = 'type-btn';
        btn.textContent = type;
        btn.style.backgroundColor = TC[type] || '#888'; // Χρώμα από το TC.js
        
        btn.onclick = () => chooseType(type, btn, optionsContainer);
        optionsContainer.appendChild(btn);
    });
}

function chooseType(selectedType, btnElement, container) {
    if (currentRound.isAnswered) return;
    currentRound.isAnswered = true;

    const feedback = document.getElementById('feedback-msg');
    const isCorrect = currentRound.correctTypes.includes(selectedType);

    // Style the buttons to show the result
    Array.from(container.children).forEach(btn => {
        btn.disabled = true;
        const btnType = btn.textContent.toLowerCase();
        
        if (currentRound.correctTypes.includes(btnType)) {
            btn.classList.add('btn-correct'); // Highlight the correct answers
        } else {
            btn.style.opacity = '0.3'; // Fade out the wrong ones
        }
    });

    if (isCorrect) {
        score++;
        streak++;
        feedback.textContent = `Correct! ${selectedType.toUpperCase()} is Super Effective! 🎉`;
        feedback.classList.add('correct');
    } else {
        streak = 0;
        feedback.textContent = `Wrong! It was weak to ${currentRound.correctTypes.join(' or ').toUpperCase()}! ❌`;
        feedback.classList.add('wrong');
        btnElement.classList.add('btn-wrong');
    }

    if (score > highScore) {
        highScore = score;
        localStorage.setItem('type_matchup_high', highScore);
        document.getElementById('high-score').textContent = highScore;
    }

    document.getElementById('current-score').textContent = score;
    document.getElementById('streak-score').textContent = `${streak} 🔥`;
    document.getElementById('next-btn').classList.remove('hidden');
}
