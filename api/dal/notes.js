// File:	api/dal/notes.js
// Purpose:	Provide DAL functionality with the database

'use strict'

//Require necessary modules
const ApiResponse = requireModule('api/api_response.js');
const db = requireModule('db');

/**
 * Data Access Layer class for API consumption
 */
class NoteDAL {
	/**
	 * Test function to demonstrate the use of Promises
	 * @param {int} param	Input to compare
	 * @return {Promise} Promised with resolve and reject handlers
	 */
	static test(param) {
		return new Promise(function(resolve, reject) {
			if (param > 5) {
				resolve(ApiResponse(0, 'Greater than 5', { input: param }));
			} else {
				resolve(ApiResponse(1, 'Less than 5', { input: param }));
			}
		});
	}

	/**
	 * Return a list of notes from the database with optional query parameters
	 * @param {int}		limit	Limit parameter
	 * @param {int} 	start	Offset parameter
	 * @param {string}	limit	Order parameter
	 * @return {Promise} Promise with resolve and reject handlers
	 */
	static list(limit, start, order) {
		return new Promise(function(resolve, reject) {
			db.query('call sp_GetNotes(?, ?, ?)', [limit, start, order], function(err, result, fields) {
				if (err) {
					reject(ApiResponse(1, 'SELECT DB ERROR', err));
					return;
				}

				//Extract necessary data from result (caused by stored procedure/node-mysql?)
				result = result[0];

				//TODO: Handle responses with no affected rows
				resolve(ApiResponse(0, `GET: ${result ? result.length: 0} rows returned`, result));
			});
		});
	}

	/**
	 * Return a specified note from the database
	 * @param {string}	id	Note id
	 * @return {Promise} Promise with resolve and reject handlers
	 */
	static get(id) {
		return new Promise(function(resolve, reject) {
			db.query('CALL sp_GetNote(?)', [id], function(err, result, fields) {
				if (err) {
					reject(ApiResponse(1, 'SELECT DB ERROR', err));
					return;
				}

				//Extract necessary data from result (caused by stored procedure/node-mysql?)
				result = result[0];

				//TODO: Handle responses with no affected rows
				resolve(ApiResponse(0, `GET: ${result ? result.length : 0} rows returned`, result));
			});
		});
	}

	/**
	 * Create a note in the database
	 * @param {string}	id		Note id
	 * @param {string}	title	Note title
	 * @param {string}	content	Note content
	 * @return {Promise} Promise with resolve and reject handlers
	 */
	static create(id, title, content) {
		return new Promise(function(resolve, reject) {
			db.query('CALL sp_CreateNote(?, ?, ?);', [id, title, content], function(err, result, fields) {
				if (err) {
					reject(ApiResponse(1, 'CREATE DB ERROR', err));
					return;
				}

				//TODO: Handle responses with no affected rows
				resolve(ApiResponse(0, `POST: ${result ? result.affectedRows: 0} rows affected`, result));
			});
		});
	}

	/**
	 * Update a note in the database
	 * @param {string}	id		Note id
	 * @param {string}	title	Note title
	 * @param {string}	content	Note content
	 * @return {Promise} Promise with resolve and reject handlers
	 */
	static update(id, title, content) {
		return new Promise(function(resolve, reject) {
			db.query('CALL sp_UpdateNote(?, ?, ?)', [id, title, content], function(err, result, fields) {
				if (err) {
					reject(ApiResponse(1, 'UPDATE DB ERROR', err));
					return;
				}

				//TODO: Handle responses with no affected rows
				resolve(ApiResponse(0, `UPDATE: ${result ? result.affectedRows : 0} rows affected`, result));
			});
		});
	}

	/**
	 * Delete a note from the database
	 * @param {string}	id		Note id
	 * @return {Promise} Promise with resolve and reject handlers
	 */
	static delete(id) {
		return new Promise(function(resolve, reject) {
			db.query(`CALL sp_DeleteNote(?);`, [id], function(err, result, fields) {
				if (err) {
					reject(ApiResponse(1, 'DELETE DB ERROR', err));
					return;
				}

				//TODO: Handle responses with no affected rows
				resolve(ApiResponse(0, `DELETE: ${result ? result.affectedRows : 0} rows affected`, result));
			});
		});
	}
}

module.exports = NoteDAL;
