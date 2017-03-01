module.exports = function(app) {
	app.get('/test', function(req, res) {
		res.json({
			endpoint: '/test',
			message: 'Endpoint reached successfully'
		});
	});

	app.get('/api/list', function(req, res) {
		//TODO: Get things from database and return a response
		res.json([
			{ id: 1, title: 'Note 1', text: 'Random string' },
			{ id: 2, title: 'Note 2', text: 'Another note' }
		]);
	});
}
