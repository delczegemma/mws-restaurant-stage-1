//Make a cache
let staticCacheName = 'restrew-static-v1';

self.addEventListener('fetch', function(event) {




	//Save every requested assets in the cache by any fetch event
	event.respondWith(() => {
		let fetchRequest = event.request.clone();
		return fetch(event.request).then(response => {
			let fetchResponse = response.clone();
			caches.open(staticCacheName).then(function(cache) {
    			// return cache.put(event.request, fetchResponse);
    			cache.put(event.request, fetchResponse);
    			return response;
    		})
	    }).catch(() => {
	    	//If there is a saved request in the cache, load in the page
	    	return caches.match(event.request)
    })
	})
})