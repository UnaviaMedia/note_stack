// File:	src/containers/NoteListContainer.js
// Purpose:	Container for the App note list

import { connect } from 'react-redux';
import { setEditorState, setEditorNote } from '../actions/ui';
import NoteList from '../components/NoteList';

/**
 * Get a list of filtered notes to attach to the presentational component
 * @param {array}	notes	List of notes
 * @param {string}	filter	Filter text
 */
const getFilteredNotes = (notes, filter) => {
	//Return all notes with an empty filter
	if (!filter || filter === '') {
		return notes;
	}

	//Return all notes that match the filter text
	return notes.filter(note =>
		note.title.toLowerCase().includes(filter.toLowerCase()));
};

/**
 * Map the store state to the Presentational component props
 * @param {object}	state	Store state
 */
const mapStateToProps = (state) => {
	return {
		notes: getFilteredNotes(state.notes, state.ui.filterText)
	};
};

/**
 * Map the store dispatch to the Presentational component props
 * @param {function}	dispatch	Store dispatch method
 */
const mapDispatchToProps = (dispatch) => {
	return {
		onNoteClick: (id) => {
			console.log('onNoteClick');
			dispatch(setEditorNote(id)); //Load the selected note into the editor
			dispatch(setEditorState('VIEW')); //Ensure a viewing state
		}
	};
};

//Connect the container to the presentation component
const NoteListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NoteList);

export default NoteListContainer;
