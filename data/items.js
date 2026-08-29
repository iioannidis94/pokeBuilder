// --- data/items.js ---

const ITEMS_DATA = {
  // ==========================================
  // HP MODIFIERS & HEALING
  // ==========================================
  "Leftovers": {
    shortDesc: "+6.25% HP per turn",
    mechanics: { effectType: "heal", stat: "hp", modifier: 0.0625, trigger: "end_turn" }
  },
  "Black Sludge": {
    shortDesc: "+6.25% HP (Poison) OR -12.5% HP (Other)",
    mechanics: { effectType: "heal_or_damage", stat: "hp", modifierPoison: 0.0625, modifierOther: -0.125, trigger: "end_turn" }
  },
  "Shell Bell": {
    shortDesc: "Heal 12.5% of damage dealt",
    mechanics: { effectType: "heal_from_damage", modifier: 0.125, trigger: "on_hit" }
  },
  "Sitrus Berry": {
    shortDesc: "+25% Max HP on <= 50% HP",
    mechanics: { effectType: "heal", stat: "hp", modifier: 0.25, trigger: "hp_below_50", consumable: true }
  },
  "Lum Berry": {
    shortDesc: "Heals any status condition",
    mechanics: { effectType: "cure_status", trigger: "on_status", consumable: true }
  },

  // ==========================================
  // BASE STAT MODIFIERS (Multipliers)
  // ==========================================
  "Choice Band": {
    shortDesc: "+50% Atk",
    mechanics: { effectType: "stat_multiplier", stat: "atk", multiplier: 1.5, lockMove: true }
  },
  "Choice Specs": {
    shortDesc: "+50% SpA",
    mechanics: { effectType: "stat_multiplier", stat: "spa", multiplier: 1.5, lockMove: true }
  },
  "Choice Scarf": {
    shortDesc: "+50% Spe",
    mechanics: { effectType: "stat_multiplier", stat: "spe", multiplier: 1.5, lockMove: true }
  },
  "Assault Vest": {
    shortDesc: "+50% SpD, disables status moves",
    mechanics: { effectType: "stat_multiplier", stat: "spd", multiplier: 1.5, disableStatusMoves: true }
  },
  "Eviolite": {
    shortDesc: "+50% Def & SpD (if NFE)",
    mechanics: { effectType: "stat_multiplier", stat: ["def", "spd"], multiplier: 1.5, condition: "nfe_only" }
  },
  "Light Ball": {
    shortDesc: "+100% Atk & SpA (Pikachu only)",
    mechanics: { effectType: "stat_multiplier", stat: ["atk", "spa"], multiplier: 2.0, condition: "species_pikachu" }
  },

  // ==========================================
  // DAMAGE MODIFIERS (Applied to final damage)
  // ==========================================
  "Life Orb": {
    shortDesc: "+30% Damage, -10% HP on attack",
    mechanics: { effectType: "damage_multiplier", multiplier: 1.3, recoilHp: 0.10, trigger: "on_hit" }
  },
  "Expert Belt": {
    shortDesc: "+20% Damage on Super Effective",
    mechanics: { effectType: "damage_multiplier", multiplier: 1.2, condition: "super_effective" }
  },
  "Muscle Band": {
    shortDesc: "+10% Physical Damage",
    mechanics: { effectType: "damage_multiplier", multiplier: 1.1, condition: "physical_move" }
  },
  "Wise Glasses": {
    shortDesc: "+10% Special Damage",
    mechanics: { effectType: "damage_multiplier", multiplier: 1.1, condition: "special_move" }
  },
  "Rocky Helmet": {
    shortDesc: "-16.6% attacker HP on contact",
    mechanics: { effectType: "reflect_damage", modifier: -0.1667, condition: "contact_move" }
  },
  "Punching Glove": {
    shortDesc: "+10% Punching move damage, no contact effects",
    mechanics: { effectType: "damage_multiplier", multiplier: 1.1, condition: "punching_move", removeContact: true }
  },

  // ==========================================
  // TYPE-ENHANCING ITEMS (+20% damage)
  // ==========================================
  "Silk Scarf": { shortDesc: "+20% Normal Damage", mechanics: { effectType: "type_multiplier", type: "Normal", multiplier: 1.2 } },
  "Charcoal": { shortDesc: "+20% Fire Damage", mechanics: { effectType: "type_multiplier", type: "Fire", multiplier: 1.2 } },
  "Mystic Water": { shortDesc: "+20% Water Damage", mechanics: { effectType: "type_multiplier", type: "Water", multiplier: 1.2 } },
  "Magnet": { shortDesc: "+20% Electric Damage", mechanics: { effectType: "type_multiplier", type: "Electric", multiplier: 1.2 } },
  "Miracle Seed": { shortDesc: "+20% Grass Damage", mechanics: { effectType: "type_multiplier", type: "Grass", multiplier: 1.2 } },
  "Never-Melt Ice": { shortDesc: "+20% Ice Damage", mechanics: { effectType: "type_multiplier", type: "Ice", multiplier: 1.2 } },
  "Black Belt": { shortDesc: "+20% Fighting Damage", mechanics: { effectType: "type_multiplier", type: "Fighting", multiplier: 1.2 } },
  "Poison Barb": { shortDesc: "+20% Poison Damage", mechanics: { effectType: "type_multiplier", type: "Poison", multiplier: 1.2 } },
  "Soft Sand": { shortDesc: "+20% Ground Damage", mechanics: { effectType: "type_multiplier", type: "Ground", multiplier: 1.2 } },
  "Sharp Beak": { shortDesc: "+20% Flying Damage", mechanics: { effectType: "type_multiplier", type: "Flying", multiplier: 1.2 } },
  "Twisted Spoon": { shortDesc: "+20% Psychic Damage", mechanics: { effectType: "type_multiplier", type: "Psychic", multiplier: 1.2 } },
  "Silver Powder": { shortDesc: "+20% Bug Damage", mechanics: { effectType: "type_multiplier", type: "Bug", multiplier: 1.2 } },
  "Hard Stone": { shortDesc: "+20% Rock Damage", mechanics: { effectType: "type_multiplier", type: "Rock", multiplier: 1.2 } },
  "Spell Tag": { shortDesc: "+20% Ghost Damage", mechanics: { effectType: "type_multiplier", type: "Ghost", multiplier: 1.2 } },
  "Dragon Fang": { shortDesc: "+20% Dragon Damage", mechanics: { effectType: "type_multiplier", type: "Dragon", multiplier: 1.2 } },
  "Black Glasses": { shortDesc: "+20% Dark Damage", mechanics: { effectType: "type_multiplier", type: "Dark", multiplier: 1.2 } },
  "Metal Coat": { shortDesc: "+20% Steel Damage", mechanics: { effectType: "type_multiplier", type: "Steel", multiplier: 1.2 } },

  // ==========================================
  // UTILITY / BATTLE MECHANICS
  // ==========================================
  "Focus Sash": {
    shortDesc: "Survive OHKO with 1 HP",
    mechanics: { effectType: "endure", hpThreshold: 1.0, surviveWithHp: 1, consumable: true }
  },
  "Air Balloon": {
    shortDesc: "Immune to Ground, breaks on hit",
    mechanics: { effectType: "immunity", type: "Ground", breakOnHit: true }
  },
  "Light Clay": {
    shortDesc: "Screens last 8 turns instead of 5",
    mechanics: { effectType: "turn_extension", targetMoves: ["Reflect", "Light Screen", "Aurora Veil"], newTurns: 8 }
  },
  "Terrain Extender": {
    shortDesc: "Terrains last 8 turns instead of 5",
    mechanics: { effectType: "turn_extension", targetMechanic: "terrain", newTurns: 8 }
  },
  "Heavy-Duty Boots": {
    shortDesc: "Immune to entry hazards",
    mechanics: { effectType: "hazard_immunity" }
  },
  "Covert Cloak": {
    shortDesc: "Immune to secondary effects of attacks",
    mechanics: { effectType: "secondary_effect_immunity" }
  },
  "Clear Amulet": {
    shortDesc: "Prevents stat drops from opponent",
    mechanics: { effectType: "stat_drop_immunity" }
  },
  "White Herb": {
    shortDesc: "Restores lowered stats",
    mechanics: { effectType: "stat_restore", consumable: true }
  },
  "Weakness Policy": {
    shortDesc: "+2 Atk & SpA when hit by Super Effective",
    mechanics: { effectType: "stat_boost_on_hit", stat: ["atk", "spa"], stages: 2, condition: "super_effective", consumable: true }
  },
  "Flame Orb": {
    shortDesc: "Burns the holder at end of turn",
    mechanics: { effectType: "self_status", status: "burn", trigger: "end_turn" }
  },
  "Toxic Orb": {
    shortDesc: "Badly poisons holder at end of turn",
    mechanics: { effectType: "self_status", status: "toxic", trigger: "end_turn" }
  },

  // ==========================================
  // MEGA STONES & PRIMAL ORBS (Kanto - Kalos)
  // ==========================================
  
  // --- Kanto ---
  "Venusaurite": { shortDesc: "Mega Evolves Venusaur", mechanics: { effectType: "mega_evolution", target: "Venusaur", suffix: "-Mega" } },
  "Charizardite X": { shortDesc: "Mega Evolves Charizard to X", mechanics: { effectType: "mega_evolution", target: "Charizard", suffix: "-Mega-X" } },
  "Charizardite Y": { shortDesc: "Mega Evolves Charizard to Y", mechanics: { effectType: "mega_evolution", target: "Charizard", suffix: "-Mega-Y" } },
  "Blastoisinite": { shortDesc: "Mega Evolves Blastoise", mechanics: { effectType: "mega_evolution", target: "Blastoise", suffix: "-Mega" } },
  "Beedrillite": { shortDesc: "Mega Evolves Beedrill", mechanics: { effectType: "mega_evolution", target: "Beedrill", suffix: "-Mega" } },
  "Pidgeotite": { shortDesc: "Mega Evolves Pidgeot", mechanics: { effectType: "mega_evolution", target: "Pidgeot", suffix: "-Mega" } },
  "Alakazite": { shortDesc: "Mega Evolves Alakazam", mechanics: { effectType: "mega_evolution", target: "Alakazam", suffix: "-Mega" } },
  "Slowbronite": { shortDesc: "Mega Evolves Slowbro", mechanics: { effectType: "mega_evolution", target: "Slowbro", suffix: "-Mega" } },
  "Gengarite": { shortDesc: "Mega Evolves Gengar", mechanics: { effectType: "mega_evolution", target: "Gengar", suffix: "-Mega" } },
  "Kangaskhanite": { shortDesc: "Mega Evolves Kangaskhan", mechanics: { effectType: "mega_evolution", target: "Kangaskhan", suffix: "-Mega" } },
  "Pinsirite": { shortDesc: "Mega Evolves Pinsir", mechanics: { effectType: "mega_evolution", target: "Pinsir", suffix: "-Mega" } },
  "Gyaradosite": { shortDesc: "Mega Evolves Gyarados", mechanics: { effectType: "mega_evolution", target: "Gyarados", suffix: "-Mega" } },
  "Aerodactylite": { shortDesc: "Mega Evolves Aerodactyl", mechanics: { effectType: "mega_evolution", target: "Aerodactyl", suffix: "-Mega" } },
  "Mewtwonite X": { shortDesc: "Mega Evolves Mewtwo to X", mechanics: { effectType: "mega_evolution", target: "Mewtwo", suffix: "-Mega-X" } },
  "Mewtwonite Y": { shortDesc: "Mega Evolves Mewtwo to Y", mechanics: { effectType: "mega_evolution", target: "Mewtwo", suffix: "-Mega-Y" } },
  
  // --- Johto ---
  "Ampharosite": { shortDesc: "Mega Evolves Ampharos", mechanics: { effectType: "mega_evolution", target: "Ampharos", suffix: "-Mega" } },
  "Steelixite": { shortDesc: "Mega Evolves Steelix", mechanics: { effectType: "mega_evolution", target: "Steelix", suffix: "-Mega" } },
  "Scizorite": { shortDesc: "Mega Evolves Scizor", mechanics: { effectType: "mega_evolution", target: "Scizor", suffix: "-Mega" } },
  "Heracronite": { shortDesc: "Mega Evolves Heracross", mechanics: { effectType: "mega_evolution", target: "Heracross", suffix: "-Mega" } },
  "Houndoominite": { shortDesc: "Mega Evolves Houndoom", mechanics: { effectType: "mega_evolution", target: "Houndoom", suffix: "-Mega" } },
  "Tyranitarite": { shortDesc: "Mega Evolves Tyranitar", mechanics: { effectType: "mega_evolution", target: "Tyranitar", suffix: "-Mega" } },
  
  // --- Hoenn ---
  "Sceptilite": { shortDesc: "Mega Evolves Sceptile", mechanics: { effectType: "mega_evolution", target: "Sceptile", suffix: "-Mega" } },
  "Blazikenite": { shortDesc: "Mega Evolves Blaziken", mechanics: { effectType: "mega_evolution", target: "Blaziken", suffix: "-Mega" } },
  "Swampertite": { shortDesc: "Mega Evolves Swampert", mechanics: { effectType: "mega_evolution", target: "Swampert", suffix: "-Mega" } },
  "Gardevoirite": { shortDesc: "Mega Evolves Gardevoir", mechanics: { effectType: "mega_evolution", target: "Gardevoir", suffix: "-Mega" } },
  "Sablenite": { shortDesc: "Mega Evolves Sableye", mechanics: { effectType: "mega_evolution", target: "Sableye", suffix: "-Mega" } },
  "Mawilite": { shortDesc: "Mega Evolves Mawile", mechanics: { effectType: "mega_evolution", target: "Mawile", suffix: "-Mega" } },
  "Aggronite": { shortDesc: "Mega Evolves Aggron", mechanics: { effectType: "mega_evolution", target: "Aggron", suffix: "-Mega" } },
  "Medichamite": { shortDesc: "Mega Evolves Medicham", mechanics: { effectType: "mega_evolution", target: "Medicham", suffix: "-Mega" } },
  "Manectite": { shortDesc: "Mega Evolves Manectric", mechanics: { effectType: "mega_evolution", target: "Manectric", suffix: "-Mega" } },
  "Sharpedonite": { shortDesc: "Mega Evolves Sharpedo", mechanics: { effectType: "mega_evolution", target: "Sharpedo", suffix: "-Mega" } },
  "Cameruptite": { shortDesc: "Mega Evolves Camerupt", mechanics: { effectType: "mega_evolution", target: "Camerupt", suffix: "-Mega" } },
  "Altarianite": { shortDesc: "Mega Evolves Altaria", mechanics: { effectType: "mega_evolution", target: "Altaria", suffix: "-Mega" } },
  "Banettite": { shortDesc: "Mega Evolves Banette", mechanics: { effectType: "mega_evolution", target: "Banette", suffix: "-Mega" } },
  "Absolite": { shortDesc: "Mega Evolves Absol", mechanics: { effectType: "mega_evolution", target: "Absol", suffix: "-Mega" } },
  "Glalitite": { shortDesc: "Mega Evolves Glalie", mechanics: { effectType: "mega_evolution", target: "Glalie", suffix: "-Mega" } },
  "Salamencite": { shortDesc: "Mega Evolves Salamence", mechanics: { effectType: "mega_evolution", target: "Salamence", suffix: "-Mega" } },
  "Metagrossite": { shortDesc: "Mega Evolves Metagross", mechanics: { effectType: "mega_evolution", target: "Metagross", suffix: "-Mega" } },
  "Latiasite": { shortDesc: "Mega Evolves Latias", mechanics: { effectType: "mega_evolution", target: "Latias", suffix: "-Mega" } },
  "Latiosite": { shortDesc: "Mega Evolves Latios", mechanics: { effectType: "mega_evolution", target: "Latios", suffix: "-Mega" } },
  
  // --- Sinnoh ---
  "Lopunnite": { shortDesc: "Mega Evolves Lopunny", mechanics: { effectType: "mega_evolution", target: "Lopunny", suffix: "-Mega" } },
  "Garchompite": { shortDesc: "Mega Evolves Garchomp", mechanics: { effectType: "mega_evolution", target: "Garchomp", suffix: "-Mega" } },
  "Lucarionite": { shortDesc: "Mega Evolves Lucario", mechanics: { effectType: "mega_evolution", target: "Lucario", suffix: "-Mega" } },
  "Abomasite": { shortDesc: "Mega Evolves Abomasnow", mechanics: { effectType: "mega_evolution", target: "Abomasnow", suffix: "-Mega" } },
  "Galladite": { shortDesc: "Mega Evolves Gallade", mechanics: { effectType: "mega_evolution", target: "Gallade", suffix: "-Mega" } },
  
  // --- Unova & Kalos ---
  "Audinite": { shortDesc: "Mega Evolves Audino", mechanics: { effectType: "mega_evolution", target: "Audino", suffix: "-Mega" } },
  "Diancite": { shortDesc: "Mega Evolves Diancie", mechanics: { effectType: "mega_evolution", target: "Diancie", suffix: "-Mega" } },

  // --- Primal Reversions ---
  "Blue Orb": { shortDesc: "Primal Reverts Kyogre", mechanics: { effectType: "primal_reversion", target: "Kyogre", suffix: "-Primal" } },
  "Red Orb": { shortDesc: "Primal Reverts Groudon", mechanics: { effectType: "primal_reversion", target: "Groudon", suffix: "-Primal" } }
  
};

// Gia symvatotita me ta imports sou:
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ITEMS_DATA };
}
