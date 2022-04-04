var path = require('path')

module.exports = {
  mode:'production',
  entry: './demo/demo.js',
  output: {
    path: path.join(__dirname),
    filename: './demo/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}