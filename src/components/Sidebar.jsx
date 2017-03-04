import React from 'react';
import NoteList from './NoteList';
import NoteFilter from './NoteFilter';

require('../styles/Sidebar.scss');

class Sidebar extends React.Component {
	render() {
		return (
			<section className='body__sidebar'>
				<NoteFilter />
				<NoteList />
			</section>
		);
	}
}

export default Sidebar;
