// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    plugins: {
      prettier: require('eslint-plugin-prettier'),
      'react-native': require('eslint-plugin-react-native'),
    },
    rules: {
      'prettier/prettier': ['error'],
      'react-native/no-unused-styles': 'error',
    },
  },
  {
    ignores: ['dist/*'],
  },
]);
