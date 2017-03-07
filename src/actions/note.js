// File:	src/actions/note.js
// Purpose:	Handle Redux actions for Notes

import { CALL_API } from 'redux-api-middleware';

//Action to get a note
export const getNote = (id) => {
	return {
		[CALL_API] : {
			endpoint: `http://localhost:3000/note?id=${id}`,
			method: 'GET',
			types: ['FETCH_REQUEST_NOTE', 'FETCH_RECEIVE_NOTE', 'FETCH_FAILURE_NOTE']
		}
	};
	/*return {
		type: 'GET_NOTE',
		id
	};*/
};

//Action to get all notes
export const fetchGetNotes = (order = '', limit = '', offset = '') => {
	return {
		[CALL_API] : {
			endpoint: `http://localhost:3000/note?order=${order}&limit=${limit}&start=${offset}`,
			method: 'GET',
			types: ['GET_REQUEST_NOTES', 'GET_RECEIVE_NOTES', 'GET_FAILURE_NOTES']
		}
	};
};

//Action to add a note
export const fetchAddNote = (note) => {
	console.log(note);
	return {
		[CALL_API] : {
			endpoint: 'http://localhost:3000/note/add',
			headers: {
				'Accept': 'application/json',
                'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(note),
			types: ['ADD_REQUEST_NOTE', 'ADD_RECEIVE_NOTE', 'ADD_FAILURE_NOTE']
		}
		/*type: 'ADD_NOTE',
		id: note.id,
		title: note.title,
		content: note.content*/
	};
};

//Action to update a note
export const updateNote = (note) => {
	return {
		type: 'UPDATE_NOTE',
		id: note.id,
		title: note.title,
		content: note.content
	};
};

//Action to delete a note
export const deleteNote = (id) => {
	return {
		type: 'DELETE_NOTE',
		id
	};
};
