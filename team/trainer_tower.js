// team/trainer_tower.js
console.log("Trainer Tower script loaded!"); 

const TRAINER_TOWER_DATA = [
    { id: "lass", name: "Young Girl", title: "Always Normal Type", types: ["normal"], sprite: "lass" },
    { id: "firebreather", name: "Fire Clown", title: "Always Fire Type", types: ["fire"], sprite: "firebreather" },
    { id: "sailor", name: "Sailor", title: "Always Water Type", types: ["water"], sprite: "sailor" },
    { id: "picnicker", name: "Cute Woman", title: "Always Grass Type", types: ["grass"], sprite: "picnicker" },
    { id: "worker", name: "Orange Clothes", title: "Electric / Flying / Normal", types: ["electric", "flying", "normal"], sprite: "worker" },
    { id: "backpackerf", name: "Ponytail & Backpack", title: "Always Rock Type", types: ["rock"], sprite: "backpackerf" },
    { id: "skier", name: "Skier", title: "Always Ice Type", types: ["ice"], sprite: "skierf" },
    { id: "hiker", name: "Hiker", title: "Ground (30+) / Steel (10-29)", types: ["ground", "steel"], sprite: "hiker" },
    { id: "scientist", name: "Scientist", title: "Steel / Electric Type", types: ["steel", "electric"], sprite: "scientist" },
    { id: "kimonogirl", name: "Kimono Girl", title: "Always Fairy Type", types: ["fairy"], sprite: "kimonogirl" },
    { id: "acetrainer", name: "Ace Trainer", title: "Always Dragon Type", types: ["dragon"], sprite: "acetrainer" },
    { id: "rocket", name: "Rocket Grunt", title: "Always Dark Type", types: ["dark"], sprite: "rocketgrunt" },
    { id: "biker", name: "Biker", title: "Always Poison Type", types: ["poison"], sprite: "biker" },
    { id: "psychicm", name: "Male Medium", title: "Always Psychic Type", types: ["psychic"], sprite: "psychic" },
    { id: "hexmaniac", name: "Female Medium", title: "Always Ghost Type", types: ["ghost"], sprite: "hexmaniac" },
    { id: "blackbelt", name: "Karate Trainer", title: "Always Fighting Type", types: ["fighting"], sprite: "blackbelt" },
    { id: "bugcatcher", name: "Bug Catcher", title: "Always Bug Type", types: ["bug"], sprite: "bugcatcher" }
];

// Συνδέουμε απευθείας τα στοιχεία
const towerBtn = document.getElementById('trainerTowerBtn');
const towerOverlay = document.getElementById('trainerTowerOverlay');
const towerClose = document.getElementById('trainerTowerClose');
const towerContent = document.getElementById('trainerTowerContent');

if (towerBtn && towerOverlay) {
    towerBtn.addEventListener('click', () => {
        console.log("Trainer Tower opened!");
        
        // Κλείνουμε τυχόν άλλα ανοιχτά overlays
        const teamOverlay = document.getElementById('teamOverlay');
        const calcOverlay = document.getElementById('calcOverlay');
        const bossesOverlay = document.getElementById('bossesOverlay');
        
        if (teamOverlay) teamOverlay.setAttribute('aria-hidden', 'true');
        if (calcOverlay) calcOverlay.setAttribute('aria-hidden', 'true');
        if (bossesOverlay) bossesOverlay.setAttribute('aria-hidden', 'true');
        
        // Ανοίγουμε το δικό μας
        towerOverlay.setAttribute('aria-hidden', 'false');
        
        // Σχεδιάζουμε το UI
        renderTrainerTower(towerContent);
    });
}

if (towerClose && towerOverlay) {
    towerClose.addEventListener('click', () => {
        towerOverlay.setAttribute('aria-hidden', 'true');
    });
}

function renderTrainerTower(container) {
    let html = `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; padding: 10px;">`;

    TRAINER_TOWER_DATA.forEach(trainer => {
        const mainColor = (typeof TC !== 'undefined' && TC[trainer.types[0]]) ? TC[trainer.types[0]] : '#888';
        
        const typeBadges = trainer.types.map(t => {
            const tColor = (typeof TC !== 'undefined' && TC[t]) ? TC[t] : '#888';
            return `<span style="background: ${tColor}; color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: bold; text-transform: uppercase;">${t}</span>`;
        }).join(' ');

        const imgUrl = `https://play.pokemonshowdown.com/sprites/trainers/${trainer.sprite}.png`;

        html += `
            <div class="trainer-card" style="
                background: var(--panel, #1a1a2e); 
                border: 2px solid ${mainColor}; 
                border-radius: 12px; 
                padding: 15px; 
                text-align: center; 
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                transition: transform 0.2s, box-shadow 0.2s;
                box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            " 
            onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 15px ${mainColor}66';" 
            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 10px rgba(0,0,0,0.3)';">
                
                <img src="${imgUrl}" alt="${trainer.name}" style="width: 80px; height: 80px; object-fit: contain; image-rendering: pixelated; margin-bottom: 10px;">
                
                <div style="width: 100%;">
                    <h3 style="margin: 0 0 5px 0; color: var(--txt, #fff); font-size: 15px;">${trainer.name}</h3>
                    <div style="font-size: 11px; color: var(--dim, #aaa); margin-bottom: 12px; min-height: 26px;">${trainer.title}</div>
                </div>
                
                <div style="display: flex; gap: 5px; justify-content: center; flex-wrap: wrap; width: 100%;">
                    ${typeBadges}
                </div>
                
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}
