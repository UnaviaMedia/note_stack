// File:	src/components/Note.jsx
// Purpose:	Note presentational component

import React, { PropTypes } from 'react';
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

Note.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	dateCreated: PropTypes.string,
	onClick: PropTypes.func
};

export default Note;
