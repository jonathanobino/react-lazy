var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:'./demo/demo.js' ,
    output: {
      path: path.join(__dirname),
      filename: './demo/index.js'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"',
        },
        __DEVELOPMENT__: false,
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin(),
    ],
    module: {
      loaders: [{
       test: /\.js$/,
       loader: 'babel',
       exclude: /node_modules/
     }
   ]
  }
};
