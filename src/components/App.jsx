import React from 'react';
import NoteList from '../components/NoteList';
import NoteInput from '../components/NoteInput';
import NoteFilter from '../components/NoteFilter';

//TODO: Modularize SCSS files (currently holds all styles)
require('../styles/App.scss');

class App extends React.Component {
	render() {
		return (
			<section className='app'>
				<header className='app__header'>
					<h1>NoteStack</h1>
				</header>
				<section className='app__body'>
					<section className='body__sidebar'>
						<NoteFilter />
						<NoteList />
					</section>
					<section className='body__content'>
						<NoteInput />
					</section>
				</section>
				<footer className='app__footer'>
					&copy; Kendall Roth
				</footer>
			</section>
		);
	}
}

//const StatelessComponent = () => <h1>React Stateless</h1>;

export default App;
