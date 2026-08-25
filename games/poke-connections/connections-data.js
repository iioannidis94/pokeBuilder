const CONNECTIONS_PUZZLES = [
    {
        id: 1,
        groups: [
            { theme: "Baby Pokémon", difficulty: "easy", members: ["Pichu", "Cleffa", "Igglybuff", "Togepi"] },
            { theme: "Evolve with a Moon Stone", difficulty: "medium", members: ["Nidorina", "Nidorino", "Clefairy", "Jigglypuff"] },
            { theme: "Can learn SURF (Non-Water)", difficulty: "hard", members: ["Rhydon", "Nidoking", "Snorlax", "Aggron"] },
            { theme: "Have multiple heads", difficulty: "tricky", members: ["Doduo", "Dodrio", "Exeggcute", "Weezing"] }
        ]
    },
    {
        id: 2,
        groups: [
            { theme: "Fossil Pokémon", difficulty: "easy", members: ["Omanyte", "Kabuto", "Aerodactyl", "Cranidos"] },
            { theme: "Immune to Ground (Type/Ability)", difficulty: "medium", members: ["Pidgey", "Gastly", "Gengar", "Rotom"] },
            { theme: "Eeveelutions", difficulty: "hard", members: ["Vaporeon", "Jolteon", "Flareon", "Espeon"] },
            { theme: "Single-stage Pokémon (No Evolutions)", difficulty: "tricky", members: ["Pinsir", "Tauros", "Lapras", "Ditto"] }
        ]
    },
    {
        id: 3,
        groups: [
            { theme: "Electric Starters / Rodents", difficulty: "easy", members: ["Pichu", "Pikachu", "Raichu", "Plusle"] },
            { theme: "Legendary Trios (Kanto Birds)", difficulty: "medium", members: ["Articuno", "Zapdos", "Moltres", "Lugia"] },
            { theme: "Pure Normal Type", difficulty: "hard", members: ["Rattata", "Snorlax", "Tauros", "Ditto"] },
            { theme: "Have Whiskers", difficulty: "tricky", members: ["Rattata", "Meowth", "Machop", "Magikarp"] }
        ]
    },
    {
        id: 4,
        groups: [
            { theme: "Kanto Starter Final Evolutions", difficulty: "easy", members: ["Venusaur", "Charizard", "Blastoise", "Pikachu"] },
            { theme: "Legendary Beasts (Johto)", difficulty: "medium", members: ["Raikou", "Entei", "Suicune", "Lugia"] },
            { theme: "Dual Ghost Types", difficulty: "hard", members: ["Gastly", "Haunter", "Gengar", "Sableye"] },
            { theme: "Hold items in their hands/tails", difficulty: "tricky", members: ["Abra", "Machop", "Cubone", "Sneasel"] }
        ]
    },
    {
        id: 5,
        groups: [
            { theme: "Rock / Ground types", difficulty: "easy", members: ["Geodude", "Graveler", "Golem", "Rhyhorn"] },
            { theme: "Plant-like Pokémon", difficulty: "medium", members: ["Bulbasaur", "Oddish", "Bellsprout", "Tangela"] },
            { theme: "Psychic Cats / Foxes", difficulty: "hard", members: ["Abra", "Kadabra", "Alakazam", "Espeon"] },
            { theme: "Are round and pink", difficulty: "tricky", members: ["Clefairy", "Jigglypuff", "Chansey", "Ditto"] }
        ]
    },
    {
        id: 6,
        groups: [
            { theme: "Bug Types from Gen 1", difficulty: "easy", members: ["Caterpie", "Weedle", "Paras", "Venonat"] },
            { theme: "Poison/Ground Types", difficulty: "medium", members: ["Nidoqueen", "Nidoking", "Quagsire", "Clodsire"] },
            { theme: "Dragon/Flying Types", difficulty: "hard", members: ["Dragonite", "Salamence", "Rayquaza", "Noivern"] },
            { theme: "Known to wear skulls or helmets", difficulty: "tricky", members: ["Cubone", "Marowak", "Slowbro", "Escavalier"] }
        ]
    },
    {
        id: 7,
        groups: [
            { theme: "Fire Starters", difficulty: "easy", members: ["Charmander", "Cyndaquil", "Torchic", "Chimchar"] },
            { theme: "Hoenn Weather Trio", difficulty: "medium", members: ["Kyogre", "Groudon", "Rayquaza", "Latios"] },
            { theme: "Ghost Types", difficulty: "hard", members: ["Gastly", "Misdreavus", "Sableye", "Shuppet"] },
            { theme: "Must-Trade to Evolve", difficulty: "tricky", members: ["Kadabra", "Machoke", "Graveler", "Haunter"] }
        ]
    },
    {
        id: 8,
        groups: [
            { theme: "Water Starters", difficulty: "easy", members: ["Squirtle", "Totodile", "Mudkip", "Piplup"] },
            { theme: "Sinnoh Lake Guardians", difficulty: "medium", members: ["Uxie", "Mesprit", "Azelf", "Cresselia"] },
            { theme: "Steel Types", difficulty: "hard", members: ["Magnemite", "Steelix", "Scizor", "Skarmory"] },
            { theme: "Have a tail that is on fire", difficulty: "tricky", members: ["Charmander", "Charmeleon", "Cyndaquil", "Torchic"] }
        ]
    },
    {
        id: 9,
        groups: [
            { theme: "Grass Starters", difficulty: "easy", members: ["Bulbasaur", "Chikorita", "Treecko", "Turtwig"] },
            { theme: "Sinnoh Creation Trio", difficulty: "medium", members: ["Dialga", "Palkia", "Giratina", "Arceus"] },
            { theme: "Ice Types", difficulty: "hard", members: ["Articuno", "Swinub", "Delibird", "Snorunt"] },
            { theme: "Look like plants but are not Grass type", difficulty: "tricky", members: ["Exeggutor", "Parasect", "Sudowoodo", "Amoonguss"] }
        ]
    },
    {
        id: 10,
        groups: [
            { theme: "Pikachu Clones", difficulty: "easy", members: ["Plusle", "Minun", "Pachirisu", "Emolga"] },
            { theme: "Unova Swords of Justice", difficulty: "medium", members: ["Cobalion", "Terrakion", "Virizion", "Keldeo"] },
            { theme: "Fighting Types", difficulty: "hard", members: ["Mankey", "Machop", "Hitmonlee", "Hitmonchan"] },
            { theme: "Have clouds around their body", difficulty: "tricky", members: ["Koffing", "Weezing", "Tornadus", "Thundurus"] }
        ]
    },
    {
        id: 11,
        groups: [
            { theme: "Normal/Flying Birds (Route 1)", difficulty: "easy", members: ["Pidgey", "Spearow", "Hoothoot", "Taillow"] },
            { theme: "Kalos Legendary Duo", difficulty: "medium", members: ["Xerneas", "Yveltal", "Zygarde", "Diancie"] },
            { theme: "Dragon Types", difficulty: "hard", members: ["Dratini", "Dragonair", "Dragonite", "Bagon"] },
            { theme: "Have a star shape on their body", difficulty: "tricky", members: ["Staryu", "Starmie", "Clefairy", "Jirachi"] }
        ]
    },
    {
        id: 12,
        groups: [
            { theme: "Evolve with Thunder Stone", difficulty: "easy", members: ["Pikachu", "Raichu", "Eevee", "Jolteon"] },
            { theme: "Alola Guardian Deities", difficulty: "medium", members: ["Tapu-Koko", "Tapu-Lele", "Tapu-Bulu", "Tapu-Fini"] },
            { theme: "Dark Types", difficulty: "hard", members: ["Umbreon", "Murkrow", "Houndour", "Tyranitar"] },
            { theme: "Carry a bone or stick weapon", difficulty: "tricky", members: ["Cubone", "Marowak", "Farfetchd", "Thwackey"] }
        ]
    },
    {
        id: 13,
        groups: [
            { theme: "Evolve with Water Stone", difficulty: "easy", members: ["Poliwhirl", "Shellder", "Staryu", "Eevee"] },
            { theme: "Galar Legendary Heroes", difficulty: "medium", members: ["Zacian", "Zamazenta", "Eternatus", "Calyrex"] },
            { theme: "Fairy Types", difficulty: "hard", members: ["Clefairy", "Jigglypuff", "Togepi", "Snubbull"] },
            { theme: "Walk on four legs and have no evolution", difficulty: "tricky", members: ["Tauros", "Suicune", "Raikou", "Entei"] }
        ]
    },
    {
        id: 14,
        groups: [
            { theme: "Evolve with Fire Stone", difficulty: "easy", members: ["Vulpix", "Growlithe", "Eevee", "Pansage"] },
            { theme: "Galarian Birds", difficulty: "medium", members: ["Articuno", "Zapdos", "Moltres", "Lugia"] },
            { theme: "Poison Types", difficulty: "hard", members: ["Ekans", "Arbok", "Nidoran-F", "Zubat"] },
            { theme: "Known as 'The DNA Pokémon'", difficulty: "tricky", members: ["Mew", "Deoxys", "Rayquaza", "Kyurem"] }
        ]
    },
    {
        id: 15,
        groups: [
            { theme: "Evolve with Leaf Stone", difficulty: "easy", members: ["Gloom", "Weepinbell", "Exeggcute", "Nuzleaf"] },
            { theme: "Beasts of Sinnoh", difficulty: "medium", members: ["Dialga", "Palkia", "Giratina", "Uxie"] },
            { theme: "Psychic Types", difficulty: "hard", members: ["Abra", "Drowzee", "Mewtwo", "Mew"] },
            { theme: "Have an 'M' shape on their forehead", difficulty: "tricky", members: ["Meowth", "Mewtwo", "Mew", "Meditite"] }
        ]
    },
    {
        id: 16,
        groups: [
            { theme: "Nidoran Family Members", difficulty: "easy", members: ["Nidoran-F", "Nidorina", "Nidoran-M", "Nidorino"] },
            { theme: "Tapu Guardians", difficulty: "medium", members: ["Tapu-Koko", "Tapu-Lele", "Tapu-Bulu", "Tapu-Fini"] },
            { theme: "Rock Types", difficulty: "hard", members: ["Geodude", "Onix", "Rhyhorn", "Sudowoodo"] },
            { theme: "Can change form during battle", difficulty: "tricky", members: ["Castform", "Deoxys", "Rotom", "Darmanitan"] }
        ]
    },
    {
        id: 17,
        groups: [
            { theme: "Poliwag Evolution Line", difficulty: "easy", members: ["Poliwag", "Poliwhirl", "Poliwrath", "Politoed"] },
            { theme: "Tao Trio (Unova)", difficulty: "medium", members: ["Reshiram", "Zekrom", "Kyurem", "Victini"] },
            { theme: "Ground Types", difficulty: "hard", members: ["Sandshrew", "Diglett", "Cubone", "Gligar"] },
            { theme: "Resemble eggs or have egg themes", difficulty: "tricky", members: ["Exeggcute", "Chansey", "Togepi", "Bonsly"] }
        ]
    },
    {
        id: 18,
        groups: [
            { theme: "Oddish Evolution Line", difficulty: "easy", members: ["Oddish", "Gloom", "Vileplume", "Bellossom"] },
            { theme: "Forces of Nature (Genies)", difficulty: "medium", members: ["Tornadus", "Thundurus", "Landorus", "Enamorus"] },
            { theme: "Flying Types", difficulty: "hard", members: ["Zubat", "Pidgey", "Farfetchd", "Aerodactyl"] },
            { theme: "Have a ring or hoop on their body", difficulty: "tricky", members: ["Hoopa", "Chingling", "Bronzong", "Milotic"] }
        ]
    },
    {
        id: 19,
        groups: [
            { theme: "Gastly Evolution Line", difficulty: "easy", members: ["Gastly", "Haunter", "Gengar", "Mega-Gengar"] },
            { theme: "Swords of Justice Members", difficulty: "medium", members: ["Cobalion", "Terrakion", "Virizion", "Keldeo"] },
            { theme: "Water Types", difficulty: "hard", members: ["Psyduck", "Poliwag", "Tentacool", "Horsea"] },
            { theme: "Plant Pokémon that look like walking trees or bushes", difficulty: "tricky", members: ["Sudowoodo", "Sudowoodo", "Bonsly", "Trevenant"] }
        ]
    },
    {
        id: 20,
        groups: [
            { theme: "Machop Evolution Line", difficulty: "easy", members: ["Machop", "Machoke", "Machamp", "Mega-Lucario"] },
            { theme: "Legendary Titans", difficulty: "medium", members: ["Regirock", "Regice", "Registeel", "Regigigas"] },
            { theme: "Fire Types", difficulty: "hard", members: ["Charmander", "Vulpix", "Growlithe", "Ponyta"] },
            { theme: "Have a shell protecting their back", difficulty: "tricky", members: ["Squirtle", "Shellder", "Lapras", "Torkoal"] }
        ]
    },
    {
        id: 21,
        groups: [
            { theme: "Abra Evolution Line", difficulty: "easy", members: ["Abra", "Kadabra", "Alakazam", "Mega-Alakazam"] },
            { theme: "Creation Trio", difficulty: "medium", members: ["Dialga", "Palkia", "Giratina", "Arceus"] },
            { theme: "Grass Types", difficulty: "hard", members: ["Bulbasaur", "Oddish", "Paras", "Bellsprout"] },
            { theme: "Have wings made of fire or plasma", difficulty: "tricky", members: ["Moltres", "Charizard", "Volcarona", "Talonflame"] }
        ]
    },
    {
        id: 22,
        groups: [
            { theme: "Geodude Evolution Line", difficulty: "easy", members: ["Geodude", "Graveler", "Golem", "Rhydon"] },
            { theme: "Weather Trio", difficulty: "medium", members: ["Kyogre", "Groudon", "Rayquaza", "Latias"] },
            { theme: "Electric Types", difficulty: "hard", members: ["Pikachu", "Magnemite", "Voltorb", "Electabuzz"] },
            { theme: "Are completely invisible or hidden (Ghost/Phantom)", difficulty: "tricky", members: ["Gastly", "Kecleon", "Zoroark", "Mimikyu"] }
        ]
    },
    {
        id: 23,
        groups: [
            { theme: "Ghoul / Ghost Friends", difficulty: "easy", members: ["Gastly", "Haunter", "Gengar", "Misdreavus"] },
            { theme: "Lake Guardians", difficulty: "medium", members: ["Uxie", "Mesprit", "Azelf", "Cresselia"] },
            { theme: "Normal Types", difficulty: "hard", members: ["Rattata", "Meowth", "Doduo", "Snorlax"] },
            { theme: "Wear a mask or disguise", difficulty: "tricky", members: ["Cubone", "Yamask", "Mimikyu", "Ogerpon"] }
        ]
    },
    {
        id: 24,
        groups: [
            { theme: "Cat Pokémon", difficulty: "easy", members: ["Meowth", "Persian", "Espeon", "Umbreon"] },
            { theme: "Galar Legendary Heroes", difficulty: "medium", members: ["Zacian", "Zamazenta", "Eternatus", "Urshifu"] },
            { theme: "Bug Types", difficulty: "hard", members: ["Caterpie", "Pinsir", "Scyther", "Heracross"] },
            { theme: "Can stretch their bodies or necks infinitely", difficulty: "tricky", members: ["Ekans", "Girafarig", "Alolan-Exeggutor", "Wiglett"] }
        ]
    },
    {
        id: 25,
        groups: [
            { theme: "Dog Pokémon", difficulty: "easy", members: ["Growlithe", "Arcanine", "Snubbull", "Granbull"] },
            { theme: "Unova Dragons", difficulty: "medium", members: ["Reshiram", "Zekrom", "Kyurem", "Hydreigon"] },
            { theme: "Fighting Types", difficulty: "hard", members: ["Mankey", "Hitmonlee", "Hitmonchan", "Blaziken"] },
            { theme: "Have fists specialized for punching", difficulty: "tricky", members: ["Hitmonchan", "Electabuzz", "Magmar", "Melmetal"] }
        ]
    },
    {
        id: 26,
        groups: [
            { theme: "Turtle / Tortoise Pokémon", difficulty: "easy", members: ["Squirtle", "Wartortle", "Blastoise", "Torkoal"] },
            { theme: "Sinnoh Mythicals", difficulty: "medium", members: ["Darkrai", "Shaymin", "Arceus", "Phione"] },
            { theme: "Poison Types", difficulty: "hard", members: ["Weedle", "Ekans", "Nidoran-F", "Grimer"] },
            { theme: "Have a bulb or plant seed on their back from birth", difficulty: "tricky", members: ["Bulbasaur", "Ivysaur", "Venusaur", "Sunkern"] }
        ]
    },
    {
        id: 27,
        groups: [
            { theme: "Bird Pokémon", difficulty: "easy", members: ["Pidgey", "Spearow", "Farfetchd", "Doduo"] },
            { theme: "Johto Beasts", difficulty: "medium", members: ["Raikou", "Entei", "Suicune", "Ho-oh"] },
            { theme: "Flying Types", difficulty: "hard", members: ["Zubat", "Aerodactyl", "Articuno", "Zapdos"] },
            { theme: "Are born with a spoon in their hand", difficulty: "tricky", members: ["Abra", "Kadabra", "Alakazam", "Mew"] }
        ]
    },
    {
        id: 28,
        groups: [
            { theme: "Fish Pokémon", difficulty: "easy", members: ["Goldeen", "Seaking", "Magikarp", "Gyarados"] },
            { theme: "Unova Mythicals", difficulty: "medium", members: ["Victini", "Keldeo", "Meloetta", "Genesect"] },
            { theme: "Dragon Types", difficulty: "hard", members: ["Dratini", "Kingdra", "Rayquaza", "Bagon"] },
            { theme: "Have a spiral shell on their front", difficulty: "tricky", members: ["Omanyte", "Omastar", "Poliwag", "Whirlipede"] }
        ]
    },
    {
        id: 29,
        groups: [
            { theme: "Rodent Pokémon", difficulty: "easy", members: ["Rattata", "Raticate", "Pikachu", "Sandshrew"] },
            { theme: "Kalos Mythicals", difficulty: "medium", members: ["Diancie", "Hoopa", "Volcanion", "Xerneas"] },
            { theme: "Rock Types", difficulty: "hard", members: ["Geodude", "Aerodactyl", "Sudowoodo", "Tyranitar"] },
            { theme: "Have rocks or boulders embedded in their skin", difficulty: "tricky", members: ["Geodude", "Graveler", "Golem", "Regirock"] }
        ]
    },
    {
        id: 30,
        groups: [
            { theme: "Snake / Serpent Pokémon", difficulty: "easy", members: ["Ekans", "Arbok", "Dratini", "Dragonair"] },
            { theme: "Alola Guardians", difficulty: "medium", members: ["Tapu-Koko", "Tapu-Lele", "Tapu-Bulu", "Tapu-Fini"] },
            { theme: "Ghost Types", difficulty: "hard", members: ["Gastly", "Gengar", "Misdreavus", "Sableye"] },
            { theme: "Have arms shaped like giant spoons or blades", difficulty: "tricky", members: ["Alakazam", "Farfetchd", "Scizor", "Gallade"] }
        ]
    },
    {
        id: 31,
        groups: [
            { theme: "Bat Pokémon", difficulty: "easy", members: ["Zubat", "Golbat", "Crobat", "Noibat"] },
            { theme: "Galarian Legendary Birds", difficulty: "medium", members: ["Articuno", "Zapdos", "Moltres", "Calyrex"] },
            { theme: "Steel Types", difficulty: "hard", members: ["Magnemite", "Steelix", "Scizor", "Aron"] },
            { theme: "Look like small human children or fairies", difficulty: "tricky", members: ["Jynx", "Mr-Mime", "Smoochum", "Mime-Jr"] }
        ]
    },
    {
        id: 32,
        groups: [
            { theme: "Horse / Equine Pokémon", difficulty: "easy", members: ["Ponyta", "Rapidash", "Blitzle", "Zebstrika"] },
            { theme: "Sinnoh Creation Trio", difficulty: "medium", members: ["Dialga", "Palkia", "Giratina", "Manaphy"] },
            { theme: "Ice Types", difficulty: "hard", members: ["Articuno", "Lapras", "Jynx", "Swinub"] },
            { theme: "Have a permanent cloud of gas around them", difficulty: "tricky", members: ["Koffing", "Weezing", "Gastly", "Haunter"] }
        ]
    },
    {
        id: 33,
        groups: [
            { theme: "Turtle-like / Shell Pokémon", difficulty: "easy", members: ["Squirtle", "Blastoise", "Lapras", "Torkoal"] },
            { theme: "Hoenn Weather Trio", difficulty: "medium", members: ["Kyogre", "Groudon", "Rayquaza", "Jirachi"] },
            { theme: "Psychic Types", difficulty: "hard", members: ["Abra", "Drowzee", "Exeggcute", "Mewtwo"] },
            { theme: "Have tails shaped like stars or celestial objects", difficulty: "tricky", members: ["Staryu", "Starmie", "Clefairy", "Jirachi"] }
        ]
    },
    {
        id: 34,
        groups: [
            { theme: "Crab / Crustacean Pokémon", difficulty: "easy", members: ["Krabby", "Kingler", "Corphish", "Crawdaunt"] },
            { theme: "Unova Swords of Justice", difficulty: "medium", members: ["Cobalion", "Terrakion", "Virizion", "Kyurem"] },
            { theme: "Dark Types", difficulty: "hard", members: ["Umbreon", "Murkrow", "Sneasel", "Houndoom"] },
            { theme: "Are completely spherical / round bodies", difficulty: "tricky", members: ["Voltorb", "Electrode", "Jigglypuff", "Wigglytuff"] }
        ]
    },
    {
        id: 35,
        groups: [
            { theme: "Mushroom Pokémon", difficulty: "easy", members: ["Paras", "Parasect", "Foongus", "Amoonguss"] },
            { theme: "Johto Legendary Dogs", difficulty: "medium", members: ["Raikou", "Entei", "Suicune", "Celebi"] },
            { theme: "Dragon Types", difficulty: "hard", members: ["Dratini", "Dragonite", "Kingdra", "Bagon"] },
            { theme: "Wear bones as helmets or accessories", difficulty: "tricky", members: ["Cubone", "Marowak", "Alolan-Marowak", "Kangaskhan"] }
        ]
    },
    {
        id: 36,
        groups: [
            { theme: "Pig / Swine Pokémon", difficulty: "easy", members: ["Swinub", "Piloswine", "Mamoswine", "Spoink"] },
            { theme: "Sinnoh Lake Trio", difficulty: "medium", members: ["Uxie", "Mesprit", "Azelf", "Dialga"] },
            { theme: "Fighting Types", difficulty: "hard", members: ["Mankey", "Machop", "Hitmonlee", "Hitmonchan"] },
            { theme: "Have a gemstone embedded in their forehead or body", difficulty: "tricky", members: ["Staryu", "Starmie", "Sableye", "Diancie"] }
        ]
    },
    {
        id: 37,
        groups: [
            { theme: "Fox Pokémon", difficulty: "easy", members: ["Vulpix", "Ninetales", "Eevee", "Zorua"] },
            { theme: "Unova Tao Trio", difficulty: "medium", members: ["Reshiram", "Zekrom", "Kyurem", "Genesect"] },
            { theme: "Water Types", difficulty: "hard", members: ["Squirtle", "Psyduck", "Poliwag", "Tentacool"] },
            { theme: "Have hands shaped like boxing gloves", difficulty: "tricky", members: ["Hitmonchan", "Electabuzz", "Magmar", "Ledian"] }
        ]
    },
    {
        id: 38,
        groups: [
            { theme: "Seal / Sea Lion Pokémon", difficulty: "easy", members: ["Seel", "Dewgong", "Spheal", "Sealeo"] },
            { theme: "Kalos Legendary Trio", difficulty: "medium", members: ["Xerneas", "Yveltal", "Zygarde", "Volcanion"] },
            { theme: "Grass Types", difficulty: "hard", members: ["Bulbasaur", "Oddish", "Paras", "Bellsprout"] },
            { theme: "Are famous for sleeping constantly", difficulty: "tricky", members: ["Snorlax", "Slakoth", "Komala", "Drowzee"] }
        ]
    },
    {
        id: 39,
        groups: [
            { theme: "Monkey / Ape Pokémon", difficulty: "easy", members: ["Mankey", "Primeape", "Aipom", "Chimchar"] },
            { theme: "Galar Legendary Trio", difficulty: "medium", members: ["Zacian", "Zamazenta", "Eternatus", "Calyrex"] },
            { theme: "Fire Types", difficulty: "hard", members: ["Charmander", "Vulpix", "Growlithe", "Ponyta"] },
            { theme: "Have bodies made of pure electricity or magnets", difficulty: "tricky", members: ["Magnemite", "Magneton", "Voltorb", "Electrode"] }
        ]
    },
    {
        id: 40,
        groups: [
            { theme: "Elephant / Mammoth Pokémon", difficulty: "easy", members: ["Phanpy", "Donphan", "Cufant", "Copperajah"] },
            { theme: "Sinnoh Creation Trio", difficulty: "medium", members: ["Dialga", "Palkia", "Giratina", "Cresselia"] },
            { theme: "Electric Types", difficulty: "hard", members: ["Pikachu", "Magnemite", "Voltorb", "Electabuzz"] },
            { theme: "Have shells or carapaces with spike patterns", difficulty: "tricky", members: ["Cloyster", "Crustle", "Pineco", "Forretress"] }
        ]
    },
    {
        id: 41,
        groups: [
            { theme: "Bear Pokémon", difficulty: "easy", members: ["Teddiursa", "Ursaring", "Spinda", "Bewear"] },
            { theme: "Hoenn Weather Trio", difficulty: "medium", members: ["Kyogre", "Groudon", "Rayquaza", "Regirock"] },
            { theme: "Normal Types", difficulty: "hard", members: ["Rattata", "Meowth", "Snorlax", "Tauros"] },
            { theme: "Can learn moves using their psychic mind only", difficulty: "tricky", members: ["Abra", "Mewtwo", "Drowzee", "Unown"] }
        ]
    },
    {
        id: 42,
        groups: [
            { theme: "Dragon Pokémon", difficulty: "easy", members: ["Dratini", "Dragonair", "Dragonite", "Bagon"] },
            { theme: "Johto Legendary Beasts", difficulty: "medium", members: ["Raikou", "Entei", "Suicune", "Lugis"] },
            { theme: "Flying Types", difficulty: "hard", members: ["Pidgey", "Zubat", "Farfetchd", "Aerodactyl"] },
            { theme: "Have vines or whip-like appendages", difficulty: "tricky", members: ["Bulbasaur", "Tangela", "Bellsprout", "Roselia"] }
        ]
    },
    {
        id: 43,
        groups: [
            { theme: "Mole / Burrowing Pokémon", difficulty: "easy", members: ["Diglett", "Dugtrio", "Drilbur", "Excadrill"] },
            { theme: "Unova Swords of Justice", difficulty: "medium", members: ["Cobalion", "Terrakion", "Virizion", "Victini"] },
            { theme: "Ground Types", difficulty: "hard", members: ["Sandshrew", "Diglett", "Cubone", "Gligar"] },
            { theme: "Have faces hidden entirely in shadow", difficulty: "tricky", members: ["Diglett", "Dugtrio", "Tangela", "Mimikyu"] }
        ]
    },
    {
        id: 44,
        groups: [
            { theme: "Stingray / Aquatic Mammals", difficulty: "easy", members: ["Mantine", "Mantyke", "Lapras", "Wailmer"] },
            { theme: "Alola Guardian Deities", difficulty: "medium", members: ["Tapu-Koko", "Tapu-Lele", "Tapu-Bulu", "Tapu-Fini"] },
            { theme: "Psychic Types", difficulty: "hard", members: ["Abra", "Drowzee", "Mewtwo", "Mew"] },
            { theme: "Look like everyday household objects", difficulty: "tricky", members: ["Voltorb", "Magnemite", "Koffing", "Klefki"] }
        ]
    },
    {
        id: 45,
        groups: [
            { theme: "Kangaroo / Marsupial Pokémon", difficulty: "easy", members: ["Kangaskhan", "Mega-Kangaskhan", "Spinda", "Teddiursa"] },
            { theme: "Sinnoh Lake Trio", difficulty: "medium", members: ["Uxie", "Mesprit", "Azelf", "Dialga"] },
            { theme: "Poison Types", difficulty: "hard", members: ["Ekans", "Arbok", "Nidoran-F", "Grimer"] },
            { theme: "Have tails ending in heavy iron balls or clubs", difficulty: "tricky", members: ["Donphan", "Steelix", "Slowbro", "Minior"] }
        ]
    },
    {
        id: 46,
        groups: [
            { theme: "Turtle / Reptile Pets", difficulty: "easy", members: ["Squirtle", "Torkoal", "Lapras", "Shuckle"] },
            { theme: "Kalos Legendary Duo", difficulty: "medium", members: ["Xerneas", "Yveltal", "Zygarde", "Hoopa"] },
            { theme: "Bug Types", difficulty: "hard", members: ["Caterpie", "Weedle", "Paras", "Venonat"] },
            { theme: "Have a body made of liquid or goo", difficulty: "tricky", members: ["Grimer", "Muk", "Ditto", "Goodra"] }
        ]
    },
    {
        id: 47,
        groups: [
            { theme: "Dinosaur-like Pokémon", difficulty: "easy", members: ["Bulbasaur", "Chikorita", "Treecko", "Turtwig"] },
            { theme: "Galarian Legendary Birds", difficulty: "medium", members: ["Articuno", "Zapdos", "Moltres", "Zacian"] },
            { theme: "Rock Types", difficulty: "hard", members: ["Geodude", "Onix", "Rhyhorn", "Sudowoodo"] },
            { theme: "Have eyes completely covered by hair or leaves", difficulty: "tricky", members: ["Tangela", "Budew", "Sableye", "Rowlet"] }
        ]
    },
    {
        id: 48,
        groups: [
            { theme: "Evolve with Thunder Stone", difficulty: "easy", members: ["Pikachu", "Raichu", "Eevee", "Jolteon"] },
            { theme: "Sinnoh Creation Trio", difficulty: "medium", members: ["Dialga", "Palkia", "Giratina", "Arceus"] },
            { theme: "Water Types", difficulty: "hard", members: ["Squirtle", "Psyduck", "Poliwag", "Tentacool"] },
            { theme: "Have hands with only three fingers/claws", difficulty: "tricky", members: ["Charmander", "Squirtle", "Mewtwo", "Sneasel"] }
        ]
    },
    {
        id: 49,
        groups: [
            { theme: "Evolve with Fire Stone", difficulty: "easy", members: ["Vulpix", "Growlithe", "Eevee", "Pansage"] },
            { theme: "Unova Tao Trio", difficulty: "medium", members: ["Reshiram", "Zekrom", "Kyurem", "Victini"] },
            { theme: "Fire Types", difficulty: "hard", members: ["Charmander", "Vulpix", "Growlithe", "Ponyta"] },
            { theme: "Have ears shaped like radar dishes or speakers", difficulty: "tricky", members: ["Audino", "Exploud", "Noibat", "Toxtricity"] }
        ]
    },
    {
        id: 50,
        groups: [
            { theme: "Evolve with Leaf Stone", difficulty: "easy", members: ["Gloom", "Weepinbell", "Exeggcute", "Nuzleaf"] },
            { theme: "Johto Legendary Beasts", difficulty: "medium", members: ["Raikou", "Entei", "Suicune", "Ho-oh"] },
            { theme: "Electric Types", difficulty: "hard", members: ["Pikachu", "Magnemite", "Voltorb", "Electabuzz"] },
            { theme: "Are completely pink from head to toe", difficulty: "tricky", members: ["Clefairy", "Jigglypuff", "Chansey", "Luvdisc"] }
        ]
    }
];
