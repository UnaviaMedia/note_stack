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
		//Update the current filter text
		onTextChange: (event) => {
			console.log('onFilterTextChange');
			dispatch(changeFilterText(event.target.value));
		}
	};
};

//Connect the container to the presentation component
const NoteFilterContainer = connect(
	null,
	mapDispatchToProps
)(NoteFilter);

export default NoteFilterContainer;
