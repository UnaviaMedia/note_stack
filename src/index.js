import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import noteApp from './reducers';
import App from './components/App';

let store = createStore(noteApp, {
	notes: [
		{
			id: 1,
			title: 'React is cool',
			content: 'This is the content of the note'
		},
		{
			id: 2,
			title: 'Redux is nice',
			content: 'Random contents of the note'
		}
	],
	ui: {
		//TODO: Dynamically change this
		currentNoteId: 1,
		isEditing: false
	}
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

console.log('LOAD: index.js');
