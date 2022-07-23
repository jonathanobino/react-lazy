const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, './src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader' }],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts'],
  },
  output: {
    library: 'LazyReact',
    libraryTarget: 'umd',
    path: path.join(__dirname),
    filename: './dist/index.js',
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  }
}
