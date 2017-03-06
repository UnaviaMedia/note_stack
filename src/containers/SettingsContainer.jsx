// File:	src/containers/SettingsContainer.js
// Purpose:	Container for the App settings

import { connect } from 'react-redux';
import { reset } from 'redux-form';
import Settings from '../components/Settings';
import { toggleSettingsState, updateSettings } from '../actions/ui';

/**
 * Handle the settings container modal events
 * @param {function}	dispatch	Store dispatch method
 * @param {object}		formState	State of the form
 */
const handleModalEvent = (dispatch, formState) => {
	//TODO: Remove Foundation calls and rely on state
	const modal = $('#settings-modal');

	switch (formState) {
		case 'OPEN':
			dispatch(toggleSettingsState(true));
			//Open the modal
			modal.foundation('open');
			return;
		case 'CLOSE':
		default:
			dispatch(toggleSettingsState(false));
			//Reset the form with redux-form helper
			dispatch(reset('settings'));
			//Close the modal
			modal.foundation('close');
			return;
	}
};

/**
 * Map the store state to the Presentational component props
 * @param {object}	state	Store state
 */
const mapStateToProps = (state) => {
	return {
		isSettingsShown: state.ui.isSettingsShown || false,
		//Contains initial form values
		initialValues: {
			order: state.ui.filterOrder || false,
			limit: state.ui.filterLimit || 0,
			offset: state.ui.filterOffset || 0
		}
	};
};

/**
 * Map the store dispatch to the Presentational component props
 * @param {function}	dispatch	Store dispatch method
 */
const mapDispatchToProps = (dispatch) => {
	return {
		onSettingsClick: () => {
			console.log('onSettingsClick');
			handleModalEvent(dispatch, 'OPEN');
		},
		onSettingsCancelClick: () => {
			console.log('onSettingsCancelClick');
			handleModalEvent(dispatch, 'CLOSE');
		},
		//onSubmit is expected by redux-form and will run after the generated handleSubmit
		onSubmit: (values) => {
			console.log('onSettingsSubmit');
			handleModalEvent(dispatch, 'CLOSE');
			dispatch(updateSettings(values)); //Update the current filter text
		}
	};
};

//Connect the container to the presentation component
const SettingsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Settings);

export default SettingsContainer;
