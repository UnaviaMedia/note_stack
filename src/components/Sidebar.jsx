import React from 'react';
import NoteListContainer from '../containers/NoteListContainer';
import NoteFilterContainer from '../containers/NoteFilterContainer';

require('../styles/Sidebar.scss');

const Sidebar = () => {
	return (
		<section className='body__sidebar'>
			<NoteFilterContainer />
			<NoteListContainer />
		</section>
	);
};

export default Sidebar;
