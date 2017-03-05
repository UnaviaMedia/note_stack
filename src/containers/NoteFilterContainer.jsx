import { connect } from 'react-redux';
import { changeFilterText } from '../actions/note';
import NoteFilter from '../components/NoteFilter';

//Call whenever filter text changes
const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTextChange: (event) => {
			console.log('onTextChange');
			dispatch(changeFilterText(event.target.value)); //Update the current filter text
		}
	};
};

const NoteFilterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NoteFilter);

export default NoteFilterContainer;
