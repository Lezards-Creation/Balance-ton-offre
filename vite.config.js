import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
      plugins: [vue(), Components()],
      css: {
            preprocessorOptions: {
                  scss: {
                        additionalData: `@import "./src/assets/css/main"; @import "./src/assets/css/fontawesome";`,
                  },
            },
      },
      resolve: {
            alias: {
                  '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
      },
})
