import React from 'react';
import Note from '../components/Note';

class NoteList extends React.Component {
	constructor() {
		super();
		this.state = {
			list: []
		}
	}
	componentDidMount() {
		const that = this;
		fetch('/api/list').
			//Convert response to json
			then((resp) => resp.json()).
			//Set state with response data
			then(function(data) {
				that.setState({ list: data });
			}).
			catch(function(error) {
				console.error('FETCH: Fetch operation failed => ' + error);
			});
	}
	render() {
		return (
			<ul>
				{ this.state.list.map( note =>
					<li key={note.id}><Note title={note.title} text={note.text} /></li>) }
			</ul>
		);
	}
}

export default NoteList;
