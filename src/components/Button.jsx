import React from 'react';

const Button = ({ icon = 'lock', type='', className = '', onClick }) => {
	return (
		<button className={`button ${className}`} type={type} onClick={onClick}>
			<i className={`fi-${icon}`}></i>
		</button>
	);
};

export default Button;
