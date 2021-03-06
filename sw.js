
//Make a cache
var CACHE_NAME = "restrew-static-v1";

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
                "/",
                "/css/styles.css",
                "/data/restaurants.json",
                '/img/1.jpg',
        		'/img/2.jpg',
        		'/img/3.jpg',
        		'/img/4.jpg',
        		'/img/5.jpg',
        		'/img/6.jpg',
        		'/img/7.jpg',
        		'/img/8.jpg',
        		'/img/9.jpg',
        		'/img/10.jpg',
                "/js/dbhelper.js",
                "/js/main.js",
                "/js/restaurant_info.js",
                "/index.html",
                "/restaurant.html",
                "/restaurant.html?id=1",
                "/restaurant.html?id=2",
                "/restaurant.html?id=3",
                "/restaurant.html?id=4",
                "/restaurant.html?id=5",
                "/restaurant.html?id=6",
                "/restaurant.html?id=7",
                "/restaurant.html?id=8",
                "/restaurant.html?id=9",
                "/restaurant.html?id=10",
                "https://unpkg.com/leaflet@1.3.1/dist/leaflet.css",
                "https://unpkg.com/leaflet@1.3.1/dist/leaflet.js"
            ]);
        })
    );
});

//IF we are cache first, we check, if the requested element is in the cache.
//If it is, then load from the cache.
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) return response;
            return fetch(event.request);
        })
    );
});
