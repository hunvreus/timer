// Cached core static resources 
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll([
                './',
                './assets/android-chrome-192x192.png',
                './assets/android-chrome-512x512.png',
                './assets/apple-touch-icon.png',
                './assets/favicon-16x16.png',
                './assets/favicon-32x32.png',
                './assets/mstile-150x150.png'
            ]);
        })
    );
});
  
// Fatch resources
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});