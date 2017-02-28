//require('babel-register');
//require('./server.babel');

//import path from 'path';
//import express from 'express';
var path = require('path');
var express = require('express');

const DIST_DIR = path.join(__dirname, 'dist');
const PORT = 3000;

const app = express();

app.use(express.static(DIST_DIR));

app.get('*', function(req, res) {
	res.sendFile(path.join(DIST_DIR, "index.html"));
});

// Listen on specified port or 3000 if unspecified
app.listen(process.env.PORT || PORT, function() {
	console.log('Node server listening on port 3000');
});
