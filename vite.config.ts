import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import svgrPlugin from 'vite-plugin-svgr';
import autoprefixer from 'autoprefixer'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import viteTsconfigPaths from 'vite-tsconfig-paths';
import rollupNodePolyFill from 'rollup-plugin-polyfill-node'

// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig({
  envPrefix: 'REACT_APP_',
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  server: {
    host: true,
    port: 3000
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      },
      plugins: [
        // @ts-ignore
        NodeGlobalsPolyfillPlugin({
            buffer: true
        })
      ]
    }
  },
  build: {
    rollupOptions: {
      plugins: [
        rollupNodePolyFill()
      ]
    }
  },
  css: {
    postcss: {
      plugins: [autoprefixer]
    }
  }
})
