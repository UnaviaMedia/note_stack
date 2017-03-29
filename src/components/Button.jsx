// File:	src/components/Button.jsx
// Purpose:	Button presentational component

import React, { PropTypes } from 'react';

/**
 * Button component
 * @param {String} icon			Button icon class
 * @param {String} type			Button type
 * @param {String} className	Button class
 * @param {Function} onClick	Click event handler for button
 */
const Button = ({
	icon,
	type='',
	className = '',
	onClick
}) => {
	return (
		<button className={`button ${className}`} onClick={onClick} type={type}>
			<i className={`fi-${icon}`}></i>
		</button>
	);
};

Button.propTypes = {
	icon: PropTypes.string.isRequired,
	type: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func
};

export default Button;
