/** @typedef {import('eslint').Linter.Config} Config */

import baseConfig from '@innovixx/eslint-config/config/configs/base/index.mjs';
import reactConfig from '@innovixx/eslint-config/config/configs/react/index.mjs';
import typescriptConfig from '@innovixx/eslint-config/config/configs/typescript/index.mjs';
import esLintNodePlugin from 'eslint-plugin-node';

export const defaultESLintIgnores = [
  '**/.*',
  '**/.git',
  '**/README.md',
  '**/dist/',
  '**/build/',
  '**/node_modules/',
  '**/temp/',
];

/** @type {Config[]} */
export const rootEslintConfig = [
  baseConfig,
  reactConfig,
  typescriptConfig,
  {
    ignores: [
      ...defaultESLintIgnores,
      'node_modules',
      'src/components/typography/RichText/serialize.tsx',
      'src/components/typography/RichText/nodeFormat.tsx',
      'payload-types.ts',
      'eslint.config.mjs',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
  {
    rules: {
      'no-undef': 'off',
    }
  },
  {
    plugins: {
      esLintNodePlugin,
    },
  },
];

export default [
  ...rootEslintConfig,
];
