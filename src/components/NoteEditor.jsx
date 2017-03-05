import React from 'react';

require('../styles/NoteEditor.scss');

const ViewNote = ({ note = {} }) => {
	if (note == null) {
		//TODO: Add handling for intial state
	}

	return (
		<div className='editor__content editor__content--view'>
			<h3>{note.title}</h3>
			<div>{note.content}</div>
		</div>
	);
}

const EditNote = ({ note }) => {
	return (
		<div className='editor__content editor__content--edit'>
			<input type='text' className='editor__title input' placeholder='Title' value={note ? note.title : ''} />
			{/*<textarea ref='noteInput' className='editor__content input' rows='10' cols='50' />*/}
			<textarea className='editor__content input' rows='10' cols='50' value={note ? note.content : ''} />
		</div>
	);
}

const NoteEditor = ({ isEditing, note }) => {
	//Currently called when current note updates
	console.log(note);

	let view;
	if (!isEditing) {
		view = <ViewNote note={note} />
	} else {
		view = <EditNote note={note} />
	}

	return (
		<div className='editor'>
			{view}
			<div className='editor__actions'>
				<input type='button' className='btn' value='Cancel' />
				<input type='button' className='btn' value='Add' />
			</div>
		</div>
	);
};

export default NoteEditor;
