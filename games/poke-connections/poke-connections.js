let currentPuzzleGroups = [];
let lives = 4;
let selectedItems = [];
let solvedGroupsCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadRandomDynamicPuzzle();

    // Shuffle grid items button
    document.getElementById('shuffle-btn').onclick = () => {
        const grid = document.getElementById('grid-container');
        for (let i = grid.children.length; i >= 0; i--) {
            grid.appendChild(grid.children[Math.random() * i | 0]);
        }
    };

    // Deselect all button
    document.getElementById('deselect-btn').onclick = () => {
        selectedItems.forEach(btn => btn.classList.remove('selected'));
        selectedItems = [];
    };
});

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadRandomDynamicPuzzle() {
    lives = 4;
    selectedItems = [];
    solvedGroupsCount = 0;
    updateLivesUI();
    
    document.getElementById('solved-container').innerHTML = '';
    document.getElementById('grid-container').innerHTML = '';
    document.getElementById('feedback-msg').textContent = '';
    document.getElementById('next-puzzle-btn').classList.add('hidden');
    document.querySelector('.connections-controls').classList.remove('hidden');

    // 1. Παίρνουμε αντίγραφο της λίστας ερωτήσεων και την ανακατεύουμε
    let pool = [...CONNECTIONS_QUESTIONS];
    shuffleArray(pool);

    // 2. Διαλέγουμε ακριβώς 4 τυχαίες ερωτήσεις/κατηγορίες για αυτό το παιχνίδι
    currentPuzzleGroups = pool.slice(0, 4);

    // 3. Δημιουργία ενιαίας λίστας με τα 16 Pokémon (4 από κάθε ομάδα)
    let flatItems = [];
    currentPuzzleGroups.forEach(group => {
        group.members.forEach(memberName => {
            flatItems.push({
                name: memberName,
                groupTheme: group.theme,
                difficulty: group.difficulty
            });
        });
    });

    // 4. Ανακάτεμα των 16 καρτών στο grid
    shuffleArray(flatItems);

 // 5. Render στο Grid
    const grid = document.getElementById('grid-container');
    flatItems.forEach(item => {
        // Καθαρίζουμε το όνομα από κενά, παύλες και τελείες για ασφαλή αναζήτηση
        const cleanTarget = item.name.toLowerCase().replace(/[\s.-]/g, '');
        
        const pokeData = POKE.find(p => {
            const cleanPokeName = p.name.toLowerCase().replace(/[\s.-]/g, '');
            return cleanPokeName === cleanTarget;
        });
        
        const btn = document.createElement('div');
        btn.className = 'conn-item';
        btn.dataset.theme = item.groupTheme;
        btn.dataset.diff = item.difficulty;
        btn.dataset.name = item.name;
        
        const spriteHtml = pokeData ? spriteImg(pokeData) : `<div style="width:50px;height:50px;display:flex;align-items:center;justify-content:center;">?</div>`;
        btn.innerHTML = `${spriteHtml} <span>${item.name}</span>`;

        btn.onclick = () => toggleSelect(btn);
        grid.appendChild(btn);
    });

function toggleSelect(btn) {
    if (btn.classList.contains('selected')) {
        btn.classList.remove('selected');
        selectedItems = selectedItems.filter(item => item !== btn);
        return;
    }

    if (selectedItems.length < 4) {
        btn.classList.add('selected');
        selectedItems.push(btn);
    }

    // Auto-submit όταν επιλεγούν ακριβώς 4
    if (selectedItems.length === 4) {
        setTimeout(checkMatch, 250);
    }
}

function checkMatch() {
    const targetTheme = selectedItems[0].dataset.theme;
    const isCorrect = selectedItems.every(btn => btn.dataset.theme === targetTheme);

    if (isCorrect) {
        handleCorrectMatch(targetTheme, selectedItems[0].dataset.diff);
    } else {
        handleWrongMatch();
    }
}

function handleCorrectMatch(theme, difficulty) {
    selectedItems.forEach(btn => btn.classList.add('pop-green'));

    setTimeout(() => {
        const solvedContainer = document.getElementById('solved-container');
        const gridContainer = document.getElementById('grid-container');
        
        let spritesHtml = '';
        let namesArray = [];
        selectedItems.forEach(btn => {
            spritesHtml += btn.querySelector('img') ? btn.querySelector('img').outerHTML : '';
            namesArray.push(btn.dataset.name);
        });

        const solvedRow = document.createElement('div');
        solvedRow.className = `solved-row diff-${difficulty}`;
        solvedRow.innerHTML = `
            <div class="solved-sprites">${spritesHtml}</div>
            <h3>${theme}</h3>
            <p>${namesArray.join(', ')}</p>
        `;
        
        solvedContainer.appendChild(solvedRow);

        selectedItems.forEach(btn => gridContainer.removeChild(btn));
        selectedItems = [];
        solvedGroupsCount++;

        if (solvedGroupsCount === 4) {
            document.getElementById('feedback-msg').textContent = "Awesome! You solved the puzzle! 🎉";
            document.getElementById('feedback-msg').className = "feedback-msg correct";
            document.getElementById('next-puzzle-btn').textContent = "Play New Random Puzzle ➡";
            document.getElementById('next-puzzle-btn').classList.remove('hidden');
            document.querySelector('.connections-controls').classList.add('hidden');
        }
    }, 500);
}

function handleWrongMatch() {
    selectedItems.forEach(btn => {
        btn.classList.add('shake-red');
    });

    lives--;
    updateLivesUI();

    setTimeout(() => {
        selectedItems.forEach(btn => {
            btn.classList.remove('shake-red', 'selected');
        });
        selectedItems = [];

        if (lives <= 0) {
            document.getElementById('feedback-msg').textContent = "Game Over! Out of lives. 💀";
            document.getElementById('feedback-msg').className = "feedback-msg wrong";
            document.getElementById('grid-container').style.pointerEvents = 'none';
            document.querySelector('.connections-controls').classList.add('hidden');
            document.getElementById('next-puzzle-btn').textContent = "Try Again 🔄";
            document.getElementById('next-puzzle-btn').classList.remove('hidden');
        }
    }, 600);
}

function updateLivesUI() {
    const livesStr = Array(lives).fill('❤️').join('') + Array(4 - lives).fill('🖤').join('');
    document.getElementById('lives-count').innerHTML = livesStr;
}

function loadNextPuzzle() {
    document.getElementById('grid-container').style.pointerEvents = 'auto';
    loadRandomDynamicPuzzle();
}
