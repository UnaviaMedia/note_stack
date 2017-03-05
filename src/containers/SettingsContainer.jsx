import { connect } from 'react-redux';
import Settings from '../components/Settings';
//Import UI state changes
import { toggleSettingsState } from '../actions/note';

const mapStateToProps = (state) => {
	return {
		isSettingsShown: state.isSettingsShown
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		//TODO: Remove the Foundation calls and use the Redux state
		events: {
			onSettingsClick: () => {
				console.log('onSettingsClick');
				$('#settings-modal').foundation('open');
				dispatch(toggleSettingsState(true)); //Toggle the settings modal
			},
			onSettingsCancelClick: () => {
				console.log('onSettingsCancelClick');
				$('#settings-modal').foundation('close');
				dispatch(toggleSettingsState(false)); //Toggle the settings modal
			},
			onSettingsSaveClick: () => {
				console.log('onSettingsSaveClick');
				$('#settings-modal').foundation('close');
				dispatch(toggleSettingsState(false)); //Toggle the settings modal
			}
		}
	};
};

const SettingsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Settings);

export default SettingsContainer;
