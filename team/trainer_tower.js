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

    // Τα υπόλοιπα κουμπιά του μενού
    const myTeamBtn = document.getElementById('myTeamBtn');
    const dexViewBtn = document.getElementById('dexViewBtn');
    const calcViewBtn = document.getElementById('calcViewBtn');

    if (towerBtn) {
        towerBtn.addEventListener('click', () => {
            document.body.classList.remove('team-view', 'calc-view', 'dex-view');
            document.body.classList.add('tower-view');
            renderTrainerTower(towerContent);
        });
    }

    if (towerClose) {
        towerClose.addEventListener('click', () => {
            document.body.classList.remove('tower-view');
        });
    }

    // Κλείνει το Trainer Tower όταν πατάς άλλη καρτέλα
    [myTeamBtn, dexViewBtn, calcViewBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                document.body.classList.remove('tower-view');
            });
        }
    });
});

// Αλγόριθμος εύρεσης των απολύτως ελάχιστων τύπων για πλήρες coverage
function getOptimalCoverage(trainers) {
    let uncovered = trainers.map(t => t.id);
    let optimalTypes = [];
    let typeCoverage = {};
    
    trainers.forEach(trainer => {
        trainer.suggested.forEach(type => {
            if (!typeCoverage[type]) typeCoverage[type] = new Set();
            typeCoverage[type].add(trainer.id);
        });
    });

    while (uncovered.length > 0) {
        let bestType = null;
        let bestCoverCount = 0;
        let bestCovers = [];

        for (const [type, tSet] of Object.entries(typeCoverage)) {
            let currentCovers = uncovered.filter(id => tSet.has(id));
            if (currentCovers.length > bestCoverCount) {
                bestCoverCount = currentCovers.length;
                bestType = type;
                bestCovers = currentCovers;
            }
        }

        if (bestType) {
            optimalTypes.push(bestType);
            uncovered = uncovered.filter(id => !bestCovers.includes(id));
            delete typeCoverage[bestType];
        } else {
            break;
        }
    }
    return optimalTypes.sort();
}

// Global συνάρτηση για τον υπολογισμό των floors στο Elevator Calculator
window.calculateElevator = function(val) {
    let minLvl = parseInt(val);
    if(isNaN(minLvl) || minLvl < 1) minLvl = 1;
    if(minLvl > 100) minLvl = 100;
    
    let maxAllowed = Math.min(100, minLvl + 29);
    let max19 = Math.min(100, minLvl + 19);
    let max9 = Math.min(100, minLvl + 9);
    
    let base = Math.floor(minLvl / 10) * 10;
    
    // Solo / 0-9 Level Diff
    let solo = "";
    if (base === 0) solo = "10-19";
    else if (base === 90) solo = "80-89, 90-100";
    else solo = `${base-10}-${base-1}, ${base}-${base+9}, ${base+10}-${base+19}`;
    
    // 10-19 Level Diff
    let p19 = "";
    if (base === 0) p19 = "10-19";
    else if (base === 10) p19 = "10-19, 20-29";
    else if (base >= 80) p19 = "80-89, 90-100";
    else p19 = `${base}-${base+9}, ${base+10}-${base+19}`;
    
    // 20-29 Level Diff
    let p29 = "";
    if (base === 0) p29 = "10-19";
    else if (base >= 80) p29 = "80-89, 90-100";
    else p29 = `${base+10}-${base+19}`;
    
    // Update the UI
    document.getElementById('elevatorMax').innerText = maxAllowed;
    document.getElementById('elSolo').innerText = solo;
    document.getElementById('elSoloTeam').innerText = `(Team Lvl: ${minLvl} - ${max9})`;
    document.getElementById('elP19').innerText = p19;
    document.getElementById('elP19Team').innerText = `(Team Lvl: ${minLvl} - ${max19})`;
    document.getElementById('elP29').innerText = p29;
    document.getElementById('elP29Team').innerText = `(Team Lvl: ${minLvl} - ${maxAllowed})`;
}

