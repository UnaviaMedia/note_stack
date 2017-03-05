import { connect } from 'react-redux';
import { changeFilterText } from '../actions/note';
import NoteFilter from '../components/NoteFilter';

const mapDispatchToProps = (dispatch) => {
	return {
		//Call whenever filter text changes
		onTextChange: (event) => {
			console.log('onFilterTextChange');
			dispatch(changeFilterText(event.target.value)); //Update the current filter text
		}
	};
};

const NoteFilterContainer = connect(
	null,
	mapDispatchToProps
)(NoteFilter);

export default NoteFilterContainer;
