const { browser, node } = require('globals');
const { configs: jsEslintConfigs } = require('@eslint/js');
const { parser: tsEslintParser, configs: tsEslintConfigs } = require('typescript-eslint');
const { configs: svelteEslintConfigs } = require('eslint-plugin-svelte');
const svelteConfig = require('./svelte.config.cjs');
const eslintConfigPrettier = require('eslint-config-prettier/flat');
const prettierPlugin = require('eslint-plugin-prettier');


module.exports = [
  /**
   * ESlint 忽略配置
   */
  {
    ignores: ['dist/**', 'node_modules/**', 'site/**'],
  },
  /**
   * ESlint 共享配置
   */
  {
    files: ['**/*.ts', '**/*.svelte'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...browser, ...node },
      parserOptions: {
        tsconfigRootDir: __dirname,
        projectService: true,
        extraFileExtensions: ['.svelte'],
      },
    },
  },
  /**
   * ESlint TypeScript 检测配置（ESLint recommended + TS type-checked）
   */
  jsEslintConfigs.recommended,
  ...tsEslintConfigs.recommendedTypeChecked,
  {
    files: ['**/*.ts'],
    languageOptions: { parser: tsEslintParser },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  /**
   * ESlint Svelte 检测配置
   */
  ...svelteEslintConfigs['flat/recommended'],
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: { parser: tsEslintParser, svelteConfig },
    },
  },
  /**
   * ESlint Prettier 检测配置（关闭与 Prettier 冲突的 ESLint 规则，必须在 prettier 规则之前）
   */
  eslintConfigPrettier,
  {
    files: ['**/*.ts', '**/*.svelte'],
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'warn',
    },
  }
];
