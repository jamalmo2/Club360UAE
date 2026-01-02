/**
 * Copyright (c) 2026 Club360 UAE. All Rights Reserved.
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false, // Keep for development
        drop_debugger: true,
        passes: 1, // Reduce for faster builds during dev
      },
      format: {
        comments: false,
        ascii_only: false
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          charts: ['recharts'],
          i18n: ['i18next', 'react-i18next', 'i18next-browser-languagedetector']
        },
        // Obfuscate chunk names
        chunkFileNames: 'assets/[hash].js',
        entryFileNames: 'assets/[hash].js',
        assetFileNames: 'assets/[hash].[ext]'
      }
    },
    sourcemap: false, // Disable source maps in production for protection
    target: 'es2022',
    cssCodeSplit: true,
    reportCompressedSize: false
  }
})
