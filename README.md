# pokeBuilder

A competitive Pokémon builder focused on **fast team creation, matchup clarity, and practical AI-assisted decisions**.

The app already combines a searchable Pokédex, weakness/counter inspection, multi-team storage, and a much more competitive-aware Team Builder for **PRO PvP** workflows.

---

## Current Product Direction

The goal is not just to list Pokémon, but to help the user:
- build cleaner 6-mon cores faster
- understand team weaknesses instantly
- evaluate counters against specific enemy teams
- adapt to real meta threats without leaving the app

---

## What Is Already Implemented

### Pokédex & Core UX
- Fast Pokédex search by name, ID, and type
- Dual-type filtering
- Clickable type badges with a full Type Chart modal
- Weakness / resistance breakdown per Pokémon
- Dark / Light mode toggle with persistence

### Team Builder
- Multi-team management with rename, save-state persistence, import/export JSON
- Up to **50 stored slots** per team workspace
- Full stat editing: level, IVs, EVs, nature, moves, item, ability, Tera type
- Recommended build helper for common physical / special / tank / mixed roles
- **Showdown import and full Showdown export**
- **Shareable team links** through URL encoding
- **One-click Export Report** in Battle Calculate: copies Showdown paste + share link together
- Slot cards show **BST (Base Stat Total)** with color-coded tiers and competitive context (ability, Tera type, role, nature, item)

### AI Builder
- **Auto-Build 6** with phase-based scoring
- Real role detection using actual stat profiles
- Ability-aware scoring for high-impact competitive abilities
- Weather / terrain / Trick Room / Intimidate / Regenerator synergy rewards
- Item-aware scoring for common competitive items
- Move completeness penalties for incomplete or low-quality sets
- IV quality checks for offensive speed-based picks
- 4x weakness penalties and defensive synergy balancing

### Battle Analysis
- Archetype recognition for Rain, Sun, Sand, Snow, Trick Room, Tailwind
- Speed-control warnings when a team is too slow
- Meta Threat Check against the **PRO PvP** 3-tier threat model (Sweepers / Pivots / Walls)
- Battle context controls for weather, terrain, screens, and hazard chip during damage analysis
- **Speed Tier Comparison** versus current meta threats
- **Stat Comparison** panel: HP / ATK / DEF / SpA / SpD / SPE bars displayed at the top of the Battle Calculate panel, right next to Speed Tier — my team shown in **green** using actual EV/IV/level/nature, opponent shown in **red** at maximum potential (31 IV · 252 EV · Lv 100); switch between stats with pill buttons
- Assassin / Target Mode with editable opponent team
- Exact defender setup editor for imported threats (level, nature, IVs, EVs)
- Opponent Showdown paste support
- Best-counter suggestions using moves, typings, and context
- Lead recommendation and safer switch-in guidance versus imported threats
- Estimated damage ranges with **OHKO / 2HKO / 3HKO** labels
- Priority move awareness in matchup scoring
- Counter scoring upgraded for pivots, recovery loops, status pressure, and hazard pressure
- Matchup summaries that explain why a selected core still struggles against specific threats
- **Battle Calculate is always open** — no collapse/expand required
- **Full Gen 9 damage formula**: burn (−50% ATK), Choice Band/Specs/Life Orb modifiers, weather/terrain boosts, Doubles spread penalty (×0.75), full 16-step random roll range
- **Move flag chips** on every move: priority tier (+N/−N), two-turn warning, contact tag, high-crit indicator, multi-hit total damage, recoil %, drain %
- **Critical hit overlay**: "Crit: X%–Y%" shown alongside normal range; high-crit moves (Slash, Night Slash, Stone Edge…) marked with ⭐
- **Sturdy / Focus Sash flag**: OHKO label changes to "OHKO*" with a "*Sash/Sturdy" warning chip
- **Leftovers / Black Sludge recovery**: estimated hits-to-KO recalculated accounting for per-turn healing; "Heals through" shown if recovery outpaces damage
- **Extended ability immunity table**: Wonder Guard, Dry Skin, Sap Sipper, Earth Eater, Fluffy, Heatproof, Purifying Salt, Ice Scales, Well-Baked Body, Wind Rider
- **Contact proc warnings** in Battle Prep: Static (30% paralysis), Flame Body (30% burn), Rough Skin/Iron Barbs (100% recoil), Rocky Helmet — flagged when a contact move would trigger them
- **Tailwind ×2 and Paralysis ×0.5 toggles** in Battle Context — applied in speed comparison and "who goes first" tip

### Competitive Data Upgrades
- Dynamic defensive logic for abilities such as Levitate, Thick Fat, Flash Fire, Volt Absorb, Water Absorb and more
- Therian formes added with correct stats and competitive abilities
- Expanded held item pool for better build flexibility
- Optional local/external JSON data bundle refresh flow for threats, abilities, moves, and recommended items

