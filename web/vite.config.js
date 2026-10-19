import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
   base: '/Deosol/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Deosol',
        short_name: 'Deosol',
        start_url: '/Deosol/',
        scope: '/Deosol/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#6c3fc5',
        icons: [
  { src: 'icon1-192.png', sizes: '192x192', type: 'image/png' },
  { src: 'icon1-512.png', sizes: '512x512', type: 'image/png' },
  { src: 'icon2-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
  { src: 'icon2-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
]
      },
      workbox: {
        navigateFallbackDenylist: [/^\/api/, /^\/socket\.io/]
      }
    })
  ],
})