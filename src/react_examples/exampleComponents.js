import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			txt: "This is the state text",
			input: ""
		}
	}
	update(e) {
		this.setState({input: e.target.value})
	}
	render() {
		return (
			<div>
				<h2>this.props</h2>
				<p>Props are passed in when the component is called</p>
				<ul>
					<li>{this.props.txt}</li>
					<li>{this.props.num}</li>
					<li>{this.props.rnd}</li>
				</ul>
				<h2>this.state</h2>
				<Widget update={this.update.bind(this)} />
				<p>State is managed and updated by the component</p>
				<ul>
					<li>{this.state.txt}</li>
					<li>{this.state.input}</li>
				</ul>
				<h2>Subcomponents</h2>
				<Button>I <Heart /> React</Button>
				<h2>Validation</h2>
				<Title text="short" />
			</div>
		)
	}
}

App.propTypes = {
	txt: React.PropTypes.string,
	num: React.PropTypes.number.isRequired
}

App.defaultProps = {
	rnd: "Random text"
}

//Custom widget to demonstrate property binding
const Widget = (props) =>
	<input type="text" onChange={props.update} />

//props.children allows the component's children to be used in the component itself
const Button = (props) =>
	<button>{props.children}</button>

//Custom drop-in component at its smallest state
const Heart = () =>
	<span>&hearts;</span>

const Title = (props) =>
	<strong>Title: {props.text}</strong>

//Validation for title
Title.propTypes = {
	text(props, propName, component) {
		if (!(propName in props)) {
			return new Error(`Missing ${propName}`)
		}
		else if (props[propName].length < 10) {
			return new Error(`${propName} must be at least 10 characters`)
		}
	}
}

//const StatelessComponent = () => <h1>React Stateless</h1>;

export default App;
