import { combineReducers } from 'redux';
import notes from './notes';
import ui from './ui';
import { reducer as formReducer } from 'redux-form';

const noteApp = combineReducers({
	notes,
	ui,
	//Mount formReducer from redux-form to 'form'
	form: formReducer
});

export default noteApp;
