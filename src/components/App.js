import React from 'react';
import Note from '../components/Note';
import NoteList from '../components/NoteList';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello World!</h1>
				<NoteList />
			</div>
		);
	}
}

//const StatelessComponent = () => <h1>React Stateless</h1>;

export default App;
