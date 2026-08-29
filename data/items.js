
const calculatorItems = [
  // ==========================================
  // HP MODIFIERS & HEALING
  // ==========================================
  { 
    name: "Leftovers", 
    shortDesc: "+6.25% HP per turn",
    mechanics: { effectType: "heal", stat: "hp", modifier: 0.0625, trigger: "end_turn" }
  },
  { 
    name: "Black Sludge", 
    shortDesc: "+6.25% HP (Poison) OR -12.5% HP (Other)",
    mechanics: { effectType: "heal_or_damage", stat: "hp", modifierPoison: 0.0625, modifierOther: -0.125, trigger: "end_turn" }
  },
  { 
    name: "Shell Bell", 
    shortDesc: "Heal 12.5% of damage dealt",
    mechanics: { effectType: "heal_from_damage", modifier: 0.125, trigger: "on_hit" }
  },
  { 
    name: "Sitrus Berry", 
    shortDesc: "+25% Max HP on <= 50% HP",
    mechanics: { effectType: "heal", stat: "hp", modifier: 0.25, trigger: "hp_below_50", consumable: true }
  },
  { 
    name: "Figy Berry", // Mazi me Wiki, Mago, Aguav, Iapapa (Pinch Berries)
    shortDesc: "+33% Max HP on <= 25% HP (Confuses if nature dislikes flavor)",
    mechanics: { effectType: "heal", stat: "hp", modifier: 0.33, trigger: "hp_below_25", consumable: true }
  },

  // ==========================================
  // BASE STAT MODIFIERS (Multipliers)
  // ==========================================
  { 
    name: "Choice Band", 
    shortDesc: "+50% Atk",
    mechanics: { effectType: "stat_multiplier", stat: "atk", multiplier: 1.5, lockMove: true }
  },
  { 
    name: "Choice Specs", 
    shortDesc: "+50% SpA",
    mechanics: { effectType: "stat_multiplier", stat: "spa", multiplier: 1.5, lockMove: true }
  },
  { 
    name: "Choice Scarf", 
    shortDesc: "+50% Spe",
    mechanics: { effectType: "stat_multiplier", stat: "spe", multiplier: 1.5, lockMove: true }
  },
  { 
    name: "Assault Vest", 
    shortDesc: "+50% SpD",
    mechanics: { effectType: "stat_multiplier", stat: "spd", multiplier: 1.5, disableStatusMoves: true }
  },
  { 
    name: "Eviolite", 
    shortDesc: "+50% Def / SpD (if NFE)",
    mechanics: { effectType: "stat_multiplier", stat: ["def", "spd"], multiplier: 1.5, condition: "nfe_only" }
  },
  { 
    name: "Light Ball", 
    shortDesc: "+100% Atk / SpA (Pikachu only)",
    mechanics: { effectType: "stat_multiplier", stat: ["atk", "spa"], multiplier: 2.0, condition: "species_pikachu" }
  },
  { 
    name: "Thick Club", 
    shortDesc: "+100% Atk (Cubone/Marowak only)",
    mechanics: { effectType: "stat_multiplier", stat: "atk", multiplier: 2.0, condition: "species_cubone_marowak" }
  },

  // ==========================================
  // DAMAGE MODIFIERS (Applied to final damage)
  // ==========================================
  { 
    name: "Life Orb", 
    shortDesc: "+30% Damage, -10% HP on attack",
    mechanics: { effectType: "damage_multiplier", multiplier: 1.3, recoilHp: 0.10, trigger: "on_hit" }
  },
  { 
    name: "Expert Belt", 
    shortDesc: "+20% Damage on Super Effective",
    mechanics: { effectType: "damage_multiplier", multiplier: 1.2, condition: "super_effective" }
  },
  { 
    name: "Muscle Band", 
    shortDesc: "+10% Physical Damage",
    mechanics: { effectType: "damage_multiplier", multiplier: 1.1, condition: "physical_move" }
  },
  { 
    name: "Wise Glasses", 
    shortDesc: "+10% Special Damage",
    mechanics: { effectType: "damage_multiplier", multiplier: 1.1, condition: "special_move" }
  },
  { 
    name: "Rocky Helmet", 
    shortDesc: "-16.6% attacker HP on contact",
    mechanics: { effectType: "reflect_damage", modifier: -0.1667, condition: "contact_move" }
  },

  // ==========================================
  // TYPE-ENHANCING ITEMS (+20% damage for specific types)
  // ==========================================
  { name: "Silk Scarf", shortDesc: "+20% Normal Damage", mechanics: { effectType: "type_multiplier", type: "Normal", multiplier: 1.2 } },
  { name: "Charcoal", shortDesc: "+20% Fire Damage", mechanics: { effectType: "type_multiplier", type: "Fire", multiplier: 1.2 } },
  { name: "Mystic Water", shortDesc: "+20% Water Damage", mechanics: { effectType: "type_multiplier", type: "Water", multiplier: 1.2 } },
  { name: "Magnet", shortDesc: "+20% Electric Damage", mechanics: { effectType: "type_multiplier", type: "Electric", multiplier: 1.2 } },
  { name: "Miracle Seed", shortDesc: "+20% Grass Damage", mechanics: { effectType: "type_multiplier", type: "Grass", multiplier: 1.2 } },
  { name: "Never-Melt Ice", shortDesc: "+20% Ice Damage", mechanics: { effectType: "type_multiplier", type: "Ice", multiplier: 1.2 } },
  { name: "Black Belt", shortDesc: "+20% Fighting Damage", mechanics: { effectType: "type_multiplier", type: "Fighting", multiplier: 1.2 } },
  { name: "Poison Barb", shortDesc: "+20% Poison Damage", mechanics: { effectType: "type_multiplier", type: "Poison", multiplier: 1.2 } },
  { name: "Soft Sand", shortDesc: "+20% Ground Damage", mechanics: { effectType: "type_multiplier", type: "Ground", multiplier: 1.2 } },
  { name: "Sharp Beak", shortDesc: "+20% Flying Damage", mechanics: { effectType: "type_multiplier", type: "Flying", multiplier: 1.2 } },
  { name: "Twisted Spoon", shortDesc: "+20% Psychic Damage", mechanics: { effectType: "type_multiplier", type: "Psychic", multiplier: 1.2 } },
  { name: "Silver Powder", shortDesc: "+20% Bug Damage", mechanics: { effectType: "type_multiplier", type: "Bug", multiplier: 1.2 } },
  { name: "Hard Stone", shortDesc: "+20% Rock Damage", mechanics: { effectType: "type_multiplier", type: "Rock", multiplier: 1.2 } },
  { name: "Spell Tag", shortDesc: "+20% Ghost Damage", mechanics: { effectType: "type_multiplier", type: "Ghost", multiplier: 1.2 } },
  { name: "Dragon Fang", shortDesc: "+20% Dragon Damage", mechanics: { effectType: "type_multiplier", type: "Dragon", multiplier: 1.2 } },
  { name: "Black Glasses", shortDesc: "+20% Dark Damage", mechanics: { effectType: "type_multiplier", type: "Dark", multiplier: 1.2 } },
  { name: "Metal Coat", shortDesc: "+20% Steel Damage", mechanics: { effectType: "type_multiplier", type: "Steel", multiplier: 1.2 } },
  { name: "Fairy Feather", shortDesc: "+20% Fairy Damage", mechanics: { effectType: "type_multiplier", type: "Fairy", multiplier: 1.2 } },
  
  // (Gia to calculator sou, ta "Plates" px Flame Plate, Splash Plate k.l.p, exoun akrivws to idio mechanic me ta parapanw, 
  // opote mporeis na ta prostheseis xrisimopoiwntas auto to format an ta xreiazesai ola onomastika)

  // ==========================================
  // TYPE-RESISTING BERRIES (-50% damage from SE hit)
  // ==========================================
  { name: "Occa Berry", shortDesc: "-50% damage from Super Effective Fire", mechanics: { effectType: "damage_reduction", type: "Fire", modifier: 0.5, condition: "super_effective", consumable: true } },
  { name: "Passho Berry", shortDesc: "-50% damage from Super Effective Water", mechanics: { effectType: "damage_reduction", type: "Water", modifier: 0.5, condition: "super_effective", consumable: true } },
  { name: "Wacan Berry", shortDesc: "-50% damage from Super Effective Electric", mechanics: { effectType: "damage_reduction", type: "Electric", modifier: 0.5, condition: "super_effective", consumable: true } },
  { name: "Rindo Berry", shortDesc: "-50% damage from Super Effective Grass", mechanics: { effectType: "damage_reduction", type: "Grass", modifier: 0.5, condition: "super_effective", consumable: true } },
  { name: "Yache Berry", shortDesc: "-50% damage from Super Effective Ice", mechanics: { effectType: "damage_reduction", type: "Ice", modifier: 0.5, condition: "super_effective", consumable: true } },
  { name: "Chople Berry", shortDesc: "-50% damage from Super Effective Fighting", mechanics: { effectType: "damage_reduction", type: "Fighting", modifier: 0.5, condition: "super_effective", consumable: true } },
  { name: "Kebia Berry", shortDesc: "-50% damage from Super Effective Poison", mechanics: { effectType: "damage_reduction", type: "Poison", modifier: 0.5, condition: "super_effective", consumable: true } },
  { name: "Shuca Berry", shortDesc: "-50% damage from Super Effective Ground", mechanics: { effectType: "damage_reduction", type: "Ground", modifier: 0.5, condition: "super_effective", consumable: true } },
  { name: "Coba Berry", shortDesc: "-50% damage from Super Effective Flying", mechanics: { effectType: "damage_reduction", type: "Flying", modifier: 0.5, condition: "super_effective", consumable: true } },
  { name: "Payapa Berry", shortDesc: "-50% damage from Super Effective Psychic", mechanics: { effectType: "damage_reduction", type: "Psychic", modifier: 0.5, condition: "super_effective", consumable: true } },
  { name: "Tanga Berry", shortDesc: "-50% damage from Super Effective Bug", mechanics: { effectType: "damage_reduction", type: "Bug", modifier: 0.5, condition: "super_effective", consumable: true } },
  { name: "Charti Berry", shortDesc: "-50% damage from Super Effective Rock", mechanics: { effectType: "damage_reduction", type: "Rock", modifier: 0.5, condition: "super_effective", consumable: true } },
  { name: "Kasib Berry", shortDesc: "-50% damage from Super Effective Ghost", mechanics: { effectType: "damage_reduction", type: "Ghost", modifier: 0.5, condition: "super_effective", consumable: true } },
  { name: "Haban Berry", shortDesc: "-50% damage from Super Effective Dragon", mechanics: { effectType: "damage_reduction", type: "Dragon", modifier: 0.5, condition: "super_effective", consumable: true } },
  { name: "Colbur Berry", shortDesc: "-50% damage from Super Effective Dark", mechanics: { effectType: "damage_reduction", type: "Dark", modifier: 0.5, condition: "super_effective", consumable: true } },
  { name: "Babiri Berry", shortDesc: "-50% damage from Super Effective Steel", mechanics: { effectType: "damage_reduction", type: "Steel", modifier: 0.5, condition: "super_effective", consumable: true } },
  { name: "Roseli Berry", shortDesc: "-50% damage from Super Effective Fairy", mechanics: { effectType: "damage_reduction", type: "Fairy", modifier: 0.5, condition: "super_effective", consumable: true } },

  // ==========================================
  // UTILITY & WEATHER
  // ==========================================
  { 
    name: "Focus Sash", 
    shortDesc: "Survive OHKO with 1 HP",
    mechanics: { effectType: "endure", hpThreshold: 1.0, surviveWithHp: 1, consumable: true }
  },
  { 
    name: "Air Balloon", 
    shortDesc: "Immune to Ground, breaks on hit",
    mechanics: { effectType: "immunity", type: "Ground", breakOnHit: true }
  },
  { 
    name: "Light Clay", 
    shortDesc: "Screens last 8 turns instead of 5",
    mechanics: { effectType: "turn_extension", targetMoves: ["Reflect", "Light Screen", "Aurora Veil"], newTurns: 8 }
  },
  { 
    name: "Terrain Extender", 
    shortDesc: "Terrains last 8 turns instead of 5",
    mechanics: { effectType: "turn_extension", targetMechanic: "terrain", newTurns: 8 }
  }
];
