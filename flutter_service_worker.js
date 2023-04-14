'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "aa5c20844afac8fe72b5b343ab49d8d7",
"assets/AssetManifest.json": "96acbcf0794ead47a7505a6c3032ac18",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/images/experienceDesign_imageanalysis.jpg": "ad8eb23dc7728c7cc6ae39644fd8e719",
"assets/images/experienceDesign_imageanalysisMTG.jpg": "cfe470c1699eea7c49ecd09f833a7c8d",
"assets/images/icon_experienceDeisgn.jpg": "32c0c1b7a02e2e808b0ad95a43a502b3",
"assets/images/icon_mazeApp.jpg": "737787be901a421bdddf75c4f07f51d3",
"assets/images/icon_sistafam.jpg": "760b69085e82ea9545c9ee24e2570172",
"assets/images/icon_UIapp.jpg": "b8eb5fa766df8f65a187726a314beea5",
"assets/images/mazeapp_generalMaze.jpg": "0475cb759d3743b07356e83c5acf29ca",
"assets/images/mazeapp_largeArtMaze.jpg": "a15066f98303caeb2559039d0ff14f9f",
"assets/images/mazeapp_maze1.jpg": "1827c9bb00fd167b547fd1b71723beaf",
"assets/images/mazeapp_mazeUI.jpg": "c8cbefe53c1e9507ba1efa9d8974844d",
"assets/images/mazeapp_UML.jpg": "9ad4bd564a6341c42977afd540f6d91d",
"assets/images/placeholder.jpg": "b5a2b43129adec84e05a2832e7de5808",
"assets/images/placeholderflat.jpg": "9eb69f9cdd988cca82227abc4140f57b",
"assets/images/sistafam_feed.jpg": "36c6825f80a34c781f14903ed22bf7fb",
"assets/images/sistafam_groups.jpg": "48e34032b475703d723d7b471cd33522",
"assets/images/sistafam_loginpage.jpg": "5a619f022a46facba61fa2f1abffd0c0",
"assets/images/sistafam_UserProfile.jpg": "265d3a7eb98949f8dbb9d67eda4d7f43",
"assets/images/uiproject_UML.jpg": "f5c127cbc39e96450c45e06de645c654",
"assets/NOTICES": "bdd87585deefb6e04728f796091ef299",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/textFiles/default_codeSample.txt": "44c49aa93d90e630a522770128843433",
"assets/textFiles/default_description.txt": "854182da9a85bf5877995468e79671c5",
"assets/textFiles/experienceDesign_codeSample.txt": "a6949a70c62389c95f004f81bb688490",
"assets/textFiles/experienceDesign_description.txt": "b6560e742237140c0d21043a6ddb4ec0",
"assets/textFiles/mazeApp_codeSample.txt": "6c9057ab5a1b89f20c1bb585b0b2c793",
"assets/textFiles/mazeApp_description.txt": "5831563500e37de27d27923be854d194",
"assets/textFiles/portfolio_codeSample.txt": "44c49aa93d90e630a522770128843433",
"assets/textFiles/portfolio_description.txt": "854182da9a85bf5877995468e79671c5",
"assets/textFiles/sistafam_codeSample.txt": "bb8ace213573481f662eb88c5f94d05c",
"assets/textFiles/sistafam_description.txt": "d304dde55e340d282582b3c9ae516c01",
"assets/textFiles/UIproject_codeSample.txt": "186d0c9c8c7037258f760c7b85be4aa0",
"assets/textFiles/UIproject_description.txt": "22dc52c355b807d8b212d61fbbc4e50d",
"canvaskit/canvaskit.js": "9319c59a25b00d3f4d64e7276e0ff2b1",
"canvaskit/canvaskit.wasm": "4d86c371593190f295d8f6577f4d44a8",
"canvaskit/chromium/canvaskit.js": "c6907e24da20dcf39c2f3ceee2663f1b",
"canvaskit/chromium/canvaskit.wasm": "8b16caeab6e7fc6db6609b416f05e906",
"canvaskit/skwasm.js": "f4f37a4a8f520489f5017d9241270821",
"canvaskit/skwasm.wasm": "34fa7acedca7fa4bfefbc323b763beb5",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5fdeee66f2527921ce947cde3321a396",
"/": "5fdeee66f2527921ce947cde3321a396",
"main.dart.js": "5cf184346c3e660d92f94d404caac77c",
"manifest.json": "e78a34c7f00f6f568657f0a72322bdcc",
"version.json": "b2a79a449f31a2856737862aab2b59df"};
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
