const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'dist'),
    hotOnly: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
