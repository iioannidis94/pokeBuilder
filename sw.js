const CACHE_NAME = 'pokebuilder-v10';

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
  './features/trainer-tower/trainer-tower.js'
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
      }).catch(() => caches.match('./index.html'));
    })
  );
});
