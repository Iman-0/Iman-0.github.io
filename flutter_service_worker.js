'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c3a7d727934a6cfc949dd22dc807dee5",
"favicon-dark.png": "af33550a6d2de91221f4e868d2617e53",
"index.html": "64555cc8ca4f797d2058b176279e8f45",
"/": "64555cc8ca4f797d2058b176279e8f45",
"styles.css": "c18ff77a6c11dd03204e22d6331440d4",
"main.dart.js": "8744121789e4e03ef107340ef977ff3d",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-192.png": "af33550a6d2de91221f4e868d2617e53",
"icons/Icon-512.png": "a3e470002bc203a8d2fdb6d8e5c3e8da",
"favicon-light.png": "49b865faf3d064f33f2ffe7b2f397523",
"manifest.json": "57275bfc60769f737d8178abfb863063",
"assets/AssetManifest.json": "1bb733a3141d7cc732b29ba2f1e3cb24",
"assets/NOTICES": "2e37c0e4cf48529b7991d7fd3fdc78dd",
"assets/FontManifest.json": "fb80f9791ef530a148b43c87ec23da13",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "07c1b2cec4711f4ce4340837bad255bb",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/logo_once.gif": "6ed935f4ec75000157419ff8cfa52076",
"assets/assets/images/logo_es.png": "bd3ccd649c52e62282b9d4822db9a606",
"assets/assets/images/logo_glob_knowledge.png": "f0fa475521688e275b97f26330554fe5",
"assets/assets/images/logo_qtoof.png": "24cfd97bdeb43343059fbd7d6899a834",
"assets/assets/images/logo_qassemha.png": "4a4d50f68479703e1b451817ded26031",
"assets/assets/images/logo_finance.png": "4d801c904e7bcbd742b0f0a8d01bef68",
"assets/assets/images/logo_makkyoon.png": "1ad8c7aa54f9dbbc8a094f9da24d267b",
"assets/assets/images/cover.png": "ec6eb9c9d4d4bfde0278625440a6468f",
"assets/assets/images/logo_future.png": "690366221305bb5b3b4097c90cd2c04c",
"assets/assets/images/engineer.png": "6de0ae4a253a7201f9dd8ede0a8a3817",
"assets/assets/images/logo_fadan.png": "450f97584847e2293c213d01d91722f9",
"assets/assets/languages/en.json": "563c424f07216d1e764ecbf3231c3949",
"assets/assets/languages/ar.json": "f881cd894b37ca76b323f9a6cdece848",
"assets/assets/icons/cap_agile.svg": "abb31d7694f56c708d5cae9bbd543b07",
"assets/assets/icons/cap_innovation.svg": "bdd90fb7c89a1a2901dba755742f118e",
"assets/assets/icons/web_dev.svg": "06ec7e231a27e639baba2f21a954c768",
"assets/assets/icons/ecommerce.svg": "146ba7df5c2e889d4bffebe244b5b647",
"assets/assets/icons/cap_employee_training.svg": "5ee2552006a4c729c408b09988e35296",
"assets/assets/icons/arrow_left.svg": "14a0d17a8dda5ec5c660e5f03a557e0b",
"assets/assets/icons/cap_windows.svg": "2bec442e869515db1b8492db84d5f036",
"assets/assets/icons/arrow_right.svg": "546ae88a3945ffe53d91dddaa1025b00",
"assets/assets/icons/stars_capabilities_background.svg": "6a4126202af61d81bdbc91c8821a4924",
"assets/assets/icons/circles_background.svg": "984b4ffd3d1293304238c3ca74f1ce59",
"assets/assets/icons/mobile_dev.svg": "9137df8062eb2bd51553ccc53e39c4df",
"assets/assets/icons/release.svg": "c56849a5ff511e406a7b734e0f799450",
"assets/assets/icons/cap_customer_care.svg": "b80b4ebabb552f5faef47038ef89f7cc",
"assets/assets/icons/cap_wifi_protection.svg": "170c3b8884cd63d7dfd3241718cebbe8",
"assets/assets/icons/logo_light.svg": "0ee583e5f4326ebf02cce8f1d4b84b59",
"assets/assets/icons/stars_contact_background.svg": "299768938af9efb3270215fb309f0f9b",
"assets/assets/icons/logo_icon_dark.svg": "baffc66c6269a311a997397fa228b0c9",
"assets/assets/icons/consultant.svg": "ea88ad385cebd92cb38f030cdeb1d937",
"assets/assets/icons/success.svg": "0cf15225d84313c3c97e20740357d27a",
"assets/assets/icons/conversation.svg": "396cde79580bae0f600e53dbbf697ba2",
"assets/assets/icons/cap_machine_learning.svg": "4e7365d1f1a5dcd2ddd13fb5a827529c",
"assets/assets/icons/innovation.svg": "06c6b160f145e703c20f33df5853bba5",
"assets/assets/icons/variation.svg": "4ef8a7540be7d5223b00940c324d8968",
"assets/assets/icons/language_icon.svg": "0375188bab227f78bc3f0e5e081f9f4b",
"assets/assets/icons/logo_dark.svg": "515ad53d792938e59261819889624e5e",
"assets/assets/icons/cap_development.svg": "fda6c5eebc749b72f152a0e18e266bf0",
"assets/assets/icons/cap_solution.svg": "04e6a13ae9c54c7e4527eb9978164a39",
"assets/assets/icons/logo_icon_light.svg": "4659e4c845b2074ad808a65586d2bb16",
"assets/assets/fonts/LiberationSans-Bold.ttf": "57eb9d52d67be8eaf09bcb713626e6f9",
"assets/assets/fonts/Cairo-Regular.ttf": "374ef4fe60ef13426296c292bba5e237",
"assets/assets/fonts/Cairo-Bold.ttf": "ef55322bc2031017175022b779940cb0",
"assets/assets/fonts/Gaoel-Regular.ttf": "cb35918ee8ec71b2b44da9e7f590f995",
"assets/assets/fonts/LiberationSans-Regular.ttf": "bd513477436f5753bbe770da1ca1544c",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
