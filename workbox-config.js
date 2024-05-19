module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{ico,png,jpg,html,json,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};