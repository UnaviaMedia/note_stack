import { connect } from 'react-redux';
import NoteEditor from '../components/NoteEditor';

//Call whenever current note updates (from NoteList)
const mapStateToProps = (state) => {
	//Get the note that correponds to the selected item
	const note = state.notes.filter((item) => state.ui.currentNoteId === item.id);
	return {
		note: note[0], //Ensure only one note is returned
		isEditing: state.ui.isEditing
	};
};

const NoteEditorContainer = connect(
	mapStateToProps,
	null
)(NoteEditor);

export default NoteEditorContainer;
