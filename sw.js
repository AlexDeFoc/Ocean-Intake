if (!self.define) {
    let e,
      a = {};
    const s = (s, i) => (
      (s = new URL(s + '.js', i).href),
      a[s] ||
        new Promise((a) => {
          if ('document' in self) {
            const e = document.createElement('script');
            (e.src = s), (e.onload = a), document.head.appendChild(e);
          } else (e = s), importScripts(s), a();
        }).then(() => {
          let e = a[s];
          if (!e) throw new Error(`Module ${s} didn’t register its module`);
          return e;
        })
    );
    self.define = (i, c) => {
      const p = e || ('document' in self ? document.currentScript.src : '') || location.href;
      if (a[p]) return;
      let l = {};
      const o = (e) => s(e, p),
        r = { module: { uri: p }, exports: l, require: o };
      a[p] = Promise.all(i.map((e) => r[e] || o(e))).then((e) => (c(...e), l));
    };
  }
  define(['./workbox-5c5512d8'], function (e) {
    'use strict';
    self.addEventListener('message', (e) => {
      e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
    });
    e.precacheAndRoute([
      { url: './arrow.svg', revision: 'e6143ba0c26c29bcacf07fa9e0a2676f' },
      { url: './clear.svg', revision: '56318192461477ea0b86c3191f75ecb8' },
      { url: './favicon.ico', revision: '2a2267c448b45ca375b7c292e13a1f9b' },
      { url: './icons/manifest-icon-192.maskable.png', revision: '41dcca9e730f81671d7fc6179e19e216' },
      { url: './icons/manifest-icon-512.maskable.png', revision: '0029b5070300d58e97ffcad461e189f0' },
      { url: './index.html', revision: '926352e7f436170dba073325f2183def' },
      { url: './manifest.json', revision: 'e77f23ca076d593055c6657bdd4ea881' },
      { url: './script.js', revision: '8148dbd7f0a7b69396206dcb62a64cd6' },
      { url: './style.css', revision: 'c52a9b5d7bd0d8814bc14ec6f8373676' },
      { url: './theme.svg', revision: 'c52a9b5d7be0d8814bc14ec6f8373676' },
    ], { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] });
  });
  
  self.addEventListener('install', event => {
    console.log('Service worker installing...');
    // Add a call to skipWaiting here if necessary
    self.skipWaiting();
  });
  
  self.addEventListener('activate', event => {
    console.log('Service worker activating...');
  });
  
  self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
  });
  
//# sourceMappingURL=sw.js.map