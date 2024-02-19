"use strict";

var path = require('path');

module.exports = {
  mode: 'development',
  // Set the mode to development
  entry: {
    main: path.resolve(__dirname, './src/index.js') // Update the entry point to src/index.js

  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    "static": path.join(__dirname, './public'),
    compress: true,
    port: 8564
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devtool: 'inline-source-map',
  performance: {
    hints: false
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader' // Add the babel-loader for JS and JSX files

      }
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }, {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      use: ['file-loader', {
        loader: 'image-webpack-loader',
        options: {
          bypassOnDebug: true,
          disable: true
        }
      }]
    }]
  }
};