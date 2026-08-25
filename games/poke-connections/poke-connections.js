let availablePuzzleIndices = [];
let currentPuzzle = null;
let lives = 4;
let selectedItems = [];
let solvedGroupsCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    initGameSession();
    loadRandomPuzzle();

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

// Αρχικοποίηση λίστας πιστών για το τρέχον run και τυχαίο ανακάτεμα
function initGameSession() {
    availablePuzzleIndices = CONNECTIONS_PUZZLES.map((_, index) => index);
    shuffleArray(availablePuzzleIndices);
}

// Fisher-Yates shuffle algorithm για τυχαία σειρά
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadRandomPuzzle() {
    lives = 4;
    selectedItems = [];
    solvedGroupsCount = 0;
    updateLivesUI();
    
    document.getElementById('solved-container').innerHTML = '';
    document.getElementById('grid-container').innerHTML = '';
    document.getElementById('feedback-msg').textContent = '';
    document.getElementById('next-puzzle-btn').classList.add('hidden');
    document.querySelector('.connections-controls').classList.remove('hidden');

    // Αν τελείωσαν όλες οι πίστες του run, τις ξαναφορτώνουμε από την αρχή
    if (availablePuzzleIndices.length === 0) {
        initGameSession();
    }

    // Παίρνουμε τυχαία πίστα που δεν έχει ξανατυχαίνει σε αυτό το run
    const puzzleIndex = availablePuzzleIndices.pop();
    currentPuzzle = CONNECTIONS_PUZZLES[puzzleIndex];

    if (!currentPuzzle) {
        document.querySelector('.question-banner').textContent = "No puzzles available!";
        return;
    }

    // 1. Δημιουργία λίστας με τα 16 Pokémon της πίστας
    let flatItems = [];
    currentPuzzle.groups.forEach(group => {
        group.members.forEach(memberName => {
            flatItems.push({
                name: memberName,
                groupTheme: group.theme,
                difficulty: group.difficulty
            });
        });
    });

    // 2. Ανακάτεμα των 16 καρτών στο grid
    flatItems = flatItems.sort(() => Math.random() - 0.5);

    // 3. Render στο Grid
    const grid = document.getElementById('grid-container');
    flatItems.forEach(item => {
        const searchName = item.name.toLowerCase().replace(/ /g, '-');
        const pokeData = POKE.find(p => p.name === searchName) || POKE.find(p => p.name.includes(searchName));
        
        const btn = document.createElement('div');
        btn.className = 'conn-item';
        btn.dataset.theme = item.groupTheme;
        btn.dataset.diff = item.difficulty;
        btn.dataset.name = item.name;
        
        const spriteHtml = pokeData ? spriteImg(pokeData) : `<div style="width:50px;height:50px;">?</div>`;
        btn.innerHTML = `${spriteHtml} <span>${item.name}</span>`;

        btn.onclick = () => toggleSelect(btn);
        grid.appendChild(btn);
    });
}

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
    loadRandomPuzzle();
}