### Team Workflow & Sharing
- Better comparison view for multiple saved teams with side-by-side summary metrics
- Offline-ready PWA shell with manifest + service worker caching for the core app

---

## Structure For Easier Future Updates

The project is already in a good split for future maintenance, so no extra redistribution was necessary right now.

- `index.html` → app shell and script loading order
- `dex.js` → Pokédex view, search, theme handling
- `utils.js` → type, damage, sprite, and shared helpers
- `team/` → Team Builder logic split by responsibility:
  - `team-core.js` → state and persistence
  - `team-io.js` → import/export, Showdown, share links
  - `team-ai.js` → Auto-Build scoring
  - `team-analytics.js` → archetypes, meta checks, damage estimates
  - `team-ui.js` / `team-oop.js` → UI rendering and opponent tools
- `data/` → stats, moves, abilities, sprites, type chart data

If the app grows further, the next clean split should be **inside analytics/AI by feature**, not a broad rewrite now.

---

## Roadmap

### Next High-Value Updates
- [x] Expand the meta selector with newer regulations and additional ranked formats
- [x] Add a **meta-data refresh workflow** so threat lists can be updated faster without manual deep edits
- [x] Improve the AI builder with **team-style presets** (balance, hyper offense, rain, sand, Trick Room)
- [x] Upgrade the build helper to suggest **EV spreads, natures, and items together** with stronger competitive logic
- [x] Add **Tera-aware offensive and defensive scoring** across team analysis and threat checks
- [x] Move Suggestions in Counter Intelligence — rank all equipped moves by calculated damage vs each opponent, with type effectiveness badges and "USE FIRST" label
- [x] Battle Prep tips per counter — speed comparison, guaranteed OHKO detection, and incoming damage warning using real IV/EV/nature/level data

### UX / Product Polish
- [x] Mobile-first responsive upgrade for the Team Builder and analysis panels
- [x] One-click export/share package for team + matchup report
- [x] Cleaner card/details view for each Pokémon with more competitive context
- [x] Better comparison views for multiple saved teams

### Data & Automation
- [x] Optional integration path for external meta sources when stable/public data is available
- [x] Easier data refresh process for threats, abilities, moves, and recommended items
- [x] Offline/PWA support once the competitive analysis flow is stable

---

## Future Updates — Making the Calculator More Realistic

The items below represent the most impactful upgrades to close the gap between pokeBuilder and a full competitive battle simulator. They are grouped by theme.

---

### 🎯 Damage Calculator — Accuracy & Depth

| Feature | Status | Notes |
|---|---|---|
| **Full Gen 9 damage formula with all modifiers** | ✅ Done | Burn halves physical ATK, held item boosts (Choice Band ×1.5, Life Orb ×1.3), weather/terrain boosts, and full random-roll range all applied. |
| **Burn / paralysis toggle** | ✅ Done | Battle Context toggles: "Attacker is Burned (−50% ATK)" and "My Pokémon Paralysed (−50% Spd)" — both applied to damage calc and speed tier. |
| **Multi-hit move damage** | ✅ Done | Moves like Bullet Seed / Population Bomb show per-hit %, plus a "Total: ~X%" estimate at average hit count (e.g. ×3.5 avg for 2–5 hits). |
| **Recoil and drain tracking** | ✅ Done | Recoil % and Drain % flags shown as colour-coded chips next to each move in the move suggestion panel. |
| **Critical hit overlay** | ✅ Done | Normal damage range shown alongside "Crit: X%–Y%" (×1.5). High-crit moves (Slash, Night Slash, Stone Edge, etc.) marked with ⭐. |
| **Speed tier precision: Choice Scarf, Tailwind, paralysis** | ✅ Done | Tailwind ×2 and Paralysis ×0.5 toggles added to Battle Context; applied in speed comparison and "who goes first" output. |

---

### ⚔️ Moves — Richer Competitive Modelling

| Feature | Status | Notes |
|---|---|---|
| **Move priority tiers in battle prep** | ✅ Done | Priority bracket shown as a coloured "+N Prio" chip on each move. Moves are sorted by damage, then flagged independently. |
| **Two-turn moves and charging mechanics** | ✅ Done | Two-turn moves (Fly, Dig, Solar Beam, Phantom Force…) show an orange "2-Turn" warning chip — opponent can act freely on charge turn. |
| **Spread moves in doubles (VGC)** | ✅ Done | When Doubles mode is on, spread moves (Earthquake, Rock Slide, Heat Wave, etc.) automatically apply ×0.75 to damage output. |
| **Z-Move and Dynamax/Gigantamax move conversion** | ⏳ Skipped | PRO does not use these mechanics — skipped intentionally for now. |
| **Contact vs non-contact distinction** | ✅ Done | Contact moves show a blue "Contact" chip. Battle Prep also warns when opponent's ability (Static, Flame Body, etc.) has a proc chance on contact. |

