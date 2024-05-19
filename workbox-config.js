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

import {registerRoute} from 'workbox-routing';
import {NetworkFirst} from 'workbox-strategies';

registerRoute(
  ({url}) => url.pathname.startsWith('./index.html'),
  new NetworkFirst()
);