// File:	src/components/Button.jsx
// Purpose:	Button presentational component
import React, { PropTypes } from 'react';

const Button = ({ icon, type='', className = '', onClick }) => {
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
	onClick: PropTypes.func.isRequired
};

export default Button;
