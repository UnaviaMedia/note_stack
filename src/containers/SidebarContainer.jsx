// File:	src/containers/SidebarContainer.js
// Purpose:	Container for the App sidebar

//NOTE: This is currently unused (ie. state/dispatch methods) but could be used in the future (so it will remain)

import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import { fetchGetNotes } from '../actions/note';

/**
 * Map the store state to the Presentational component props
 * @param {object}	state	Store state
 */
const mapStateToProps = (state) => {
	return {
		//Pass filtering options for click handler
		filterOptions: {
			filterOrder: state.ui.filterOrder,
			filterLimit: state.ui.filterLimit,
			filterOffset: state.ui.filterOffset
		}
	};
};

/**
 * Map the store dispatch to the Presentational component props
 * @param {function}	dispatch	Store dispatch method
 */
const mapDispatchToProps = (dispatch) => {
	return {
		//Handler for sync button
		onSyncClick: (filterOrder, filterLimit, filterOffset) => {
			console.log('onSyncSubmit');
			dispatch(fetchGetNotes(filterOrder, filterLimit, filterOffset));
		}
	};
};

//Connect the container to the presentation component
const SidebarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar);

export default SidebarContainer;
