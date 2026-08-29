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
  }
};

// Gia symvatotita me ta imports sou:
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ITEMS_DATA };
}
