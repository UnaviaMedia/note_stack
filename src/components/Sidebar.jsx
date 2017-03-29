// File:	src/components/Sidebar.jsx
// Purpose:	Sidebar presentational component

import React, { PropTypes } from 'react';
import NoteListContainer from '../containers/NoteListContainer';
import NoteFilterContainer from '../containers/NoteFilterContainer';
import Button from './Button';

/**
 * App sidebar with notes and filter text
 * @param {Object} filterOptions	Current filter options
 * @param {Function} onSyncClick	Click event handler for Note sync button
 */
const Sidebar = ({
	filterOptions,
	onSyncClick
}) => {
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

Sidebar.propTypes = {
	filterOptions: PropTypes.object.isRequired,
	onSyncClick: PropTypes.func.isRequired
};

export default Sidebar;
