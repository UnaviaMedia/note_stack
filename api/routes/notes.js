'use strict';


//Initialize a router instance
const express = require('express');
const router = express.Router();

const noteDAL = requireModule('api/dal/notes');

//TODO: Return response logic to the router (here)

//Sample function to demonstrate the use of Promises
router.get('/test/:number', function(req, res) {
	let number = req.params.number;
	
	noteDAL.test(number).then(function(result) {
		res.json({ msg: `Success: ${result}` });
	}).catch(function(result) {
		res.json({ msg: `Error: ${result}` });
	});
});

//GET request to retrieve all notes with optional queries
router.get('/', function(req, res) {
	noteDAL.list(req, res);
});

//GET request to retrieve a single note
router.get('/:id', function(req, res) {
	noteDAL.get(req, res);
});

//POST request to create a note
router.post('/add', function(req, res) {
	noteDAL.create(req, res);
});

//PUT request to update a note
router.put('/:id', function(req, res) {
	noteDAL.update(req, res);
});

//DELETE request to delete a note
router.delete('/:id', function(req, res) {
	noteDAL.delete(req, res);
});

module.exports = router;
