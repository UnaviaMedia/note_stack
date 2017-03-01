import React from 'react';

class Note extends React.Component {
	render() {
		return (
			<div className="note">
				{this.props.value}
			</div>
		);
	}
}

export default Note;
