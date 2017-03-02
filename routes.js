const express = require('express');
const router = express.Router();

//Require database connection
const db = require('./db');

router.get('/', function(req, res) {
	//TODO: Get things from database and return a response
	console.log(req.query);

	db.query('SELECT id, title, text FROM Note;', function(err, rows, fields) {
		//TODO: Any validation/processing
		res.json({ data: rows, query: req.query });
	});
});

router.post('/add', function(req, res) {
	res.json({ msg: 'POST: Post request received' });
});

router.put('/:id', function(req, res) {
	res.json({ msg: `PUT: Update request received for id: ${req.params.id}` });
});

router.delete('/:id', function(req, res) {
	res.json({ msg: `DELETE: Delete request received for id: ${req.params.id}` });
});

module.exports = router;
