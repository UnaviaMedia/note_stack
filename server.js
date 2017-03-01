//require('babel-register');

var path = require('path');
var express = require('express');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var config = require("./webpack.config");

const DIST_DIR = path.join(__dirname, 'dist');
const PORT = 3000;

var app = express();
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath
}));


//Require the API routes
require('./routes')(app);

app.get('/', function(req, res) {
	res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.get('*', function(req, res) {
	//TODO: Change this to display an error page
	console.error('ROUTING: Invalid path')
	res.sendFile(path.join(DIST_DIR, 'index.html'));
});


// Listen on specified port or 3000 if unspecified
app.listen(process.env.PORT || PORT, function() {
	console.log('Node server listening on port 3000');
});
