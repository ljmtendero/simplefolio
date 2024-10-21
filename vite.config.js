import { resolve } from 'path';
import { defineConfig } from "vite";

export default defineConfig({
    base: '/simplefolio/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                // cv: resolve(__dirname, 'cv.html')
            }
        }
    }
})