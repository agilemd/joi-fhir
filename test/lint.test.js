const lint = require('mocha-eslint');

const options = {};
const paths = [
  'lib'
];

options.formatter = 'compact';
options.timeout = 5000;

lint(paths, options);
