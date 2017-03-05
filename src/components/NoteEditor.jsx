import React from 'react';

require('../styles/NoteEditor.scss');

const NoteEditor = ({ isEditing, note }) => {
	//Currently called when current note updates
	console.log(note);
	return (
		<div className='editor'>
			<div className='editor__content'>
				<input type='text' className='editor__title input' placeholder='Title' value={note ? note.title : ''} />
				{/*<textarea ref='noteInput' className='editor__content input' rows='10' cols='50' />*/}
				<textarea className='editor__content input' rows='10' cols='50' value={note ? note.content : ''} />
			</div>
			<div className='editor__actions'>
				<input type='button' className='btn' value='Cancel' />
				<input type='button' className='btn' value='Add' />
			</div>
		</div>
	);
};

export default NoteEditor;
