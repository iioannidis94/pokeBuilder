// team/trainer_tower.js

document.addEventListener('DOMContentLoaded', () => {
    const towerBtn = document.getElementById('trainerTowerBtn');
    const towerOverlay = document.getElementById('trainerTowerOverlay');
    const towerClose = document.getElementById('trainerTowerClose');

    // Ανοίγει το Trainer Tower
    if (towerBtn && towerOverlay) {
        towerBtn.addEventListener('click', () => {
            // Κλείνουμε τυχόν άλλα ανοιχτά overlays
            document.getElementById('teamOverlay').setAttribute('aria-hidden', 'true');
            document.getElementById('calcOverlay').setAttribute('aria-hidden', 'true');
            document.getElementById('bossesOverlay').setAttribute('aria-hidden', 'true');
            
            // Ανοίγουμε το δικό μας
            towerOverlay.setAttribute('aria-hidden', 'false');
        });
    }

    // Κλείνει το Trainer Tower
    if (towerClose && towerOverlay) {
        towerClose.addEventListener('click', () => {
            towerOverlay.setAttribute('aria-hidden', 'true');
        });
    }
});
