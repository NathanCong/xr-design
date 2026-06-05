const { defineConfig } = require('vite')
const { svelte } = require('@sveltejs/vite-plugin-svelte')
const { resolve } = require('path')

const SRC_DIR = resolve(__dirname, 'src')
const DIST_DIR = resolve(__dirname, 'dist')
const SITE_DIR = resolve(__dirname, 'site')

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
})
