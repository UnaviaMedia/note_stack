// File:	src/components/Sidebar.jsx
// Purpose:	Sidebar presentational component

import React from 'react';
import NoteListContainer from '../containers/NoteListContainer';
import NoteFilterContainer from '../containers/NoteFilterContainer';
import Button from './Button';

const Sidebar = ({ onAddNoteClick }) => {
	return (
		<section className='body__sidebar'>
			<div className='sidebar__actions'>
				<NoteFilterContainer />
			</div>
			<NoteListContainer />
		</section>
	);
};

export default Sidebar;
