import React from 'react';

class EventComponent extends React.Component {
	constructor() {
		super();
		this.state = {currentEvent: '---'};
		this.update = this.update.bind(this);
	}
	update(e) {
		this.setState({currentEvent: e.type});
	}
	render() {
		return (
			<div>
				<textarea
					onKeyPress={this.update}
					onFocus={this.update}
					onBlur={this.update}
					onMouseOver={this.update}
					cols="30" rows="10" />
				<p>{this.state.currentEvent}</p>
			</div>
		)
	}
}

export default EventComponent;
