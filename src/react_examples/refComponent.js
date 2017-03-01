import React from 'react';

class RefComponent extends React.Component {
	constructor() {
		super();
		this.state = {a: '', b: ''}
	}
	update(e) {
		this.setState({
			a: this.a.refs.inputNode.value,
			b: this.refs.b.value
		});
	}
	render() {
		return (
			<div>
				<Input ref={component => this.a = component} update={this.update.bind(this)} />
				{this.state.a}
				<hr />
				<input ref="b" type="text" onChange={this.update.bind(this)} />
				{this.state.b}
			</div>
		)
	}
}

class Input extends React.Component {
	render() {
		return (
			<div>
				<input ref="inputNode" type="text" onChange={this.props.update} />
			</div>
		)
	}
}

export default RefComponent;
