// File:	server.js
// Purpose:	Handle server functionality and requests

'use strict'

//Enable the global appRequire function to eliminate unnecessary paths
require('./require_module');

//Required dependencies
const path = require('path');
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

//Development dependencies
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const config = require("./webpack.config");

const DIST_DIR = path.join(__dirname, 'dist');
const PORT = 3000;

const app = express();
const compiler = webpack(config);

//Configure webpack-dev-middleware
app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath
}));

//Support encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//////////////////////////////////////////////////
//	Routes
//////////////////////////////////////////////////

/* API Routes */

//Require the API routes and attach them to the '/note' endpoint
const noteRoutes = require('./api/routes/notes');
app.use('/note', noteRoutes);

/* Default Routes */

/**
 * Index route
 */
app.get('/', function(req, res) {
	res.sendFile(path.join(DIST_DIR, 'index.html'));
});

/**
 * Sample route
 */
app.get('/test', function(req, res) {
	res.json({ msg: 'GET: Test endpoint reached successfully' });
});

/**
 * Catch-all route for error handling
 */
app.get('*', function(req, res) {
	//TODO: Change this to display an error page
	res.sendFile(path.join(DIST_DIR, 'error.html'));
});

//////////////////////////////////////////////////
//	Server Listen
//////////////////////////////////////////////////

/**
 * Listen on specified port or default above if unspecified
 */
app.listen(process.env.PORT || PORT, process.env.IP, function() {
	console.log('Node server listening on port 3000');
});
