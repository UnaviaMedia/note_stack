// File:	src/containers/NoteFilterContainer.js
// Purpose:	Container for the App sidebar filter

import { connect } from 'react-redux';
import { changeFilterText } from '../actions/ui';
import NoteFilter from '../components/NoteFilter';

/**
 * Map the store dispatch to the Presentational component props
 * @param {function}	dispatch	Store dispatch method
 */
const mapDispatchToProps = (dispatch) => {
	return {
		//Call whenever filter text changes
		onTextChange: (event) => {
			console.log('onFilterTextChange');
			dispatch(changeFilterText(event.target.value)); //Update the current filter text
		}
	};
};

//Connect the container to the presentation component
const NoteFilterContainer = connect(
	null,
	mapDispatchToProps
)(NoteFilter);

export default NoteFilterContainer;
