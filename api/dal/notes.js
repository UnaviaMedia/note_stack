'use strict'

const ApiResponse = requireModule('api/api_response.js');

//Require database connection
const db = requireModule('db');

//Function to verify that a number is a valid, positive integer
function checkNumber(number) {
	return /^\d+$/.test(number) ? parseInt(number) : 0;
}

//TODO: Return response logic to the router (here)

class NoteDAL {
	static test(param) {
		return new Promise(function(resolve, reject) {
			if (param > 5) {
				resolve(ApiResponse(0, 'Greater than 5', { input: param }));
			} else {
				resolve(ApiResponse(1, 'Less than 5', { input: param }));
			}
		});
	}
	
	static list(limit, start, order) {
		return new Promise(function(resolve, reject) {
			db.query('call sp_GetNotes(?, ?, ?)', [limit, start, order], function(err, result, fields) {
				if (err) {
					reject(ApiResponse(1, 'SELECT DB ERROR', err));
					return;
				}
	
				resolve(ApiResponse(0, `GET: ${result ? result[0].length: 0} rows returned`, result));
			});
		});
	}
	
	static get(id) {
		return new Promise(function(resolve, reject) {
			db.query('CALL sp_GetNote(?)', [id], function(err, result, fields) {
				if (err) {
					reject(ApiResponse(1, 'SELECT DB ERROR', err));
					return;
				}
				
				resolve(ApiResponse(0, `GET: ${result ? result[0].length : 0} rows returned`, result));
			});
		});
	}

	static create(title, content) {
		return new Promise(function(resolve, reject) {
			db.query('CALL sp_CreateNote(?, ?);', [title, content], function(err, result, fields) {
				if (err) {
					reject(ApiResponse(1, 'CREATE DB ERROR', err));
					return;
				}
	
				resolve(ApiResponse(0, `POST: ${result ? result.affectedRows: 0} row affected`, result));
			});
		});
	}

	static update(id, title, content) {
		return new Promise(function(resolve, reject) {
			db.query('CALL sp_UpdateNote(?, ?, ?)', [id, title, content], function(err, result, fields) {
				if (err) {
					reject(ApiResponse(1, 'UPDATE DB ERROR', err));
					return;
				}
	
				//TODO: Still have undefined warning
				resolve(ApiResponse(0, `UPDATE: ${result ? result.affectedRows : 0} rows affected`, result));
			});
		});
	}

	static delete(id) {
		return new Promise(function(resolve, reject) {
			db.query(`CALL sp_DeleteNote(?);`, [id], function(err, result, fields) {
				if (err) {
					reject(ApiResponse(1, 'DELETE DB ERROR', err));
					return;
				}
				
				resolve(ApiResponse(0, `DELETE: ${result ? result.affectedRows : 0} rows affected`, result));
			});
		});
	}
}

module.exports = NoteDAL;
