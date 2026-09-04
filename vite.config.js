import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon-mosque.svg'],
      manifest: {
        name: 'SalahGuide — Learn to Pray',
        short_name: 'SalahGuide',
        description:
          "A complete, beginner-to-expert guide to Salah — the Islamic prayer. Wudu, prayer times, step-by-step guide, every type of prayer, and all the duas and surahs you need.",
        lang: 'en',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        theme_color: '#072e23',
        background_color: '#f7f4ec',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'icon-512-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // SPA client-side routing: any unmatched navigation falls back to
        // the app shell so react-router can take over offline.
        navigateFallback: '/index.html',
        globPatterns: ['**/*.{js,css,html,svg,woff2}'],
        runtimeCaching: [
          {
            // Prayer times must stay accurate when online — try the network
            // first, and only fall back to the last cached response (better
            // than nothing) when genuinely offline.
            urlPattern: /^https:\/\/api\.aladhan\.com\/.*/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'aladhan-api',
              networkTimeoutSeconds: 8,
              expiration: { maxEntries: 40, maxAgeSeconds: 60 * 60 * 24 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            // Dua/adhkar recitation audio — doesn't change, safe to cache
            // for offline listening once played.
            urlPattern: /^https:\/\/www\.hisnmuslim\.com\/audio\/.*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'recitation-audio',
              expiration: { maxEntries: 80, maxAgeSeconds: 60 * 60 * 24 * 90 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/,
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'google-fonts-stylesheets' },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
})
