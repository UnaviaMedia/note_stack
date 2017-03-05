//import { combineReducers } from 'redux';

//Reducer for UI state
const ui = (state = {}, action) => {
	switch (action.type) {
		case 'LOAD_NOTE':
			return Object.assign({}, state, {
				currentNoteId: action.id
			});
		case 'TOGGLE_EDIT_STATE':
			return Object.assign({}, state, {
				isEditing: action.isEditing
			});
		case 'CHANGE_FILTER_TEXT':
			return Object.assign({}, state, {
				filterText: action.filterText
			});
		case 'TOGGLE_SETTINGS_STATE':
			return Object.assign({}, state, {
				isSettingsShown: action.isSettingsShown
			});
		case 'CHANGE_FILTER_OPTIONS':
			return Object.assign({}, state, {
				filterLimit: action.filterLimit,
				filterStart: action.filterStart,
				filterOrder: action.filterOrder
			});
		default:
			return state;
	}
};

/*const ui = combineReducers({
	loadNote
});*/

export default ui;
