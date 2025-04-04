const CACHE_NAME = 'bobify-v1';

self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll([
            '/',
            '/app.js',
            '/index.html',
        ]);
    })());
});