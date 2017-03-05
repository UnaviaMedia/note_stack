import { connect } from 'react-redux';
import { loadNote } from '../actions/note';
import { changeEditState } from '../actions/note';
import NoteList from '../components/NoteList';

const mapStateToProps = (state) => {
	return {
		notes: state.notes
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onNoteClick: (id) => {
			dispatch(loadNote(id)); //Load the selected note into the editor
			dispatch(changeEditState(false)); //Ensure a viewing state
			//TODO: Cancel changes (might be done automatically)
		}
	};
};

const NoteListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NoteList);

export default NoteListContainer;
