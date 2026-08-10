# pokeBuilder

A competitive Pokémon builder focused on **fast team creation, matchup clarity, and practical AI-assisted decisions**.

The app already combines a searchable Pokédex, weakness/counter inspection, multi-team storage, and a much more competitive-aware Team Builder for **VGC 2024 Regulation G** and **PRO PvP** workflows.

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
- Meta Threat Check with persistent format switch:
  - **VGC 2024 Regulation G**
  - **PRO PvP** (3-tier threat model)
- **Speed Tier Comparison** versus current meta threats
- Assassin / Target Mode with editable opponent team
- Opponent Showdown paste support
- Best-counter suggestions using moves, typings, and context
- Estimated damage ranges with **OHKO / 2HKO / 3HKO** labels
- Priority move awareness in matchup scoring

### Competitive Data Upgrades
- Dynamic defensive logic for abilities such as Levitate, Thick Fat, Flash Fire, Volt Absorb, Water Absorb and more
- Therian formes added with correct stats and competitive abilities
- Expanded held item pool for better build flexibility

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
- [ ] Expand the meta selector with newer regulations and additional ranked formats
- [ ] Add a **meta-data refresh workflow** so threat lists can be updated faster without manual deep edits
- [ ] Improve the AI builder with **team-style presets** (balance, hyper offense, rain, sand, Trick Room)
- [ ] Upgrade the build helper to suggest **EV spreads, natures, and items together** with stronger competitive logic
- [ ] Add **Tera-aware offensive and defensive scoring** across team analysis and threat checks

### Battle / Counter Intelligence
- [ ] Extend the damage calculator with better context for abilities, items, weather, terrain, and exact defender setup
- [ ] Add clearer lead recommendations and safer switch-in suggestions versus selected threats
- [ ] Improve counter scoring for pivots, recovery loops, status pressure, and hazard pressure
- [ ] Add matchup summaries that explain **why** a team struggles against specific meta threats

### UX / Product Polish
- [ ] Mobile-first responsive upgrade for the Team Builder and analysis panels
- [ ] Better comparison views for multiple saved teams
- [ ] One-click export/share package for team + matchup report
- [ ] Cleaner card/details view for each Pokémon with more competitive context

### Data & Automation
- [ ] Optional integration path for external meta sources when stable/public data is available
- [ ] Easier data refresh process for threats, abilities, moves, and recommended items
- [ ] Offline/PWA support once the competitive analysis flow is stable

---

## Roadmap Focus

We are intentionally prioritising updates that add **real competitive value** to the builder and analysis flow.

That means the next work should mainly improve:
- smarter building
- better matchup guidance
- faster meta updates
- easier sharing and iteration
