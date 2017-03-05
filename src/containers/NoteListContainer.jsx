import { connect } from 'react-redux';
import { loadNote } from '../actions/note';
import NoteList from '../components/NoteList';

const mapStateToProps = (state) => {
	return {
		notes: state.notes
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onNoteClick: (id) => {
			dispatch(loadNote(id));
		}
	};
};

const NoteListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NoteList);

export default NoteListContainer;
