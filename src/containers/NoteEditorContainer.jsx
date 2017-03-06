// File:	src/containers/NoteEditorContainer.js
// Purpose:	Container for the App editor

import React from 'react';
import { connect } from 'react-redux';
import { setEditorState, setEditorNote } from '../actions/ui';
import { addNote, updateNote } from '../actions/note';
import uuidV4 from 'uuid';
import NoteEditor from '../components/NoteEditor';

/**
 * Map the store state to the Presentational component props
 * @param {object}	state	Store state
 */
const mapStateToProps = (state) => {
	//Get the note that correponds to the selected item
	let note = state.notes.filter((item) => state.ui.currentNoteId === item.id)[0];

	//Pass a temporary Note if note is undefined or the editor state is ADD
	//	Necessary for redux-form initialValues
	if (!note || state.ui.editorState === 'ADD') {
		note = { id: 0, title: '', content: '' };
	}

	return {
		//Note being displayed/edited
		note: note,
		editorState: state.ui.editorState,
		//Contains initial form values (for redux-form)
		initialValues: {
			id: note.id,
			title: note.title,
			content: note.content,
			//Passed to form simply to track editor state on submission
			editorState: state.ui.editorState
		}
	};
};

/**
 * Map the store dispatch to the Presentational component props
 * @param {function}	dispatch	Store dispatch method
 */
const mapDispatchToProps = (dispatch) => {
	return {
		//Handler for editor submit button
		onSubmit: (values) => {
			console.log('onEditorSubmit');
			//Switch back to a viewing state and trigger the appropriate action
			dispatch(setEditorState('VIEW'));

			//Dispatch added and updated notes to different locations
			if (values.editorState === 'ADD') {
				values.id = uuidV4();
				dispatch(addNote(values));
				dispatch(setEditorNote(values.id));
			} else {
				dispatch(updateNote(values));
			}
		}
	};
};

//Connect the container to the presentation component
const NoteEditorContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NoteEditor);

export default NoteEditorContainer;
