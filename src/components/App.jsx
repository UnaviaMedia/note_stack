import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import NoteEditor from './NoteEditor';
import Footer from './Footer';

//TODO: Modularize SCSS files (currently holds all styles)

class App extends React.Component {
	render() {
		return (
			<section className='app'>
				<Header />
				<section className='app__body'>
					<Sidebar />
					<section className='body__content'>
						<NoteEditor />
					</section>
				</section>
				<Footer />
			</section>
		);
	}
}

export default App;
