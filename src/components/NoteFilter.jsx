// File:	src/components/NoteFilter.jsx
// Purpose:	NoteFilter presentational component

import React from 'react';

const NoteFilter = ({ onTextChange }) => {
	return (
		<input className='sidebar__filter' type='text' placeholder='Filter' onChange={onTextChange} />
	);
};

export default NoteFilter;
