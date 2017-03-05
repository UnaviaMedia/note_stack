import React from 'react';
import SettingsContainer from '../containers/SettingsContainer';

const Header = () => {
	return (
		<header className='app__header'>
			<h1>NoteStack</h1>
			<SettingsContainer />
		</header>
	);
};

export default Header;
