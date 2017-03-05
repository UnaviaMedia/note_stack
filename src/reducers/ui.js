//Reducer for UI state
const ui = (state = {}, action) => {
	switch (action.type) {
		case 'SET_EDITOR_NOTE':
			return Object.assign({}, state, {
				currentNoteId: action.id
			});
		case 'SET_EDITOR_STATE':
			return Object.assign({}, state, {
				editorState: action.editorState
			});
		case 'CHANGE_FILTER_TEXT':
			return Object.assign({}, state, {
				filterText: action.filterText
			});
		case 'TOGGLE_SETTINGS_STATE':
			return Object.assign({}, state, {
				isSettingsShown: action.isSettingsShown
			});
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
