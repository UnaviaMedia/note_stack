import React from 'react';

class Note extends React.Component {
	render() {
		return (
			<div className='note'>
				<span className='note__title'>{this.props.title}</span>
				<div className='note__body'>{this.props.text}</div>
			</div>
		);
	}
}

export default Note;
