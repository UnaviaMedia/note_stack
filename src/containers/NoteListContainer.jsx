import { connect } from 'react-redux';
import { setEditorState, setEditorNote } from '../actions/note';
import NoteList from '../components/NoteList';

const getFilteredNotes = (notes, filter) => {
	//Return all notes with an empty filter
	if (!filter || filter === '') {
		return notes;
	}

	//Return all notes that match the filter text
	return notes.filter(note =>
		note.title.toLowerCase().includes(filter.toLowerCase()));
};

const mapStateToProps = (state) => {
	return {
		notes: getFilteredNotes(state.notes, state.ui.filterText)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onNoteClick: (id) => {
			console.log('onNoteClick');
			dispatch(setEditorNote(id)); //Load the selected note into the editor
			dispatch(setEditorState('VIEW')); //Ensure a viewing state
			//TODO: Cancel changes (might be done automatically)
		}
	};
};

const NoteListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NoteList);

export default NoteListContainer;
