import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // Global config
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json', // fallback for referenced projects
        tsconfigRootDir: import.meta.dirname,
      },
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'warn',
    },
  },

  // Specific override for apps/microfrontend2-vite
  {
    files: ['apps/microfrontend2-vite/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './apps/microfrontend2-vite/tsconfig.eslint.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // ✅ Add this for microfrontend-vite
  {
    files: ['apps/microfrontend-vite/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './apps/microfrontend-vite/tsconfig.eslint.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/eslint.config.{js,mjs,ts}', '**/vite.config.{js,mjs,ts}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: null, // ✅ disables type-aware linting
      },
    },
  },

  // Recommended configs
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
