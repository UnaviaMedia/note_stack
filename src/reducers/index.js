// File:	src/reducers/index.js
// Purpose:	Combine the app Redux reducers into a single reducer

import { combineReducers } from 'redux';
import notes from './notes';
import ui from './ui';
import { reducer as formReducer } from 'redux-form';

//Combine the various reducers into one global reducer
const noteApp = combineReducers({
	notes,
	ui,
	//Mount formReducer from redux-form to 'form'
	form: formReducer
});

export default noteApp;
