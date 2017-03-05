//Action to display a note
export const loadNote = (id) => {
	return {
		type: 'LOAD_NOTE',
		id
	};
};

//Action to change the edit state of the app
export const changeEditState = (isEditing) => {
	return {
		type: 'CHANGE_EDIT_STATE',
		isEditing
	};
};

//Action to change the filter text
export const changeFilterText = (filterText) => {
	return {
		type: 'CHANGE_FILTER_TEXT',
		filterText
	};
};

//Action to change the filter limit
export const changeFilterLimit = (filterLimit) => {
	return {
		type: 'CHANGE_FILTER_LIMIT',
		filterLimit
	}
};

//Action to change the filter start/offset
export const changeFilterStart = (filterStart) => {
	return {
		type: 'CHANGE_FILTER_START',
		filterStart
	}
};

//Action to change the filter order
export const changeFilterOrder = (filterOrder) => {
	return {
		type: 'CHANGE_FILTER_ORDER',
		filterOrder
	}
};


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
export const addNote = (title, content) => {
	return {
		type: 'ADD_NOTE',
		title,
		content
	};
};

//Action to update a note
export const updateNote = (id, title, content) => {
	return {
		type: 'UPDATE_NOTE',
		id,
		title,
		content
	};
};

//Action to delete a note
export const deleteNote = (id) => {
	return {
		type: 'DELETE_NOTE',
		id
	};
};
