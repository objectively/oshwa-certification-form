module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    mocha: true,
    commonjs: true,
    es6: true,
    jquery: true
  },
  plugins: ['smells'],
  rules: {
    'smells/no-switch': 1,
    'smells/no-complex-switch-case': 1,
    'smells/no-setinterval': 1,
    'smells/no-this-assign': 1
  }
};
