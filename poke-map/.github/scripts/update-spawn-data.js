const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Lista źródeł do pobrania
const sources = [
  {
    urls: [
      'https://pokemonrevolution.net/spawns/land_spawns.json',
      'https://raw.githubusercontent.com/eraysolenkol/pro-pokemon-spawns/28c4189dd45914467f718ff271744256e4d7e78f/src/jsons/land_spawns.json'
    ],
    filename: 'land_spawns.json'
  },
  {
    urls: [
      'https://pokemonrevolution.net/spawns/surf_spawns.json',
      'https://raw.githubusercontent.com/eraysolenkol/pro-pokemon-spawns/28c4189dd45914467f718ff271744256e4d7e78f/src/jsons/surf_spawns.json'
    ],
    filename: 'surf_spawns.json'
  }
];

// Upewnij się, że katalog data istnieje
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Funkcja pobierająca dane z jednego źródła
function normalizeResponseData(responseData, sourceName) {
  let parsedData = responseData;

  if (typeof parsedData === 'string') {
    const trimmedData = parsedData.trim();

    if (!trimmedData) {
      throw new Error(`${sourceName} is empty`);
    }

    if (trimmedData.toLowerCase().startsWith('<!doctype') || trimmedData.toLowerCase().startsWith('<html')) {
      throw new Error(`${sourceName} returned HTML instead of JSON`);
    }

    parsedData = JSON.parse(trimmedData);
  }

  if (!Array.isArray(parsedData)) {
    throw new Error(`${sourceName} did not return a JSON array`);
  }

  return parsedData;
}

async function fetchSource(source) {
  for (const url of source.urls) {
    try {
      console.log(`Pobieranie danych z ${url}...`);
      const response = await axios.get(url);
      const parsedData = normalizeResponseData(response.data, source.filename);
      
      const filePath = path.join(dataDir, source.filename);
      fs.writeFileSync(filePath, JSON.stringify(parsedData, null, 2));
      
      console.log(`Zapisano dane do ${source.filename}`);
      return true;
    } catch (error) {
      console.error(`Błąd pobierania danych z ${url}:`, error.message);
    }
  }

  return false;
}

// Główna funkcja pobierająca wszystkie dane
async function fetchAllData() {
  console.log('Rozpoczęcie aktualizacji danych...');
  
  const results = await Promise.all(sources.map(fetchSource));
  
  if (results.every(Boolean)) {
    console.log('Wszystkie dane zostały pomyślnie zaktualizowane');
  } else {
    console.warn('Niektóre źródła danych nie zostały zaktualizowane');
    // Nie kończymy procesu błędem, aby GitHub Action mógł kontynuować
  }
}

fetchAllData();
