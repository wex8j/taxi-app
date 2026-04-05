const cacheName = 'taxi-v2';
const assets = ['./', './index.html', './manifest.json'];

// تنصيب التطبيق وتخزين الملفات
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
  self.skipWaiting();
});

// تشغيل التطبيق
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
