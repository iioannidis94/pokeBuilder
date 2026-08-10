## ✅ Implemented Features

### 🧠 AI & Competitive Logic
- **Ability Intelligence:** The AI reads specific Abilities (e.g. *Levitate*, *Thick Fat*, *Flash Fire*) and adjusts defensive synergy scores dynamically — immunities and resistances granted by abilities are fully factored in.
- **Elite Ability Scoring:** The Auto-Build AI now scores 25+ top-tier competitive abilities individually (Serene Grace, Speed Boost, Intimidate, Regenerator, Magic Guard, Contrary, Levitate, weather setters, etc.) giving significantly higher bonuses than generic abilities.
- **Move Completeness & Glass Cannon Check:** The AI penalises Pokémon that are missing moves (−120 per missing move for Sweepers, −60 for Tanks). Fast glass-cannon Pokémon with fewer than 2 moves receive an additional −500 penalty, preventing them from crowding out well-built bulky threats.
- **Key-Stat IV Quality:** For non-tank Pokémon, the AI checks IVs in the relevant attack stat and Speed — poor IVs (< 20) apply a scaling penalty so glass-cannon slots with bad IVs are deprioritised.
- **Item Synergy:** Held items (Choice Band, Leftovers, Focus Sash, Life Orb, Assault Vest) influence the AI's team scoring and role classification.
- **Speed Tiering:** The AI heavily weights speed for non-tank Pokémon; tanks get a bulk-based score instead.
- **Entry Hazard Management:** The Move Optimizer recognises Stealth Rock, Spikes, Rapid Spin, Defog and Court Change as high-value strategic moves.
- **Archetype Recognition:** The Battle Calculator auto-detects Rain (Drizzle), Sun (Drought), Sand (Sand Stream), Snow (Snow Warning), Trick Room and Tailwind team strategies and displays the archetype with tailored advice.
- **Speed Control Warnings:** If the selected team's average Speed is below 80 and no Tailwind / Trick Room / Icy Wind user is present, a ⚡ warning is shown with recommendations.
- **Multi-Format Meta Threat Check:** The Battle Calculator checks team coverage against two switchable metas via a tab toggle — **VGC 2024 Regulation G** (Flutter Mane, Iron Hands, Urshifu, Ogerpon, Raging Bolt, Incineroar, Rillaboom, Amoonguss, Calyrex-Shadow, Pelipper) and **PRO PvP** (Pokemon Revolution Online Gen 7 — 18 threats across 3 tiers: ⚔️ Sweepers: Serperior, Garchomp, Weavile, Infernape, Dragonite, Medicham · 🔄 Pivots: Metagross, Gyarados, Togekiss, Jirachi, Scizor, Clefable · 🛡️ Walls: Ferrothorn, Toxapex, Magearna, Landorus-T, Tyranitar, Slowbro). Selected format persists across sessions via `localStorage`. Shows a **Meta Win Rate %** score and highlights uncovered threats.
- **Precise Damage Calculations:** The Counters (Assassin Mode) panel now shows estimated damage output for the best counter move — including **OHKO / 2HKO / 3HKO** labels and a min–max damage % range using the standard Gen 9 formula.

### ⚔️ Team Builder & Analysis
- Auto-Build 6 AI with Phase scoring: Raw Power, Defensive Synergy, Offensive Coverage, Role Balance.
- Assassin Mode / Target Mode: add an opponent team (manually or via Showdown paste) to see best counters from your roster. Each opponent Pokémon supports inline editing of **moves** (4 slots), **ability**, and **held item** — all persisted in `localStorage` and displayed as context badges in the Counters panel.
- Pro-Tier Move Optimizer: role-aware move recommendations (Tank, Physical Sweeper, Special Sweeper).
- Full stat calculator: Base Stats, IVs, EVs, Natures, Level — real stat values computed live.
- Multi-team management with Import/Export JSON and Showdown paste support.
- Clickable Type Chart modal on every type badge.

---

## 🔮 Future Roadmap

### 🏆 Competitive Formats
- [ ] Multi-format Meta selector expansion: BSS (Battle Stadium Singles) / Gen 9 OU
- [ ] Seasonal meta updates (Regulation H, I, etc.) when the top-ranked Pokémon change
- [ ] PRO PvP ladder data integration — auto-refresh threats from a public leaderboard or community API if one becomes available

### ⚔️ Team Builder Upgrades
- [ ] Full Showdown export — generate a paste with EVs, IVs, nature, moves, and item (not just import)
- [ ] EV Spread Optimizer — suggest an optimal spread for the Pokémon's role (e.g. 252/252/4 or bulk EVs for tanks)
- [ ] Nature Suggestion — AI recommends nature based on role (Physical Sweeper → Adamant / Jolly, etc.)
- [ ] Item Recommendations expansion — suggest items beyond the current 5 (Choice Specs, Rocky Helmet, Boots, etc.)

### 💥 Battle Analysis
- [ ] Full Damage Calculator — user-input EVs / IVs / Nature for exact OHKO probability
- [ ] Speed Tier Comparison — visual chart of team Pokémon vs meta threats
- [ ] Priority Move Awareness — recognise Fake Out, Sucker Punch, Bullet Punch in counter suggestions
- [ ] Tera Type Support (Gen 9) — factor Tera type into Meta Threat Check coverage

### 🎨 UI / UX
- [ ] Mobile-first responsive redesign — current layout is desktop-first
- [ ] Dark / Light mode toggle
- [ ] Shareable team links — encode team state in a URL hash
- [ ] Pokémon card view — full details modal with a radar chart for base stats

### 🌐 Data & Integration
- [ ] Auto-refresh meta threats from Pikalytics / VGC Stats API
- [ ] Support for Showdown-format nicknames and custom sprites
- [ ] Offline PWA support — Service Worker for use without internet
