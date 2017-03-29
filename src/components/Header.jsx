// File:	src/components/Header.jsx
// Purpose:	Header presentational component

import React from 'react';
import SettingsContainer from '../containers/SettingsContainer';

/**
 * Header for app
 */
const Header = () => {
	return (
		<header className='app__header'>
			<h1>NoteStack</h1>
			<SettingsContainer />
		</header>
	);
};

export default Header;
