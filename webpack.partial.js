const BundleAnalyzerPlugin = require('@bundle-analyzer/webpack-plugin')

module.exports = {
  output: {
    path: __dirname + '/dist/training-angular-e2e',
    filename: '[name].js',
  },
  plugins: [new BundleAnalyzerPlugin({ token: process.env.BUNDLE_ANALYZER_TOKEN })],
}
