import React from 'react';
import NoteListContainer from './NoteListContainer';
import NoteFilterContainer from './NoteFilterContainer';

require('../styles/Sidebar.scss');

class Sidebar extends React.Component {
	render() {
		return (
			<section className='body__sidebar'>
				<NoteFilterContainer />
				<NoteListContainer />
			</section>
		);
	}
}

export default Sidebar;
