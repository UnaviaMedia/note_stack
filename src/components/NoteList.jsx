// File:	src/components/NoteList.jsx
// Purpose:	NoteList presentational component

import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onNoteClick }) => {
	return (
		<ul className='sidebar__list'>
			{notes.map(note =>
				<Note key={note.id} {...note} onClick={() => onNoteClick(note.id)} />
			)}
		</ul>
	);
};

export default NoteList;
