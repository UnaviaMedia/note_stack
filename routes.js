const connection = require('./dbconnection');

module.exports = function(app) {
	app.get('/test', function(req, res) {
		res.json({
			endpoint: '/test',
			message: 'Endpoint reached successfully'
		});
	});

	app.get('/api/list', function(req, res) {
		//TODO: Get things from database and return a response
		//connection.connect();

		connection.query('SELECT id, title, text FROM Note;', function(err, rows) {
			//if (err) throw err;

			res.json(rows)
		});

		//connection.end();
	});
}
