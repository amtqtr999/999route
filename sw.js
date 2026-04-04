const C="rr-20260404-0821";
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(["./","./index.html","./check-rhythm.mp3"]);}));self.skipWaiting();});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(keys){return Promise.all(keys.filter(function(k){return k!==C;}).map(function(k){return caches.delete(k);}));}));self.clients.claim();});
self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request);}));});