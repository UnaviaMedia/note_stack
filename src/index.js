// File:	src/index.js
// Purpose:	Entry point to app

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import noteApp from './reducers';
import App from './components/App';
import uuidV4 from 'uuid';

//Import necessary foundation scripts (for modal)
import 'script-loader!jquery';
import 'script-loader!foundation-sites/js/foundation.core';
import 'script-loader!foundation-sites/js/foundation.util.keyboard';
import 'script-loader!foundation-sites/js/foundation.util.box';
import 'script-loader!foundation-sites/js/foundation.util.triggers';
import 'script-loader!foundation-sites/js/foundation.util.mediaQuery';
import 'script-loader!foundation-sites/js/foundation.util.motion';
import 'script-loader!foundation-sites/js/foundation.reveal';

//Include redux dev tools in the enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Create initialized store (development)
let store = createStore(noteApp, {
	//notes: [ { id: uuidV4(), title: 'React is cool', content: 'This is the content of the note' } ],
	ui: {
		//TODO: Dynamically change this
		editorState: 'VIEW',
		isSettingsShown: false
	}
}, composeEnhancers(applyMiddleware(apiMiddleware, thunk)));

//Populate the store
import { fetchGetNotes } from './actions/note';
store.dispatch(fetchGetNotes('desc', 0, 0));

//Render the app
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

//Initialize Foundation JS
$(document).foundation();

console.log('LOADED: index.js');
