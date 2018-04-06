const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    resolve(__dirname, 'src', 'app.js'),
  ],
  output: {
    filename: '[name].[hash].bundle.js',
    path: resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader?sourceMap',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]&camelCase'
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'index.html')
    })
  ]
};
