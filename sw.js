// sw.js
// Import Workbox library
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js');

// Check if Workbox is loaded
if (workbox) {
  console.log('Workbox is loaded');

  // Precache and route with NetworkFirst strategy
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'document',
    new workbox.strategies.NetworkFirst({
      cacheName: 'document-cache',
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [200],
        }),
      ],
    })
  );

  // Cache CSS, JSON, and other resources with CacheFirst strategy
  workbox.routing.registerRoute(
    /\.(?:css|json|js|png|jpg|ico|html)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'static-resources',
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [200],
        }),
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    })
  );

  // Fallback to offline page for non-CSS, non-JSON requests
  workbox.routing.setDefaultHandler(
    new workbox.strategies.NetworkOnly()
  );

  // Handle requests for favicon.ico
  workbox.routing.registerRoute(
    ({ url }) => url.pathname === '/favicon.ico',
    new workbox.strategies.NetworkFirst({
      cacheName: 'favicon-cache',
    })
  );

  // Handle requests for manifest icons
  workbox.routing.registerRoute(
    ({ url }) => url.pathname.startsWith('/icons/manifest-icon'),
    new workbox.strategies.NetworkFirst({
      cacheName: 'manifest-icons-cache',
    })
  );

  // Skip waiting for new service worker to become active
  self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
} else {
  console.log('Workbox didn\'t load');
}
