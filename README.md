## ✅ Implemented Features

### 🧠 AI & Competitive Logic
- **Ability Intelligence:** The AI reads specific Abilities (e.g. *Levitate*, *Thick Fat*, *Flash Fire*) and adjusts defensive synergy scores dynamically — immunities and resistances granted by abilities are fully factored in.
- **Item Synergy:** Held items (Choice Band, Leftovers, Focus Sash, Life Orb, Assault Vest) influence the AI's team scoring and role classification.
- **Speed Tiering:** The AI heavily weights speed for non-tank Pokémon; tanks get a bulk-based score instead.
- **Entry Hazard Management:** The Move Optimizer recognises Stealth Rock, Spikes, Rapid Spin, Defog and Court Change as high-value strategic moves.
- **Archetype Recognition:** The Battle Calculator auto-detects Rain (Drizzle), Sun (Drought), Sand (Sand Stream), Snow (Snow Warning), Trick Room and Tailwind team strategies and displays the archetype with tailored advice.
- **Speed Control Warnings:** If the selected team's average Speed is below 80 and no Tailwind / Trick Room / Icy Wind user is present, a ⚡ warning is shown with recommendations.
- **Meta Threat Integration:** The Battle Calculator checks team coverage against the **Top 10 VGC 2024 Regulation G** meta Pokémon (Flutter Mane, Iron Hands, Urshifu, Ogerpon, Raging Bolt, Incineroar, Rillaboom, Amoonguss, Calyrex-Shadow, Pelipper) and shows a **Meta Win Rate %** score.
- **Precise Damage Calculations:** The Counters (Assassin Mode) panel now shows estimated damage output for the best counter move — including **OHKO / 2HKO / 3HKO** labels and a min–max damage % range using the standard Gen 9 formula.

### ⚔️ Team Builder & Analysis
- Auto-Build 6 AI with Phase scoring: Raw Power, Defensive Synergy, Offensive Coverage, Role Balance.
- Assassin Mode / Target Mode: add an opponent team (manually or via Showdown paste) to see best counters from your roster.
- Pro-Tier Move Optimizer: role-aware move recommendations (Tank, Physical Sweeper, Special Sweeper).
- Full stat calculator: Base Stats, IVs, EVs, Natures, Level — real stat values computed live.
- Multi-team management with Import/Export JSON and Showdown paste support.
- Clickable Type Chart modal on every type badge.
