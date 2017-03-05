import React from 'react';
import Header from './Header';
import Sidebar from '../containers/Sidebar';
import NoteEditorContainer from '../containers/NoteEditorContainer';
import Footer from './Footer';

require('../styles/App.scss');

const App = () => {
	return (
		<section className='app'>
			<Header />
			<section className='app__body'>
				<Sidebar />
				<section className='body__content'>
					<NoteEditorContainer />
				</section>
			</section>
			<Footer />
		</section>
	);
};

export default App;
