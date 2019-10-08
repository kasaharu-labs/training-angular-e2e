const BundleAnalyzerPlugin = require('@bundle-analyzer/webpack-plugin')

module.exports = {
  plugins: [new BundleAnalyzerPlugin({ token: process.env.BUNDLE_ANALYZER_TOKEN })],
}
