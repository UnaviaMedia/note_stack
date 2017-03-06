import { connect } from 'react-redux';
import { setEditorState, setEditorNote, deleteNote } from '../actions/note';
import ButtonBar from '../components/ButtonBar';

//Map the container props to the presentational component
const mapStateToProps = (state) => {
	return {
		currentNoteId: state.ui.currentNoteId,
		editorState: state.ui.editorState
	};
};

//Map the container dispatch handlers to the presentational component
const mapDispatchToProps = (dispatch) => {
	return {
		events: {
			//Handler for the Add Note button
			onAddClick: () => {
				console.log('onAddClick');
				dispatch(setEditorState('ADD'));
			},
			//Handler for the Edit Note button
			onEditClick: () => {
				console.log('onEditClick');
				dispatch(setEditorState('EDIT'));
			},
			//Handler for the Cancel operation button
			onCancelClick: () => {
				console.log('onCancelClick');
				dispatch(setEditorState('VIEW'));
			},
			//Handler for the Delete Note button
			onDeleteClick: (id) => {
				console.log('onDeleteClick');
				//Delete the current note and reset the editor
				dispatch(deleteNote(id));
				dispatch(setEditorNote(null));
				dispatch(setEditorState('VIEW'));
			}

		}
	};
};

//Connect the container to the presentation component
const ButtonBarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ButtonBar);

export default ButtonBarContainer;
