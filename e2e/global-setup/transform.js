const babelJest = require('babel-jest');

/* use higher-level babel.config.js */

module.exports = babelJest.createTransformer({
  rootMode: 'upward',
});
