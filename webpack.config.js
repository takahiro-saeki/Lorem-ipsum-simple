const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },
  context: path.resolve(__dirname, 'src'),
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ],
  },
  devServer: {
    hot: true,
    inline: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true,
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new HtmlWebpackPlugin({
      title: 'lorem ipsom generator /test',
      template: path.join(__dirname, './src/index.ejs')
    }),
  ])
}
