const express = require('express');
const router = express.Router();

//Require database connection
const db = require('./db');

function checkNumber(number) {
	return /^\d+$/.test(number) ? number : 0;
}

router.get('/', function(req, res) {
	//TODO: Get things from database and return a response

	//Get the request parameters and validate them
	let limit = checkNumber(req.query.limit);
	let start = checkNumber(req.query.start);
	let order = new Set(['asc', 'desc']).has(req.query.order) ? req.query.order : 'desc';

	db.query('SELECT id, title, text FROM Note;', function(err, rows, fields) {
		if (err) {
			//TODO: Handle errors
			res.json({ msg: 'SELECT ERROR: Select failed', err: err });
		}

		//TODO: Any validation/processing
		res.json({
			data: rows,
			query: req.query,
			limit: limit,
			start: start,
			order: order
		});
	});
});

router.post('/add', function(req, res) {
	res.json({ msg: 'POST: Post request received' });
});

router.put('/:id', function(req, res) {
	res.json({ msg: `PUT: Update request received for id: ${req.params.id}` });
});

router.delete('/:id', function(req, res) {
	//TODO: Any validation/processing

	//Get id of Note to delete and validate it
	let id = checkNumber(req.params.id);

	if (id > 0) {
		db.query('DELETE FROM Note WHERE id=?;', [id], function(err, rows, fields) {
			if (err) {
				//TODO: Handle errors
				res.json({ msg: 'DELETE ERROR: Delete failed', err: err });
			}

			res.json({ msg: `DELETE: Delete request received for id: ${id}, ${rows.affectedRows} rows affected` });
		});
	} else {
		res.json({ msg: `DELETE: Delete failed for invalid key '${req.params.id}'` });
	}
});

module.exports = router;
