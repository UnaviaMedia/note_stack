import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import noteApp from './reducers';
import App from './components/App';

import 'script-loader!jquery';
import 'script-loader!foundation-sites/js/foundation.core';
import 'script-loader!foundation-sites/js/foundation.util.keyboard';
import 'script-loader!foundation-sites/js/foundation.util.box';
import 'script-loader!foundation-sites/js/foundation.util.triggers';
import 'script-loader!foundation-sites/js/foundation.util.mediaQuery';
import 'script-loader!foundation-sites/js/foundation.util.motion';
import 'script-loader!foundation-sites/js/foundation.reveal';

let store = createStore(noteApp, {
	notes: [
		{ id: 1, title: 'React is cool', content: 'This is the content of the note' },
		{ id: 2, title: 'Redux is nice', content: 'Random contents of the note' },
		{ id: 3, title: 'Partway to completion!', content: 'More text to follow' },
		{ id: 4, title: 'I am getting tired though', content: 'Lorem impsum asdkfjs afqwej oiu kj ojaaksjdi' }
	],
	ui: {
		//TODO: Dynamically change this
		currentNoteId: 1,
		isEditing: false,		//View mode at start
		isSettingsShown: false	//Settings hidden at start
	}
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

//Initialize Foundation JS
$(document).foundation();

console.log('LOAD: index.js');
