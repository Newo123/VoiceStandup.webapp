import react from '@vitejs/plugin-react';
import fs from 'fs';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
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
});
