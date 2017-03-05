import React from 'react';
import NoteListContainer from './NoteListContainer';
//import NoteFilter from './NoteFilter';

require('../styles/Sidebar.scss');

class Sidebar extends React.Component {
	render() {
		return (
			<section className='body__sidebar'>
				{/*<NoteFilter />*/}
				<NoteListContainer />
			</section>
		);
	}
}

export default Sidebar;
