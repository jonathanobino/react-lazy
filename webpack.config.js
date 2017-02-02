var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry:'./src/index.js',
	devtool: 'source-map',
	output: {
		library: 'LazyReact',
		libraryTarget: 'umd',
		path: path.join(__dirname),
		filename: './dist/index.js'
	},
	externals: [{
		'react': {
			root: 'React',
			commonjs2: 'react',
			commonjs: 'react',
			amd: 'react'
		}
	}, {
		'react-dom': {
			root: 'ReactDOM',
			commonjs2: 'react-dom',
			commonjs: 'react-dom',
			amd: 'react-dom'
		}
	}],
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"',
			},
			__DEVELOPMENT__: false,
		}),
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		rules: [{
			test: /\.js$/,
			use: 'babel-loader',
			exclude: /node_modules/
	 	}]
	}
}