---

### 🛡️ Defensive Layer — Status, Items, Hazards

| Feature | Status | Notes |
|---|---|---|
| **Stealth Rock and Spike damage pre-calculation** | ✅ Done (prior) | SR/Spikes chip shown in Battle Context and factored into damage estimates as "after hazards" range. |
| **Leftovers / Black Sludge / Shell Bell recovery tracking** | ✅ Done | When defender holds Leftovers or Black Sludge, the estimated "hits to KO" accounts for per-turn recovery. "Heals through" shown if recovery outpaces damage. |
| **Ability activation probability** | ✅ Done | Battle Prep tip warns when a contact move triggers an opponent ability with a proc chance (Static 30%, Flame Body 30%, Rough Skin 100%, etc.). |
| **Sturdy / Focus Sash survival flag** | ✅ Done | OHKO labels change to "OHKO*" with a "*Sash/Sturdy" note when the defender has Sturdy, Multiscale, or a Focus Sash. |
| **Wonder Guard, Dry Skin, and full ability immunity table** | ✅ Done | Extended immunity logic: Wonder Guard (blocks non-SE), Dry Skin (Water immunity / Fire weakness), Sap Sipper, Earth Eater, Well-Baked Body, Wind Rider, Fluffy, Heatproof, Purifying Salt, Ice Scales. |

---

### 🌦️ Field Conditions & Environment

| Feature | Why it matters |
|---|---|
| **Weather state toggle in Battle Calculate** | Let the user set the current weather (Rain / Sun / Sand / Hail-Snow) once, and have all damage estimates automatically apply the ×2 / ×0.5 weather modifiers. Sand and Hail tick-damage against non-immune types is also part of this. |
| **Terrain toggle** | Electric / Grassy / Psychic / Misty Terrain all modify damage and conditions. Grassy Terrain heals 1/16 HP per turn (also halves Earthquake damage), Psychic Terrain blocks priority moves, etc. |
| **Rooms: Trick Room, Magic Room, Wonder Room** | Trick Room is already detected for the Archetype panel. Adding it as a damage-context toggle (e.g., slowest mon acts first — show reordered Speed bars) and Wonder Room (swap Def/SpDef) would complete the field-state picture. |

---

### 📊 Team-Level Intelligence

| Feature | Why it matters |
|---|---|
| **Win-condition detection** | Identify which Pokémon on the team is the primary win-condition (setup sweeper with Calm Mind/Swords Dance, a weather abuser, a Trick Room abuser) and surface that clearly so the player knows what they are trying to set up for. |
| **Defensive core analysis** | Automatically find the two or three Pokémon on the team whose types best complement each other defensively (e.g., Water + Grass + Fire or Dragon + Steel + Fairy) and highlight the remaining coverage gaps. |
| **Role redundancy warning** | If two Pokémon have the same role (both Choice Band physical sweepers with overlapping types), flag it and suggest a more diversified build. |
| **Lead pair optimiser (VGC / Doubles)** | For doubles, calculate the best lead pair from the team of 6 given the known opponent team, based on speed ties, spread damage, and synergy (e.g., Fake Out + setup sweeper). |
| **Turn-by-turn scenario simulator (MVP)** | A simple 3-turn preview: show who attacks first, estimated HP remaining for both sides after each turn (including Leftovers, Life Orb recoil, and status), and flag the likely outcome (KO / survive / trade). Not a full battle engine — just enough to validate the "send it" decision. |

---

### 🗄️ Data Quality & Freshness

| Feature | Why it matters |
|---|---|
| **Move base-power accuracy for variable-power moves** | Moves like Gyro Ball, Grass Knot, Hex, Facade, and Eruption have power that depends on Speed, weight, status, or current HP. Currently they use a fixed base power estimate. Accurate calculation requires knowing the exact stat context. |
| **Held item modifier table** | A data table for the ~20 most competitive items (type-boosting plates, Choice items, Life Orb, Expert Belt, etc.) that adjusts the damage multiplier automatically when an item is set on the attacking Pokémon's slot. |
| **Ability offensive modifier table** | Some abilities boost damage output: Huge Power / Pure Power double ATK, Sheer Force removes secondary effects but adds ×1.3 damage, Adaptability upgrades STAB from ×1.5 to ×2. These are high-impact and currently not factored into outgoing damage estimates. |
| **Full moveset database with PP and secondary effects** | Adding PP counts, secondary effects (30% flinch on Air Slash, 10% burn on Flamethrower), and contact/sound/powder/bite flags would unlock many of the features listed above without requiring external API calls. |

---

## Roadmap Focus

We are intentionally prioritising updates that add **real competitive value** to the builder and analysis flow.

That means the next work should mainly improve:
- smarter building
- better matchup guidance
- more accurate damage and scenario modelling
- faster meta updates
- easier sharing and iteration
