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
		fetch('/note').
			//Convert response to json
			then((resp) => resp.json()).
			//Set state with response data
			then(function(response) {
				that.setState({ list: response.data });
			}).
			catch(function(error) {
				console.error('FETCH: Fetch operation failed => ' + error);
			});
	}
	render() {
		if (!this.state.list) {
			return (
				<li>No notes found</li>
			);
		}
		console.log(this.state.list);

		return (
			<ul>
				{ this.state.list.map( note =>
					<li key={note.id}><Note title={note.title} text={note.content} /></li>) }
			</ul>
		);
	}
}

export default NoteList;
