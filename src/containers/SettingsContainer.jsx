import { connect } from 'react-redux';					//Import connect function to generate container
import Settings from '../components/Settings';
import { reset } from 'redux-form';						//Import reset form function from form-redux
import { toggleSettingsState } from '../actions/note';	//Import UI state changes

const handleModalEvent = (dispatch, formState) => {
	//TODO: Remove Foundation calls
	const modal = $('#settings-modal');

	switch (formState) {
		case 'OPEN':
			dispatch(toggleSettingsState(true));	//Toggle the settings modal
			modal.foundation('open');
			return;
		case 'CLOSE':
		default:
			dispatch(toggleSettingsState(false));	//Toggle the settings modal
			dispatch(reset('settings'));			//Reset the form with a redux-form helper
			modal.foundation('close');
			return;
	}
};

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
			console.log(values);
			//console.log(values.offset);
			handleModalEvent(dispatch, 'CLOSE');
		}
	};
};

const SettingsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Settings);

export default SettingsContainer;
