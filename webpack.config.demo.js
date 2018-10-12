var path = require('path')
var webpack = require('webpack')

module.exports = {
  mode:"production",
  entry: './demo/demo.js',
  output: {
    path: path.join(__dirname),
    filename: './demo/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}