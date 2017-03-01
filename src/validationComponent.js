import React from 'react';

class App extends React.Component {
	render() {
		return (
			<div>
				<h2>Validation</h2>
				<Title text="short" />
			</div>
		)
	}
}

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
