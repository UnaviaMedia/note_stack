// File:	src/actions/note.js
// Purpose:	Handle Redux actions for Notes

//Action to display a note
export const setEditorNote = (id) => {
	return {
		type: 'SET_EDITOR_NOTE',
		id
	};
};

//Action to change the edit state of the app
export const setEditorState = (editorState) => {
	return {
		type: 'SET_EDITOR_STATE',
		editorState
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

