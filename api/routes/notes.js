// File:	api/routes/notes.js
// Purpose:	Handle API routing for /note endpoints

'use strict';

//Initialize a Router instance from Express
const express = require('express');
const router = express.Router();

//Require the necessary API files
const noteDAL = requireModule('api/dal/notes');
const ApiResponse = requireModule('api/api_response.js');

/**
 * Verify that a number if a valid, positive integer
 * @param {int}	number	Input number for validation
 * @return {bool}	Evaluation of whether number is valid
 */
function checkNumber(number) {
	return /^\d+$/.test(number) ? parseInt(number) : 0;
}

/**
 * Verify that an input is provided and matches a given length
 * @param  {int}	input	Input to validate
 * @param  {int}	input	Minimum length
 * @return {bool}	Evaluation of whether the input is valid
 */
function validateInput(input, minLength = 0) {
	return input !== null && input !== undefined && input.length > minLength;
}


/**
 * Sample route to demonstrate the use of Promises
 */
router.get('/test/:number', function(req, res) {
	let number = req.params.number;

	//Call the DAL function and handle the return promise
	noteDAL.test(number).then(function(result) {
		res.json(result);
	}).catch(function(result) {
		res.json(result);
	});
});

/**
 * GET route to retrieve all notes with optional query parameters
 */
router.get('/', function(req, res) {
	//Get the request parameters and validate them
	let limit = checkNumber(req.query.limit);
	let start = checkNumber(req.query.start);
	let order = new Set(['asc', 'desc']).has(req.query.order) ? req.query.order : 'desc';

	//Call the DAL function and handle the return promise
	noteDAL.list(limit, start, order).then(function(result) {
		res.json(result);
	}).catch(function(result) {
		res.json(result);
	});
});

/**
 * GET route to retrieve a single note
 */
router.get('/:id', function(req, res) {
	let id = req.params.id;

	//Ensure a possible id was provided
	if (!validateInput(id)) {
		res.json(ApiResponse(1, 'GET FAILED: Select failed with invalid id', { id: id }));
		return;
	}

	//Call the DAL function and handle the return promise
	noteDAL.get(id).then(function(result) {
		res.json(result);
	}).catch(function(result) {
		res.json(result);
	});
});

/**
 * POST route to create a note
 */
router.post('/add', function(req, res) {
	let id = req.body.id;
	let title = req.body.title;
	let content = req.body.content;

	//Validate the parameters
	if (!validateInput(id) || !validateInput(title, 3) || !validateInput(content)) {
		res.json(ApiResponse(1, 'POST INVALID: Create failed with invalid body', { title: title, content: content }));
		return;
	}

	//Call the DAL function and handle the return promise
	noteDAL.create(id, title, content).then(function(result) {
		res.json(result);
	}).catch(function(result) {
		res.json(result);
	});
});

/**
 * PUT route to update a note
 */
router.put('/:id', function(req, res) {
	let id = req.params.id;
	let title = req.body.title;
	let content = req.body.content;

	//Validate the parameters
	if (!validateInput(id) || !validateInput(title, 3) || !validateInput(content)) {
		res.json(ApiResponse(1, 'UPDATE INVALID: Update failed with invalid body', { id: id, title: title, content: content }));
		return;
	}

	//Call the DAL function and handle the return promise
	noteDAL.update(id, title, content).then(function(result) {
		res.json(result);
	}).catch(function(result) {
		res.json(result);
	});
});

/**
 * DELETE route to delete a note
 */
router.delete('/:id', function(req, res) {
	let id = req.params.id;

	//Ensure a possible id was provided
	if (!validateInput(id)) {
		res.json(ApiResponse(1, 'DELETE FAILED: Delete failed with invalid id', { id: id }));
		return;
	}

	//Call the DAL function and handle the return promise
	noteDAL.delete(id).then(function(result) {
		res.json(result);
	}).catch(function(result) {
		res.json(result);
	});
});

module.exports = router;
