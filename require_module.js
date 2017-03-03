'use strict'

//Idea inspired by:
//	https://thinking.philosophie.is/modularize-your-chat-app-or-how-to-write-a-node-js-express-app-in-more-than-one-file-bfae2d6b69df#.aoe4rbjxi

const path = require('path');

/**
 * Global function to enable require pathing from node_modules folder
 */
module.exports = function() {
	global.requireModule = function(name) {
		return require(path.join(__dirname, name));
	}
}();
