import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    ignores: [
      'src/components/typography/RichText/serialize.tsx',
      'src/components/typography/RichText/nodeFormat.tsx',
      'src/app/(payload)/admin/importMap.js',
    ],
  },
  ...compat.extends(
    '@innovixx/eslint-config/configs/base',
    '@innovixx/eslint-config/configs/typescript',
    '@innovixx/eslint-config/configs/react',
    'eslint-config-next',
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
    rules: {
      '@next/next/no-img-element': 'off',
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {},
      },
      react: {
        version: 'detect',
      },
    },
  },
];
