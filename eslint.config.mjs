import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginImport from "eslint-plugin-import"
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  {
    ignores: ['**/importMap.js'],
  },
  ...compat.extends(
    '@innovixx/eslint-config/configs/base',
    '@innovixx/eslint-config/configs/react',
    '@innovixx/eslint-config/configs/typescript',
    'plugin:prettier/recommended',
    "prettier",
    "next"
  ),
  {
    languageOptions: {
      ecmaVersion: 2020,
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
      react,
      'sort-keys-fix': sortKeysFix,
    },
    rules: {
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      'sort-keys-fix/sort-keys-fix': 'warn',
      '@next/next/no-duplicate-head': 'off'
    },
    settings: {
      'jsx-a11y/strict': true,
    },
  },
];