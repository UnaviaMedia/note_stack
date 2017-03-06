// File:	src/components/NoteEditor.jsx
// Purpose:	NoteEditor presentational component

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import ButtonBarContainer from '../containers/ButtonBarContainer';

//NOTE: Figure out how to refactor all these components.
//			Although the fact that I need a form for only one is a problem.
//			Could possibly change the container to a class

//Empty editor component
const EmptyEditor = () => {
	return (
		<div className='editor editor--empty'>
			<div className='editor__header'>
				<h2>No Note Selected</h2>
				<ButtonBarContainer />
			</div>
			<div className='editor__content'>
				<p>Select a note from the panel to get starting with editing, or click the Add button to create Notes.</p>
			</div>
		</div>
	);
}

//Viewing component
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

//Editing component
const EditNote = ({ note, handleSubmit }) => {
	return (
		<form id='editor-form' onSubmit={handleSubmit} className='editor editor--edit'>
			<div className='editor__header'>
				<Field type='text' name='title' className='editor__title input' component='input' placeholder='Title'
					pattern='.{3,}' title='Must be at least 3 characters long' required
				/>
				<ButtonBarContainer />
			</div>
			<div className='editor__content'>
				<Field type='textarea' name='content' className='editor__content input' component='textarea'
					pattern='(.{0}||.{3,})' title='Must be empty or at least 3 characters long'
				/>
			</div>
		</form>
	);
}

//Parent component that chooses a component to display
let NoteEditor = ({ note, editorState = 'VIEW', handleSubmit }) => {
	//Render based on the current editor state
	switch (editorState) {
		case 'ADD':
		case 'EDIT':
			return <EditNote note={note} handleSubmit={handleSubmit} />;
		case 'VIEW':
		default:
			//Handle an empty editor (no selected note)
			return note.id !== 0 ? <ViewNote note={note} /> : <EmptyEditor />;
	}
};

//Set up the redux-form binding to the unique id 'editor'
NoteEditor = reduxForm({
	form: 'editor-form',
	enableReinitialize: true
})(NoteEditor);

export default NoteEditor;
