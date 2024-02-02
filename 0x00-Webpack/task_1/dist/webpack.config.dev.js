"use strict";

var path = require('path');

module.exports = {
  // Entry point of your application
  entry: './js/dashboard_main.js',
  // Output configuration
  output: {
    // Path to output the bundled file
    path: path.resolve(__dirname, 'public'),
    // Name of the output file
    filename: 'bundle.js'
  },
  // Set the mode to 'production' to enable optimizations
  mode: 'production'
};