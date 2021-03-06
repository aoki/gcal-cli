module.exports = {
  'env': {
    'commonjs': true,
    'es6': true,
    'node': true
  },
  'parser': 'babel-eslint',
  'extends': 'eslint:recommended',
  'rules': {
    'indent': [
      'error',
      2,
      { 'SwitchCase': 1 }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-console': 0
  }
};
