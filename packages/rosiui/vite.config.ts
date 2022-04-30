import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  base: './', // 设置打包路径
  server: {
    port: 8001,
    open: true,
    cors: true
  },
  build: {
    outDir: 'rosi-ui/dist',
    lib: {
      entry: './src/index.ts',
      name: 'RosiUi',
      fileName: (format) => `rosi-ui.${format}.js`,
      formats: ['es', 'umd']
    }
  }
})
