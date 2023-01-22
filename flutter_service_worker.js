'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "50b17bee22ff0e60a32f8ddae962bdd9",
"index.html": "e8d8520258b13eacb528c155dbda8f58",
"/": "e8d8520258b13eacb528c155dbda8f58",
"main.dart.js": "1ebc9934828475400f2d70d07e31cc57",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "fab7a645785a629f3cfc62c8799f6bd6",
"icons/Icon-192.png": "2e67d9b9a16290033940410e01e3f518",
"icons/Icon-maskable-192.png": "2e67d9b9a16290033940410e01e3f518",
"icons/Icon-maskable-512.png": "0cbd5cabc205e7d4b5125d66c3f20135",
"icons/Icon-512.png": "0cbd5cabc205e7d4b5125d66c3f20135",
"manifest.json": "d9375a90b41fbdf175338fd523a0ef52",
"assets/AssetManifest.json": "a2c737f968dc5cd499e851e302c24188",
"assets/NOTICES": "48dca300b561a3be9cfacf67af648dfb",
"assets/FontManifest.json": "7064c795749756399d05dff2ba825812",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "4f0d520a2d703a65f2a08953e025295c",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/svg/gesture_logo.svg": "10833d0a61e99f29a7f30447b991f505",
"assets/assets/images/download.png": "62d8f12713b35bb385e7b93349b65f42",
"assets/assets/images/partners.png": "dda023d5491a877eb92e88ca0af50958",
"assets/assets/images/downloadd.png": "6471a0f38111d1f7b7eb45ffe5b96c71",
"assets/assets/images/huawei.png": "01ef7514a1604a830b0572054ec66bfc",
"assets/assets/images/qassemha_logo.png": "fb351491eaafe299be5a0e8e8095f406",
"assets/assets/images/qassemha_video.png": "fb6d32231bf155b8427ee75190cecf6a",
"assets/assets/images/platforms.png": "2170fd32c862b2c20d0a999aa1fe68b9",
"assets/assets/images/apple.png": "36a43214632e9b154c29eefab62e3d92",
"assets/assets/images/web_home2.png": "dc9096a5bcb940177f3041facd36fca3",
"assets/assets/images/web_home3.png": "48f752dc229fee5c0e22bba41d0af4d0",
"assets/assets/images/textfield.png": "4895bc40949b1bfa43e17c11ffff569a",
"assets/assets/images/web_home1.png": "a5028819b866c5006a0abaad3e1a1e31",
"assets/assets/images/ar_web2.png": "c3c08f2c058f8098b837bc893f078fda",
"assets/assets/images/google.png": "7ebf411fc8f5e498b6160c1edf344ecb",
"assets/assets/images/ar_web1.png": "cfcdfef5392789c814f29063fd95a484",
"assets/assets/languages/en.json": "37d84bdfdd0e8960c662bfe83ad72223",
"assets/assets/languages/ar.json": "042de621cb281bd83a303801315abcf4",
"assets/assets/fonts/Montserrat-Medium.ttf": "aca6287f22eef510c1e622c97bb1e1e1",
"assets/assets/fonts/Cairo-ExtraBold.ttf": "0645b8a99ffdc54a258b3eb7f6d160b9",
"assets/assets/fonts/Cairo-SemiBold.ttf": "b9eb3a03009d618aa53a0ca8eaa6ab4b",
"assets/assets/fonts/Cairo-Medium.ttf": "dcb85dee1c4674ba69ab76c7275b515e",
"assets/assets/fonts/Montserrat-Bold.ttf": "d14ad1035ae6da4e5a71eca362a8d696",
"assets/assets/fonts/Cairo-Regular.ttf": "374ef4fe60ef13426296c292bba5e237",
"assets/assets/fonts/Cairo-Black.ttf": "c3da5664903bac89a1e5a6f38e47a778",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "7ffeec2b4edb434d393875ffbe633c30",
"assets/assets/fonts/Montserrat-ExtraBold.ttf": "dc2f156b60f53c591fc0d2b98cbf01bf",
"assets/assets/fonts/Cairo-Bold.ttf": "ef55322bc2031017175022b779940cb0",
"assets/assets/fonts/Montserrat-Black.ttf": "55e37a35525c63e130e76d588f2f5e8d",
"assets/assets/fonts/Montserrat-Regular.ttf": "34de1239b12123b85ff1a68b58835a1f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
