self.addEventListener('install', event => {
  console.log('Service Worker installato');
});

self.addEventListener('fetch', event => {
  // puoi aggiungere caching qui, per ora fa solo log
  event.respondWith(fetch(event.request));
});
