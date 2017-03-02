const db = require('./db');

module.exports = function(app) {
	app.get('/test', function(req, res) {
		res.json({
			endpoint: '/test',
			message: 'Endpoint reached successfully'
		});
	});

	app.get('/api/list', function(req, res) {
		//TODO: Get things from database and return a response

		db.query('SELECT id, title, text FROM Note;', function(err, rows, fields) {
			//TODO: Any validation/processing
			res.json(rows)
		});
	});
}
