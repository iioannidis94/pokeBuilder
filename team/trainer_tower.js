// team/trainer_tower.js

const TRAINER_TOWER_DATA = [
    { id: "lass", name: "Young Girl", title: "Always Normal Type", types: ["normal"], suggested: ["fighting"], sprite: "lass" },
    { id: "firebreather", name: "Fire Clown", title: "Always Fire Type", types: ["fire"], suggested: ["water", "ground", "rock"], sprite: "firebreather" },
    { id: "sailor", name: "Sailor", title: "Always Water Type", types: ["water"], suggested: ["electric", "grass"], sprite: "sailor" },
    { id: "picnicker", name: "Cute Woman", title: "Always Grass Type", types: ["grass"], suggested: ["fire", "flying", "ice", "bug"], sprite: "picnicker" },
    { id: "worker", name: "Orange Clothes", title: "Electric / Flying / Normal", types: ["electric", "flying", "normal"], suggested: ["ground", "ice", "fighting"], sprite: "worker" },
    { id: "backpackerf", name: "Ponytail & Backpack", title: "Always Rock Type", types: ["rock"], suggested: ["water", "grass", "fighting", "ground"], sprite: "backpackerf" },
    { id: "skier", name: "Skier", title: "Always Ice Type", types: ["ice"], suggested: ["fire", "fighting", "rock", "steel"], sprite: "skierf" },
    { id: "hiker", name: "Hiker", title: "Ground (30+) / Steel (10-29)", types: ["ground", "steel"], suggested: ["water", "fire", "fighting", "ground"], sprite: "hiker" },
    { id: "scientist", name: "Scientist", title: "Steel / Electric Type", types: ["steel", "electric"], suggested: ["ground", "fire", "fighting"], sprite: "scientist" },
    { id: "kimonogirl", name: "Kimono Girl", title: "Always Fairy Type", types: ["fairy"], suggested: ["poison", "steel"], sprite: "kimonogirl" },
    { id: "acetrainer", name: "Ace Trainer", title: "Always Dragon Type", types: ["dragon"], suggested: ["ice", "fairy", "dragon"], sprite: "acetrainer" },
    { id: "rocket", name: "Rocket Grunt", title: "Always Dark Type", types: ["dark"], suggested: ["fighting", "fairy", "bug"], sprite: "rocketgrunt" },
    { id: "biker", name: "Biker", title: "Always Poison Type", types: ["poison"], suggested: ["ground", "psychic"], sprite: "biker-gen3" },
    { id: "psychicm", name: "Male Medium", title: "Always Psychic Type", types: ["psychic"], suggested: ["dark", "ghost", "bug"], sprite: "psychic" },
    { id: "hexmaniac", name: "Female Medium", title: "Always Ghost Type", types: ["ghost"], suggested: ["dark", "ghost"], sprite: "medium" },
    { id: "blackbelt", name: "Karate Trainer", title: "Always Fighting Type", types: ["fighting"], suggested: ["flying", "psychic", "fairy"], sprite: "blackbelt-gen3" },
    { id: "bugcatcher", name: "Bug Catcher", title: "Always Bug Type", types: ["bug"], suggested: ["fire", "flying", "rock"], sprite: "bugcatcher-gen3" }
];

document.addEventListener('DOMContentLoaded', () => {
    const towerBtn = document.getElementById('trainerTowerBtn');
    const towerClose = document.getElementById('trainerTowerClose');
    const towerContent = document.getElementById('trainerTowerContent');

    if (towerBtn) {
        towerBtn.addEventListener('click', () => {
            // Αφαιρούμε τις κλάσεις των άλλων views (αν είναι ανοιχτά)
            document.body.classList.remove('team-view', 'calc-view', 'dex-view');
            
            // Προσθέτουμε την κλάση που "ανοίγει" το δικό μας view
            document.body.classList.add('tower-view');
            
            renderTrainerTower(towerContent);
        });
    }

    if (towerClose) {
        towerClose.addEventListener('click', () => {
            document.body.classList.remove('tower-view');
        });
    }
});

function renderTrainerTower(container) {
    let html = `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 15px;">`;

    TRAINER_TOWER_DATA.forEach(trainer => {
        const mainColor = (typeof TC !== 'undefined' && TC[trainer.types[0]]) ? TC[trainer.types[0]] : '#888';
        
        // 1. Γεμάτα Badges για τους τύπους του Trainer
        const typeBadges = trainer.types.map(t => {
            const tColor = (typeof TC !== 'undefined' && TC[t]) ? TC[t] : '#888';
            return `<span style="background: ${tColor}; color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: bold; text-transform: uppercase; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">${t}</span>`;
        }).join(' ');

        // 2. Outlined Badges για τους "Suggested" τύπους (Τα Counters)
        const suggestedBadges = trainer.suggested.map(t => {
            const tColor = (typeof TC !== 'undefined' && TC[t]) ? TC[t] : '#888';
            return `<span style="border: 1px solid ${tColor}; color: ${tColor}; background: rgba(255,255,255,0.03); padding: 3px 6px; border-radius: 4px; font-size: 10px; font-weight: 800; text-transform: uppercase;">${t}</span>`;
        }).join(' ');

        const imgUrl = `https://play.pokemonshowdown.com/sprites/trainers/${trainer.sprite}.png`;

        html += `
            <div class="trainer-card" style="border: 2px solid ${mainColor};" 
                 onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 15px ${mainColor}66';" 
                 onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 10px rgba(0,0,0,0.3)';">
                
                <img src="${imgUrl}" alt="${trainer.name}" onerror="this.src='https://play.pokemonshowdown.com/sprites/trainers/unknown.png'">
                
                <div style="width: 100%;">
                    <h3>${trainer.name}</h3>
                    <div class="trainer-title">${trainer.title}</div>
                </div>
                
                <!-- Τύποι που χρησιμοποιεί ο Trainer -->
                <div style="display: flex; gap: 5px; justify-content: center; flex-wrap: wrap; width: 100%;">
                    ${typeBadges}
                </div>
                
                <!-- Προτεινόμενοι Τύποι για να τον νικήσεις -->
                <div style="width: 100%; margin-top: 14px; padding-top: 12px; border-top: 1px dashed var(--brd, #333);">
                    <div style="font-size: 9px; color: var(--dim, #aaa); margin-bottom: 8px; font-weight: 900; letter-spacing: 0.5px;">SUGGESTED COUNTERS</div>
                    <div style="display: flex; gap: 5px; justify-content: center; flex-wrap: wrap;">
                        ${suggestedBadges}
                    </div>
                </div>
                
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}
