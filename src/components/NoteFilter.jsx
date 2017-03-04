import React from 'react';

//TODO: Figure out how to bind the filter to the NoteList

class NoteFilter extends React.Component {
	render() {
		return (
			<input className='input note-filter' type='text' placeholder='Filter' />
		);
	}
}

export default NoteFilter;
