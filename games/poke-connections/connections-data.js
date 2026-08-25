// connections-data.js - Καθαρισμένη & Διόρθωτη Δεξαμενή Δυναμικών Κατηγοριών Pokémon
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
        members: ["Rhydon", "Nidoking", "Snorlax", "Lickilicky"]
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
        members: ["Ivysaur", "Charmeleon", "Wartortle", "Kadabra"]
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
        members: ["Torterra", "Infernape", "Empoleon", "Staraptor"]
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
        members: ["Squirtle", "Totodile", "Poliwag", "Horsea"]
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
        description: "Αυτά τα Pokémon είναι γνωστό ότι ενσωματώνουν προστατευτικά κρανία ή κελύφη άλλων πλασμάτων ως μόνιμο κομμάτι της εμφάνισής τους."
    },
    {
        theme: "Legendary or Mythical Pokémon with a hidden third 'Eye' or lens",
        difficulty: "tricky",
        members: ["Mewtwo", "Lugia", "Deoxys", "Necrozma"],
        description: "Πλάσματα τεράστιας δύναμης τα οποία διαθέτουν ένα κρυφό ή επιπλέον μάτι-φακό."
    },
    {
        theme: "Pokémon whose body is entirely made of liquefied toxic waste or sludge",
        difficulty: "easy",
        members: ["Grimer", "Muk", "Trubbish", "Garbodor"],
        description: "Γεννημένα από τη ρύπανση και τα τοξικά απόβλητα."
    },
    {
        theme: "Classic dual-type Pokémon sharing both Bug and Poison types",
        difficulty: "medium",
        members: ["Weedle", "Kakuna", "Beedrill", "Venomoth"],
        description: "Συνδυάζουν την ευκινησία του ζωύφιου με το θανατηφόρο δηλητήριο."
    },
    {
        theme: "Pokémon that evolve strictly by trading while holding a Metal Coat",
        difficulty: "hard",
        members: ["Onix", "Scyther", "Steelix", "Scizor"],
        description: "Απαιτούν να κρατούν Metal Coat και να ανταλλαχθούν μεταξύ εκπαιδευτών."
    },
    {
        theme: "Pokémon explicitly based on inanimate household keys, rings, or padlocks",
        difficulty: "tricky",
        members: ["Unown", "Chingling", "Klefki", "Hoopa"],
        description: "Ζωντανές οντότητες που θυμίζουν κλειδιά, κλειδαριές ή κουδουνίστρες."
    },
    {
        theme: "Legendary weather-controlling dragons from the Hoenn region",
        difficulty: "medium",
        members: ["Kyogre", "Groudon", "Rayquaza", "Latias"],
        description: "Ικανή τριάδα να ελέγχει ωκεανούς, στεριές και ατμόσφαιρα."
    },
    {
        theme: "Pokémon whose primary defense mechanism is inflating like a balloon",
        difficulty: "easy",
        members: ["Jigglypuff", "Wigglytuff", "Qwilfish", "Drifblim"],
        description: "Φουσκώνουν επικίνδυνα για να τρομάξουν ή να επιπλεύσουν."
    },
    {
        theme: "Fossil Pokémon resurrected directly from ancient helix or dome shells",
        difficulty: "medium",
        members: ["Omanyte", "Omastar", "Kabuto", "Kabutops"],
        description: "Αναβιωμένα από απολιθωμένα καβούκια εκατομμυρίων ετών."
    },
    {
        theme: "Pokémon featuring large, permanent rings on their physical bodies",
        difficulty: "tricky",
        members: ["Hoopa", "Chingling", "Milotic", "Arceus"],
        description: "Φέρουν χαρακτηριστικούς δακτυλίους φυσικά ή μαγικά."
    },
    {
        theme: "Psychic-type Pokémon that are explicitly categorized as feline cats",
        difficulty: "hard",
        members: ["Abra", "Kadabra", "Alakazam", "Espeon"],
        description: "Ψυχικά αιλουροειδή με τεράστια νοημοσύνη."
    },
    {
        theme: "Pokémon that evolve exclusively by reaching maximum Friendship / Happiness",
        difficulty: "medium",
        members: ["Golbat", "Chansey", "Pichu", "Cleffa"],
        description: "Χρειάζονται αμέριστη φροντίδα και αγάπη για να εξελιχθούν."
    },
    {
        theme: "Pokémon capable of mimicking human speech or expressions perfectly",
        difficulty: "hard",
        members: ["Meowth", "Chatot", "Ditto", "Zoroark"],
        description: "Ξεγελούν τους πάντες αντιγράφοντας ανθρώπους."
    },
    {
        theme: "Pokémon with massive, heavy iron anchors or chains as part of their lore",
        difficulty: "tricky",
        members: ["Dhelmise", "Gholdengo", "Melmetal", "Okidogi"],
        description: "Συνδέονται με βαριά μεταλλικά αντικείμενα ναυτιλίας ή αλυσίδες."
    },
    {
        theme: "Small, floating fairy-like Pokémon known for granting luck or happiness",
        difficulty: "easy",
        members: ["Togepi", "Cleffa", "Igglybuff", "Jirachi"],
        description: "Φέρνουν χαμόγελα, ευημερία και καλή τύχη."
    },
    {
        theme: "Pokémon whose official classification is 'The Seed Pokémon'",
        difficulty: "hard",
        members: ["Bulbasaur", "Ivysaur", "Sunkern", "Hoppip"],
        description: "Κατατάσσονται βιολογικά ως απλά σπόροι φυτών."
    },
    {
        theme: "Ghost-type Pokémon that possess an innocent, childlike appearance",
        difficulty: "medium",
        members: ["Gastly", "Misdreavus", "Shuppet", "Drifloon"],
        description: "Φαινομενικά αθώα φαντασματάκια με σκοτεινό παρελθόν."
    },
    {
        theme: "Pokémon that feature a built-in pendulum or swinging hypnotic device",
        difficulty: "tricky",
        members: ["Hypno", "Hoothoot", "Noctowl", "Chimecho"],
        description: "Χρησιμοποιούν ταλαντευόμενα εξαρτήματα για υπνωτισμό."
    },
    {
        theme: "Pokémon explicitly themed around traditional Japanese Ninja or Samurai",
        difficulty: "medium",
        members: ["Scyther", "Pinsir", "Greninja", "Bisharp"],
        description: "Πολεμιστές της σκιάς και της λεπίδας."
    },
    {
        theme: "Pokémon that are completely legless and glide or slither on land",
        difficulty: "easy",
        members: ["Ekans", "Arbok", "Dratini", "Dragonair"],
        description: "Ερπετοειδή πλάσματα χωρίς καθόλου πόδια."
    },
    {
        theme: "Legendary Pokémon representing time, space, and antimatter",
        difficulty: "medium",
        members: ["Dialga", "Palkia", "Giratina", "Arceus"],
        description: "Οι κοσμικές θεότητες των διαστάσεων."
    },
    {
        theme: "Pokémon characterized by permanent, massive heavy boulders on their backs",
        difficulty: "easy",
        members: ["Torkoal", "Carkol", "Coalossal", "Avalugg"],
        description: "Κουβαλούν ολόκληρα πετρώματα ή παγετώνες."
    },
    {
        theme: "Pokémon whose bodies resemble delicious baked goods or dairy products",
        difficulty: "tricky",
        members: ["Milcery", "Alcremie", "Fidough", "Dachsbun"],
        description: "Φτιαγμένα από αφράτη ζύμη ή κρέμα ζαχαροπλαστικής."
    },
    {
        theme: "Pokémon known to wield burning torches, flames, or fire whip tails",
        difficulty: "medium",
        members: ["Charmander", "Cyndaquil", "Torchic", "Chimchar"],
        description: "μικρά τερατάκια φωτιάς με αναμμένη ουρά."
    },
    {
        theme: "Pokémon explicitly categorized as 'The Mushroom Pokémon'",
        difficulty: "easy",
        members: ["Paras", "Parasect", "Foongus", "Amoonguss"],
        description: "Συνδέονται άμεσα με μύκητες."
    },
    {
        theme: "Pokémon that possess large, fan-like ears used for flying or gliding",
        difficulty: "medium",
        members: ["Zubat", "Golbat", "Gligar", "Emolga"],
        description: "Εκμεταλλεύονται τα τεράστια πτερύγια/αυτιά τους για πτήση."
    },
    {
        theme: "Pokémon known to collect and hoard shiny metallic objects or coins",
        difficulty: "hard",
        members: ["Meowth", "Sableye", "Gimmighoul", "Gholdengo"],
        description: "Λατρεύουν οτιδήποτε γυαλίζει και μαζεύουν νομίσματα."
    },
    {
        theme: "Pokémon whose head is permanently hidden inside a heavy metal helmet",
        difficulty: "hard",
        members: ["Aron", "Lairon", "Shieldon", "Bastiodon"],
        description: "Θωρακισμένα τερατάκια με αδιαπέραστα κρανία."
    },
    {
        theme: "Pokémon featuring a spinning top or spiral body shape",
        difficulty: "tricky",
        members: ["Poliwag", "Poliwhirl", "Omanyte", "Spinda"],
        description: "Διαθέτουν χαρακτηριστικές σπείρες."
    },
    {
        theme: "Legendary Pokémon that sleep for centuries at the bottom of oceans",
        difficulty: "medium",
        members: ["Kyogre", "Lugia", "Manaphy", "Volcanion"],
        description: "Γιγάντιες οντότητες των βαθέων υδάτων σε νάρκη."
    },
    {
        theme: "Pokémon whose names contain a color (e.g. Red, Blue, Grey)",
        difficulty: "tricky",
        members: ["Gyarados", "Sandshrew", "Butterfree", "Charizard"],
        description: "Τα ονόματά τους κρύβουν ονόματα πραγματικών χρωμάτων."
    },
    {
        theme: "Pokémon with massive, spoon-like claws or psychic appendages",
        difficulty: "medium",
        members: ["Abra", "Kadabra", "Alakazam", "Farfetchd"],
        description: "Χρησιμοποιούν εργαλεία ή ψυχική ενέργεια."
    },
    {
        theme: "Pokémon known to evolve only when a specific item is held and traded",
        difficulty: "hard",
        members: ["Onix", "Scyther", "Poliwhirl", "Slowpoke"],
        description: "Απαιτούν αντικείμενο κατοχής και ανταλλαγή."
    },
    {
        theme: "Pokémon whose bodies are completely transparent or glass-like",
        difficulty: "tricky",
        members: ["Gastly", "Starmie", "Cryogonal", "Polteageist"],
        description: "Ημι-διάφανη δομή που μοιάζει με γυαλί ή αέριο."
    },
    {
        theme: "Pokémon that feature a lightning bolt tail shape",
        difficulty: "easy",
        members: ["Pichu", "Pikachu", "Raichu", "Shinx"],
        description: "Ουρά σε σχήμα ζιγκ-ζαγκ που θυμίζει κεραυνό."
    },
    {
        theme: "Pokémon that walk upright on two legs from birth",
        difficulty: "easy",
        members: ["Machop", "Abra", "Drowzee", "Riolu"],
        description: "Προτιμούν αποκλειστικά τη δίποδη στάση."
    },
    {
        theme: "Pokémon characterized by having giant, heavy fists for brawling",
        difficulty: "medium",
        members: ["Hitmonchan", "Ledian", "Makuhita", "Melmetal"],
        description: "Ειδικευμένα στη δύναμη των χεριών τους."
    },
    {
        theme: "Fairy-type Starters / First Stage",
        difficulty: "easy",
        members: ["Cleffa", "Igglybuff", "Togepi", "Azurill"],
        description: "μικρά χαριτωμένα πλάσματα τύπου Fairy."
    },
    {
        theme: "Fossil Pokémon from Hoenn",
        difficulty: "medium",
        members: ["Lileep", "Cradily", "Anorith", "Armaldo"],
        description: "Απολιθώματα της περιοχής Hoenn."
    },
    {
        theme: "Fossil Pokémon from Sinnoh",
        difficulty: "medium",
        members: ["Cranidos", "Rampardos", "Shieldon", "Bastiodon"],
        description: "Απολιθώματα της περιοχής Sinnoh."
    },
    {
        theme: "Fossil Pokémon from Unova",
        difficulty: "hard",
        members: ["Tirtouga", "Carracosta", "Archen", "Archeops"],
        description: "Απολιθώματα της περιοχής Unova."
    }
];
