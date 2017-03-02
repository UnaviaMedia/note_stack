var mysql = require('mysql');

const dbHost = process.env.IP || 'localhost';
const dbUser = 'ns_api';

//Create a mysql connection
const db = mysql.createConnection({
	host:		dbHost,
	user:		dbUser,
	password:	'Passw0rD',
	database:	'NoteStack',
	debug: [
		'ComQueryPacket', 'ResultSetHeaderPacket', 'RowDataPacket'
	]
});

//Open a connection to the database
db.connect(function(err) {
	if (err) {
		console.error(`Error connecting: ${err.stack}`);
		return;
	}	
	
	console.log(`Connected as id ${db.threadId}`);
});

module.exports = db;
