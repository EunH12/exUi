import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import glob from 'glob'
const inputObject = {
  '.': path.resolve(__dirname, 'src/components/index.js')
}
glob.sync('src/components/*').forEach((item) => {
  if (!item.includes('index.js')) {
    const key = item.substring(item.lastIndexOf('/') + 1, item.length)
    inputObject[key] = path.resolve(__dirname, `src/components/${key}/index.js`)
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  build: {
    outDir: 'lib',
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.js'),
      name: 'MeLib',
      formats: ['es']
    },
    rollupOptions: {
      external: ['react'],
      input: {
        ...inputObject
      },
      output: {
        dir: 'lib',
        format: 'es',
        minifyInternalExports: true,
        entryFileNames: (chunkInfo) => {
          return '[name]/index.js'
        },
        manualChunks: (id, { getModuleInfo }) => {
          if (id.includes('components')) {
            const idList = id.split('/')
            return idList[idList.length - 2]
          }
          return null
        },
        chunkFileNames: (chunkInfo) => {
          return '[name]/[hash].js'
        },
        globals: {
          react: 'React'
        }
      }
    }
  },
  resolve: {
    alias: {
      // src directory path
      '@': path.resolve(__dirname, 'src')
    }
  }
})
