//Action to display a note
export const loadNote = (id) => {
	return {
		type: 'LOAD_NOTE',
		id: id
	}
};


//Action to get a note
export const getNote = (id) => {
	return {
		type: 'GET_NOTE',
		id: id
	};
};

//Action to get all notes
export const getNotes = () => {
	return {
		type: 'GET_NOTES'
	};
};

//Action to add a note
export const addNote = (title, content) => {
	return {
		type: 'ADD_NOTE',
		title: title,
		content: content
	};
};

//Action to update a note
export const updateNote = (id, title, content) => {
	return {
		type: 'UPDATE_NOTE',
		id: id,
		title: title,
		content: content
	};
};

//Action to delete a note
export const deleteNote = (id) => {
	return {
		type: 'DELETE_NOTE',
		id: id
	};
};
