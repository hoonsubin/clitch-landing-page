// details can be found here https://github.com/vitejs/vite/blob/master/src/node/config.ts
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),VitePWA()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
        @import './src/assets/style/_variables.scss';
        @import './src/assets/style/_mixins.scss';
        @import './src/assets/style/_set-device-width.scss';
      `,
            },
        },
    },
});