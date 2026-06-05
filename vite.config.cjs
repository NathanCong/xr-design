const { defineConfig } = require('vite')
const { svelte } = require('@sveltejs/vite-plugin-svelte')
const { resolve } = require('path')

const SRC_DIR = resolve(__dirname, 'src')
const SITE_DIR = resolve(__dirname, 'site')
const DIST_CJS_DIR = resolve(__dirname, 'dist/cjs')
const DIST_ESM_DIR = resolve(__dirname, 'dist/esm')
const DIST_UMD_DIR = resolve(__dirname, 'dist/umd')
const DIST_TYPES_DIR = resolve(__dirname, 'dist/types')

const commonPlugins = [
  svelte({
    configFile: 'svelte.config.cjs',
  }),
]

const commonResolve = {
  alias: {
    '@': SRC_DIR,
  },
}

module.exports = defineConfig(({ command, mode }) => {
  /**
   * 开发环境
   */
  if (command === 'serve') {
    return {
      plugins: commonPlugins,
      resolve: commonResolve,
      server: {
        host: 'localhost',
        port: 5173,
        open: true,
      },
    }
  }
  /**
   * 构建环境（site）
   */
  if (command === 'build' && mode === 'site') {
    return {
      plugins: commonPlugins,
      resolve: commonResolve,
      build: {
        outDir: SITE_DIR,
        emptyOutDir: true,
        sourcemap: false,
      },
    }
  }
})
