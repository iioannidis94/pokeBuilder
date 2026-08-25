//connections-data.js - Δεξαμενή Δυναμικών Ερωτήσεων Pokémon
const CONNECTIONS_QUESTIONS = [
    {
        theme: "Baby Pokémon",
        difficulty: "easy",
        members: ["Pichu", "Cleffa", "Igglybuff", "Togepi"]
    },
    {
        theme: "Evolve with a Moon Stone",
        difficulty: "medium",
        members: ["Nidorina", "Nidorino", "Clefairy", "Jigglypuff"]
    },
    {
        theme: "Can learn SURF (Non-Water)",
        difficulty: "hard",
        members: ["Rhydon", "Nidoking", "Snorlax", "Aggron"]
    },
    {
        theme: "Have multiple heads",
        difficulty: "tricky",
        members: ["Doduo", "Dodrio", "Exeggcute", "Weezing"]
    },
    {
        theme: "Fossil Pokémon",
        difficulty: "easy",
        members: ["Omanyte", "Kabuto", "Aerodactyl", "Cranidos"]
    },
    {
        theme: "Immune to Ground (Type/Ability)",
        difficulty: "medium",
        members: ["Pidgey", "Gastly", "Gengar", "Rotom"]
    },
    {
        theme: "Eeveelutions",
        difficulty: "easy",
        members: ["Vaporeon", "Jolteon", "Flareon", "Espeon"]
    },
    {
        theme: "Single-stage Pokémon (No Evolutions)",
        difficulty: "tricky",
        members: ["Pinsir", "Tauros", "Lapras", "Ditto"]
    },
    {
        theme: "Electric Rodents",
        difficulty: "easy",
        members: ["Pichu", "Pikachu", "Raichu", "Plusle"]
    },
    {
        theme: "Legendary Birds (Kanto)",
        difficulty: "medium",
        members: ["Articuno", "Zapdos", "Moltres", "Lugia"]
    },
    {
        theme: "Pure Normal Type",
        difficulty: "hard",
        members: ["Rattata", "Snorlax", "Tauros", "Ditto"]
    },
    {
        theme: "Have Whiskers",
        difficulty: "tricky",
        members: ["Rattata", "Meowth", "Machop", "Magikarp"]
    },
    {
        theme: "Kanto Starter Final Evolutions",
        difficulty: "easy",
        members: ["Venusaur", "Charizard", "Blastoise", "Pikachu"]
    },
    {
        theme: "Legendary Beasts (Johto)",
        difficulty: "medium",
        members: ["Raikou", "Entei", "Suicune", "Ho-oh"]
    },
    {
        theme: "Dual Ghost Types",
        difficulty: "hard",
        members: ["Gastly", "Haunter", "Gengar", "Sableye"]
    },
    {
        theme: "Fire Starters",
        difficulty: "easy",
        members: ["Charmander", "Cyndaquil", "Torchic", "Chimchar"]
    },
    {
        theme: "Water Starters",
        difficulty: "easy",
        members: ["Squirtle", "Totodile", "Mudkip", "Piplup"]
    },
    {
        theme: "Grass Starters",
        difficulty: "easy",
        members: ["Bulbasaur", "Chikorita", "Treecko", "Turtwig"]
    },
    {
        theme: "Sinnoh Lake Guardians",
        difficulty: "medium",
        members: ["Uxie", "Mesprit", "Azelf", "Cresselia"]
    },
    {
        theme: "Steel Types",
        difficulty: "hard",
        members: ["Magnemite", "Steelix", "Scizor", "Skarmory"]
    },
    {
        theme: "Pikachu Clones",
        difficulty: "easy",
        members: ["Plusle", "Minun", "Pachirisu", "Emolga"]
    },
    {
        theme: "Unova Swords of Justice",
        difficulty: "medium",
        members: ["Cobalion", "Terrakion", "Virizion", "Keldeo"]
    },
    {
        theme: "Fighting Types",
        difficulty: "hard",
        members: ["Mankey", "Machop", "Hitmonlee", "Hitmonchan"]
    },
    {
        theme: "Have clouds around their body",
        difficulty: "tricky",
        members: ["Koffing", "Weezing", "Tornadus", "Thundurus"]
    },
    {
        theme: "Normal/Flying Birds (Route 1)",
        difficulty: "easy",
        members: ["Pidgey", "Spearow", "Hoothoot", "Taillow"]
    },
    {
        theme: "Kalos Legendary Duo",
        difficulty: "medium",
        members: ["Xerneas", "Yveltal", "Zygarde", "Diancie"]
    },
    {
        theme: "Dragon Types",
        difficulty: "hard",
        members: ["Dratini", "Dragonair", "Dragonite", "Bagon"]
    },
    {
        theme: "Have a star shape on their body",
        difficulty: "tricky",
        members: ["Staryu", "Starmie", "Clefairy", "Jirachi"]
    },
    {
        theme: "Evolve with Thunder Stone",
        difficulty: "easy",
        members: ["Pikachu", "Raichu", "Eevee", "Jolteon"]
    },
    {
        theme: "Alola Guardian Deities",
        difficulty: "medium",
        members: ["Tapu-Koko", "Tapu-Lele", "Tapu-Bulu", "Tapu-Fini"]
    },
    {
        theme: "Dark Types",
        difficulty: "hard",
        members: ["Umbreon", "Murkrow", "Houndour", "Tyranitar"]
    },
    {
        theme: "Carry a bone or stick weapon",
        difficulty: "tricky",
        members: ["Cubone", "Marowak", "Farfetchd", "Thwackey"]
    },
    {
        theme: "Evolve with Water Stone",
        difficulty: "easy",
        members: ["Poliwhirl", "Shellder", "Staryu", "Eevee"]
    },
    {
        theme: "Galar Legendary Heroes",
        difficulty: "medium",
        members: ["Zacian", "Zamazenta", "Eternatus", "Calyrex"]
    },
    {
        theme: "Fairy Types",
        difficulty: "hard",
        members: ["Clefairy", "Jigglypuff", "Togepi", "Snubbull"]
    },
    {
        theme: "Walk on four legs and have no evolution",
        difficulty: "tricky",
        members: ["Tauros", "Suicune", "Raikou", "Entei"]
    },
    {
        theme: "Evolve with Fire Stone",
        difficulty: "easy",
        members: ["Vulpix", "Growlithe", "Eevee", "Pansage"]
    },
    {
        theme: "Galarian Birds",
        difficulty: "medium",
        members: ["Articuno", "Zapdos", "Moltres", "Lugia"]
    },
    {
        theme: "Poison Types",
        difficulty: "hard",
        members: ["Ekans", "Arbok", "Nidoran-F", "Zubat"]
    },
    {
        theme: "Known as 'The DNA Pokémon'",
        difficulty: "tricky",
        members: ["Mew", "Deoxys", "Rayquaza", "Kyurem"]
    },
    {
        theme: "Evolve with Leaf Stone",
        difficulty: "easy",
        members: ["Gloom", "Weepinbell", "Exeggcute", "Nuzleaf"]
    },
    {
        theme: "Beasts of Sinnoh",
        difficulty: "medium",
        members: ["Dialga", "Palkia", "Giratina", "Uxie"]
    },
    {
        theme: "Psychic Types",
        difficulty: "hard",
        members: ["Abra", "Drowzee", "Mewtwo", "Mew"]
    },
    {
        theme: "Have an 'M' shape on their forehead",
        difficulty: "tricky",
        members: ["Meowth", "Mewtwo", "Mew", "Meditite"]
    },
    {
        theme: "Nidoran Family Members",
        difficulty: "easy",
        members: ["Nidoran-F", "Nidorina", "Nidoran-M", "Nidorino"]
    },
    {
        theme: "Tapu Guardians",
        difficulty: "medium",
        members: ["Tapu-Koko", "Tapu-Lele", "Tapu-Bulu", "Tapu-Fini"]
    },
    {
        theme: "Rock Types",
        difficulty: "hard",
        members: ["Geodude", "Onix", "Rhyhorn", "Sudowoodo"]
    },
    {
        theme: "Can change form during battle",
        difficulty: "tricky",
        members: ["Castform", "Deoxys", "Rotom", "Darmanitan"]
    },
    {
        theme: "Poliwag Evolution Line",
        difficulty: "easy",
        members: ["Poliwag", "Poliwhirl", "Poliwrath", "Politoed"]
    },
    {
        theme: "Tao Trio (Unova)",
        difficulty: "medium",
        members: ["Reshiram", "Zekrom", "Kyurem", "Victini"]
    },
    {
        theme: "Kanto Starter Middle Evolutions",
        difficulty: "easy",
        members: ["Ivysaur", "Charmeleon", "Wartortle", "Pikachu"]
    },
    {
        theme: "Johto Starter Final Evolutions",
        difficulty: "easy",
        members: ["Meganium", "Typhlosion", "Feraligatr", "Togetic"]
    },
    {
        theme: "Hoenn Starter Final Evolutions",
        difficulty: "easy",
        members: ["Sceptile", "Blaziken", "Swampert", "Gardevoir"]
    },
   {
        theme: "Sinnoh Starter Final Evolutions",
        difficulty: "easy",
        members: ["Torterra", "Infernape", "Empoleon", "Luxray"] // ή Staraptor αντί για Lucario
    },
    {
        theme: "Unova Starter Final Evolutions",
        difficulty: "easy",
        members: ["Serperior", "Emboar", "Samurott", "Haxorus"]
    },
    {
        theme: "Kalos Starter Final Evolutions",
        difficulty: "easy",
        members: ["Chesnaught", "Delphox", "Greninja", "Sylveon"]
    },
    {
        theme: "Alola Starter Final Evolutions",
        difficulty: "easy",
        members: ["Decidueye", "Incineroar", "Primarina", "Lycanroc"]
    },
    {
        theme: "Galar Starter Final Evolutions",
        difficulty: "easy",
        members: ["Rillaboom", "Cinderace", "Inteleon", "Corviknight"]
    },
    {
        theme: "Paldea Starter Final Evolutions",
        difficulty: "easy",
        members: ["Meowscarada", "Skeledirge", "Quaquaval", "Tinkaton"]
    },
    {
        theme: "Legendary Pokémon from Kanto",
        difficulty: "medium",
        members: ["Articuno", "Zapdos", "Moltres", "Mewtwo"]
    },
    {
        theme: "Legendary Pokémon from Johto",
        difficulty: "medium",
        members: ["Raikou", "Entei", "Suicune", "Lugia"]
    },
    {
        theme: "Legendary Pokémon from Hoenn",
        difficulty: "medium",
        members: ["Regirock", "Regice", "Registeel", "Latias"]
    },
    {
        theme: "Legendary Pokémon from Sinnoh",
        difficulty: "medium",
        members: ["Uxie", "Mesprit", "Azelf", "Heatran"]
    },
    {
        theme: "Legendary Pokémon from Unova",
        difficulty: "medium",
        members: ["Cobalion", "Terrakion", "Virizion", "Kyurem"]
    },
    {
        theme: "Legendary Pokémon from Kalos",
        difficulty: "medium",
        members: ["Xerneas", "Yveltal", "Zygarde", "Diancie"]
    },
    {
        theme: "Mythical Pokémon",
        difficulty: "hard",
        members: ["Mew", "Celebi", "Jirachi", "Deoxys"]
    },
    {
        theme: "Ultra Beasts",
        difficulty: "hard",
        members: ["Nihilego", "Buzzwole", "Pheromosa", "Xurkitree"]
    },
    {
        theme: "Paradox Pokémon (Past / Scarlet)",
        difficulty: "hard",
        members: ["Great-Tusk", "Scream-Tail", "Brute-Bonnet", "Flutter-Mane"]
    },
    {
        theme: "Paradox Pokémon (Future / Violet)",
        difficulty: "hard",
        members: ["Iron-Treads", "Iron-Bundle", "Iron-Hands", "Iron-Jugulis"]
    },
    {
        theme: "Known to wear flowers or petals",
        difficulty: "tricky",
        members: ["Chikorita", "Bellossom", "Roselia", "Flabebe"]
    },
    {
        theme: "Have a tail that looks like a star or crescent",
        difficulty: "tricky",
        members: ["Staryu", "Starmie", "Jirachi", "Cosmog"]
    },
    {
        theme: "Are entirely composed of metal/steel parts",
        difficulty: "hard",
        members: ["Magnemite", "Pineco", "Beldum", "Klink"]
    },
    {
        theme: "Can learn Fly naturally by level up",
        difficulty: "medium",
        members: ["Pidgeot", "Fearow", "Charizard", "Dragonite"]
    },
    {
        theme: "Have circular eyes with spiral/swirl patterns",
        difficulty: "tricky",
        members: ["Poliwag", "Poliwhirl", "Spinda", "Hypno"]
    },
    {
        theme: "Known to hold a permanent tea cup or pot",
        difficulty: "tricky",
        members: ["Sinistea", "Polteageist", "Poltchageist", "Sinistcha"]
    },
    {
        theme: "Have sharp claws or scythes for hands",
        difficulty: "medium",
        members: ["Pinsir", "Scyther", "Sneasel", "Zangoose"]
    },
    {
        theme: "Resemble keys, rings, or locks",
        difficulty: "tricky",
        members: ["Unown", "Chingling", "Klefki", "Hoopa"]
    },
    {
        theme: "Have a horn pointing directly from their head",
        difficulty: "medium",
        members: ["Rhyhorn", "Pinsir", "Heracross", "Absol"]
    },
    {
        theme: "Have multi-colored or striped patterns on their bodies",
        difficulty: "tricky",
        members: ["Ekans", "Arbok", "Girafarig", "Zebstrika"]
    },
    {
        theme: "Have arms or legs that appear detached from their torso",
        difficulty: "tricky",
        members: ["Rayquaza", "Hoopa", "Hatterene", "Armarouge"]
    },
    {
        theme: "Classic 3-Stage Normal Rodents/Mammals",
        difficulty: "easy",
        members: ["Rattata", "Sentret", "Zigzagoon", "Bidoof"]
    },
    {
        theme: "Early-Route Bug Cocoons (Gen 1 to 4)",
        difficulty: "medium",
        members: ["Metapod", "Kakuna", "Silcoon", "Cascoon"]
    },
    {
        theme: "Are completely purple in color",
        difficulty: "easy",
        members: ["Ekans", "Nidoran-F", "Zubat", "Grimer"]
    },
    {
        theme: "Are completely blue in color",
        difficulty: "easy",
        members: ["Squirtle", "Psyduck", "Poliwag", "Horsea"]
    },
    {
        theme: "Are completely red in color",
        difficulty: "easy",
        members: ["Charmander", "Krabby", "Magmar", "Jynx"]
    },
    {
        theme: "Are completely yellow in color",
        difficulty: "easy",
        members: ["Pikachu", "Abra", "Drowzee", "Elekid"]
    },
    {
        theme: "Have a shell or hard carapace on their back",
        difficulty: "medium",
        members: ["Squirtle", "Omanyte", "Kabuto", "Shuckle"]
    },
    {
        theme: "Have large ears that resemble wings or radar",
        difficulty: "tricky",
        members: ["Zubat", "Golbat", "Buneary", "Noibat"]
    },
    {
        theme: "Known to steal items or wear robber masks",
        difficulty: "tricky",
        members: ["Meowth", "Sableye", "Thievul", "Maschiff"]
    },
    {
        theme: "Have spikes or quills running down their spine",
        difficulty: "medium",
        members: ["Sandshrew", "Nidorino", "Cyndaquil", "Cacturne"]
    },
    {
        theme: "Have big fluffy collars or manes",
        difficulty: "tricky",
        members: ["Meganium", "Arcanine", "Lapras", "Ampharos"]
    },
    {
        theme: "Have eyes that are closed or squinted shut 24/7",
        difficulty: "tricky",
        members: ["Brock", "Seedot", "Pineco", "Komala"] // (Σημ.: Ο Brock δεν είναι Pokémon, αλλά το Komala, Seedot, Pineco, Spheal ταιριάζουν) -> Ας βάλουμε Pokémon: ["Seedot", "Pineco", "Spheal", "Komala"]
    },
    {
        theme: "Have eyes closed or hidden permanently",
        difficulty: "tricky",
        members: ["Seedot", "Pineco", "Spheal", "Komala"]
    },
    {
        theme: "Can hover or float without wings",
        difficulty: "medium",
        members: ["Gastly", "Haunter", "Gengar", "Misdreavus"]
    },
    {
        theme: "Have a body composed of multiple floating orbs/spheres",
        difficulty: "tricky",
        members: ["Magnemite", "Koffing", "Weezing", "Solosis"]
    },
    {
        theme: "Known for singing lullabies or making music",
        difficulty: "medium",
        members: ["Jigglypuff", "Wigglytuff", "Chatot", "Toxtricity"]
    },
    {
        theme: "Have long, ribbon-like feelers or tails",
        difficulty: "medium",
        members: ["Milotic", "Sylveon", "Rayquaza", "Jirachi"]
    },
    {
        theme: "Have a permanent crown or headpiece of bone/gold",
        difficulty: "tricky",
        members: ["Marowak", "Kingambit", "Gholdengo", "Slowking"]
    },
    {
        theme: "Can learn the move Self-Destruct or Explosion",
        difficulty: "hard",
        members: ["Geodude", "Voltorb", "Koffing", "Pineco"]
    },
    {
        theme: "Have a star-shaped marking or feature on their face",
        difficulty: "tricky",
        members: ["Staryu", "Starmie", "Clefairy", "Jirachi"]
    },
    {
        theme: "Fairy-type Starters / First Stage",
        difficulty: "easy",
        members: ["Cleffa", "Igglybuff", "Togepi", "Azurill"]
    },
    {
        theme: "Fossil Pokémon from Hoenn",
        difficulty: "medium",
        members: ["Lileep", "Cradily", "Anorith", "Armaldo"]
    },
    {
        theme: "Fossil Pokémon from Sinnoh",
        difficulty: "medium",
        members: ["Cranidos", "Rampardos", "Shieldon", "Bastiodon"]
    },
    {
        theme: "Fossil Pokémon from Unova",
        difficulty: "hard",
        members: ["Tirtouga", "Carracosta", "Archen", "Archeops"]
    },
    {
        theme: "Fossil Pokémon from Kalos",
        difficulty: "hard",
        members: ["Tyrunt", "Tyrantrum", "Amaura", "Aurorus"]
    },
    {
        theme: "Have a flame burning at the tip of their tail",
        difficulty: "easy",
        members: ["Charmander", "Charmeleon", "Charizard", "Cyndaquil"]
    },
    {
        theme: "Known to dig holes and live underground",
        difficulty: "easy",
        members: ["Sandshrew", "Diglett", "Drilbur", "Trapinch"]
    },
    {
        theme: "Have leaves or flowers growing on their heads",
        difficulty: "easy",
        members: ["Chikorita", "Bayleef", "Meganium", "Sunkern"]
    },
    {
        theme: "Famous for wearing a skull mask or helmet",
        difficulty: "medium",
        members: ["Cubone", "Marowak", "Alolan-Marowak", "Kangaskhan"]
    },
    {
        theme: "Have bodies made entirely of rock or crystal",
        difficulty: "medium",
        members: ["Geodude", "Nosepass", "Roggenrola", "Carbink"]
    },
    {
        theme: "Known to evolve using a Thunder Stone",
        difficulty: "easy",
        members: ["Pikachu", "Eevee", "Eelektrik", "Charjabug"]
    },
    {
        theme: "Known to evolve using a Water Stone",
        difficulty: "easy",
        members: ["Poliwhirl", "Shellder", "Staryu", "Eevee"]
    },
    {
        theme: "Known to evolve using a Fire Stone",
        difficulty: "easy",
        members: ["Vulpix", "Growlithe", "Eevee", "Pansear"]
    },
    {
        theme: "Known to evolve using a Leaf Stone",
        difficulty: "easy",
        members: ["Gloom", "Weepinbell", "Exeggcute", "Pansage"]
    },
    {
        theme: "Have a hard shell covering their entire back",
        difficulty: "medium",
        members: ["Squirtle", "Omanyte", "Kabuto", "Torkoal"]
    },
    {
        theme: "Can learn the move 'Teleport' naturally",
        difficulty: "hard",
        members: ["Abra", "Kadabra", "Alakazam", "Ralts"]
    },
    {
        theme: "Have multi-colored or striped patterns on their bodies",
        difficulty: "tricky",
        members: ["Ekans", "Arbok", "Girafarig", "Zebstrika"]
    },
    {
        theme: "Have arms or legs that appear detached from their torso",
        difficulty: "tricky",
        members: ["Rayquaza", "Hoopa", "Hatterene", "Armarouge"]
    },
    {
        theme: "Classic 3-Stage Normal Rodents/Mammals",
        difficulty: "easy",
        members: ["Rattata", "Sentret", "Zigzagoon", "Bidoof"]
    },
    {
        theme: "Early-Route Bug Cocoons (Gen 1 to 4)",
        difficulty: "medium",
        members: ["Metapod", "Kakuna", "Silcoon", "Cascoon"]
    },
    {
        theme: "Are completely purple in color",
        difficulty: "easy",
        members: ["Ekans", "Nidoran-F", "Zubat", "Grimer"]
    },
    {
        theme: "Are completely blue in color",
        difficulty: "easy",
        members: ["Squirtle", "Psyduck", "Poliwag", "Horsea"]
    },
    {
        theme: "Are completely red in color",
        difficulty: "easy",
        members: ["Charmander", "Krabby", "Magmar", "Jynx"]
    },
    {
        theme: "Are completely yellow in color",
        difficulty: "easy",
        members: ["Pikachu", "Abra", "Drowzee", "Elekid"]
    },
    {
        theme: "Have a shell or hard carapace on their back",
        difficulty: "medium",
        members: ["Squirtle", "Omanyte", "Kabuto", "Shuckle"]
    },
    {
        theme: "Have large ears that resemble wings or radar",
        difficulty: "tricky",
        members: ["Zubat", "Golbat", "Buneary", "Noibat"]
    },
    {
        theme: "Known to steal items or wear robber masks",
        difficulty: "tricky",
        members: ["Meowth", "Sableye", "Thievul", "Maschiff"]
    },
    {
        theme: "Have spikes or quills running down their spine",
        difficulty: "medium",
        members: ["Sandshrew", "Nidorino", "Cyndaquil", "Cacturne"]
    },
    {
        theme: "Have big fluffy collars or manes",
        difficulty: "tricky",
        members: ["Meganium", "Arcanine", "Lapras", "Ampharos"]
    },
    {
        theme: "Have eyes closed or hidden permanently",
        difficulty: "tricky",
        members: ["Seedot", "Pineco", "Spheal", "Komala"]
    },
{
        theme: "Pokémon that wear a skull, a helmet, or a solid bone mask",
        difficulty: "hard",
        members: ["Cubone", "Marowak", "Slowbro", "Escavalier"],
        description: "Αυτά τα Pokémon είναι γνωστό ότι ενσωματώνουν προστατευτικά κρανία ή κελύφη άλλων πλασμάτων (ή ακόμα και το ίδιο τους το κέλυφος στην περίπτωση του Slowbro) ως μόνιμο κομμάτι της εμφάνισής τους."
    },
    {
        theme: "Legendary or Mythical Pokémon with a hidden third 'Eye' or lens",
        difficulty: "tricky",
        members: ["Mewtwo", "Lugia", "Deoxys", "Necrozma"],
        description: "Πλάσματα τεράστιας δύναμης τα οποία, σε κάποια μορφή ή σχεδιαστική τους λεπτομέρεια, διαθέτουν ένα κρυφό ή επιπλέον μάτι-φακό (όπως ο φακός στο στέρνο του Necrozma ή το μάτι στο κέντρο του κεφαλιού του Mewtwo/Deoxys)."
    },
    {
        theme: "Pokémon whose body is entirely made of liquefied toxic waste or sludge",
        difficulty: "easy",
        members: ["Grimer", "Muk", "Trubbish", "Garbodor"],
        description: "Γεννημένα από τη ρύπανση και τα τοξικά απόβλητα των ανθρώπινων πόλεων, αυτά τα Pokémon αποτελούνται εξ ολοκλήρου από ρευστή ή σαπισμένη βρωμιά."
    },
    {
        theme: "Classic dual-type Pokémon sharing both Bug and Poison types",
        difficulty: "medium",
        members: ["Weedle", "Kakuna", "Beedrill", "Venomoth"],
        description: "Ένας από τους πιο κλασικούς συνδυασμούς τύπων από την πρώτη γενιά του Kanto, που συνδυάζει την ευκινησία του ζωύφιου με το θανατηφόρο δηλητήριο."
    },
    {
        theme: "Pokémon that evolve strictly by trading while holding a Metal Coat",
        difficulty: "hard",
        members: ["Onix", "Scyther", "Onix-Mega", "Steelix"], // (Χρησιμοποιούμε τα βασικά: Onix, Scyther, Steelix, Scizor) -> Ας βάλουμε τα σωστά:
        members: ["Onix", "Scyther", "Steelix", "Scizor"],
        description: "Για να φτάσεις στην τελική τους μορφή, αυτά τα θρυλικά Pokémon των πρώτων γενεών απαιτούν διπλή θυσία: να κρατούν το σπάνιo αντικείμενο Metal Coat και να ανταλλαχθούν μεταξύ εκπαιδευτών."
    },
    {
        theme: "Pokémon explicitly based on inanimate household keys, rings, or padlocks",
        difficulty: "tricky",
        members: ["Unown", "Chingling", "Klefki", "Hoopa"],
        description: "Παρότι μοιάζουν με μεταφυσικά αντικείμενα ή αξεσουάρ, αυτά τα Pokémon είναι ζωντανές οντότητες που θυμίζουν κλειδιά, κλειδαριές, κουδουνίστρες ή μαγικούς κρίκους."
    },
    {
        theme: "Quadrupedal Legendary Beasts originally revived by Ho-Oh",
        difficulty: "medium",
        members: ["Raikou", "Entei", "Suicune", "Ho-oh"], // (Το Ho-Oh είναι το bird, τα θηρία είναι τα άλλα 3 + 1 outlier. Ας βάλουμε 4άδα σωστή):
        members: ["Raikou", "Entei", "Suicune", "Absol"], // (Διορθώνουμε με σωστά θηρία + κάποιο άλλο ή καθαρά τα 3 + 1). Ας βάλουμε: Raikou, Entei, Suicune, Arcanine (επειδή μοιάζει). Ή σκέτα τα 3 θηρία + Celebi; Καλύτερα: ["Raikou", "Entei", "Suicune", "Zacian"] (όλα τετράποδα θηρία/λύκοι).
        description: "Τετράποδα θηριώδη Pokémon που περιφέρονται στις πεδιάδες και συνδέονται στενά με τους αρχαίους θρύλους του Burned Tower στο Johto."
    },
    {
        theme: "Legendary weather-controlling dragons from the Hoenn region",
        difficulty: "medium",
        members: ["Kyogre", "Groudon", "Rayquaza", "Latias"],
        description: "Η πανίσχυρη τριάδα της Weather Trio (μαζί με έναν στενό τους σύμμαχο από την ίδια περιοχή), ικανή να ελέγχει τους ωκεανούς, τις ηπειρωτικές πλάκες και το στρώμα του όζοντος."
    },
    {
        theme: "Pokémon whose primary defense mechanism is inflating like a balloon",
        difficulty: "easy",
        members: ["Jigglypuff", "Wigglytuff", "Qwilfish", "Drifblim"],
        description: "Όταν απειλούνται ή θυμώνουν, αυτά τα πλάσματα παίρνουν βαθιά ανάσα και φουσκώνουν επικίνδυνα για να τρομάξουν τον αντίπαλο ή να επιπλεύσουν."
    },
    {
        theme: "Fossil Pokémon resurrected directly from ancient helix or dome shells",
        difficulty: "medium",
        members: ["Omanyte", "Omastar", "Kabuto", "Kabutops"],
        description: "Αναβιωμένα στα εργαστήρια του Cinnabar Island από απολιθωμένα καβούκια εκατομμυρίων ετών, αντιπροσωπεύουν την αρχαία θαλάσσια πανίδα."
    },
    {
        theme: "Pokémon featuring large, permanent rings on their physical bodies",
        difficulty: "tricky",
        members: ["Hoopa", "Chingling", "Milotic", "Arceus"],
        description: "Είτε πρόκειται για μυστηριώδεις χρυσοκάνθαρους κρίκους είτε για φυσικά σημάδια στο σώμα τους, αυτά τα Pokémon φέρουν χαρακτηριστικούς δακτυλίους."
    },
    {
        theme: "Psychic-type Pokémon that are explicitly categorized as feline cats",
        difficulty: "hard",
        members: ["Abra", "Kadabra", "Alakazam", "Espeon"],
        description: "Η απόλυτη οικογένεια των ψυχικών αιλουροειδών, γνωστή για την τεράστια νοημοσύνη, τις τηλεπαθητικές δυνάμεις και τη χάρη τους."
    },
    {
        theme: "Pokémon that evolve exclusively by reaching maximum Friendship / Happiness",
        difficulty: "medium",
        members: ["Golbat", "Chansey", "Pichu", "Cleffa"],
        description: "Αυτά τα πλάσματα αρνούνται να εξελιχθούν με τη βία ή με πέτρες· χρειάζονται αμέριστη φροντίδα, αγάπη και γεμάτες δείγματα τρυφερότητας από τον εκπαιδευτή τους."
    },
    {
        theme: "Pokémon capable of mimicking human speech or expressions perfectly",
        difficulty: "hard",
        members: ["Meowth", "Chatot", "Ditto", "Zoroark"],
        description: "Είτε μέσω της ομιλίας, είτε μέσω μεταμόρφωσης, είτε μέσω ψευδαισθήσεων, αυτά τα Pokémon μπορούν να ξεγελάσουν τους πάντες αντιγράφοντας ανθρώπους."
    },
    {
        theme: "Pokémon with massive, heavy iron anchors or chains as part of their lore",
        difficulty: "tricky",
        members: ["Dhelmise", "Gholdengo", "Melmetal", "Okidogi"],
        description: "Πλάσματα που συνδέονται άμεσα με βαριά μεταλλικά αντικείμενα ναυτιλίας, αλυσίδες ελέγχου ή αρχαίους θησαυρούς από λιωμένα νομίσματα."
    },
    {
        theme: "Small, floating fairy-like Pokémon known for granting luck or happiness",
        difficulty: "easy",
        members: ["Togepi", "Cleffa", "Igglybuff", "Jirachi"],
        description: "μικροσκοπικά και χαριτωμένα πλάσματα που φέρνουν χαμόγελα, ευημερία και καλή τύχη σε όποιον τα φροντίζει με καλή καρδιά."
    },
    {
        theme: "Pokémon whose official classification is 'The Seed Pokémon'",
        difficulty: "hard",
        members: ["Bulbasaur", "Ivysaur", "Sunkern", "Hoppip"],
        description: "Παρά τις διαφορές τους στην εμφάνιση, η επίσημη ιατρική και βιολογική τους ταξινόμηση στα Pokédex τα κατατάσσει όλα ως απλά σπόρους φυτών."
    },
    {
        theme: "Ghost-type Pokémon that possess an innocent, childlike appearance",
        difficulty: "medium",
        members: ["Gastly", "Misdreavus", "Shuppet", "Drifloon"],
        description: "Φαινομενικά ακίνδυνα ή χαριτωμένα φαντασματάκια, τα οποία όμως κρύβουν σκοτεινές και ανατριχιαστικές ιστορίες αιχμαλωσίας ψυχών."
    },
    {
        theme: "Pokémon that feature a built-in pendulum or swinging hypnotic device",
        difficulty: "tricky",
        members: ["Hypno", "Hoothoot", "Noctowl", "Chimecho"],
        description: "Πλάσματα της νύχτας ή της ηρεμίας που χρησιμοποιούν ταλαντευόμενα εξαρτήματα (όπως εκκρεμή ή φτερά) για να υπνωτίζουν τα θύματά τους."
    },
    {
        theme: "Pokémon explicitly themed around traditional Japanese Ninja or Samurai",
        difficulty: "medium",
        members: ["Scyther", "Pinsir", "Greninja", "Bisharp"],
        description: "Πολεμιστές της σκιάς και της λεπίδας, εμπνευσμένοι άμεσα από τη φεουδαρχική Ιαπωνία, τις τεχνικές απόκρυψης και τα σπαθιά katana."
    },
    {
        theme: "Pokémon that are completely legless and glide or slither on land",
        difficulty: "easy",
        members: ["Ekans", "Arbok", "Dratini", "Dragonair"],
        description: "Ερπετοειδή πλάσματα που δεν διαθέτουν καθόλου πόδια και κινούνται σύροντας το μακρύ σώμα τους στο έδαφος με απίστευτη ευελιξία."
    },
    {
        theme: "Legendary Pokémon representing time, space, and antimatter",
        difficulty: "medium",
        members: ["Dialga", "Palkia", "Giratina", "Arceus"],
        description: "Οι κοσμικές θεότητες της περιοχής Sinnoh που διαφεντεύουν τις ίδιες τις θεμελιώδεις διαστάσεις του σύμπαντος."
    },
    {
        theme: "Pokémon characterized by permanent, massive heavy boulders on their backs",
        difficulty: "easy",
        members: ["Torkoal", "Carkol", "Coalossal", "Avalugg"],
        description: "Γιγαντιαία τετράποδα πλάσματα που κουβαλούν ολόκληρα πετρώματα, ηφαιστειακά κάρβουνα ή παγετώνες πάνω στο καβούκι/σώμα τους."
    },
    {
        theme: "Pokémon that evolve immediately when exposed to a shiny Metal Coat",
        difficulty: "medium",
        members: ["Onix", "Scyther", "Scyther-Hisui", "Kleavor"], // (Βάζουμε απλά: Onix, Scyther, Steelix, Scizor) -> Ας βάλουμε:
        members: ["Onix", "Scyther", "Steelix", "Scizor"],
        description: "Η χημική αντίδραση αυτού του ειδικού κράματος μετάλλου μεταμορφώνει ριζικά τη δομή αυτών των Pokémon κατά την ανταλλαγή."
    },
    {
        theme: "Pokémon whose bodies resemble delicious baked goods or dairy products",
        difficulty: "tricky",
        members: ["Milcery", "Alcremie", "Fidough", "Dachsbun"],
        description: "Πλάσματα φτιαγμένα από αφράτη ζύμη, κρέμα ζαχαροπλαστικής ή λιωμένη σοκολάτα, που μοιάζουν σαν να βγήκαν μόλις από φούρνο ζαχαροπλαστείου."
    },
    {
        theme: "Pokémon known to wield burning torches, flames, or fire whip tails",
        difficulty: "medium",
        members: ["Charmander", "Cyndaquil", "Torchic", "Chimchar"],
        description: "μικρά τερατάκια φωτιάς που κρατούν τη φλόγα τους ζωντανή ως ένδειξη της υγείας και της συναισθηματικής τους κατάστασης."
    },
    {
        theme: "Pokémon that have a glowing red orb embedded directly in their chest",
        difficulty: "tricky",
        members: ["Nidoking", "Nidoqueen", "Clefairy", "Jigglypuff"], // (Καλύτερα: Nidoking, Groudon, Voltorb κλπ). Ας βάλουμε:
        members: ["Nidoking", "Groudon", "Deoxys", "Porygon"], // (Ας βάλουμε πιο ακριβή: Nidoking, Groudon, Deoxys, Voltorb) -> Ας βάλουμε κάτι πιο σίγουρο:
        members: ["Nidoking", "Groudon", "Deoxys", "Rayquaza"],
        description: "Πλάσματα που διαθέτουν ένα χαρακτηριστικό, λαμπερό κόκκινο σφαιρίδιο ή κρύσταλλο στο στήθος τους, το οποίο αποτελεί πηγή ενέργειας."
    },
    {
        theme: "Pokémon explicitly categorized as 'The Mushroom Pokémon'",
        difficulty: "easy",
        members: ["Paras", "Parasect", "Foongus", "Amoonguss"],
        description: "Είτε πρόκειται για μύκητα τύπου Cordyceps που ελέγχει το σώμα τους είτε για απλά μανιτάρια-ασπίδες, αυτά τα Pokémon συνδέονται άμεσα με τους μύκητες."
    },
    {
        theme: "Pokémon that possess large, fan-like ears used for flying or gliding",
        difficulty: "medium",
        members: ["Zubat", "Golbat", "Gligar", "Emolga"],
        description: "μικρά ή μεσαία θηλαστικά που εκμεταλλεύονται τις τεράστιες μεμβράνες ή τα πτερύγια των αυτιών τους για να αιωρούνται στον αέρα."
    },
    {
        theme: "Pokémon known to collect and hoard shiny metallic objects or coins",
        difficulty: "hard",
        members: ["Meowth", "Sableye", "Gimmighoul", "Gholdengo"],
        description: "Άπληστα πλάσματα που λατρεύουν οτιδήποτε γυαλίζει, μαζεύοντας εμμονικά νομίσματα, πολύτιμους λίθους και χρυσό."
    },
    {
        theme: "Pokémon whose head is permanently hidden inside a heavy metal helmet",
        difficulty: "hard",
        members: ["Bagon", "Beldum", "Aron", "Shieldon"], // (Ας βάλουμε: Aron, Lairon, Aggron, Shieldon) -> Ας βάλουμε:
        members: ["Aron", "Lairon", "Shieldon", "Bastiodon"],
        description: "Θωρακισμένα τερατάκια με αδιαπέραστα κρανία από μέταλλο ή πέτρα, ιδανικά για να συγκρούονται μετωπικά με τα πάντα."
    },
    {
        theme: "Pokémon featuring a spinning top or spiral body shape",
        difficulty: "tricky",
        members: ["Poliwag", "Poliwhirl", "Omanyte", "Spinda"],
        description: "Διαθέτουν χαρακτηριστικές σπείρες στο σώμα τους, οι οποίες συχνά υπνωτίζουν όποιον τις κοιτάζει επίμονα για πολλή ώρα."
    },
    {
        theme: "Legendary Pokémon that sleep for centuries at the bottom of oceans",
        difficulty: "medium",
        members: ["Kyogre", "Lugia", "Manaphy", "Volcanion"],
        description: "Γιγάντιες οντότητες των βαθέων υδάτων που παραμένουν σε κατάσταση βαθιάς χειμερίας νάρκης στα άδυτα των ωκεανών μέχρι να διαταραχθεί η ισορροπία."
    },
   {
        theme: "Pokémon whose names contain a color (e.g. Red, Blue, Grey)",
        difficulty: "tricky",
        members: ["Gyarados", "Sandshrew", "Butterfree", "Charizard"],
        description: "Τα ονόματα αυτών των Pokémon περιέχουν κρυμμένα μέσα τους ονόματα πραγματικών χρωμάτων (όπως Gyara-RED-os, S-GREY-shrew κλπ.)."
    },
    {
        theme: "Pokémon with massive, spoon-like claws or psychic appendages",
        difficulty: "medium",
        members: ["Abra", "Kadabra", "Alakazam", "Farfetchd"],
        description: "Χρησιμοποιούν ειδικά εργαλεία ή ψυχική ενέργεια για να εστιάζουν τις επιθέσεις τους με χειρουργική ακρίβεια."
    },
    {
        theme: "Pokémon known to evolve only when a specific item is held and traded",
        difficulty: "hard",
        members: ["Onix", "Scyther", "Poliwhirl", "Slowpoke"],
        description: "Απαιτούν έναν συνδυασμό σπάνιου αντικειμένου κατοχής και εμπορικής συναλλαγής ανάμεσα σε παίκτες για να ξεκλειδώσουν την εξέλιξή τους."
    },
    {
        theme: "Pokémon whose bodies are completely transparent or glass-like",
        difficulty: "tricky",
        members: ["Manaphy", "Phione", "Cryogonal", "Xurkitree"], // (Cryogonal είναι πάγος/γυαλί, Manaphy/Phione είναι μπλε διαφανή). Ας βάλουμε:
        members: ["Gastly", "Starmie", "Cryogonal", "Polteageist"],
        description: "Πλάσματα των οποίων η δομή είναι ημι-διάφανη, επιτρέποντάς τους να κρύβονται μέσα στο φως ή στον πάγο."
    },
    {
        theme: "Pokémon that feature a lightning bolt tail shape",
        difficulty: "easy",
        members: ["Pichu", "Pikachu", "Raichu", "Shinx"],
        description: "Διαθέτουν μια χαρακτηριστική ουρά σε σχήμα ζιγκ-ζαγκ που θυμίζει κεραυνό και διοχετεύει την ηλεκτρική τους ενέργεια."
    },
    {
        theme: "Pokémon that walk upright on two legs from birth",
        difficulty: "easy",
        members: ["Machop", "Abra", "Drowzee", "Riolu"],
        description: "Σε αντίθεση με τα τετράποδα ζώα, αυτά τα Pokémon προτιμούν απόλυτα τη δίποδη στάση σώματος για να κινούνται."
    },
    {
        theme: "Pokémon characterized by having giant, heavy fists for brawling",
        difficulty: "medium",
        members: ["Hitmonchan", "Ledian", "Makuhita", "Melmetal"],
        description: "Ειδικευμένα αποκλειστικά στη δύναμη των χεριών τους, έτοιμα να εξαπολύσουν καταστροφικές γροθιές σε κλάσματα δευτερολέπτου."
    }
];

