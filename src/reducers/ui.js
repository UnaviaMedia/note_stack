import { combineReducers } from 'redux';

const ui = (state = {}, action) => {
	switch (action.type) {
		case 'LOAD_NOTE':
			console.log(`Note ${action.id} clicked`);
			return Object.assign({}, state, {
				currentNoteId: action.id
			});
		default:
			return state;
	}
};

/*const ui = combineReducers({
	loadNote
});*/

export default ui;
