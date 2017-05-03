var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './demo/demo.js',
  output: {
    path: path.join(__dirname),
    filename: './demo/index.min.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
      __DEVELOPMENT__: false
    }),
    new webpack.optimize.UglifyJsPlugin({ comments: false })
  ],
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
