// File:	src/containers/NoteListContainer.js
// Purpose:	Container for the App note list

import { connect } from 'react-redux';
import { setEditorState, setEditorNote } from '../actions/ui';
import NoteList from '../components/NoteList';

/**
 * Get a list of filtered notes to attach to the presentational component
 * @param {array}	notes		List of notes
 * @param {string}	filterText	Filter text
 * @param {bool}	filterOrder	Filter order
 */
const getFilteredNotes = (notes, filterText = '', filterOrder = 'DESC') => {
	//Apply the filter text (if specified)
	notes = notes.filter(note =>
		note.title.toLowerCase().includes(filterText.toLowerCase())
	);

	//Sort the notes by the specified order
	if (filterOrder === 'ASC') {
		return notes.sort((a, b) => a.title.localeCompare(b.title));
	}

	return notes.sort((a, b) => b.title.localeCompare(a.title));
};

/**
 * Map the store state to the Presentational component props
 * @param {object}	state	Store state
 */
const mapStateToProps = (state) => {
	console.log('test');
	console.log(getFilteredNotes(state.notes, state.ui.filterText, state.ui.filterOrder))
	return {
		notes: getFilteredNotes(state.notes, state.ui.filterText, state.ui.filterOrder)
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
