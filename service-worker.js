
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("agri-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "icon.png",
        "chips-patate-sac.jpg",
        "chips-plantain.jpg",
        "chips-taro.jpg",
        "chips-bol.jpg",
        "produit-soja.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
