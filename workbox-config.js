module.exports = {
    globDirectory: './',
    globPatterns: [
        '**/*.{ico,png,jpg,svg,html,json,js,css,nojekyll}'
    ],
    swDest: './sw.js',
    ignoreURLParametersMatching: [
        /^utm_/,
        /^fbclid$/
    ],
    runtimeCaching: [{
        urlPattern: ({ request }) => request.destination === 'document',
        handler: 'NetworkFirst',
        options: {
            cacheName: 'my-site-cache-v1',
            expiration: {
                maxEntries: 50,
            },
        },
    }],
};
