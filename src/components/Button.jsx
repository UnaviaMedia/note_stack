import React from 'react';

const Button = ({ icon = 'lock', type='', className = '', onClick }) => {
	return (
		<button className={`button ${className}`} onClick={onClick} type={type}>
			<i className={`fi-${icon}`}></i>
		</button>
	);
};

export default Button;
