import { combineReducers } from 'redux';
import notes from './notes';
import ui from './ui';
//import other reducers

const noteApp = combineReducers({
	notes: notes,
	ui: ui
});

export default noteApp;
