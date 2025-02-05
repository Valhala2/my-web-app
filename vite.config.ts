import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/my-new-app/', // Укажи имя репозитория для корректной работы на GitHub Pages
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My App',
        short_name: 'MyApp',
        description: 'A description of my app',
        start_url: '/my-new-app/', // Обновлен start_url для GitHub Pages
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/my-new-app/icons/icon-192x192.png', // Обновленные пути к иконкам
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/my-new-app/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})