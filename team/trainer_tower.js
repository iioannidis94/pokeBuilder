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

    // 1. Δημιουργία των καρτών για τους Εκπαιδευτές
    let allSuggestedTypes = new Set(); // Εδώ θα μαζέψουμε όλους τους προτεινόμενους τύπους

    TRAINER_TOWER_DATA.forEach(trainer => {
        const mainColor = (typeof TC !== 'undefined' && TC[trainer.types[0]]) ? TC[trainer.types[0]] : '#888';
        
        const typeBadges = trainer.types.map(t => {
            const tColor = (typeof TC !== 'undefined' && TC[t]) ? TC[t] : '#888';
            return `<span style="background: ${tColor}; color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: bold; text-transform: uppercase; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">${t}</span>`;
        }).join(' ');

        const suggestedBadges = trainer.suggested.map(t => {
            allSuggestedTypes.add(t); // Προσθέτουμε τον τύπο στη γενική λίστα μας
            const tColor = (typeof TC !== 'undefined' && TC[t]) ? TC[t] : '#888';
            return `<span style="background: ${tColor}; color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: bold; text-transform: uppercase; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">${t}</span>`;
        }).join(' ');

        const imgUrl = `https://play.pokemonshowdown.com/sprites/trainers/${trainer.sprite}.png`;

        html += `
            <div class="trainer-card" style="border: 2px solid ${mainColor};" 
                 onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 15px ${mainColor}66';" 
                 onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 10px rgba(0,0,0,0.3)';">
                
                <img src="${imgUrl}" alt="${trainer.name}" onerror="this.src='https://play.pokemonshowdown.com/sprites/trainers/unknown.png'">
                
                <div style="width: 100%;">
                    <h3 style="margin: 0 0 5px 0; color: var(--txt); font-size: 15px;">${trainer.name}</h3>
                    <div class="trainer-title">${trainer.title}</div>
                </div>
                
                <div style="display: flex; gap: 5px; justify-content: center; flex-wrap: wrap; width: 100%;">
                    ${typeBadges}
                </div>
                
                <div style="width: 100%; margin-top: 14px; padding-top: 12px; border-top: 1px dashed var(--brd);">
                    <div style="font-size: 9px; color: var(--dim); margin-bottom: 8px; font-weight: 900; letter-spacing: 0.5px;">SUGGESTED COUNTERS</div>
                    <div style="display: flex; gap: 5px; justify-content: center; flex-wrap: wrap;">
                        ${suggestedBadges}
                    </div>
                </div>
            </div>
        `;
    });

    // 2. Δημιουργία της Κάρτας Checklist στο τέλος
    const uniqueTypes = Array.from(allSuggestedTypes).sort(); // Αλφαβητική ταξινόμηση

    let checklistBadges = uniqueTypes.map(t => {
        const tColor = (typeof TC !== 'undefined' && TC[t]) ? TC[t] : '#888';
        
        // Λογική για το toggle (άδειο -> γεμάτο) όταν το πατάς
        const toggleLogic = `
            if(this.dataset.checked === 'yes') {
                this.dataset.checked = 'no';
                this.style.background = 'transparent';
                this.style.color = '${tColor}';
            } else {
                this.dataset.checked = 'yes';
                this.style.background = '${tColor}';
                this.style.color = '#fff';
            }
        `.replace(/\n/g, '');

        return `<div data-checked="no" style="
            border: 2px solid ${tColor}; background: transparent; color: ${tColor}; 
            padding: 6px 12px; border-radius: 6px; font-size: 11px; font-weight: 900; 
            text-transform: uppercase; cursor: pointer; transition: all 0.2s; user-select: none;
        " onclick="${toggleLogic}">${t}</div>`;
    }).join('');

    // Προσθέτουμε την κάρτα να πιάνει όλο το πλάτος (grid-column: 1 / -1)
    html += `
        <div class="trainer-card" style="border: 2px dashed var(--dim); grid-column: 1 / -1; align-items: center; justify-content: center; padding: 25px;">
            <h3 style="color: var(--yel); margin-bottom: 5px; font-size: 18px;">🛡️ Team Coverage Checklist</h3>
            <div style="font-size: 12px; color: var(--dim); margin-bottom: 20px;">Click the move types you currently have in your team to see if you are prepared!</div>
            <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; width: 100%;">
                ${checklistBadges}
            </div>
        </div>
    `;

    html += `</div>`;
    container.innerHTML = html;
}
