'use strict';

/**
 * AbdiMaths v2.0.0
 * A modern, modular JavaScript mathematics library.
 */

const arithmetic  = require('./src/arithmetic');
const trigonometry = require('./src/trigonometry');
const geometry    = require('./src/geometry');
const statistics  = require('./src/statistics');
const algebra     = require('./src/algebra');
const numberTheory = require('./src/numberTheory');
const vector      = require('./src/vector');
const matrix      = require('./src/matrix');

module.exports = {
  ...arithmetic,
  ...trigonometry,
  ...geometry,
  ...statistics,
  ...algebra,
  ...numberTheory,
  ...vector,
  ...matrix,

  // Named sub-modules for tree-shakeable imports
  arithmetic,
  trigonometry,
  geometry,
  statistics,
  algebra,
  numberTheory,
  vector,
  matrix,
};
