module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  ignorePatterns: [
    'dist',
    'node_modules',
    '.eslintrc.js',
    'tailwind.config.js',
    'postcss.config.js',
    'tsup.config.ts',
    'storybook-static',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // TypeScript-specific rules
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-inferrable-types': 'error',

    // General JavaScript/TypeScript rules
    'prefer-const': 'error',
    'no-var': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',

    // Turn off base rules that are covered by TypeScript equivalents
    'no-unused-vars': 'off',
  },
  overrides: [
    {
      files: ['**/*.stories.@(js|jsx|ts|tsx)'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
}
