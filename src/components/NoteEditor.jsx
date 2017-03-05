import React from 'react';
import ButtonBarContainer from '../containers/ButtonBarContainer';

require('../styles/NoteEditor.scss');

const ViewNote = ({ note = {} }) => {
	if (note === null) {
		//TODO: Add handling for initial state
	}

	return (
		<div className='editor editor--view'>
			<div className='editor__header'>
				<h2>{note.title}</h2>
				<ButtonBarContainer />
			</div>
			<div className='editor__content'>{note.content}</div>
		</div>
	);
}

const EditNote = ({ note }) => {
	if (!note) {

	}
	return (
		<div className='editor editor--edit'>
			<div className='editor__header'>
				<input type='text' className='editor__title input' placeholder='Title' value={note.title} />
				<ButtonBarContainer />
			</div>
			<div className='editor__content'>
				<textarea className='editor__content input' value={note.content} />
			</div>
		</div>
	);
}

const NoteEditor = ({ note, editorState = 'VIEW' }) => {
	//Called when one of the parameters changes state
	console.log(note);

	switch (editorState) {
		case 'ADD':
			return <EditNote />;
		case 'EDIT':
			return <EditNote note={note} />;
		case 'VIEW':
		default:
			return <ViewNote note={note} />;
	}
};

export default NoteEditor;
