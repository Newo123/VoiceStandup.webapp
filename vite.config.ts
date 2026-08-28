import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig(({ command, isPreview }) => ({
    plugins: [react(), tailwindcss()],

    resolve: {
        alias: {
            '@': path.resolve(import.meta.dirname, './src'),
        },
    },

    ...(command === 'serve' && !isPreview
        ? {
              server: {
                  port: 8443,
                  host: '0.0.0.0',

                  hmr: {
                      host: 'tg-mini-app.local',
                      port: 8443,
                  },

                  https: {
                      key: fs.readFileSync('./.cert/localhost-key.pem'),
                      cert: fs.readFileSync('./.cert/localhost.pem'),
                  },
              },
          }
        : {}),
}))