function renderTrainerTower(container) {
    const optimalTypes = getOptimalCoverage(TRAINER_TOWER_DATA);

    let checklistBadges = optimalTypes.map(t => {
        const tColor = (typeof TC !== 'undefined' && TC[t]) ? TC[t] : '#888';
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

    let html = `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 15px;">`;

    // 1. Checklist Card
    html += `
        <div class="trainer-card" style="border: 2px dashed var(--dim); grid-column: 1 / -1; align-items: center; justify-content: center; padding: 25px;">
            <h3 style="color: var(--yel); margin-bottom: 5px; font-size: 18px;">🛡️ Optimal Coverage Checklist</h3>
            <div style="font-size: 12px; color: var(--dim); margin-bottom: 20px;">You only need these <strong>${optimalTypes.length} specific move types</strong> to hit every single trainer super-effectively! Check them off as you build your team.</div>
            <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; width: 100%;">
                ${checklistBadges}
            </div>
        </div>
    `;

    // 2. ΝΕΟ: Elevator Level Calculator Card
    html += `
        <div class="trainer-card" style="border: 2px solid #38d878; grid-column: 1 / -1; padding: 25px; text-align: left; align-items: flex-start;">
            <h3 style="color: #38d878; margin-bottom: 5px; font-size: 18px;">🏢 Elevator Party Calculator</h3>
            <div style="font-size: 12px; color: var(--dim); margin-bottom: 15px; text-align: left;">
                Enter the level of the lowest Pokémon in your party to see your floor access and limits.
            </div>
            
            <div style="display: flex; gap: 15px; align-items: center; margin-bottom: 15px; background: rgba(0,0,0,0.1); padding: 10px 15px; border-radius: 8px;">
                <label style="color: var(--txt); font-weight: 900; font-size: 14px;">Lowest Pokémon Level:</label>
                <input type="number" id="minLevelInput" min="1" max="100" value="1" oninput="calculateElevator(this.value)" style="
                    background: var(--bg); border: 2px solid var(--brd); color: var(--txt);
                    padding: 8px 12px; border-radius: 6px; font-weight: bold; width: 80px; outline: none; text-align: center; font-size: 16px;
                ">
                <span style="color: #ff5570; font-weight: bold; margin-left: auto; font-size: 13px;">Max Party Level Allowed: <span id="elevatorMax">30</span></span>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; width: 100%; margin-bottom: 15px;">
                <div style="background: rgba(56,216,120,0.1); border: 1px solid #38d878; padding: 10px; border-radius: 8px;">
                    <div style="color: #38d878; font-weight: 900; font-size: 11px; margin-bottom: 4px;">SINGLE / 0-9 LVL DIFF</div>
                    <div id="elSoloTeam" style="color: var(--dim); font-size: 10px; margin-bottom: 6px;">(Team Lvl: 1 - 10)</div>
                    <div id="elSolo" style="color: var(--txt); font-weight: bold; font-size: 14px;">10-19</div>
                </div>
                <div style="background: rgba(245,159,0,0.1); border: 1px solid #f59f00; padding: 10px; border-radius: 8px;">
                    <div style="color: #f59f00; font-weight: 900; font-size: 11px; margin-bottom: 4px;">10-19 LVL DIFF</div>
                    <div id="elP19Team" style="color: var(--dim); font-size: 10px; margin-bottom: 6px;">(Team Lvl: 1 - 20)</div>
                    <div id="elP19" style="color: var(--txt); font-weight: bold; font-size: 14px;">10-19</div>
                </div>
                <div style="background: rgba(255,85,112,0.1); border: 1px solid #ff5570; padding: 10px; border-radius: 8px;">
                    <div style="color: #ff5570; font-weight: 900; font-size: 11px; margin-bottom: 4px;">20-29 LVL DIFF</div>
                    <div id="elP29Team" style="color: var(--dim); font-size: 10px; margin-bottom: 6px;">(Team Lvl: 1 - 30)</div>
                    <div id="elP29" style="color: var(--txt); font-weight: bold; font-size: 14px;">10-19</div>
                </div>
            </div>
            
            <div style="padding: 10px; border: 1px dashed var(--dim); border-radius: 6px; font-size: 11px; color: var(--dim); width: 100%;">
                <strong style="color: var(--yel);">⚠️ IMPORTANT:</strong> The elevator calculates your party levels IN REAL TIME. If your lowest Pokémon is e.g. Lv.40 and your highest levels up from 69 to 70 <strong>while inside</strong>, the option to visit the 50-59 floor will instantly disappear! You won't be kicked out, but you cannot change floors anymore. Max allowed level difference in a party is 29.
            </div>
        </div>
    `;

    // 3. Ζωγραφίζουμε τους Εκπαιδευτές από κάτω
    TRAINER_TOWER_DATA.forEach(trainer => {
        const mainColor = (typeof TC !== 'undefined' && TC[trainer.types[0]]) ? TC[trainer.types[0]] : '#888';
        
        const typeBadges = trainer.types.map(t => {
            const tColor = (typeof TC !== 'undefined' && TC[t]) ? TC[t] : '#888';
            return `<span style="background: ${tColor}; color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: bold; text-transform: uppercase; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">${t}</span>`;
        }).join(' ');

        const suggestedBadges = trainer.suggested.map(t => {
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

    html += `</div>`;
    container.innerHTML = html;
    
    // Αρχικοποίηση του Calculator με την default τιμή (1) μόλις γίνει render
    setTimeout(() => { if(window.calculateElevator) window.calculateElevator(1); }, 50);
}
