var webpack = require("webpack");
var path = require('path');

module.exports = {

	entry: {
		app: './src/index.js'
	},
	output: {
		filename: 'dist/bundle/[name].js',
        sourceMapFilename: 'dist/bundle/[name].map'
	},
	devtool: '#source-map',

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query:{
					presets:['react', 'es2015']
				}
			}
		]
	}
}
