import React from 'react';

class Note extends React.Component {
	render() {
		return (
			<div className='note-card'>
				<div className='note__title'>{this.props.title}</div>
				<div className='note__content'>{this.props.text}</div>
			</div>
		);
	}
}

export default Note;
