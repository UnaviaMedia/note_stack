var mysql = require('mysql');

//Create a mysql connection
const connection = mysql.createConnection({
	host:		'localhost',
	user:		'ns_api',
	password:	'Passw0rD',
	database:	'NoteStack'
});

module.exports = connection;
