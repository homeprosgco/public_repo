'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/assets/fonts/NotoSans-Regular.ttf": "c8e58befd2433eb89589dd1d23225c4e",
"assets/assets/fonts/NotoSans-Bold.ttf": "ef4b39fb4d49db8beed2966debc0f477",
"assets/assets/images/hero-section-bg.png": "9e0d36a9575cadb552177bdf8f82ecc1",
"assets/assets/images/trusted_icon.png": "b88f8ae996b72b757ef78a67f0121cf4",
"assets/assets/images/phone.png": "2698bfc64f3baaad6f3e32145233d846",
"assets/assets/images/contact_now_img.png": "a114c9eca5c84e450b56e085d7f96af0",
"assets/assets/images/feature_images/trusted_review_feature_img.png": "94146928ee51bfb47cf4a8fbe124302e",
"assets/assets/images/feature_images/insurance_feature_img.png": "b18741089fa7dcd9e6194b99df219543",
"assets/assets/images/feature_images/secure_payment_feature_img.png": "252ca9d0eb70ddc14edd5e9e63d38d97",
"assets/assets/images/feature_images/feature_section_img.png": "8fb60c01afc4b9d8a21b5a90ea65f95f",
"assets/assets/images/contractor.jpg": "6b213923ede3666ba0ea250e76c9640c",
"assets/assets/images/review_avatars/customer_review_five.png": "8f8c15755dc6ea5322f7785af7cb7c8c",
"assets/assets/images/review_avatars/customer_review_one.png": "86d73c069c8750ab4c9dbd4841beb575",
"assets/assets/images/review_avatars/customer_review_two.png": "803ff37d42e0456ffdd208270748b51c",
"assets/assets/images/review_avatars/customer_review_three.png": "5848489923c43e5bf9f9f6ae17521ffe",
"assets/assets/images/review_avatars/customer_review_four.png": "ae82321167af58df5001969e9545611d",
"assets/assets/images/services/gutter_cleaning.jpg": "4219439320ccc9890d912b78e06fc1dc",
"assets/assets/images/services/junk_removal.png": "e64e182d1a05ee6a9ab6c1b6c7cbd237",
"assets/assets/images/services/deck_installation.jpg": "5b4e1d21ddeb5bc7aee5336025ff9573",
"assets/assets/images/services/handyman.jpg": "2b5ebedd01986e473bc137e6122e8159",
"assets/assets/images/services/lawn_care.jpg": "02fc298132220e472f40c41905abfed7",
"assets/assets/images/services/cleaning_services.jpeg": "c0fcb8c97702c1ac7bb7f55fb681bd14",
"assets/assets/images/services/tree_removal_services.jpg": "fb405b420ca63264d62d3be21ae7aba7",
"assets/assets/images/services/privacy_fence_install.jpg": "6b280ea66b78c8d65d92eb2f1746cd47",
"assets/assets/images/services/carpenter.jpg": "ec33e41d46da8b0642fdc5e778993961",
"assets/assets/images/services/tile_installtion.jpg": "c42ab335426dcef59fc4ba1f44d3d0bc",
"assets/assets/images/about_us_screen/about_us_hero_img.jpg": "1dd2e0025f790bf3b8c9abecf5f551df",
"assets/assets/images/about_us_screen/about_us_intro_img.jpg": "ad6d34f9a9e1b0204279a1af1a4a31cc",
"assets/assets/images/icon_pack/carpet_installation.png": "564a78208c5e80b009fbc930e0f4de8d",
"assets/assets/images/icon_pack/handyman.png": "4d2c8b1e583cb99555044ac3b1d1e27e",
"assets/assets/images/icon_pack/garage_repair.png": "721d4b068ea2d4dbc4fd125d503e743e",
"assets/assets/images/icon_pack/electrical_services.png": "1be3997d13f868e07ad4ebdbfa714113",
"assets/assets/images/icon_pack/bathroom_renovation.png": "8ab6d2b7511ba875cc842279df40a34c",
"assets/assets/images/icon_pack/appliance_services.png": "ab7ef8d2d9a259def786f36571c32bae",
"assets/assets/images/icon_pack/home_additions.png": "0ccaba1f750a58f47729aa8a8b127ebd",
"assets/assets/images/icon_pack/plumbing_repairs.png": "682507c09f7eaac789f021a504d34ab2",
"assets/assets/images/icon_pack/appliance_repair.png": "766169bf9acf6bbc0258a373c2973644",
"assets/assets/images/icon_pack/kitchen_remodeling.png": "b9e201be958b15ed0d970bfc4a1d093d",
"assets/assets/images/icon_pack/flooring_upgrades.png": "8a1b29c2509eef3d2e923279bfeacb97",
"assets/assets/images/icon_pack/cabinet_refinishing.png": "47acc84f8e78847b95bf1c6987de14ae",
"assets/assets/images/icon_pack/appliance_repairs.png": "b61224483d80ad1e304adc958f1b3ba7",
"assets/assets/images/icon_pack/deck_installation.png": "2328bf46300dc96947e16e309df5bbd2",
"assets/assets/images/icon_pack/appliance_service.png": "2a057d7fa5c99f3428feedcb78b2670f",
"assets/assets/images/icon_pack/window_replacement.png": "cd53e23e63298ed3a66697d588dd96f9",
"assets/assets/images/icon_pack/landscaping.png": "02a0cb7ea16416bb4c323927a903251b",
"assets/assets/images/icon_pack/maintenance%2520.png": "06ba3ee3ff4adce04a53d46656df3982",
"assets/assets/images/icon_pack/roof_repair.png": "2c09eac81706e7aa575ce2d321f65efc",
"assets/assets/images/logo.png": "45e6d671b042d6161bc21b2a0a5f57a5",
"assets/assets/images/contact_us_screen/contact_us_info_bg_img.png": "d5fe22a1dd12e46c89fee13d99295313",
"assets/assets/images/logo.webp": "ca79fb7470f897cc8cde4c107ad19315",
"assets/fonts/MaterialIcons-Regular.otf": "829abd4ec50dbb03c9b722044a93d45a",
"assets/AssetManifest.bin": "d6c02897a7d5e82c1d04b4e879804985",
"assets/FontManifest.json": "f070534730066945db219281f61a5e56",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/amplify_auth_cognito_dart/lib/src/workers/workers.min.js.map": "b1b88354b314712e5b934a0d01d3575e",
"assets/packages/amplify_auth_cognito_dart/lib/src/workers/workers.min.js": "bf513d4da5f72ba53d681dee925dc047",
"assets/packages/amplify_secure_storage_dart/lib/src/worker/workers.min.js.map": "04c1f83e143ccc343799cca4a7e4455c",
"assets/packages/amplify_secure_storage_dart/lib/src/worker/workers.min.js": "df3ce073f7055b037482c5add6df30fe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5fdd2f73a08ca4388e568ef0469ed3a9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "ebef78cc60a7bde15f55fdead30f8e94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/amplify_authenticator/assets/social-buttons/google.png": "a1e1d65465c69a65f8d01226ff5237ec",
"assets/packages/amplify_authenticator/assets/social-buttons/SocialIcons.ttf": "1566e823935d5fe33901f5a074480a20",
"assets/AssetManifest.bin.json": "d56e550e5113e9177a29790aaa8aedcd",
"assets/NOTICES": "611b8551f12670319782fa6e0a9d362c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "b15eb30afd64e05cc91a764b04f7d70a",
"flutter_bootstrap.js": "2249406fa4a753ef12523df99a96b0b2",
"main.dart.js": "d085cc32d6d092c9d337c33d8846d43b",
"manifest.json": "05dddf3b83697972c32797e34206401c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"index.html": "84714cfd00e0e1c1b4025faec9712b6f",
"/": "84714cfd00e0e1c1b4025faec9712b6f",
"version.json": "dd9d5dcb0b16d5fb042065817e6c4e33"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
