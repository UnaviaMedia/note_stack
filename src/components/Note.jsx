import React from 'react';

const Note = ({ title, content, onClick }) => {
	return (
		<div className='note-card' onClick={onClick}>
			<div className='note__title'>{title}</div>
			<div className='note__content'>{content}</div>
		</div>
	);
};

export default Note;
