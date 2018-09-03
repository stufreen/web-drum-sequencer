const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/bundle-[contenthash].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        __DEV__: false,
        __PROD__: true,
      },
    }),
  ],
});
