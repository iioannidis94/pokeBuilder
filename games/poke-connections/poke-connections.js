let currentPuzzleIndex = 0;
let lives = 4;
let selectedItems = []; // Αποθηκεύει τα HTML elements που έχει κάνει κλικ ο παίκτης
let solvedGroupsCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadPuzzle(currentPuzzleIndex);

    // Λειτουργία κουμπιού Shuffle
    document.getElementById('shuffle-btn').onclick = () => {
        const grid = document.getElementById('grid-container');
        for (let i = grid.children.length; i >= 0; i--) {
            grid.appendChild(grid.children[Math.random() * i | 0]);
        }
    };

    // Λειτουργία κουμπιού Deselect All
    document.getElementById('deselect-btn').onclick = () => {
        selectedItems.forEach(btn => btn.classList.remove('selected'));
        selectedItems = [];
    };
});

function loadPuzzle(index) {
    lives = 4;
    selectedItems = [];
    solvedGroupsCount = 0;
    updateLivesUI();
    
    document.getElementById('solved-container').innerHTML = '';
    document.getElementById('grid-container').innerHTML = '';
    document.getElementById('feedback-msg').textContent = '';
    document.getElementById('next-puzzle-btn').classList.add('hidden');
    document.querySelector('.connections-controls').classList.remove('hidden');

    const puzzle = CONNECTIONS_PUZZLES[index];
    if(!puzzle) {
        document.querySelector('.question-banner').textContent = "Συγχαρητήρια! Τερμάτισες όλες τις πίστες!";
        document.querySelector('.connections-controls').classList.add('hidden');
        return;
    }

    // 1. Δημιουργία της λίστας με τα 16 Pokémon
    let flatItems = [];
    puzzle.groups.forEach(group => {
        group.members.forEach(memberName => {
            flatItems.push({
                name: memberName,
                groupTheme: group.theme,
                difficulty: group.difficulty
            });
        });
    });

    // 2. Ανακάτεμα (Shuffle)
    flatItems = flatItems.sort(() => Math.random() - 0.5);

    // 3. Render στο Grid
    const grid = document.getElementById('grid-container');
    flatItems.forEach(item => {
        // Βρίσκουμε το Pokémon από το pokemon-core.js για να πάρουμε το sprite
        const searchName = item.name.toLowerCase().replace(/ /g, '-');
        const pokeData = POKE.find(p => p.name === searchName) || POKE.find(p => p.name.includes(searchName));
        
        const btn = document.createElement('div');
        btn.className = 'conn-item';
        btn.dataset.theme = item.groupTheme;
        btn.dataset.diff = item.difficulty;
        btn.dataset.name = item.name;
        
        // Φέρνουμε το sprite από το utils.js
        const spriteHtml = pokeData ? spriteImg(pokeData) : `<div style="width:40px;height:40px;">?</div>`;
        btn.innerHTML = `${spriteHtml} <span>${item.name}</span>`;

        btn.onclick = () => toggleSelect(btn);
        grid.appendChild(btn);
    });
}

function toggleSelect(btn) {
    // Αν είναι ήδη επιλεγμένο, βγάλτο
    if (btn.classList.contains('selected')) {
        btn.classList.remove('selected');
        selectedItems = selectedItems.filter(item => item !== btn);
        return;
    }

    // Αν δεν έχουμε ήδη 4 επιλεγμένα, πρόσθεσέ το
    if (selectedItems.length < 4) {
        btn.classList.add('selected');
        selectedItems.push(btn);
    }

    // Αυτόματο Submit αν επιλέχθηκαν 4
    if (selectedItems.length === 4) {
        setTimeout(checkMatch, 200); // Μικρή καθυστέρηση για να φανεί το 4ο κλικ
    }
}

function checkMatch() {
    // Παίρνουμε το theme του πρώτου επιλεγμένου
    const targetTheme = selectedItems[0].dataset.theme;
    
    // Ελέγχουμε αν ΚΑΙ ΤΑ 4 έχουν το ίδιο theme
    const isCorrect = selectedItems.every(btn => btn.dataset.theme === targetTheme);

    if (isCorrect) {
        handleCorrectMatch(targetTheme, selectedItems[0].dataset.diff);
    } else {
        handleWrongMatch();
    }
}

function handleCorrectMatch(theme, difficulty) {
    // Πρασινίζουμε τα επιλεγμένα
    selectedItems.forEach(btn => btn.classList.add('pop-green'));

    setTimeout(() => {
        const solvedContainer = document.getElementById('solved-container');
        const gridContainer = document.getElementById('grid-container');
        
        // Μαζεύουμε τα sprites και τα ονόματα
        let spritesHtml = '';
        let namesArray = [];
        selectedItems.forEach(btn => {
            spritesHtml += btn.querySelector('img') ? btn.querySelector('img').outerHTML : '';
            namesArray.push(btn.dataset.name);
        });

        // Φτιάχνουμε τη λυμένη γραμμή
        const solvedRow = document.createElement('div');
        solvedRow.className = `solved-row diff-${difficulty}`;
        solvedRow.innerHTML = `
            <div class="solved-sprites">${spritesHtml}</div>
            <h3>${theme}</h3>
            <p>${namesArray.join(', ')}</p>
        `;
        
        solvedContainer.appendChild(solvedRow);

        // Αφαιρούμε τα 4 κουμπιά από το Grid
        selectedItems.forEach(btn => gridContainer.removeChild(btn));
        selectedItems = [];
        solvedGroupsCount++;

        // Έλεγχος αν λύθηκε όλο το παζλ
        if (solvedGroupsCount === 4) {
            document.getElementById('feedback-msg').textContent = "Τέλεια! Λύσατε τον γρίφο! 🎉";
            document.getElementById('feedback-msg').className = "feedback-msg correct";
            document.getElementById('next-puzzle-btn').classList.remove('hidden');
            document.querySelector('.connections-controls').classList.add('hidden');
        }
    }, 500); // Περιμένουμε μισό δευτερόλεπτο για να παίξει το πράσινο animation
}

function handleWrongMatch() {
    // Κοκκινίζουμε και τρέμουμε
    selectedItems.forEach(btn => {
        btn.classList.add('shake-red');
    });

    lives--;
    updateLivesUI();

    setTimeout(() => {
        // Επαναφορά των κουμπιών (αφαίρεση του λάθους και της επιλογής)
        selectedItems.forEach(btn => {
            btn.classList.remove('shake-red', 'selected');
        });
        selectedItems = [];

        // Έλεγχος αν χάσαμε
        if (lives <= 0) {
            document.getElementById('feedback-msg').textContent = "Game Over! Τελείωσαν οι ζωές. 💀";
            document.getElementById('feedback-msg').className = "feedback-msg wrong";
            document.getElementById('grid-container').style.pointerEvents = 'none'; // Κλείδωμα
            document.querySelector('.connections-controls').classList.add('hidden');
            document.getElementById('next-puzzle-btn').classList.remove('hidden');
        }
    }, 600); // Περιμένουμε λίγο να τελειώσει το "κούνημα"
}

function updateLivesUI() {
    const livesStr = Array(lives).fill('❤️').join('') + Array(4 - lives).fill('🖤').join('');
    document.getElementById('lives-count').innerHTML = livesStr;
}

function loadNextPuzzle() {
    currentPuzzleIndex++;
    loadPuzzle(currentPuzzleIndex);
}
