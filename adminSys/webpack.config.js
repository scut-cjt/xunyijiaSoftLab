var webpack = require('webpack');

module.exports = {
  entry: './entry.js',
  output: {
    path:"./dist",
    publicPath:"http://localhost:8080",
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.less$/,loader: "style!css!less"},
    ]
  },
   resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by cjt')
  ]
}