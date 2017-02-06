var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/App.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {test : /\.jsx?/,include : APP_DIR,loader : 'babel-loader'},
      {test: /\.css$/,loader: 'style-loader'},
      {test: /\.css$/,loader: 'css-loader',query: {modules: true,localIdentName: '[name]__[local]___[hash:base64:5]'}},
      {test: /\.scss$/, loaders: [ 'style', 'css', 'sass' ]},
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
};

module.exports = config;
