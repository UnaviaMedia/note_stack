import { connect } from 'react-redux';
import { setEditorState, setEditorNote, deleteNote } from '../actions/note';
import ButtonBar from '../components/ButtonBar';

//Call whenever current note id changes
const mapStateToProps = (state) => {
	return {
		currentNoteId: state.ui.currentNoteId,
		editorState: state.ui.editorState
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		events: {
			onAddClick: () => {
				console.log('onAddClick');
				dispatch(setEditorNote(-1));
				dispatch(setEditorState('ADD'));//Switch to an editing state
			},
			onEditClick: () => {
				console.log('onEditClick');
				dispatch(setEditorState('EDIT')); //Switch to an editing state
			},
			onSaveClick: () => {
				console.log('onSaveClick');
				dispatch(setEditorState('VIEW')); //Switch to a viewing state
			},
			onCancelClick: () => {
				console.log('onCancelClick');
				dispatch(setEditorState('VIEW')); //Switch back to a viewing state
			},
			onDeleteClick: (id) => {
				console.log('onDeleteClick');
				dispatch(deleteNote(id)); //Delete the current note
				dispatch(setEditorState('VIEW')); //Ensure a viewing state
			}

		}
	};
};

const ButtonBarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ButtonBar);

export default ButtonBarContainer;
