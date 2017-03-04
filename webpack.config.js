const path = require('path');

const DIST_DIR = path.join(__dirname, 'dist');
const CLIENT_DIR = path.join(__dirname, 'src');

module.exports = {
	context: CLIENT_DIR,
	entry: './index',
	output: {
		path: DIST_DIR,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
};
