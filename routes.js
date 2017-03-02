const db = require('./db');

module.exports = function(app) {
	app.get('/test', function(req, res) {
		res.json({
			endpoint: '/test',
			message: 'Endpoint reached successfully'
		});
	});

	app.get('/note', function(req, res) {
		//TODO: Get things from database and return a response

		db.query('SELECT id, title, text FROM Note;', function(err, rows, fields) {
			//TODO: Any validation/processing
			res.json(rows)
		});
	});

	app.post('/note/add', function(req, res) {
		res.json({ msg: 'POST: Post request received' });
	});

	app.put('/note', function(req, res) {
		res.json({ msg: 'PUT: Update request received' });
	});

	app.delete('/note', function(req, res) {
		res.json({ msg: 'DELETE: Delete request received' });
	});
}
