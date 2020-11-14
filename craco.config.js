const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CracoEsbuildPlugin = require("craco-esbuild");

module.exports = {
  entry: {
    app: './App.js',
    vendors: ['antd']
  },
  output: {
    path: __dirname + './dist',
    filename: 'chunk-[hash:5].js'
  },
  webpack: {
    plugins: [
      new BundleAnalyzerPlugin(),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'vendor',
      //   filename: 'chunk-vendor.[hash:5].js'
      // })
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          filename: '[name]-[hash:5].bundle.js'
        }
      }
    }
  }
};