import { defineConfig } from 'vite'
import { resolve } from 'path'
import { terserOptions } from './terser.config.ts'

export default defineConfig({
  envDir: "../",
  server: {
    port: 5173,
    allowedHosts: true,
  },
  resolve: {
    alias: { '@': resolve(import.meta.dirname, './src') },
  },
  build: {
    minify: 'terser',
    terserOptions: terserOptions,
    rollupOptions: {
      treeshake: {
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
        unknownGlobalSideEffects: false,
        correctVarValueBeforeDeclaration: false,
      },
      output: {
        entryFileNames: '[hash:6].js',
        chunkFileNames: '[hash:6].js',
        assetFileNames: '[hash:6][extname]',
        manualChunks: undefined,
        hashCharacters: 'base36',
      },
    },
  },
})
