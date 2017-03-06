// File:	src/containers/SidebarContainer.js
// Purpose:	Container for the App sidebar

//NOTE: This is currently unused (ie. state/dispatch methods) but could be used in the future (so it will remain)

import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

//Connect the container to the presentation component
const SidebarContainer = connect(
	null,
	null
)(Sidebar);

export default SidebarContainer;
