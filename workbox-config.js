const { generateSW } = require('workbox-build');

generateSW({
    globDirectory: './',
    globPatterns: [
        '**/*.{svg,ico,png,jpg,html,json,js,css}'
    ],
    swDest: './sw.js',
    ignoreURLParametersMatching: [
        /^utm_/,
        /^fbclid$/
    ],
    runtimeCaching: [
        {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
            handler: 'CacheFirst',
            options: {
                cacheName: 'images',
                expiration: {
                    maxEntries: 60,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                },
            },
        },
        {
            urlPattern: /\.(?:js|css)$/,
            handler: 'StaleWhileRevalidate',
            options: {
                cacheName: 'static-resources',
            },
        },
        {
            urlPattern: new RegExp('https://your-api-url/'),
            handler: 'NetworkFirst',
            options: {
                cacheName: 'api-responses',
                networkTimeoutSeconds: 10,
                expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 5 * 60, // 5 Minutes
                },
                cacheableResponse: {
                    statuses: [0, 200],
                },
            },
        },
        {
            urlPattern: new RegExp('https://fonts.googleapis.com/'),
            handler: 'StaleWhileRevalidate',
            options: {
                cacheName: 'google-fonts-stylesheets',
            },
        },
        {
            urlPattern: new RegExp('https://fonts.gstatic.com/'),
            handler: 'CacheFirst',
            options: {
                cacheName: 'google-fonts-webfonts',
                expiration: {
                    maxEntries: 30,
                    maxAgeSeconds: 365 * 24 * 60 * 60, // 1 Year
                },
            },
        },
    ],
    skipWaiting: true,
    clientsClaim: true,
});
