// File:	src/components/NoteList.jsx
// Purpose:	NoteList presentational component

import React from 'react';
import Note from './Note';

//Display a warning if there are no Notes
const EmptyList = () => {
	return <li className='warning--empty'>Add a Note to get started!</li>;
}

const NoteList = ({ notes = [], onNoteClick }) => {
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

export default NoteList;
