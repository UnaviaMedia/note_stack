import React from 'react';

const Button = ({ icon = 'lock', className = '', onClick }) => {
	return (
		<a href='#' className={`button ${className}`} onClick={onClick}>
			<i className={`fi-${icon}`}></i>
		</a>
	);
};

export default Button;
