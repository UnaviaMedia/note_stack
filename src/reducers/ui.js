// File:	src/reducers/notes.js
// Purpose:	Provide a Redux reducer for Note actions

/**
 * Redux reducer for UI
 * @param {object}	state	Current Redux UI state
 * @param {object}	action	Action to perform against state
 * @return {object}	New UI state
 */
const ui = (state = {}, action) => {
	switch (action.type) {
		//Set the current editor note
		case 'SET_EDITOR_NOTE':
			return Object.assign({}, state, {
				currentNoteId: action.id
			});
		//Set the current editor state
		case 'SET_EDITOR_STATE':
			return Object.assign({}, state, {
				editorState: action.editorState
			});
		//Set the current sidebar filter text
		case 'CHANGE_FILTER_TEXT':
			return Object.assign({}, state, {
				filterText: action.filterText
			});
		//Set the current settings modal state
		case 'TOGGLE_SETTINGS_STATE':
			return Object.assign({}, state, {
				isSettingsShown: action.isSettingsShown
			});
		//Set the current setting filter options
		case 'UPDATE_FILTER_OPTIONS':
			return Object.assign({}, state, {
				filterOrder: action.filterOrder,
				filterLimit: action.filterLimit,
				filterOffset: action.filterOffset
			});
		default:
			return state;
	}
};

export default ui;
