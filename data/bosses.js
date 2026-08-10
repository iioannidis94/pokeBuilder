// --- data/bosses.js : Boss Trainer Data ---
// Δομή: κάθε boss έχει id, name, title, region, location, και difficulties (easy / medium / hard).
// Κάθε difficulty περιέχει μια λίστα από Pokémon με name, ability, item, και moves (έως 4).
//
// {
//   id: 'trainer-id',
//   name: 'Trainer Name',
//   title: 'Trainer Title / Class',
//   region: 'Kanto' | 'Johto' | 'Hoenn' | 'Sinnoh',
//   location: 'Location Name',
//   difficulties: {
//     easy:   { pokemon: [ { name, ability, item, moves: [] } ] },
//     medium: { pokemon: [ { name, ability, item, moves: [] } ] },
//     hard:   { pokemon: [ { name, ability, item, moves: [] } ] },
//   }
// }

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
                    { name: 'geodude',    ability: 'Rock Head',    item: '',            moves: ['Tackle', 'Defense Curl', 'Rock Throw', ''] },
                    { name: 'onix',       ability: 'Rock Head',    item: '',            moves: ['Tackle', 'Bind', 'Rock Throw', 'Screech'] },
                ]
            },
            medium: {
                pokemon: [
                    { name: 'geodude',    ability: 'Rock Head',    item: 'Sitrus Berry',moves: ['Rock Blast', 'Defense Curl', 'Rock Throw', 'Magnitude'] },
                    { name: 'onix',       ability: 'Rock Head',    item: 'Sitrus Berry',moves: ['Rock Throw', 'Bind', 'Stealth Rock', 'Screech'] },
                    { name: 'rhyhorn',    ability: 'Rock Head',    item: '',            moves: ['Horn Attack', 'Stomp', 'Rock Blast', 'Bulldoze'] },
                ]
            },
            hard: {
                pokemon: [
                    { name: 'golem',      ability: 'Rock Head',    item: 'Leftovers',   moves: ['Rock Blast', 'Earthquake', 'Stealth Rock', 'Explosion'] },
                    { name: 'onix',       ability: 'Sturdy',       item: 'Focus Sash',  moves: ['Stealth Rock', 'Gyro Ball', 'Rock Tomb', 'Bind'] },
                    { name: 'rhyhorn',    ability: 'Rock Head',    item: 'Choice Band', moves: ['Horn Attack', 'Stomp', 'Megahorn', 'Earthquake'] },
                    { name: 'omastar',    ability: 'Shell Armor',  item: 'Sitrus Berry',moves: ['Ancient Power', 'Water Gun', 'Spike Cannon', 'Withdraw'] },
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
        difficulties: {}
    },

    {
        id: 'cie',
        name: 'Cie',
        title: '',
        region: 'Kanto',
        location: 'Fluffles Wonderland',
        difficulties: {}
    },

    {
        id: 'erika',
        name: 'Erika',
        title: '',
        region: 'Kanto',
        location: 'Viridian Maze',
        difficulties: {}
    },

    {
        id: 'george',
        name: 'George',
        title: '',
        region: 'Kanto',
        location: 'Pewter Jail',
        difficulties: {}
    },

    {
        id: 'guardian-entei',
        name: 'Guardian (Entei)',
        title: '',
        region: 'Kanto',
        location: 'Route 25 (Route 25 Cave)',
        difficulties: {}
    },

    {
        id: 'jessie-james',
        name: 'Jessie & James',
        title: '',
        region: 'Kanto',
        location: 'Celadon City',
        difficulties: {}
    },

    {
        id: 'klohver',
        name: 'Klohver',
        title: '',
        region: 'Kanto',
        location: 'Pinkan Island Meadow',
        difficulties: {}
    },

    {
        id: 'koichi',
        name: 'Koichi',
        title: '',
        region: 'Kanto',
        location: 'Saffron Dojo',
        difficulties: {}
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
        difficulties: {}
    },

    {
        id: 'bruno',
        name: 'Bruno',
        title: '',
        region: 'Johto',
        location: 'Mt. Mortar Lower Cave',
        difficulties: {}
    },

    {
        id: 'bugsy',
        name: 'Bugsy',
        title: '',
        region: 'Johto',
        location: 'Amazon Forest',
        difficulties: {}
    },

    {
        id: 'gamers-pewdie-diepy',
        name: 'Gamers Pewdie and Diepy',
        title: '',
        region: 'Johto',
        location: 'Goldenrod Gaming Corner',
        difficulties: {}
    },

    {
        id: 'guardian-suicune',
        name: 'Guardian (Suicune)',
        title: '',
        region: 'Johto',
        location: 'Lake Of Rage (Secluded Lake)',
        difficulties: {}
    },

    {
        id: 'lance-dragons-shrine',
        name: 'Lance (Dragons Shrine)',
        title: '',
        region: 'Johto',
        location: 'Dragons Shrine',
        difficulties: {}
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
        difficulties: {}
    },

    {
        id: 'guardian-raikou',
        name: 'Guardian (Raikou)',
        title: '',
        region: 'Hoenn',
        location: 'Route 110 (Secret Base Alpha)',
        difficulties: {}
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
        difficulties: {}
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
