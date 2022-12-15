// eslint-disable-next-line no-undef
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  plugins: ['@typescript-eslint'],
  root: true,
};