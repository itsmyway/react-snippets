/*
    ./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname + "/dist",
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.jsx?$/,
        loaders: ['react-hot-loader','babel-loader'], //hot-loader to come first
        exclude: /node_modules/
      }
    ]
  },
  //plugin
  plugins: [HtmlWebpackPluginConfig]
}
