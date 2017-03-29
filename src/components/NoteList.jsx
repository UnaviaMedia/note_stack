// File:	src/components/NoteList.jsx
// Purpose:	NoteList presentational component

import React, { PropTypes } from 'react';
import Note from './Note';

/**
 * Warning when NoteList is empty
 */
const EmptyList = () => {
	return <li className='warning--empty'>Add a Note to get started!</li>;
}

/**
 * List of Note cards
 * @param {Array}  notes			Array of Notes
 * @param {Function} onNoteClick	Click event handler for Note card
 */
const NoteList = ({
	notes = [],
	onNoteClick
}) => {
	return (
		<ul className='sidebar__list'>
			{ (!notes || !notes.length) && <EmptyList /> }
			{notes.map(note =>
				<Note key={note.id}
					content={note.content.substr(0, 100)}
					title={note.title}
					dateCreated={note.dateCreated}
					onClick={() => onNoteClick(note.id)}
				/>
			)}
		</ul>
	);
};

NoteList.propTypes = {
	notes: PropTypes.array,
	onNoteClick: PropTypes.func
};

export default NoteList;
