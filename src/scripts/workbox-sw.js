/* eslint-disable no-restricted-globals */
import 'regenerator-runtime/runtime';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { skipWaiting, clientsClaim, setCacheNameDetails } from 'workbox-core';
import { registerRoute } from 'workbox-routing/registerRoute';
import { StaleWhileRevalidate, CacheFirst, NetworkFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { cleanupOutdatedCaches } from 'workbox-precaching';

skipWaiting();
clientsClaim();

setCacheNameDetails({
  prefix: 'restoku-web',
  precache: 'precache',
  runtime: 'runtime',
});

precacheAndRoute(self.__WB_MANIFEST, {
  ignoreURLParametersMatching: [/.*/],
});

registerRoute(
  /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail))/,
  new NetworkFirst({
    cacheName: 'dicoding-restaurant-api',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30 * 2,
        maxEntries: 100,
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);

registerRoute(
  ({ url }) =>
    url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com',
  new StaleWhileRevalidate(),
);

cleanupOutdatedCaches();
