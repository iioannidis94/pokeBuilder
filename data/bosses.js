// --- data/bosses.js : Boss Trainer Data ---
// Δομή: κάθε boss έχει id, name, title, και difficulties (easy / medium / hard).
// Κάθε difficulty περιέχει μια λίστα από Pokémon με name, ability, item, και moves (έως 4).
// Κάποιοι boss έχουν 3 επίπεδα δυσκολίας, άλλοι 2 ή 1.
//
// Παράδειγμα δομής (placeholder — τα πραγματικά δεδομένα θα δοθούν αργότερα):
//
// {
//   id: 'trainer-id',
//   name: 'Trainer Name',
//   title: 'Trainer Title / Class',
//   difficulties: {
//     easy:   { pokemon: [ { name, ability, item, moves: [] } ] },
//     medium: { pokemon: [ { name, ability, item, moves: [] } ] },
//     hard:   { pokemon: [ { name, ability, item, moves: [] } ] },
//   }
// }

const BOSSES = [
    // ─── PLACEHOLDER BOSS 1 ────────────────────────────────────────────────
    {
        id: 'brock',
        name: 'Brock',
        title: 'Pewter City Gym Leader',
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

    // ─── PLACEHOLDER BOSS 2 ────────────────────────────────────────────────
    {
        id: 'misty',
        name: 'Misty',
        title: 'Cerulean City Gym Leader',
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

    // ─── PLACEHOLDER BOSS 3 ────────────────────────────────────────────────
    {
        id: 'lt-surge',
        name: 'Lt. Surge',
        title: 'Vermilion City Gym Leader',
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
];
