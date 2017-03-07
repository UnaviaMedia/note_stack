// File:	src/components/Sidebar.jsx
// Purpose:	Sidebar presentational component

import React from 'react';
import NoteListContainer from '../containers/NoteListContainer';
import NoteFilterContainer from '../containers/NoteFilterContainer';
import Button from './Button';

const Sidebar = ({ filterOptions, onSyncClick }) => {
	return (
		<section className='body__sidebar'>
			<div className='sidebar__actions'>
				<NoteFilterContainer />
				<Button className='sidebar__sync' icon='refresh'
					onClick={() => onSyncClick(filterOptions.filterOrder, filterOptions.filterLimit, filterOptions.filterOffset)}
				/>
			</div>
			<NoteListContainer />
		</section>
	);
};

export default Sidebar;
