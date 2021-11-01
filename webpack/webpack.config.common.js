/* eslint-env node */
const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const IgnoreNotFoundExportPlugin = require('./plugins/ignore-not-found-export-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  stats: {
    env: true,
    warningsFilter: /export .* was not found in/,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(j|t)sx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              exclude: /node_modules/,
              cacheDirectory: true,
              presets: ['@babel/react', ['@babel/preset-env', { targets: 'defaults' }]],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../public', 'index.html'),
      filename: './index.html',
    }),
    new IgnoreNotFoundExportPlugin(),
    new MomentLocalesPlugin({
      localesToKeep: ['ja'], // 'en-US' is included by default and can't be removed
    }),
  ],
};
