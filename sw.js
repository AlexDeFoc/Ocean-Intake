// if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,p)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let l={};const n=e=>s(e,c),o={module:{uri:c},exports:l,require:n};a[c]=Promise.all(i.map((e=>o[e]||n(e)))).then((e=>(p(...e),l)))}}define(["./workbox-5c5512d8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon.ico",revision:"2a2267c448b45ca375b7c292e13a1f9b"},{url:"icons/apple-icon-180.png",revision:"fcddbab9b9b8d05a024de070680e4e7d"},{url:"icons/apple-splash-1125-2436.jpg",revision:"ba7cf56d9bd5f7fc94dfa7381f37e5ed"},{url:"icons/apple-splash-1136-640.jpg",revision:"5cba04454ec782c076b02180aa0a7949"},{url:"icons/apple-splash-1170-2532.jpg",revision:"fa3269235da2bde67c7f92ad557e8e11"},{url:"icons/apple-splash-1179-2556.jpg",revision:"dc75b52db278e4c87c7e9efb8fa98037"},{url:"icons/apple-splash-1242-2208.jpg",revision:"78625644ca38a6950c9366adbdfa01e6"},{url:"icons/apple-splash-1242-2688.jpg",revision:"db4633e7f73c63c8346d3933fdfa8b77"},{url:"icons/apple-splash-1284-2778.jpg",revision:"7d0ddec68cb4bb9f3422eaaf5bba1e86"},{url:"icons/apple-splash-1290-2796.jpg",revision:"32bf25f6da2b6118a645decbf1290d6a"},{url:"icons/apple-splash-1334-750.jpg",revision:"16adead1be8976dbc7985910d9b00cc8"},{url:"icons/apple-splash-1488-2266.jpg",revision:"6ae7ad1b0418830f7e92ee84b36b7e5c"},{url:"icons/apple-splash-1536-2048.jpg",revision:"4db06f186426587366bb6a8c66a7abb5"},{url:"icons/apple-splash-1620-2160.jpg",revision:"ef0e12bab0a08d278395d555e81e4689"},{url:"icons/apple-splash-1640-2360.jpg",revision:"d3b79faec293b4fa3ea442a1937a92bb"},{url:"icons/apple-splash-1668-2224.jpg",revision:"0c7dd9245cf6e7108c34771f98bb6d77"},{url:"icons/apple-splash-1668-2388.jpg",revision:"7170e136b9de038060454969a1678b7b"},{url:"icons/apple-splash-1792-828.jpg",revision:"2afc6c66789ae6383899da5bc8dccdde"},{url:"icons/apple-splash-2048-1536.jpg",revision:"a8914b68b3be38a20050fa7c583b43e6"},{url:"icons/apple-splash-2048-2732.jpg",revision:"86bd6fc16ad770b3a7c5de0e628798a7"},{url:"icons/apple-splash-2160-1620.jpg",revision:"512e753ffa6377e3209baec5372a8d81"},{url:"icons/apple-splash-2208-1242.jpg",revision:"61b9018b460b92dbe1b617b98e239079"},{url:"icons/apple-splash-2224-1668.jpg",revision:"4f4133324d89149845cfe8e3d9ed935d"},{url:"icons/apple-splash-2266-1488.jpg",revision:"6f4026ef942ae1c064993a83d8776c7d"},{url:"icons/apple-splash-2360-1640.jpg",revision:"e4141e7c681bad92ba14e3c215030c6d"},{url:"icons/apple-splash-2388-1668.jpg",revision:"1de748c1d9fbdda01073325ca906db7f"},{url:"icons/apple-splash-2436-1125.jpg",revision:"538f621ff713717038e7a52c6a041b7a"},{url:"icons/apple-splash-2532-1170.jpg",revision:"294f9d9591b76e5dd0cec94447322ad2"},{url:"icons/apple-splash-2556-1179.jpg",revision:"7c2b2b88c0d6256ced35f9f8515c611c"},{url:"icons/apple-splash-2688-1242.jpg",revision:"c599d0e7bc0af4fd1da032634852884b"},{url:"icons/apple-splash-2732-2048.jpg",revision:"3c8cce31a56a9d695a49d0ea3f154faa"},{url:"icons/apple-splash-2778-1284.jpg",revision:"9b28a4ec85dbb3e6b42a4f32af088a15"},{url:"icons/apple-splash-2796-1290.jpg",revision:"0aac9530f8171753834df61ce40b7e04"},{url:"icons/apple-splash-640-1136.jpg",revision:"80f418a1d82cabda5f915ffa6fa9d9a2"},{url:"icons/apple-splash-750-1334.jpg",revision:"be53401b455c1f2e58ab7b1d5e0a7937"},{url:"icons/apple-splash-828-1792.jpg",revision:"cb0417eaa0abeefa7e1e36870504bad4"},{url:"icons/manifest-icon-192.maskable.png",revision:"41dcca9e730f81671d7fc6179e19e216"},{url:"icons/manifest-icon-512.maskable.png",revision:"0029b5070300d58e97ffcad461e189f0"},{url:"index.html",revision:"7a9f1747a2c16437e254b82a55caa040"},{url:"logo.png",revision:"49ca60924d80a7ef0f4ae43dde359286"},{url:"manifest.json",revision:"cc80fac3284f91d91719a936e01253f9"},{url:"script.js",revision:"765146b7ce50045bb82257fcb60e5547"},{url:"style.css",revision:"6b671f31e0140d4223ed38025cf3d2bb"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
// //# sourceMappingURL=sw.js.map old


if (!self.define) {
    let e, a = {};
    const s = (s, i) => (s = new URL(s + ".js", i).href, a[s] || new Promise((a => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = s, e.onload = a, document.head.appendChild(e)
        } else e = s, importScripts(s), a()
    })).then(() => {
        let e = a[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e
    }));
    self.define = (i, p) => {
        const c = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (a[c]) return;
        let l = {};
        const n = e => s(e, c), o = {
            module: { uri: c },
            exports: l,
            require: n
        };
        a[c] = Promise.all(i.map(e => o[e] || n(e))).then(e => (p(...e), l))
    }
}
define(["./workbox-5c5512d8"], (function (e) {
    "use strict";

    self.addEventListener("message", (e) => {
        if (e.data && e.data.type === "SKIP_WAITING") {
            self.skipWaiting();
        }
    });

    e.precacheAndRoute(self.__WB_MANIFEST);

    const cacheName = 'my-site-cache-v1';

    e.registerRoute(
        ({ request }) => request.destination === 'document',
        new e.NetworkFirst({
            cacheName,
            plugins: [
                new e.ExpirationPlugin({
                    maxEntries: 50,
                }),
            ],
        })
    );

    self.addEventListener('activate', (event) => {
        event.waitUntil(
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cache => {
                        if (cache !== cacheName) {
                            return caches.delete(cache);
                        }
                    })
                );
            })
        );
    });

    self.addEventListener('install', (event) => {
        event.waitUntil(self.skipWaiting());
    });
    
    self.addEventListener('fetch', event => {
        if (event.request.mode === 'navigate') {
            event.respondWith(
                caches.match(event.request).then(response => {
                    return response || fetch(event.request);
                })
            );
        }
    });
}));
//# sourceMappingURL=sw.js.map
