// File:	src/containers/ButtonBarContainer.js
// Purpose:	Container for the App button bar

import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { setEditorState, setEditorNote } from '../actions/ui';
import { fetchDeleteNote } from '../actions/note';
import ButtonBar from '../components/ButtonBar';

/**
 * Map the store state to the Presentational component props
 * @param {object}	state	Store state
 */
const mapStateToProps = (state) => {
	return {
		currentNoteId: state.ui.currentNoteId,
		editorState: state.ui.editorState
	};
};

/**
 * Map the store dispatch to the Presentational component props
 * @param {function}	dispatch	Store dispatch method
 */
const mapDispatchToProps = (dispatch) => {
	return {
		//NOTE: Handler for the onSaveClick() event is defined in the redux-form binding
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
				dispatch(reset('editor-form'));
				dispatch(setEditorState('VIEW'));
			},
			//Handler for the Delete Note button
			onDeleteClick: (id) => {
				console.log('onDeleteClick');
				//Delete the current note and reset the editor
				dispatch(fetchDeleteNote(id));
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
