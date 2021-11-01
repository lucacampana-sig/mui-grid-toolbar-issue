const merge = require('webpack-merge');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseConfig = require('./webpack.config.prod');

module.exports = merge.merge(baseConfig, {
  plugins: [new BundleAnalyzerPlugin()],
});
