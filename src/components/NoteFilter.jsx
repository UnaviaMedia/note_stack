// File:	src/components/NoteFilter.jsx
// Purpose:	NoteFilter presentational component

import React, { PropTypes } from 'react';

/**
 * Note filter text box
 * @param {Function} onTextChange	Text change event handler for textbox
 */
const NoteFilter = ({ onTextChange }) => {
	return (
		<input className='sidebar__filter' type='text' placeholder='Filter' onChange={onTextChange} />
	);
};

NoteFilter.propTypes = {
	onTextChange: PropTypes.func
};

export default NoteFilter;
