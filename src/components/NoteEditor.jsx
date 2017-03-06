import React from 'react';
import { Field, reduxForm } from 'redux-form';
import ButtonBarContainer from '../containers/ButtonBarContainer';

const EmptyEditor = () => {
	return (
		<div className='editor editor--empty'>
			<div className='editor__header'>
				<h2>No Note Selected</h2>
				<ButtonBarContainer />
			</div>
			<div className='editor__content'>
				<p>
					Select a note from the panel to get starting with editing, or click the Add button to create a new Note.
				</p>
			</div>
		</div>
	);
}

const ViewNote = ({ note }) => {
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

const EditNote = ({ note, handleSubmit }) => {
	return (
		<form id='editor-form' onSubmit={handleSubmit} className='editor editor--edit'>
			<div className='editor__header'>
				<Field type='text' name='title' className='editor__title input' component='input' placeholder='Title' />
				<ButtonBarContainer />
			</div>
			<div className='editor__content'>
				<Field type='textarea' name='content' className='editor__content input' component='input' />
			</div>
		</form>
	);
}


let NoteEditor = ({ note, editorState = 'VIEW', handleSubmit }) => {
	if (note.id === 0) {
		return <EmptyEditor />;
	}

	//Render based on the current editor state
	switch (editorState) {
		case 'ADD':
		case 'EDIT':
			return <EditNote note={note} handleSubmit={handleSubmit} />;
		case 'VIEW':
		default:
			return <ViewNote note={note} />;
	}
};

//Set up the redux-form binding to the unique id 'editor'
NoteEditor = reduxForm({
	form: 'editor-form',
	enableReinitialize: true
})(NoteEditor);

export default NoteEditor;
