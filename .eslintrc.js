module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  'react-native/no-inline-styles': 1,
  'prettier/prettier': [
    'error',
    {
      'no-inline-styles': false,
    },
  ],
};
