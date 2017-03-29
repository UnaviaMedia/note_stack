// File:	src/components/App.jsx
// Purpose:	App presentational component

import React from 'react';
import Header from './Header';
import SidebarContainer from '../containers/SidebarContainer';
import NoteEditorContainer from '../containers/NoteEditorContainer';
import Footer from './Footer';

import '../styles/styles.scss';
import 'foundation-icons/foundation-icons.scss';

/**
 * App container
 */
const App = () => {
	return (
		<section className='app'>
			<Header />
			<section className='app__body'>
				<SidebarContainer />
				<section className='body__content'>
					<NoteEditorContainer />
				</section>
			</section>
			<Footer />
		</section>
	);
};

export default App;
