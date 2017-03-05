//Action to display a note
export const loadNote = (id) => {
	return {
		type: 'LOAD_NOTE',
		id
	};
};

//Action to change the edit state of the app
export const toggleEditState = (isEditing) => {
	return {
		type: 'TOGGLE_EDIT_STATE',
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

//Action to toggle whether the settings modal is shown
export const toggleSettingsState = (isSettingsShown) => {
	return {
		type: 'TOGGLE_SETTINGS_STATE',
		isSettingsShown
	};
};

//Action to change the filter options
export const updateSettings = (filterOptions) => {
	return {
		type: 'UPDATE_FILTER_OPTIONS',
		filterOrder: filterOptions.order,
		filterLimit: filterOptions.limit,
		filterOffset: filterOptions.offset
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
