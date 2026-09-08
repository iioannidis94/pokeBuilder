const CACHE_NAME = 'pokebuilder-v11';

const APP_SHELL = [
  './',
  './index.html',
  './styles.css',
  './features/weakness-counters/dex.js',
  './utils.js',
  './manifest.json',
  './icon.svg',
  './data/TC.js',
  './data/pokemon-core.js',
  './data/base_stats.js',
  './data/abilities.js',
  './data/sprites.js',
  './data/moves.js',
  './data/move-info.js',
  './data/move-metadata.js',
  './data/move-evolutions.js',
  './data/bosses.js',
  './data/items.js',
  './features/team-builder/team-core.js',
  './features/team-builder/team-io.js',
  './features/team-builder/team-ai.js',
  './features/team-builder/team-recommender.js',
  './features/battle-calculator/team-analytics.js',
  './features/team-builder/team-ui.js',
  './features/battle-calculator/team-oop.js',
  './features/battle-calculator/team-bosses.js',
  './features/trainer-tower/trainer-tower.js',
  './poke-map/index.html',
  './poke-map/style.css',
  './poke-map/i18n.js',
  './poke-map/loading-overlay.js',
  './poke-map/profile-manager.js',
  './poke-map/script.js',
  './poke-map/pokemon-search.js',
  './poke-map/sidebar-toggle.js',
  './poke-map/pokestops.js',
  './poke-map/boss-toggle.js',
  './poke-map/excavition.js',
  './poke-map/route-toggle-sync.js',
  './poke-map/data/locations.json',
  './poke-map/data/bosses.json',
  './poke-map/data/language.json',
  './poke-map/data/hiddenlocations.json',
  './poke-map/data/land_spawns.json',
  './poke-map/data/surf_spawns.json',
  './poke-map/resources/favicon.ico',
  './poke-map/resources/map.webp',
  './poke-map/resources/boss.webp',
  './poke-map/resources/pokestop.webp',
  './poke-map/resources/excavition/Excavition.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          const isWorldMapRequest = event.request.url.includes('/poke-map/');
          return caches.match(isWorldMapRequest ? './poke-map/index.html' : './index.html');
        }

        return caches.match(event.request);
      });
    })
  );
});
