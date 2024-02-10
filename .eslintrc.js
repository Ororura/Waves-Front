module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['.eslintrc.js', '.eslintrc.cjs'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        semi: false,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
}
