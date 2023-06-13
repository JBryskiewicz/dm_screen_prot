import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';
import sass from 'vite-plugin-sass';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        sass()
    ],
    test: {
        environment: 'jsdom'
    }
});