module.exports = {
    globDirectory: './',
    globPatterns: [
        '**/*.{png,svg, html,css,js, json,nojekyll}'
    ],
    ignoreURLParametersMatching: [
        /^utm_/,
        /^fbclid$/
    ],
    swDest: 'sw.js'
};