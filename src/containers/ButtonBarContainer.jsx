import { connect } from 'react-redux';
import { toggleEditState } from '../actions/note';
import { deleteNote } from '../actions/note';
import ButtonBar from '../components/ButtonBar';

//Call whenever current note id changes
const mapStateToProps = (state) => {
	return {
		currentNoteId: state.ui.currentNoteId,
		isEditing: state.ui.isEditing
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		events: {
			onDeleteClick: (id) => {
				console.log('onDeleteClick');
				dispatch(deleteNote(id)); //Delete the current note
				dispatch(toggleEditState(false)); //Ensure a viewing state
			},
			onEditClick: () => {
				console.log('onEditClick');
				dispatch(toggleEditState(true)); //Switch to a editing state
			},
			onCancelClick: () => {
				console.log('onCancelClick');
				dispatch(toggleEditState(false)); //Switch back to a viewing state
			},
			onSaveClick: () => {
				console.log('onSaveClick');
				dispatch(toggleEditState(false)); //Switch to a viewing state
			}
		}
	};
};

const ButtonBarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ButtonBar);

export default ButtonBarContainer;
