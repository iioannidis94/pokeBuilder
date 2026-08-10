// --- data/bosses.js : Boss Trainer Data ---
// Δομή: κάθε boss έχει id, name, title, region, location, και difficulties (easy / medium / hard).
// Κάθε difficulty περιέχει μια λίστα από Pokémon με name, nature, ability, item, και moves (ένα ή περισσότερα).
//
// {
//   id: 'trainer-id',
//   name: 'Trainer Name',
//   title: 'Trainer Title / Class',
//   region: 'Kanto' | 'Johto' | 'Hoenn' | 'Sinnoh',
//   location: 'Location Name',
//   difficulties: {
//     easy:   { pokemon: [ { name, nature, ability, item, moves: [] } ] },
//     medium: { pokemon: [ { name, nature, ability, item, moves: [] } ] },
//     hard:   { pokemon: [ { name, nature, ability, item, moves: [] } ] },
//   }
// }
//
// Κανόνες δυσκολίας:
//   Easy  : Κανένα EV, κανένα item, εξασθενημένα moves.
//   Medium: 252 EVs σε κάθε stat, items.
//   Hard  : 400 EVs σε κάθε stat, items. Ο παίκτης δεν μπορεί να χρησιμοποιήσει items μάχης (Revives κ.λπ.).

const BOSSES = [

    // ══════════════════════════════════════════════════════════════════════════
    // KANTO
    // ══════════════════════════════════════════════════════════════════════════

    {
        id: 'brock',
        name: 'Brock',
        title: '',
        region: 'Kanto',
        location: "Diglett's Cave",
        difficulties: {
            easy: {
                pokemon: [
                    { name: 'aerodactyl',  nature: 'Naive',   ability: 'Rock Head',    item: '',             moves: ['Rock Slide', 'Taunt', 'Stealth Rock', 'Explosion'] },
                    { name: 'golem',       nature: 'Jolly',   ability: 'Sturdy',       item: '',             moves: ['Rock Slide', 'Bulldoze', 'Heavy Slam', 'Sucker Punch'] },
                    { name: 'steelix',     nature: 'Adamant', ability: 'Sturdy',       item: '',             moves: ['Iron Head', 'Dig', 'Sandstorm', 'Double-Edge'] },
                    { name: 'cradily',     nature: 'Sassy',   ability: 'Storm Drain',  item: '',             moves: ['Toxic', 'Solar Beam', 'Smack Down', 'Sludge Wave'] },
                    { name: 'toxicroak',   nature: 'Timid',   ability: 'Poison Touch', item: '',             moves: ['Vacuum Wave', 'Sludge Bomb', 'Dark Pulse', 'Round'] },
                    { name: 'terrakion',   nature: 'Jolly',   ability: 'Justified',    item: '',             moves: ['Sacred Sword', 'Rock Slide', 'X-Scissor', 'Poison Jab'] },
                ]
            },
            medium: {
                pokemon: [
                    { name: 'aerodactyl',  nature: 'Naive',   ability: 'Tough Claws',  item: 'Aerodactylite',moves: ['Stone Edge', 'Taunt', 'Fire Blast', 'Aqua Tail', 'Ice Fang', 'Pursuit', 'Earthquake'] },
                    { name: 'golem',       nature: 'Jolly',   ability: 'Sturdy',       item: 'Weakness Policy', moves: ['Stone Edge', 'Rock Polish', 'Earthquake', 'Fire Punch'] },
                    { name: 'steelix',     nature: 'Adamant', ability: 'Sturdy',       item: 'Leftovers',    moves: ['Earthquake', 'Heavy Slam', 'Stone Edge', 'Ice Fang'] },
                    { name: 'cradily',     nature: 'Sassy',   ability: 'Storm Drain',  item: 'Leftovers',    moves: ['Seed Bomb', 'Rock Slide', 'Toxic', 'Curse'] },
                    { name: 'toxicroak',   nature: 'Timid',   ability: 'Poison Touch', item: 'Choice Specs', moves: ['Focus Blast', 'Sludge Bomb', 'Icy Wind', 'Dark Pulse'] },
                    { name: 'terrakion',   nature: 'Jolly',   ability: 'Justified',    item: 'Expert Belt',  moves: ['Close Combat', 'Stone Edge', 'Swords Dance', 'Earthquake'] },
                ]
            },
            hard: {
                pokemon: [
                    { name: 'aerodactyl',  nature: 'Naive',   ability: 'Tough Claws',  item: 'Aerodactylite',moves: ['Stone Edge', 'Taunt', 'Fire Blast', 'Aqua Tail', 'Ice Fang', 'Pursuit', 'Earthquake'] },
                    { name: 'golem',       nature: 'Jolly',   ability: 'Sturdy',       item: 'Weakness Policy', moves: ['Stone Edge', 'Rock Polish', 'Earthquake', 'Fire Punch'] },
                    { name: 'steelix',     nature: 'Adamant', ability: 'Sturdy',       item: 'Leftovers',    moves: ['Earthquake', 'Heavy Slam', 'Stone Edge', 'Ice Fang'] },
                    { name: 'cradily',     nature: 'Sassy',   ability: 'Storm Drain',  item: 'Leftovers',    moves: ['Seed Bomb', 'Rock Slide', 'Toxic', 'Curse'] },
                    { name: 'toxicroak',   nature: 'Timid',   ability: 'Poison Touch', item: 'Choice Specs', moves: ['Focus Blast', 'Sludge Bomb', 'Icy Wind', 'Dark Pulse'] },
                    { name: 'terrakion',   nature: 'Jolly',   ability: 'Justified',    item: 'Expert Belt',  moves: ['Close Combat', 'Stone Edge', 'Swords Dance', 'Earthquake'] },
                ]
            }
        }
    },

    {
        id: 'chuck',
        name: 'Chuck',
        title: '',
        region: 'Kanto',
        location: "Saffron City (Gold's Gym)",
        difficulties: {
            easy: {
                pokemon: [
                    { name: 'machamp',     nature: 'Adamant', ability: 'No Guard',     item: '',             moves: ['Cross Chop', 'Submission', 'Revenge', 'Brick Break'] },
                    { name: 'infernape',   nature: 'Timid',   ability: 'Blaze',        item: '',             moves: ['Overheat', 'Heat Wave', 'Vacuum Wave', 'Focus Blast'] },
                    { name: 'mienshao',    nature: 'Jolly',   ability: 'Regenerator',  item: '',             moves: ['Jump Kick', 'Bounce', 'Brick Break', 'Aerial Ace'] },
                    { name: 'conkeldurr',  nature: 'Adamant', ability: 'Iron Fist',    item: '',             moves: ['Wake-Up Slap', 'Rock Slide', 'Brick Break', 'Bulldoze'] },
                    { name: 'poliwrath',   nature: 'Modest',  ability: 'Water Absorb', item: '',             moves: ['Surf', 'Icy Wind', 'Hyper Beam', 'Psychic'] },
                    { name: 'breloom',     nature: 'Jolly',   ability: 'Poison Heal',  item: '',             moves: ['Force Palm', 'Leech Seed', 'Sky Uppercut', 'Bullet Seed'] },
                ]
            },
            medium: {
                pokemon: [
                    { name: 'machamp',     nature: 'Adamant', ability: 'No Guard',     item: 'Assault Vest', moves: ['Dynamic Punch', 'Stone Edge', 'Heavy Slam', 'Fire Punch'] },
                    { name: 'infernape',   nature: 'Timid',   ability: 'Blaze',        item: 'Life Orb',     moves: ['Fire Blast', 'Focus Blast', 'Vacuum Wave', 'Grass Knot'] },
                    { name: 'mienshao',    nature: 'Jolly',   ability: 'Regenerator',  item: 'Focus Sash',   moves: ['Poison Jab', 'Rock Slide', 'Knock Off', 'High Jump Kick'] },
                    { name: 'conkeldurr',  nature: 'Adamant', ability: 'Iron Fist',    item: 'Leftovers',    moves: ['Drain Punch', 'Ice Punch', 'Thunder Punch', 'Fire Punch'] },
                    { name: 'poliwrath',   nature: 'Modest',  ability: 'Water Absorb', item: 'Mystic Water', moves: ['Hydro Pump', 'Ice Beam', 'Focus Blast', 'Hypnosis'] },
                    { name: 'breloom',     nature: 'Jolly',   ability: 'Poison Heal',  item: 'Toxic Orb',    moves: ['Seed Bomb', 'Facade', 'Drain Punch', 'Spore'] },
                ]
            },
            hard: {
                pokemon: [
                    { name: 'machamp',     nature: 'Adamant', ability: 'No Guard',     item: 'Assault Vest', moves: ['Dynamic Punch', 'Stone Edge', 'Heavy Slam', 'Fire Punch'] },
                    { name: 'infernape',   nature: 'Timid',   ability: 'Blaze',        item: 'Life Orb',     moves: ['Fire Blast', 'Focus Blast', 'Vacuum Wave', 'Grass Knot'] },
                    { name: 'mienshao',    nature: 'Jolly',   ability: 'Regenerator',  item: 'Focus Sash',   moves: ['Poison Jab', 'Rock Slide', 'Knock Off', 'High Jump Kick'] },
                    { name: 'conkeldurr',  nature: 'Adamant', ability: 'Iron Fist',    item: 'Leftovers',    moves: ['Drain Punch', 'Ice Punch', 'Thunder Punch', 'Fire Punch'] },
                    { name: 'poliwrath',   nature: 'Modest',  ability: 'Water Absorb', item: 'Mystic Water', moves: ['Hydro Pump', 'Ice Beam', 'Focus Blast', 'Hypnosis'] },
                    { name: 'breloom',     nature: 'Jolly',   ability: 'Poison Heal',  item: 'Toxic Orb',    moves: ['Seed Bomb', 'Facade', 'Drain Punch', 'Spore'] },
                ]
            }
        }
    },

    {
        id: 'cie',
        name: 'Cie',
        title: '',
        region: 'Kanto',
        location: 'Fluffles Wonderland',
        difficulties: {
            easy: {
                pokemon: [
                    { name: 'togekiss',    nature: '',        ability: 'Serene Grace', item: '',             moves: ['Air Slash'] },
                    { name: 'azumarill',   nature: '',        ability: 'Huge Power',   item: '',             moves: ['Waterfall', 'Superpower', 'Play Rough', 'Knock Off'] },
                    { name: 'starmie',     nature: '',        ability: 'Analytic',     item: '',             moves: ['Hydro Pump', 'Psychic', 'Thunderbolt', 'Ice Beam'] },
                    { name: 'clefable',    nature: '',        ability: 'Unaware',      item: '',             moves: ['Moonblast', 'Flamethrower', 'Thunderbolt'] },
                    { name: 'scizor',      nature: '',        ability: 'Technician',   item: '',             moves: ['Pursuit', 'Superpower', 'Bug Bite', 'Bullet Punch'] },
                    { name: 'diancie',     nature: '',        ability: 'Magic Bounce', item: 'Diancite',     moves: ['Diamond Storm', 'Moonblast'] },
                ]
            },
            medium: {
                pokemon: [
                    { name: 'togekiss',    nature: '',        ability: 'Serene Grace', item: 'Choice Scarf', moves: ['Air Slash'] },
                    { name: 'azumarill',   nature: '',        ability: 'Huge Power',   item: 'Choice Band',  moves: ['Waterfall', 'Superpower', 'Play Rough', 'Knock Off'] },
                    { name: 'starmie',     nature: '',        ability: 'Analytic',     item: 'Choice Specs', moves: ['Hydro Pump', 'Psychic', 'Thunderbolt', 'Ice Beam'] },
                    { name: 'clefable',    nature: '',        ability: 'Unaware',      item: 'Leftovers',    moves: ['Moonblast', 'Flamethrower', 'Thunderbolt', 'Ice Beam'] },
                    { name: 'scizor',      nature: '',        ability: 'Technician',   item: 'Choice Band',  moves: ['Pursuit', 'Superpower', 'Bug Bite', 'Bullet Punch'] },
                    { name: 'diancie',     nature: '',        ability: 'Magic Bounce', item: 'Diancite',     moves: ['Diamond Storm', 'Moonblast', 'Earth Power', 'Psychic'] },
                ]
            },
            hard: {
                pokemon: [
                    { name: 'togekiss',    nature: '',        ability: 'Serene Grace', item: 'Choice Scarf', moves: ['Air Slash'] },
                    { name: 'azumarill',   nature: '',        ability: 'Huge Power',   item: 'Choice Band',  moves: ['Waterfall', 'Superpower', 'Play Rough', 'Knock Off'] },
                    { name: 'starmie',     nature: '',        ability: 'Analytic',     item: 'Choice Specs', moves: ['Hydro Pump', 'Psychic', 'Thunderbolt', 'Ice Beam'] },
                    { name: 'clefable',    nature: '',        ability: 'Unaware',      item: 'Leftovers',    moves: ['Moonblast', 'Flamethrower', 'Thunderbolt', 'Ice Beam'] },
                    { name: 'scizor',      nature: '',        ability: 'Technician',   item: 'Choice Band',  moves: ['Pursuit', 'Superpower', 'Bug Bite', 'Bullet Punch'] },
                    { name: 'diancie',     nature: '',        ability: 'Magic Bounce', item: 'Diancite',     moves: ['Diamond Storm', 'Moonblast', 'Earth Power', 'Psychic'] },
                ]
            }
        }
    },

    {
        id: 'erika',
        name: 'Erika',
        title: '',
        region: 'Kanto',
        location: 'Viridian Maze',
        difficulties: {
            medium: {
                pokemon: [
                    { name: 'ferrothorn',  nature: 'Relaxed', ability: 'Iron Barbs',   item: 'Rocky Helmet', moves: ['Power Whip', 'Gyro Ball', 'Bulldoze', 'Explosion'] },
                    { name: 'volcarona',   nature: 'Timid',   ability: 'Swarm',        item: 'Passho Berry', moves: ['Bug Buzz', 'Flamethrower', 'Giga Drain', 'Quiver Dance'] },
                    { name: 'ludicolo',    nature: 'Timid',   ability: 'Swift Swim',   item: 'Life Orb',     moves: ['Focus Blast', 'Hydro Pump', 'Giga Drain', 'Ice Beam'] },
                    { name: 'celebi',      nature: 'Timid',   ability: 'Natural Cure', item: 'Leftovers',    moves: ['Thunder Wave', 'Earth Power', 'Nasty Plot', 'Psychic'] },
                    { name: 'torterra',    nature: 'Adamant', ability: 'Overgrow',     item: 'Focus Sash',   moves: ['Wood Hammer', 'Earthquake', 'Stone Edge', 'Synthesis'] },
                    { name: 'tangrowth',   nature: 'Sassy',   ability: 'Leaf Guard',   item: 'Assault Vest', moves: ['Earthquake', 'Power Whip', 'Sludge Bomb', 'Ancient Power'] },
                ]
            },
            hard: {
                pokemon: [
                    { name: 'ferrothorn',  nature: 'Relaxed', ability: 'Iron Barbs',   item: 'Rocky Helmet', moves: ['Power Whip', 'Gyro Ball', 'Bulldoze', 'Explosion'] },
                    { name: 'volcarona',   nature: 'Timid',   ability: 'Swarm',        item: 'Passho Berry', moves: ['Bug Buzz', 'Flamethrower', 'Giga Drain', 'Quiver Dance'] },
                    { name: 'ludicolo',    nature: 'Timid',   ability: 'Swift Swim',   item: 'Life Orb',     moves: ['Focus Blast', 'Hydro Pump', 'Giga Drain', 'Ice Beam'] },
                    { name: 'celebi',      nature: 'Timid',   ability: 'Natural Cure', item: 'Leftovers',    moves: ['Thunder Wave', 'Earth Power', 'Nasty Plot', 'Psychic'] },
                    { name: 'torterra',    nature: 'Adamant', ability: 'Overgrow',     item: 'Focus Sash',   moves: ['Wood Hammer', 'Earthquake', 'Stone Edge', 'Synthesis'] },
                    { name: 'tangrowth',   nature: 'Sassy',   ability: 'Leaf Guard',   item: 'Assault Vest', moves: ['Earthquake', 'Power Whip', 'Sludge Bomb', 'Ancient Power'] },
                ]
            }
        }
    },

    {
        id: 'george',
        name: 'George',
        title: '',
        region: 'Kanto',
        location: 'Pewter Jail',
        difficulties: {
            medium: {
                pokemon: [
                    { name: 'arcanine',    nature: 'Adamant', ability: 'Intimidate',   item: 'Leftovers',    moves: ['Flare Blitz', 'Will-O-Wisp', 'Close Combat', 'Extreme Speed'] },
                    { name: 'stoutland',   nature: 'Adamant', ability: 'Scrappy',      item: 'Choice Band',  moves: ['Return', 'Crunch', 'Superpower', 'Play Rough'] },
                    { name: 'granbull',    nature: 'Impish',  ability: 'Intimidate',   item: 'Sitrus Berry', moves: ['Play Rough', 'Thunder Wave', 'Earthquake', 'Stone Edge'] },
                    { name: 'houndoom',    nature: 'Timid',   ability: 'Flash Fire',   item: 'Life Orb',     moves: ['Nasty Plot', 'Fire Blast', 'Dark Pulse', 'Sludge Bomb'] },
                    { name: 'manectric',   nature: 'Timid',   ability: 'Minus',        item: 'Life Orb',     moves: ['Thunder', 'Flamethrower', 'Thunder Wave', 'Roar'] },
                    { name: 'lucario',     nature: 'Adamant', ability: 'Adaptability', item: 'Lucarionite',  moves: ['Close Combat', 'Meteor Mash', 'Crunch', 'Ice Punch'] },
                ]
            },
            hard: {
                pokemon: [
                    { name: 'arcanine',    nature: 'Adamant', ability: 'Intimidate',   item: 'Leftovers',    moves: ['Flare Blitz', 'Will-O-Wisp', 'Close Combat', 'Extreme Speed'] },
                    { name: 'stoutland',   nature: 'Adamant', ability: 'Scrappy',      item: 'Choice Band',  moves: ['Return', 'Crunch', 'Superpower', 'Play Rough'] },
                    { name: 'granbull',    nature: 'Impish',  ability: 'Intimidate',   item: 'Sitrus Berry', moves: ['Play Rough', 'Thunder Wave', 'Earthquake', 'Stone Edge'] },
                    { name: 'houndoom',    nature: 'Timid',   ability: 'Flash Fire',   item: 'Life Orb',     moves: ['Nasty Plot', 'Fire Blast', 'Dark Pulse', 'Sludge Bomb'] },
                    { name: 'manectric',   nature: 'Timid',   ability: 'Minus',        item: 'Life Orb',     moves: ['Thunder', 'Flamethrower', 'Thunder Wave', 'Roar'] },
                    { name: 'lucario',     nature: 'Adamant', ability: 'Adaptability', item: 'Lucarionite',  moves: ['Close Combat', 'Meteor Mash', 'Crunch', 'Ice Punch'] },
                ]
            }
        }
    },

    {
        id: 'guardian-entei',
        name: 'Guardian (Entei)',
        title: '',
        region: 'Kanto',
        location: 'Route 25 (Route 25 Cave)',
        difficulties: {
            medium: {
                pokemon: [
                    { name: 'entei',       nature: 'Adamant', ability: 'Pressure',     item: 'Choice Band',  moves: ['Sacred Fire', 'Extreme Speed', 'Stone Edge', 'Iron Tail', 'Flare Blitz'] },
                    { name: 'infernape',   nature: 'Jolly',   ability: 'Iron Fist',    item: 'Life Orb',     moves: ['Close Combat', 'Flare Blitz', 'Gunk Shot', 'Thunder Punch'] },
                    { name: 'reshiram',    nature: 'Modest',  ability: 'Turboblaze',   item: 'Choice Specs', moves: ['Blue Flare', 'Dragon Pulse', 'Focus Blast', 'Shadow Ball'] },
                    { name: 'gliscor',     nature: 'Jolly',   ability: 'Poison Heal',  item: 'Toxic Orb',    moves: ['Swords Dance', 'Earthquake', 'Facade', 'Knock Off'] },
                    { name: 'serperior',   nature: 'Timid',   ability: 'Contrary',     item: 'Miracle Seed', moves: ['Leaf Storm', 'Dragon Pulse', 'Leech Seed', 'Giga Drain'] },
                    { name: 'chandelure',  nature: 'Modest',  ability: 'Flame Body',   item: 'Choice Scarf', moves: ['Shadow Ball', 'Fire Blast', 'Energy Ball', 'Psychic'] },
                ]
            }
        }
    },

    {
        id: 'jessie-james',
        name: 'Jessie & James',
        title: '',
        region: 'Kanto',
        location: 'Celadon City',
        difficulties: {
            medium: {
                pokemon: [
                    // Jessie's team
                    { name: 'porygon-z',   nature: 'Modest',  ability: 'Adaptability', item: 'Choice Specs', moves: ['Tri Attack', 'Ice Beam', 'Thunderbolt', 'Shadow Ball'] },
                    { name: 'arbok',       nature: 'Adamant', ability: 'Intimidate',   item: 'Black Sludge', moves: ['Gunk Shot', 'Coil', 'Earthquake', 'Ice Fang'] },
                    { name: 'gourgeist',   nature: 'Timid',   ability: 'Insomnia',     item: 'Leftovers',    moves: ['Seed Bomb', 'Phantom Force', 'Will-O-Wisp', 'Leech Seed'] },
                    { name: 'yanmega',     nature: 'Modest',  ability: 'Tinted Lens',  item: 'Choice Specs', moves: ['Bug Buzz', 'Air Slash', 'Ancient Power', 'Giga Drain'] },
                    { name: 'jellicent',   nature: 'Bold',    ability: 'Cursed Body',  item: 'Leftovers',    moves: ['Scald', 'Shadow Ball', 'Ice Beam', 'Energy Ball'] },
                    { name: 'seviper',     nature: 'Quiet',   ability: 'Shed Skin',    item: 'Assault Vest', moves: ['Sludge Bomb', 'Flamethrower', 'Giga Drain', 'Sucker Punch'] },
                ]
            },
            hard: {
                pokemon: [
                    // James's team
                    { name: 'malamar',     nature: 'Careful', ability: 'Contrary',     item: 'Leftovers',    moves: ['Superpower', 'Knock Off', 'Psycho Cut'] },
                    { name: 'weezing',     nature: 'Modest',  ability: 'Levitate',     item: 'Black Sludge', moves: ['Sludge Bomb', 'Fire Blast', 'Thunderbolt', 'Shadow Ball'] },
                    { name: 'arcanine',    nature: 'Adamant', ability: 'Intimidate',   item: 'Choice Band',  moves: ['Flare Blitz', 'Wild Charge', 'Close Combat', 'Extreme Speed'] },
                    { name: 'gyarados',    nature: 'Jolly',   ability: 'Moxie',        item: 'Sitrus Berry', moves: ['Dragon Dance', 'Waterfall', 'Earthquake', 'Ice Fang'] },
                    { name: 'amoonguss',   nature: 'Calm',    ability: 'Effect Spore', item: 'Black Sludge', moves: ['Giga Drain', 'Clear Smog', 'Spore', 'Foul Play'] },
                    { name: 'cofagrigus',  nature: 'Quiet',   ability: 'Mummy',        item: 'Leftovers',    moves: ['Nasty Plot', 'Shadow Ball', 'Trick Room', 'Energy Ball'] },
                ]
            }
        }
    },

    {
        id: 'klohver',
        name: 'Klohver',
        title: '',
        region: 'Kanto',
        location: 'Pinkan Island Meadow',
        difficulties: {
            medium: {
                pokemon: [
                    { name: 'xerneas',     nature: 'Mild',    ability: 'Fairy Aura',   item: 'Choice Scarf', moves: ['Thunder', 'Moonblast', 'Close Combat', 'Rock Slide'] },
                    { name: 'shaymin-land',nature: 'Modest',  ability: 'Serene Grace', item: 'Leftovers',    moves: ['Seed Flare', 'Air Slash', 'Earth Power', 'Leech Seed'] },
                    { name: 'meganium',    nature: 'Impish',  ability: 'Overgrow',     item: 'Leftovers',    moves: ['Petal Blizzard', 'Dragon Tail', 'Earthquake', 'Synthesis'] },
                    { name: 'lilligant',   nature: 'Modest',  ability: 'Own Tempo',    item: 'Leftovers',    moves: ['Quiver Dance', 'Petal Dance', 'Sleep Powder', 'Giga Drain'] },
                    { name: 'gogoat',      nature: 'Adamant', ability: 'Sap Sipper',   item: 'Life Orb',     moves: ['Horn Leech', 'Rock Slide', 'Return', 'Earthquake'] },
                    { name: 'vileplume',   nature: 'Modest',  ability: 'Chlorophyll',  item: 'Leftovers',    moves: ['Energy Ball', 'Sludge Bomb', 'Sunny Day', 'Moonblast'] },
                ]
            },
            hard: {
                pokemon: [
                    { name: 'xerneas',     nature: 'Mild',    ability: 'Fairy Aura',   item: 'Choice Scarf', moves: ['Thunder', 'Moonblast', 'Close Combat', 'Rock Slide'] },
                    { name: 'shaymin-land',nature: 'Modest',  ability: 'Serene Grace', item: 'Leftovers',    moves: ['Seed Flare', 'Air Slash', 'Earth Power', 'Leech Seed'] },
                    { name: 'meganium',    nature: 'Impish',  ability: 'Overgrow',     item: 'Leftovers',    moves: ['Petal Blizzard', 'Dragon Tail', 'Earthquake', 'Synthesis'] },
                    { name: 'lilligant',   nature: 'Modest',  ability: 'Own Tempo',    item: 'Leftovers',    moves: ['Quiver Dance', 'Petal Dance', 'Sleep Powder', 'Giga Drain'] },
                    { name: 'gogoat',      nature: 'Adamant', ability: 'Sap Sipper',   item: 'Life Orb',     moves: ['Horn Leech', 'Rock Slide', 'Return', 'Earthquake'] },
                    { name: 'vileplume',   nature: 'Modest',  ability: 'Chlorophyll',  item: 'Leftovers',    moves: ['Energy Ball', 'Sludge Bomb', 'Sunny Day', 'Moonblast'] },
                ]
            }
        }
    },

    {
        id: 'koichi',
        name: 'Koichi',
        title: '',
        region: 'Kanto',
        location: 'Saffron Dojo',
        difficulties: {
            medium: {
                pokemon: [
                    { name: 'lucario',     nature: 'Modest',  ability: 'Steadfast',    item: 'Life Orb',     moves: ['Nasty Plot', 'Focus Blast', 'Dark Pulse', 'Flash Cannon'] },
                    { name: 'hitmonchan',  nature: 'Adamant', ability: 'Iron Fist',    item: 'Focus Sash',   moves: ['Counter', 'Close Combat', 'Fire Punch', 'Ice Punch'] },
                    { name: 'hitmontop',   nature: 'Impish',  ability: 'Technician',   item: 'Leftovers',    moves: ['Close Combat', 'Endeavor', 'Earthquake', 'Stone Edge'] },
                    { name: 'hitmonlee',   nature: 'Jolly',   ability: 'Reckless',     item: 'Focus Sash',   moves: ['Knock Off', 'High Jump Kick', 'Poison Jab', 'Blaze Kick'] },
                    { name: 'gallade',     nature: 'Jolly',   ability: 'Inner Focus',  item: 'Galladite',    moves: ['Close Combat', 'Zen Headbutt', 'Leaf Blade', 'Swords Dance'] },
                    { name: 'pangoro',     nature: 'Adamant', ability: 'Mold Breaker', item: 'Black Glasses',moves: ['Crunch', 'Hammer Arm', 'Gunk Shot', 'Fire Punch'] },
                ]
            },
            hard: {
                pokemon: [
                    { name: 'lucario',     nature: 'Modest',  ability: 'Steadfast',    item: 'Life Orb',     moves: ['Nasty Plot', 'Focus Blast', 'Dark Pulse', 'Flash Cannon'] },
                    { name: 'hitmonchan',  nature: 'Adamant', ability: 'Iron Fist',    item: 'Focus Sash',   moves: ['Counter', 'Close Combat', 'Fire Punch', 'Ice Punch'] },
                    { name: 'hitmontop',   nature: 'Impish',  ability: 'Technician',   item: 'Leftovers',    moves: ['Close Combat', 'Endeavor', 'Earthquake', 'Stone Edge'] },
                    { name: 'hitmonlee',   nature: 'Jolly',   ability: 'Reckless',     item: 'Focus Sash',   moves: ['Knock Off', 'High Jump Kick', 'Poison Jab', 'Blaze Kick'] },
                    { name: 'gallade',     nature: 'Jolly',   ability: 'Inner Focus',  item: 'Galladite',    moves: ['Close Combat', 'Zen Headbutt', 'Leaf Blade', 'Swords Dance'] },
                    { name: 'pangoro',     nature: 'Adamant', ability: 'Mold Breaker', item: 'Black Glasses',moves: ['Crunch', 'Hammer Arm', 'Gunk Shot', 'Fire Punch'] },
                ]
            }
        }
    },

    {
        id: 'naero',
        name: 'Naero',
        title: '',
        region: 'Kanto',
        location: 'Cerulean Cave B1F',
        difficulties: {}
    },

    {
        id: 'officer-jenny',
        name: 'Officer Jenny',
        title: '',
        region: 'Kanto',
        location: 'Pinkan City (Pinkan Lighthouse 2F)',
        difficulties: {}
    },

    {
        id: 'officer-shamac',
        name: 'Officer Shamac',
        title: '',
        region: 'Kanto',
        location: 'Pewter City (Jail)',
        difficulties: {}
    },

    {
        id: 'prehax',
        name: 'Prehax',
        title: '',
        region: 'Kanto',
        location: 'Munchlax Resort (House 1)',
        difficulties: {}
    },

    {
        id: 'professor-oak',
        name: 'Professor Oak',
        title: '',
        region: 'Kanto',
        location: 'Cinnabar Island (Lab Room 2)',
        difficulties: {}
    },

    {
        id: 'shary-shaui',
        name: 'Shary & Shaui',
        title: '',
        region: 'Kanto',
        location: 'Love Island (House 1)',
        difficulties: {}
    },

    {
        id: 'the-pumpkin-king',
        name: 'The Pumpkin King',
        title: '',
        region: 'Kanto',
        location: 'Lavender Town Graveyard',
        difficulties: {}
    },

    {
        id: 'urahara',
        name: 'Urahara',
        title: '',
        region: 'Kanto',
        location: 'Pokemon Tower 3F',
        difficulties: {}
    },

    {
        id: 'xylos',
        name: 'Xylos',
        title: '',
        region: 'Kanto',
        location: 'Pokemon Club (Vermilion City)',
        difficulties: {}
    },

    // ══════════════════════════════════════════════════════════════════════════
    // JOHTO
    // ══════════════════════════════════════════════════════════════════════════

    {
        id: 'battlebot',
        name: 'BattleBot',
        title: '',
        region: 'Johto',
        location: 'Dock Island (House 2)',
        difficulties: {
            medium: {
                pokemon: [
                    { name: 'shaymin-land',nature: '',        ability: 'Serene Grace', item: 'Choice Specs', moves: ['Air Slash'] },
                    { name: 'landorus-incarnate', nature: '', ability: 'Sheer Force',  item: '',             moves: ['Rock Slide', 'Earth Power', 'Focus Blast', 'Sludge Wave'] },
                    { name: 'darkrai',     nature: '',        ability: 'Bad Dreams',   item: 'Wide Lens',    moves: ['Dark Pulse', 'Sludge Bomb', 'Hypnosis'] },
                    { name: 'jirachi',     nature: '',        ability: 'Serene Grace', item: 'Choice Scarf', moves: ['Iron Head'] },
                    { name: 'lugia',       nature: '',        ability: 'Multiscale',   item: 'Choice Specs', moves: ['Aeroblast', 'Psyshock', 'Hydro Pump', 'Ice Beam', 'Thunderbolt'] },
                    { name: 'rayquaza',    nature: '',        ability: 'Air Lock',     item: 'Choice Band',  moves: ['Dragon Ascent', 'Earthquake', 'Ice Beam', 'Flamethrower'] },
                ]
            }
        }
    },

    {
        id: 'bruno',
        name: 'Bruno',
        title: '',
        region: 'Johto',
        location: 'Mt. Mortar Lower Cave',
        difficulties: {
            easy: {
                pokemon: [
                    { name: 'steelix',     nature: 'Careful', ability: 'Sturdy',       item: '',             moves: ['Iron Head', 'Earthquake', 'Curse', 'Fire Fang'] },
                    { name: 'hariyama',    nature: 'Adamant', ability: 'Thick Fat',    item: '',             moves: ['Heavy Slam', 'Endure', 'Reversal', 'Close Combat'] },
                    { name: 'hitmonlee',   nature: 'Jolly',   ability: 'Reckless',     item: '',             moves: ['Fake Out', 'Jump Kick', 'Blaze Kick', 'Rolling Kick'] },
                    { name: 'throh',       nature: 'Careful', ability: 'Guts',         item: '',             moves: ['Reversal', 'Superpower', 'Wide Guard', 'Endure'] },
                    { name: 'sawk',        nature: 'Jolly',   ability: 'Sturdy',       item: '',             moves: ['Reversal', 'Close Combat', 'Endure', 'Quick Guard'] },
                    { name: 'scrafty',     nature: 'Adamant', ability: 'Intimidate',   item: '',             moves: ['Head Smash', 'Focus Punch', 'Rock Climb', 'Facade'] },
                ]
            },
            medium: {
                pokemon: [
                    { name: 'steelix',     nature: 'Careful', ability: 'Sand Force',   item: 'Steelixite',   moves: ['Heavy Slam', 'Earthquake', 'Stone Edge', 'Ice Fang'] },
                    { name: 'hariyama',    nature: 'Adamant', ability: 'Thick Fat',    item: 'Choice Band',  moves: ['Close Combat', 'Heavy Slam', 'Stone Edge', 'Fire Punch'] },
                    { name: 'hitmonlee',   nature: 'Jolly',   ability: 'Reckless',     item: 'Life Orb',     moves: ['High Jump Kick', 'Stone Edge', 'Knock Off', 'Poison Jab'] },
                    { name: 'throh',       nature: 'Careful', ability: 'Guts',         item: 'Flame Orb',    moves: ['Bulk Up', 'Superpower', 'Knock Off', 'Thunder Punch'] },
                    { name: 'sawk',        nature: 'Jolly',   ability: 'Sturdy',       item: 'Weakness Policy', moves: ['Close Combat', 'Knock Off', 'Fire Punch', 'Ice Punch'] },
                    { name: 'scrafty',     nature: 'Adamant', ability: 'Intimidate',   item: 'Leftovers',    moves: ['Knock Off', 'High Jump Kick', 'Dragon Dance', 'Head Smash'] },
                ]
            },
            hard: {
                pokemon: [
                    { name: 'steelix',     nature: 'Careful', ability: 'Sand Force',   item: 'Steelixite',   moves: ['Heavy Slam', 'Earthquake', 'Stone Edge', 'Ice Fang'] },
                    { name: 'hariyama',    nature: 'Adamant', ability: 'Thick Fat',    item: 'Choice Band',  moves: ['Close Combat', 'Heavy Slam', 'Stone Edge', 'Fire Punch'] },
                    { name: 'hitmonlee',   nature: 'Jolly',   ability: 'Reckless',     item: 'Life Orb',     moves: ['High Jump Kick', 'Stone Edge', 'Knock Off', 'Poison Jab'] },
                    { name: 'throh',       nature: 'Careful', ability: 'Guts',         item: 'Flame Orb',    moves: ['Bulk Up', 'Superpower', 'Knock Off', 'Thunder Punch'] },
                    { name: 'sawk',        nature: 'Jolly',   ability: 'Sturdy',       item: 'Weakness Policy', moves: ['Close Combat', 'Knock Off', 'Fire Punch', 'Ice Punch'] },
                    { name: 'scrafty',     nature: 'Adamant', ability: 'Intimidate',   item: 'Leftovers',    moves: ['Knock Off', 'High Jump Kick', 'Dragon Dance', 'Head Smash'] },
                ]
            }
        }
    },

    {
        id: 'bugsy',
        name: 'Bugsy',
        title: '',
        region: 'Johto',
        location: 'Amazon Forest',
        difficulties: {
            easy: {
                pokemon: [
                    { name: 'scizor',      nature: '',        ability: '',             item: '',             moves: ['Bullet Punch'] },
                    { name: 'genesect',    nature: '',        ability: 'Download',     item: '',             moves: ['Bug Buzz', 'Flamethrower', 'Ice Beam'] },
                    { name: 'scolipede',   nature: '',        ability: '',             item: '',             moves: [] },
                    { name: 'volcarona',   nature: '',        ability: '',             item: '',             moves: [] },
                    { name: 'heracross',   nature: '',        ability: '',             item: '',             moves: [] },
                    { name: 'ninjask',     nature: '',        ability: '',             item: '',             moves: [] },
                ]
            },
            medium: {
                pokemon: [
                    { name: 'scizor',      nature: '',        ability: 'Technician',   item: 'Choice Band',  moves: ['Feint', 'Fury Cutter', 'Bullet Punch', 'Pursuit'] },
                    { name: 'genesect',    nature: '',        ability: 'Download',     item: 'Choice Specs', moves: ['Bug Buzz', 'Flash Cannon', 'Ice Beam', 'Flamethrower'] },
                    { name: 'scolipede',   nature: '',        ability: 'Speed Boost',  item: 'Life Orb',     moves: ['Megahorn', 'Stone Edge', 'Poison Jab', 'Earthquake'] },
                    { name: 'volcarona',   nature: '',        ability: '',             item: 'Passho Berry', moves: ['Flamethrower', 'Quiver Dance', 'Bug Buzz', 'Roost'] },
                    { name: 'heracross',   nature: '',        ability: 'Skill Link',   item: 'Heracronite',  moves: ['Rock Blast', 'Pin Missile', 'Bullet Seed', 'Close Combat'] },
                    { name: 'ninjask',     nature: '',        ability: 'Speed Boost',  item: 'Focus Sash',   moves: ['Aerial Ace', 'Thief', 'Swords Dance', 'Leech Life'] },
                ]
            },
            hard: {
                pokemon: [
                    { name: 'scizor',      nature: '',        ability: 'Technician',   item: 'Choice Band',  moves: ['Feint', 'Fury Cutter', 'Bullet Punch', 'Pursuit'] },
                    { name: 'genesect',    nature: '',        ability: 'Download',     item: 'Choice Specs', moves: ['Bug Buzz', 'Flash Cannon', 'Ice Beam', 'Flamethrower'] },
                    { name: 'scolipede',   nature: '',        ability: 'Speed Boost',  item: 'Life Orb',     moves: ['Megahorn', 'Stone Edge', 'Poison Jab', 'Earthquake'] },
                    { name: 'volcarona',   nature: '',        ability: '',             item: 'Passho Berry', moves: ['Flamethrower', 'Quiver Dance', 'Bug Buzz', 'Roost'] },
                    { name: 'heracross',   nature: '',        ability: 'Skill Link',   item: 'Heracronite',  moves: ['Rock Blast', 'Pin Missile', 'Bullet Seed', 'Close Combat'] },
                    { name: 'ninjask',     nature: '',        ability: 'Speed Boost',  item: 'Focus Sash',   moves: ['Aerial Ace', 'Thief', 'Swords Dance', 'Leech Life'] },
                ]
            }
        }
    },

    {
        id: 'gamers-pewdie-diepy',
        name: 'Gamers Pewdie and Diepy',
        title: '',
        region: 'Johto',
        location: 'Goldenrod Gaming Corner',
        difficulties: {
            medium: {
                pokemon: [
                    // Gamer Pewdie
                    { name: 'metagross',   nature: 'Adamant', ability: 'Clear Body',   item: 'Choice Band',  moves: ['Meteor Mash', 'Bullet Punch', 'Hammer Arm', 'Zen Headbutt'] },
                    { name: 'medicham',    nature: 'Jolly',   ability: 'Pure Power',   item: 'Life Orb',     moves: ['High Jump Kick', 'Zen Headbutt', 'Thunder Punch', 'Bullet Punch'] },
                    { name: 'mew',         nature: 'Timid',   ability: 'Synchronize',  item: 'Leftovers',    moves: ['Nasty Plot', 'Psychic', 'Fire Blast', 'Aura Sphere'] },
                    { name: 'gardevoir',   nature: 'Timid',   ability: 'Trace',        item: 'Choice Scarf', moves: ['Psyshock', 'Moonblast', 'Trick', 'Hidden Power'] },
                    { name: 'reuniclus',   nature: 'Bold',    ability: 'Magic Guard',  item: 'Leftovers',    moves: ['Calm Mind', 'Psyshock', 'Focus Blast', 'Recover'] },
                    { name: 'starmie',     nature: 'Timid',   ability: 'Analytic',     item: 'Choice Specs', moves: ['Surf', 'Psyshock', 'Trick', 'Ice Beam'] },
                    // Gamer Diepy
                    { name: 'azumarill',   nature: 'Adamant', ability: 'Huge Power',   item: 'Choice Band',  moves: ['Aqua Jet', 'Waterfall', 'Play Rough', 'Superpower'] },
                    { name: 'whimsicott',  nature: 'Timid',   ability: 'Infiltrator',  item: 'Choice Specs', moves: ['Moonblast', 'Psychic', 'Energy Ball', 'Hurricane'] },
                    { name: 'slurpuff',    nature: 'Jolly',   ability: 'Unburden',     item: 'Sitrus Berry', moves: ['Belly Drum', 'Play Rough', 'Return', 'Drain Punch'] },
                    { name: 'mr-mime',     nature: 'Timid',   ability: 'Soundproof',   item: 'Choice Scarf', moves: ['Psyshock', 'Dazzling Gleam', 'Nasty Plot', 'Focus Blast'] },
                    { name: 'carbink',     nature: 'Calm',    ability: 'Sturdy',       item: 'Leftovers',    moves: ['Stealth Rock', 'Moonblast', 'Rock Slide', 'Toxic'] },
                    { name: 'granbull',    nature: 'Impish',  ability: 'Quick Feet',   item: 'Choice Scarf', moves: ['Play Rough', 'Earthquake', 'Heal Bell', 'Thunder Wave'] },
                ]
            },
            hard: {
                pokemon: [
                    // Gamer Pewdie
                    { name: 'starmie',     nature: 'Timid',   ability: 'Analytic',     item: 'Life Orb',     moves: ['Hydro Pump', 'Psyshock', 'Hidden Power', 'Ice Beam', 'Recover'] },
                    { name: 'alakazam',    nature: 'Timid',   ability: 'Magic Guard',  item: 'Focus Sash',   moves: ['Hidden Power', 'Psychic', 'Focus Blast', 'Thunder Wave', 'Psyshock', 'Signal Beam'] },
                    { name: 'slowking',    nature: 'Modest',  ability: 'Own Tempo',    item: 'Assault Vest', moves: ['Scald', 'Future Sight', 'Fire Blast', 'Psyshock', 'Dragon Tail'] },
                    { name: 'jirachi',     nature: 'Jolly',   ability: 'Serene Grace', item: 'Choice Scarf', moves: ['Iron Head', 'Fire Punch', 'Zen Headbutt', 'Ice Punch', 'Thunder Punch'] },
                    { name: 'latios',      nature: 'Modest',  ability: 'Levitate',     item: 'Latiosite',    moves: ['Draco Meteor', 'Hidden Power', 'Trick', 'Psyshock', 'Surf'] },
                    { name: 'mew',         nature: 'Jolly',   ability: 'Synchronize',  item: 'Life Orb',     moves: ['Swords Dance', 'Drain Punch', 'Zen Headbutt', 'Sucker Punch', 'Soft-Boiled'] },
                    // Gamer Diepy
                    { name: 'azumarill',   nature: 'Adamant', ability: 'Huge Power',   item: 'Choice Band',  moves: ['Aqua Jet', 'Waterfall', 'Play Rough', 'Superpower'] },
                    { name: 'clefable',    nature: 'Bold',    ability: 'Unaware',      item: 'Leftovers',    moves: ['Moonblast', 'Thunderbolt', 'Flamethrower', 'Focus Blast'] },
                    { name: 'xerneas',     nature: 'Adamant', ability: 'Fairy Aura',   item: 'Choice Scarf', moves: ['Close Combat', 'Outrage', 'Night Slash', 'Rock Slide', 'Zen Headbutt', 'Horn Leech', 'Megahorn'] },
                    { name: 'sylveon',     nature: 'Timid',   ability: 'Pixilate',     item: 'Choice Scarf', moves: ['Hyper Voice', 'Psyshock', 'Shadow Ball', 'Hidden Power'] },
                    { name: 'togekiss',    nature: 'Timid',   ability: 'Serene Grace', item: 'Choice Scarf', moves: ['Air Slash', 'Aura Sphere', 'Dazzling Gleam', 'Flamethrower', 'Thunder Wave'] },
                    { name: 'diancie',     nature: 'Sassy',   ability: 'Magic Bounce', item: 'Diancite',     moves: ['Psychic', 'Moonblast', 'Diamond Storm', 'Earth Power', 'Toxic'] },
                ]
            }
        }
    },

    {
        id: 'guardian-suicune',
        name: 'Guardian (Suicune)',
        title: '',
        region: 'Johto',
        location: 'Lake Of Rage (Secluded Lake)',
        difficulties: {
            medium: {
                pokemon: [
                    { name: 'kyurem',      nature: 'Modest',  ability: 'Pressure',     item: 'Choice Specs', moves: ['Blizzard', 'Draco Meteor', 'Focus Blast', 'Flash Cannon'] },
                    { name: 'suicune',     nature: 'Bold',    ability: 'Pressure',     item: 'Leftovers',    moves: ['Calm Mind', 'Scald', 'Ice Beam', 'Air Slash'] },
                    { name: 'avalugg',     nature: 'Quiet',   ability: 'Sturdy',       item: 'Leftovers',    moves: ['Avalanche', 'Toxic', 'Recover', 'Stone Edge'] },
                    { name: 'walrein',     nature: 'Calm',    ability: 'Thick Fat',    item: 'Leftovers',    moves: ['Sheer Cold', 'Blizzard', 'Surf', 'Super Fang'] },
                    { name: 'azumarill',   nature: 'Adamant', ability: 'Huge Power',   item: 'Choice Band',  moves: ['Aqua Jet', 'Play Rough', 'Superpower', 'Knock Off'] },
                    { name: 'mamoswine',   nature: 'Jolly',   ability: 'Thick Fat',    item: 'Life Orb',     moves: ['Earthquake', 'Icicle Crash', 'Stone Edge', 'Ice Shard'] },
                ]
            }
        }
    },

    {
        id: 'lance-dragons-shrine',
        name: 'Lance (Dragons Shrine)',
        title: '',
        region: 'Johto',
        location: 'Dragons Shrine',
        difficulties: {
            medium: {
                pokemon: [
                    { name: 'salamence',   nature: 'Naive',   ability: 'Intimidate',   item: 'Life Orb',     moves: ['Outrage', 'Fire Blast', 'Earthquake', 'Iron Tail'] },
                    { name: 'dialga',      nature: 'Modest',  ability: 'Pressure',     item: 'Choice Scarf', moves: ['Aura Sphere', 'Flash Cannon', 'Fire Blast', 'Thunder'] },
                    { name: 'latios',      nature: 'Timid',   ability: 'Levitate',     item: 'Choice Specs', moves: ['Draco Meteor', 'Psychic', 'Thunderbolt', 'Surf'] },
                    { name: 'garchomp',    nature: 'Jolly',   ability: 'Sand Force',   item: 'Garchompite',  moves: ['Swords Dance', 'Earthquake', 'Outrage', 'Stone Edge'] },
                    { name: 'gyarados',    nature: 'Jolly',   ability: 'Intimidate',   item: 'Lum Berry',    moves: ['Dragon Dance', 'Waterfall', 'Earthquake', 'Ice Fang'] },
                    { name: 'dragonite',   nature: 'Adamant', ability: 'Multiscale',   item: 'Weakness Policy', moves: ['Dragon Dance', 'Outrage', 'Extreme Speed', 'Earthquake'] },
                ]
            },
            hard: {
                pokemon: [
                    { name: 'salamence',   nature: 'Naive',   ability: 'Intimidate',   item: 'Life Orb',     moves: ['Outrage', 'Fire Blast', 'Earthquake', 'Iron Tail'] },
                    { name: 'dialga',      nature: 'Modest',  ability: 'Pressure',     item: 'Choice Scarf', moves: ['Aura Sphere', 'Flash Cannon', 'Fire Blast', 'Thunder'] },
                    { name: 'latios',      nature: 'Timid',   ability: 'Levitate',     item: 'Choice Specs', moves: ['Draco Meteor', 'Psychic', 'Thunderbolt', 'Surf'] },
                    { name: 'garchomp',    nature: 'Jolly',   ability: 'Sand Force',   item: 'Garchompite',  moves: ['Swords Dance', 'Earthquake', 'Outrage', 'Stone Edge'] },
                    { name: 'gyarados',    nature: 'Jolly',   ability: 'Intimidate',   item: 'Lum Berry',    moves: ['Dragon Dance', 'Waterfall', 'Earthquake', 'Ice Fang'] },
                    { name: 'dragonite',   nature: 'Adamant', ability: 'Multiscale',   item: 'Weakness Policy', moves: ['Dragon Dance', 'Outrage', 'Extreme Speed', 'Earthquake'] },
                ]
            }
        }
    },

    {
        id: 'lorelei',
        name: 'Lorelei',
        title: '',
        region: 'Johto',
        location: 'Ice Path B2F',
        difficulties: {}
    },

    {
        id: 'misty',
        name: 'Misty',
        title: '',
        region: 'Johto',
        location: 'Route 41',
        difficulties: {
            easy: {
                pokemon: [
                    { name: 'staryu',     ability: 'Natural Cure', item: '',            moves: ['Water Gun', 'Rapid Spin', 'Swift', 'Minimize'] },
                    { name: 'starmie',    ability: 'Natural Cure', item: '',            moves: ['Water Gun', 'Psychic', 'Swift', 'Recover'] },
                ]
            },
            hard: {
                pokemon: [
                    { name: 'starmie',    ability: 'Analytic',     item: 'Life Orb',    moves: ['Surf', 'Psychic', 'Ice Beam', 'Thunderbolt'] },
                    { name: 'gyarados',   ability: 'Intimidate',   item: 'Lum Berry',   moves: ['Waterfall', 'Dragon Dance', 'Crunch', 'Ice Fang'] },
                    { name: 'vaporeon',   ability: 'Water Absorb', item: 'Leftovers',   moves: ['Surf', 'Ice Beam', 'Wish', 'Protect'] },
                ]
            }
        }
    },

    {
        id: 'neroli',
        name: 'Neroli',
        title: '',
        region: 'Johto',
        location: 'Ilex Forest',
        difficulties: {}
    },

    {
        id: 'professor-elm',
        name: 'Professor Elm',
        title: '',
        region: 'Johto',
        location: 'Ruins of Alph (Research Center)',
        difficulties: {}
    },

    {
        id: 'sage',
        name: 'Sage',
        title: '',
        region: 'Johto',
        location: 'Violet City (Sprout Tower F)',
        difficulties: {}
    },

    {
        id: 'terminator',
        name: 'Terminator',
        title: '',
        region: 'Johto',
        location: 'Mt. Silver Moltres Chamber',
        difficulties: {}
    },

    {
        id: 'thor',
        name: 'Thor',
        title: '',
        region: 'Johto',
        location: 'Whirl Islands B4F',
        difficulties: {}
    },

    // ══════════════════════════════════════════════════════════════════════════
    // HOENN
    // ══════════════════════════════════════════════════════════════════════════

    {
        id: 'gingery-jones',
        name: 'Gingery Jones',
        title: '',
        region: 'Hoenn',
        location: 'Feral Site (Fiery Path)',
        difficulties: {
            medium: {
                pokemon: [
                    { name: 'conkeldurr',  nature: '',        ability: '',             item: 'Choice Band',  moves: ['Drain Punch', 'Knock Off', 'Ice Punch', 'Thunder Punch'] },
                    { name: 'klinklang',   nature: '',        ability: 'Clear Body',   item: 'Choice Band',  moves: ['Wild Charge', 'Gear Grind', 'Return', 'Shift Gear'] },
                    { name: 'golurk',      nature: '',        ability: '',             item: 'Choice Band',  moves: ['Ice Punch', 'Drain Punch', 'Earthquake', 'Shadow Punch'] },
                    { name: 'mandibuzz',   nature: '',        ability: '',             item: 'Rocky Helmet', moves: ['Brave Bird', 'Knock Off', 'Whirlwind'] },
                    { name: 'clawitzer',   nature: '',        ability: 'Mega Launcher',item: 'Choice Specs', moves: ['Ice Beam', 'Scald', 'Dark Pulse', 'Aura Sphere'] },
                    { name: 'pangoro',     nature: '',        ability: '',             item: 'Choice Band',  moves: ['Drain Punch', 'Swords Dance', 'Zen Headbutt', 'Knock Off'] },
                ]
            },
            hard: {
                pokemon: [
                    { name: 'conkeldurr',  nature: '',        ability: '',             item: 'Choice Band',  moves: ['Drain Punch', 'Knock Off', 'Ice Punch', 'Thunder Punch'] },
                    { name: 'klinklang',   nature: '',        ability: 'Clear Body',   item: 'Choice Band',  moves: ['Wild Charge', 'Gear Grind', 'Return', 'Shift Gear'] },
                    { name: 'golurk',      nature: '',        ability: '',             item: 'Choice Band',  moves: ['Ice Punch', 'Drain Punch', 'Earthquake', 'Shadow Punch'] },
                    { name: 'mandibuzz',   nature: '',        ability: '',             item: 'Rocky Helmet', moves: ['Brave Bird', 'Knock Off', 'Whirlwind'] },
                    { name: 'clawitzer',   nature: '',        ability: 'Mega Launcher',item: 'Choice Specs', moves: ['Ice Beam', 'Scald', 'Dark Pulse', 'Aura Sphere'] },
                    { name: 'pangoro',     nature: '',        ability: '',             item: 'Choice Band',  moves: ['Drain Punch', 'Swords Dance', 'Zen Headbutt', 'Knock Off'] },
                ]
            }
        }
    },

    {
        id: 'guardian-raikou',
        name: 'Guardian (Raikou)',
        title: '',
        region: 'Hoenn',
        location: 'Route 110 (Secret Base Alpha)',
        difficulties: {
            medium: {
                pokemon: [
                    { name: 'zekrom',      nature: 'Naughty', ability: 'Teravolt',     item: 'Life Orb',     moves: ['Bolt Strike', 'Dragon Claw', 'Steel Wing', 'Focus Blast'] },
                    { name: 'excadrill',   nature: 'Adamant', ability: 'Mold Breaker', item: 'Choice Scarf', moves: ['Earthquake', 'Iron Head', 'Rock Slide', 'X-Scissor'] },
                    { name: 'raikou',      nature: 'Timid',   ability: 'Pressure',     item: 'Life Orb',     moves: ['Thunder', 'Aura Sphere', 'Extrasensory', 'Calm Mind'] },
                    { name: 'quagsire',    nature: 'Bold',    ability: 'Unaware',      item: 'Leftovers',    moves: ['Scald', 'Ice Beam', 'Recover', 'Toxic'] },
                    { name: 'eelektross',  nature: 'Modest',  ability: 'Levitate',     item: 'Assault Vest', moves: ['Thunderbolt', 'Flamethrower', 'Giga Drain', 'Knock Off'] },
                    { name: 'magnezone',   nature: 'Timid',   ability: 'Sturdy',       item: 'Choice Scarf', moves: ['Thunderbolt', 'Discharge', 'Flash Cannon', 'Tri Attack'] },
                ]
            }
        }
    },

    {
        id: 'lt-surge',
        name: 'Lt. Surge',
        title: '',
        region: 'Hoenn',
        location: 'New Mauville',
        difficulties: {
            easy: {
                pokemon: [
                    { name: 'voltorb',    ability: 'Static',       item: '',            moves: ['Thundershock', 'Sonicboom', 'Rollout', 'Screech'] },
                    { name: 'raichu',     ability: 'Static',       item: '',            moves: ['Thunderbolt', 'Quick Attack', 'Mega Kick', 'Body Slam'] },
                ]
            },
            medium: {
                pokemon: [
                    { name: 'voltorb',    ability: 'Static',       item: '',            moves: ['Thunder Wave', 'Thunderbolt', 'Explosion', 'Rollout'] },
                    { name: 'electrode',  ability: 'Static',       item: 'Sitrus Berry',moves: ['Thunderbolt', 'Thunder Wave', 'Explosion', 'Swift'] },
                    { name: 'raichu',     ability: 'Static',       item: 'Sitrus Berry',moves: ['Thunderbolt', 'Quick Attack', 'Iron Tail', 'Brick Break'] },
                ]
            },
            hard: {
                pokemon: [
                    { name: 'electrode',  ability: 'Soundproof',   item: 'Choice Scarf',moves: ['Thunderbolt', 'Volt Switch', 'Signal Beam', 'Explosion'] },
                    { name: 'jolteon',    ability: 'Volt Absorb',  item: 'Choice Specs',moves: ['Thunderbolt', 'Shadow Ball', 'Signal Beam', 'Volt Switch'] },
                    { name: 'magneton',   ability: 'Magnet Pull',  item: 'Leftovers',   moves: ['Thunderbolt', 'Flash Cannon', 'Thunder Wave', 'Tri Attack'] },
                    { name: 'raichu',     ability: 'Lightning Rod', item: 'Life Orb',   moves: ['Volt Tackle', 'Fake Out', 'Iron Tail', 'Quick Attack'] },
                ]
            }
        }
    },

    {
        id: 'morty',
        name: 'Morty',
        title: '',
        region: 'Hoenn',
        location: 'Mt. Pyre 4F',
        difficulties: {}
    },

    {
        id: 'naruto-fanboy',
        name: 'Naruto Fanboy',
        title: '',
        region: 'Hoenn',
        location: 'Desert Ruins',
        difficulties: {}
    },

    {
        id: 'professor-birch',
        name: 'Professor Birch',
        title: '',
        region: 'Hoenn',
        location: 'Verdanturf Town (House 2)',
        difficulties: {}
    },

    {
        id: 'steven',
        name: 'Steven',
        title: '',
        region: 'Hoenn',
        location: 'Valley Of Steel (Underground)',
        difficulties: {}
    },

    {
        id: 'tigerous',
        name: 'Tigerous',
        title: '',
        region: 'Hoenn',
        location: 'Eumi Island Theme Park 2',
        difficulties: {}
    },

    {
        id: 'toothless',
        name: 'Toothless',
        title: '',
        region: 'Hoenn',
        location: 'Abandoned Ship B1F Room 1 (Route 108)',
        difficulties: {}
    },

    // ══════════════════════════════════════════════════════════════════════════
    // SINNOH
    // ══════════════════════════════════════════════════════════════════════════

    {
        id: 'ash-westbrook',
        name: 'Ash Westbrook',
        title: '',
        region: 'Sinnoh',
        location: 'Spear Pillar',
        difficulties: {
            easy: {
                pokemon: [
                    { name: 'dialga',    ability: 'Pressure',   item: '',           moves: ['Draco Meteor', '', '', ''] },
                    { name: 'reshiram',  ability: 'Turboblaze', item: '',           moves: ['Draco Meteor', '', '', ''] },
                    { name: 'arceus',    ability: 'Multitype',  item: '',           moves: [] },
                    { name: 'infernape', ability: '',           item: '',           moves: [] },
                    { name: 'kyogre',    ability: 'Drizzle',    item: '',           moves: ['', '', 'Thunder', ''] },
                    { name: 'lugia',     ability: 'Multiscale', item: '',           moves: ['Dragon Pulse', '', '', ''] },
                ]
            },
            hard: {
                pokemon: [
                    { name: 'dialga',    ability: 'Pressure',   item: 'Leftovers',    moves: ['Draco Meteor', 'Roar', 'Fire Blast', 'Flash Cannon'] },
                    { name: 'reshiram',  ability: 'Turboblaze', item: 'Life Orb',     moves: ['Draco Meteor', 'Roar', 'Blue Flare', 'Stone Edge'] },
                    { name: 'arceus',    ability: 'Multitype',  item: 'Life Orb',     moves: ['Extreme Speed', 'Shadow Claw', 'Earthquake', 'Stone Edge'] },
                    { name: 'infernape', ability: 'Blaze',      item: 'Expert Belt',  moves: ['Close Combat', 'Fire Blast', 'Grass Knot', 'Thunder Punch'] },
                    { name: 'kyogre',    ability: 'Drizzle',    item: 'Choice Specs', moves: ['Surf', 'Earthquake', 'Thunder', 'Ice Beam'] },
                    { name: 'lugia',     ability: 'Multiscale', item: 'Leftovers',    moves: ['Dragon Pulse', 'Psyshock', 'Ice Beam', 'Aeroblast'] },
                ]
            }
        }
    },

    {
        id: 'letrix',
        name: 'Letrix',
        title: '',
        region: 'Sinnoh',
        location: 'Valley Windworks',
        difficulties: {
            medium: {
                pokemon: [
                    { name: 'togekiss',    nature: 'Modest',  ability: 'Serene Grace', item: 'Choice Scarf', moves: ['Air Slash', 'Flamethrower', 'Aura Sphere', 'Dazzling Gleam'] },
                    { name: 'conkeldurr',  nature: 'Adamant', ability: 'Guts',         item: 'Flame Orb',    moves: ['Drain Punch', 'Knock Off', 'Ice Punch', 'Facade'] },
                    { name: 'tyranitar',   nature: 'Naive',   ability: 'Sand Stream',  item: 'Tyranitarite', moves: ['Pursuit', 'Stone Edge', 'Fire Blast', 'Ice Beam'] },
                    { name: 'excadrill',   nature: 'Adamant', ability: 'Mold Breaker', item: 'Focus Sash',   moves: ['Earthquake', 'Iron Head', 'Rock Slide', 'Rapid Spin'] },
                    { name: 'hydreigon',   nature: 'Naive',   ability: 'Levitate',     item: 'Life Orb',     moves: ['Dark Pulse', 'Flash Cannon', 'Draco Meteor', 'Superpower'] },
                    { name: 'kyogre',      nature: 'Modest',  ability: 'Drizzle',      item: 'Choice Specs', moves: ['Hydro Pump', 'Ice Beam', 'Thunder', 'Calm Mind'] },
                ]
            },
            hard: {
                pokemon: [
                    { name: 'togekiss',    nature: 'Modest',  ability: 'Serene Grace', item: 'Choice Scarf', moves: ['Air Slash', 'Flamethrower', 'Aura Sphere', 'Dazzling Gleam'] },
                    { name: 'conkeldurr',  nature: 'Adamant', ability: 'Guts',         item: 'Flame Orb',    moves: ['Drain Punch', 'Knock Off', 'Ice Punch', 'Facade'] },
                    { name: 'tyranitar',   nature: 'Naive',   ability: 'Sand Stream',  item: 'Tyranitarite', moves: ['Pursuit', 'Stone Edge', 'Fire Punch', 'Fire Blast', 'Ice Beam', 'Earthquake'] },
                    { name: 'excadrill',   nature: 'Adamant', ability: 'Mold Breaker', item: 'Focus Sash',   moves: ['Earthquake', 'Iron Head', 'Rock Slide', 'Rapid Spin'] },
                    { name: 'hydreigon',   nature: 'Naive',   ability: 'Levitate',     item: 'Life Orb',     moves: ['Dark Pulse', 'Flash Cannon', 'Draco Meteor', 'Superpower'] },
                    { name: 'kyogre',      nature: 'Modest',  ability: 'Drizzle',      item: 'Choice Specs', moves: ['Hydro Pump', 'Ice Beam', 'Thunder', 'Calm Mind'] },
                ]
            }
        }
    },

    {
        id: 'link',
        name: 'Link',
        title: '',
        region: 'Sinnoh',
        location: 'Twinleaf Town (House 2)',
        difficulties: {}
    },

    {
        id: 'logan',
        name: 'Logan',
        title: '',
        region: 'Sinnoh',
        location: 'Cave Of Justice (Route 210 North)',
        difficulties: {}
    },

    {
        id: 'maribela',
        name: 'Maribela',
        title: '',
        region: 'Sinnoh',
        location: 'Floaroma Meadow',
        difficulties: {}
    },

    {
        id: 'medusa-eldir',
        name: 'Medusa & Eldir',
        title: '',
        region: 'Sinnoh',
        location: 'Oreburgh Gate (Legends Cave)',
        difficulties: {}
    },

    {
        id: 'professor-rowan',
        name: 'Professor Rowan',
        title: '',
        region: 'Sinnoh',
        location: 'Jubilife City School',
        difficulties: {}
    },

    {
        id: 'saphirr',
        name: 'Saphirr',
        title: '',
        region: 'Sinnoh',
        location: 'Route 227',
        difficulties: {}
    },

    {
        id: 'spectify',
        name: 'Spectify',
        title: '',
        region: 'Sinnoh',
        location: 'Sandgem Town House',
        difficulties: {}
    },
];
