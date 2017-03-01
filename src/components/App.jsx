import React from 'react';
import NoteList from '../components/NoteList';
import NoteInput from '../components/NoteInput';
import NoteFilter from '../components/NoteFilter';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello World!</h1>
				<NoteFilter />
				<NoteList />
				<NoteInput />
			</div>
		);
	}
}

//const StatelessComponent = () => <h1>React Stateless</h1>;

export default App;
