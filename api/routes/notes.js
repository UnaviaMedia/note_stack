'use strict';


//Initialize a router instance
const express = require('express');
const router = express.Router();

const noteDAL = requireModule('api/dal/notes');
const ApiResponse = requireModule('api/api_response.js');

//Function to verify that a number is a valid, positive integer
function checkNumber(number) {
	return /^\d+$/.test(number) ? parseInt(number) : 0;
}


//Sample function to demonstrate the use of Promises
router.get('/test/:number', function(req, res) {
	let number = req.params.number;
	
	noteDAL.test(number).then(function(result) {
		res.json(result);
	}).catch(function(result) {
		res.json(result);
	});
});

//GET request to retrieve all notes with optional queries
router.get('/', function(req, res) {
	//Get the request parameters and validate them
	let limit = checkNumber(req.query.limit);
	let start = checkNumber(req.query.start);
	let order = new Set(['asc', 'desc']).has(req.query.order) ? req.query.order : 'desc';
	
	noteDAL.list(limit, start, order).then(function(result) {
		res.json(result);
	}).catch(function(result) {
		res.json(result);
	});
});

//GET request to retrieve a single note
router.get('/:id', function(req, res) {
	let id = checkNumber(req.params.id);

	//TODO: Extend validation
	if (id <= 0) {
		res.json(ApiResponse(1, 'GET FAILED: Select failed with invalid id', { id: id }));
		return;
	}
	
	noteDAL.get(id).then(function(result) {
		res.json(result);
	}).catch(function(result) {
		res.json(result);	
	});
});

//POST request to create a note
router.post('/add', function(req, res) {
	let title = req.body.title;
	let content = req.body.content;
	
	//TODO: Extend validation
	if (!title || !content) {
		res.json(ApiResponse(1, 'POST INVALID: Create failed with invalid body', { title: title, content: content }));
		return;
	}
	
	noteDAL.create(title, content).then(function(result) {
		res.json(result);	
	}).catch(function(result) {
		res.json(result);
	});
});

//PUT request to update a note
router.put('/:id', function(req, res) {
	let id = checkNumber(req.params.id);
	let title = req.body.title;
	let content = req.body.content;
	
	//TODO: Validate inputs
	if (id <= 0) {
		res.json(ApiResponse(1, 'UPDATE FAILED: Update failed with invalid id', { id: id }));
		return;
	}

	//TODO: Extend validation to include error messages
	if (!title || !content) {
		res.json(ApiResponse(1, 'UPDATE INVALID: Update failed with invalid body', { id: id, title: title, content: content }));
		return;
	}
	
	noteDAL.update(id, title, content).then(function(result) {
		res.json(result);
	}).catch(function(result) {
		res.json(result);
	});
});

//DELETE request to delete a note
router.delete('/:id', function(req, res) {
	let id = checkNumber(req.params.id);
	
	//TODO: Validate the id
	if (id <= 0) {
		res.json(ApiResponse(1, 'DELETE FAILED: Delete failed with invalid id', { id: id }));
		return;
	}
	
	noteDAL.delete(id).then(function(result) {
		res.json(result);
	}).catch(function(result) {
		res.json(result);	
	});
});

module.exports = router;
