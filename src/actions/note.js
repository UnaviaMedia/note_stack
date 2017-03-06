// File:	src/actions/note.js
// Purpose:	Handle Redux actions for Notes

//Action to get a note
export const getNote = (id) => {
	return {
		type: 'GET_NOTE',
		id
	};
};

//Action to get all notes
export const getNotes = () => {
	return {
		type: 'GET_NOTES'
	};
};

//Action to add a note
export const addNote = (note) => {
	return {
		type: 'ADD_NOTE',
		id: note.id,
		title: note.title,
		content: note.content
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
