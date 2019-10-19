const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const SocialTags = require('social-tags-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|assets)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/images/',
            },
          },
        ],
      },
      {
        test: /\.(wav|mp3)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/audio/',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './assets/fonts/',
            },
          },
        ],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  plugins: [
    new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, 'src/sw.js'),
      publicPath: '',
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new WebpackPwaManifest({
      name: 'WDS-1: Wed Drum Sequencer',
      short_name: 'WDS-1',
      background_color: '#202429',
      crossorigin: 'use-credentials',
      theme_color: '#000000',
      display: 'standalone',
      icons: [
        {
          src: path.resolve('src/assets/images/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve('src/assets/images/icon.png'),
      background: '#202429',
      favicons: {
        background: '#202429',
        theme_color: '#202429',
      },
    }),
    new SocialTags({
      appUrl: 'https://stufreen.github.io/web-drum-sequencer',
      facebook: {
        'og:url': 'https://stufreen.github.io/web-drum-sequencer',
        'og:type': 'website',
        'og:title': 'WDS-1: Web Drum Sequencer',
        'og:image': './src/assets/images/wds-1-screen.png',
        'og:description': 'Browser-based drum machine and sequencer for crafting beats on the go. You can save your creations and work offline.',
        'og:locale': 'en_US',
        'og:article:author': 'Stu Freen',
      },
      twitter: {
        'twitter:card': 'summary',
        'twitter:creator': '@stafree',
        'twitter:url': 'https://stufreen.github.io/web-drum-sequencer',
        'twitter:title': 'WDS-1: Web Drum Sequencer',
        'twitter:description': 'Browser-based drum machine and sequencer for crafting beats on the go. You can save your creations and work offline.',
        'twitter:image': './src/assets/images/wds-1-screen.png',
      },
    }),
  ],
};
