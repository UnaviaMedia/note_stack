const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIST_DIR = path.join(__dirname, 'dist');
const CLIENT_DIR = path.join(__dirname, 'src');

module.exports = {
	context: CLIENT_DIR,
	devtool: 'source-map',
	//Entry file (index.js)
	entry: './index',
	output: {
		path: DIST_DIR,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			//Process JS and JSX files with Babel for ES6 transpilation
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: 'css-loader'
			},
			//Process SCSS files
			{
				test: /\.scss$/,
				//Uses plugin to extract styles and create a separate stylesheet
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [{
						loader: 'css-loader',
						options: {
							autoprefixer: true,
							sourceMap: true
						}
					}, {
						loader: 'sass-loader',
						options: {
							includePaths: [
								//Include path to foundations-sites scss
								'node_modules/foundation-sites/scss'
							],
							sourceMap: true
						}
					}]
				})
			},
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
		]
	},
	plugins: [
		new ExtractTextPlugin({
			//Name of the result file
			filename: 'styles.css',
			//Disables the plugin
			disable: false
		})
	],
	//Resolve enables locating a module by an attritube
	resolve: {
		//Extensions enables ommitting the following extensions when importing in ES6
		extensions: ['.js', '.jsx', '.json']
	}
};
