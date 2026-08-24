
// team/battle_tower.js

document.addEventListener('DOMContentLoaded', () => {
    const towerBtn = document.getElementById('towerBtn');
    const towerOverlay = document.getElementById('towerOverlay');
    const towerClose = document.getElementById('towerClose');

    // Ανοίγει το Battle Tower
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

    // Κλείνει το Battle Tower
    if (towerClose && towerOverlay) {
        towerClose.addEventListener('click', () => {
            towerOverlay.setAttribute('aria-hidden', 'true');
        });
    }
});
