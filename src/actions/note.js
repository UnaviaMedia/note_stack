// File:	src/actions/note.js
// Purpose:	Handle Redux actions for Notes

import { CALL_API } from 'redux-api-middleware';

//Action to get a note
//NOTE: This is currently unused but let here for future use
export const fetchGetNote = (id) => {
	return {
		[CALL_API] : {
			endpoint: `http://localhost:3000/note?id=${id}`,
			method: 'GET',
			types: ['FETCH_REQUEST_NOTE', 'FETCH_RECEIVE_NOTE', 'FETCH_FAILURE_NOTE']
		}
	};
};

//Action to get all notes
export const fetchGetNotes = (order = '', limit = '', offset = '') => {
	return {
		[CALL_API] : {
			endpoint: `http://localhost:3000/note?order=${order.toLowerCase()}&limit=${limit}&start=${offset}`,
			method: 'GET',
			types: ['GET_REQUEST_NOTES', 'GET_RECEIVE_NOTES', 'GET_FAILURE_NOTES']
		}
	};
	/*return {
		type: 'DELETE_NOTE',
		id
	};*/
};

//Action to add a note
export const fetchAddNote = (note) => {
	return {
		[CALL_API] : {
			endpoint: 'http://localhost:3000/note/add',
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(note),
			types: ['ADD_REQUEST_NOTE', 'ADD_RECEIVE_NOTE', 'ADD_FAILURE_NOTE']
		}
	};
	/*return {
		type: 'CREATE_NOTE',
		id: note.id,
		title: note.title,
		content: note.content
	};*/
};

//Action to update a note
export const fetchUpdateNote = (note) => {
	return {
		[CALL_API] : {
			endpoint: `http://localhost:3000/note/${note.id}`,
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(note),
			types: ['UPDATE_REQUEST_NOTE', 'UPDATE_RECEIVE_NOTE', 'UPDATE_FAILURE_NOTE']
		}
	};
	/*return {
		type: 'UPDATE_NOTE',
		id: note.id,
		title: note.title,
		content: note.content
	};*/
};

//Action to delete a note
//export const deleteNote = (id) => {
export const fetchDeleteNote = (id) => {
	console.log(id);
	return {
		[CALL_API] : {
			endpoint: `http://localhost:3000/note/${id}`,
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			types: ['DELETE_REQUEST_NOTE', 'DELETE_RECEIVE_NOTE', 'DELETE_FAILURE_NOTE']
		}
	};
	/*return {
		type: 'DELETE_NOTE',
		id
	};*/
};
