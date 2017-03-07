// File:	src/components/Note.jsx
// Purpose:	Note presentational component

import React from 'react';
import dateFormat from 'dateformat';

const Note = ({ title, content, dateCreated, onClick }) => {
	return (
		<div className='note-card' onClick={onClick}>
			<div className='note__title'>{title}</div>
			<div className='note__date'>{dateFormat(dateCreated, 'yyyy-mm-dd hh:MM TT')}</div>
			<div className='note__content'>{content}</div>
		</div>
	);
};

export default Note;
