const express = require('express');

//Initialize a router instance
const router = express.Router();

//Require database connection
const db = require('./db');

function checkNumber(number) {
	return /^\d+$/.test(number) ? number : 0;
}

router.get('/', function(req, res) {
	//Get the request parameters and validate them
	let limit = checkNumber(req.query.limit);
	let start = checkNumber(req.query.start);
	let order = new Set(['asc', 'desc']).has(req.query.order) ? req.query.order : 'desc';

	db.query('SELECT id, title, text FROM Note;', function(err, result, fields) {
		if (err) {
			//TODO: Handle errors
			res.json({ msg: 'SELECT ERROR: Select failed', err: err });
			return;
		}

		//TODO: Any validation/processing
		res.json({
			msg: `SELECT: Select processed, ${result.length} rows returned`,
			//query: req.query,
			limit: limit,
			start: start,
			order: order,
			data: result
		});
	});
});

router.post('/add', function(req, res) {
	let title = req.body.title;
	let text = req.body.text;

	//TODO: Extend validation to include error messages
	if (!title || !text) {
		res.json({ msg: 'INSERT FAILED: Insert failed with invalid body' });
		return;
	}

	db.query('INSERT INTO Note (title, text) VALUES (?, ?);', [title, text], function(err, result, fields) {
		if (err) {
			//TODO: Handle errors
			res.json({ msg: 'INSERT ERROR: Insert failed', err: err });
			return;
		}

		res.json({ msg: `INSERT: Insert processed, ${result.affectedRows} rows affected` });
	});
});

router.put('/:id', function(req, res) {
	let id = checkNumber(req.params.id);
	let title = req.body.title;
	let text = req.body.text;

	//Validate Note id
	if (id <= 0) {
		res.json({ msg: `UPDATE FAILED: Update failed with invalid id '${req.params.id}'` });
		return;
	}

	//TODO: Extend validation to include error messages
	if (!title || !text) {
		res.json({ msg: 'UPDATE FAILED: Update failed with invalid body' });
		return;
	}

	db.query('UPDATE Note SET title=?, text=? WHERE id=?;', [title, text, id], function(err, result, fields) {
		if (err) {
			//TODO: Handle errors
			res.json({ msg: 'Update ERROR: Update failed', err: err });
			return;
		}

		res.json({ msg: `UPDATE: Update processed, ${result.affectedRows} rows affected` });
	});
});

router.delete('/:id', function(req, res) {
	//Get id of Note to delete and validate it
	let id = checkNumber(req.params.id);

	if (id <= 0) {
		res.json({ msg: `DELETE FAILED: Delete failed with invalid id '${req.params.id}'` });
		return;
	}

	db.query('DELETE FROM Note WHERE id=?;', [id], function(err, result, fields) {
		if (err) {
			//TODO: Handle errors
			res.json({ msg: 'DELETE ERROR: Delete failed', err: err });
			return;
		}

		//TODO: Handle no rows being deleted
		res.json({ msg: `DELETE: Delete processed, ${result.affectedRows} rows affected` });
	});
});

module.exports = router;
