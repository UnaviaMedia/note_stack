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
			{ text: 'Note 1' },
			{ text: 'Note 2' }
		]);
	});
}
