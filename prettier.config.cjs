const sveltePlugin = require('prettier-plugin-svelte');

module.exports = {
  /**
   * 添加 Svelte 插件
   */
  plugins: [sveltePlugin],
  /**
   * 添加 Prettier 规则
   */
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  printWidth: 80,
}
