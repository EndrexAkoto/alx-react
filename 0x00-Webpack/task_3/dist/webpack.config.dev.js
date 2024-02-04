"use strict";

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var _require = require('clean-webpack-plugin'),
    CleanWebpackPlugin = _require.CleanWebpackPlugin;

module.exports = {
  entry: {
    header: './src/modules/header/header.js',
    body: './src/modules/body/body.js',
    footer: './src/modules/footer/footer.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8564
  },
  module: {
    rules: [// ... your existing module rules
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: true
  }), new CleanWebpackPlugin() // ... other plugins
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devtool: 'inline-source-map' // ... other configurations

};