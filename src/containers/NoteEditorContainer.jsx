import { connect } from 'react-redux';
//import { loadNote } from '../actions/note';
import NoteEditor from '../components/NoteEditor';

//Call whenever current note updates (from NoteList)
const mapStateToProps = (state) => {
	//Get the note that correponds to the selected item
	const note = state.notes.filter((item) => state.ui.currentNoteId === item.id);
	return {
		note: note[0]
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

const NoteEditorContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NoteEditor);

export default NoteEditorContainer;
