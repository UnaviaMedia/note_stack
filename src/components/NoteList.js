import React from 'react';
import Note from '../components/Note';

const noteList = [
	{ id: 1, value: "Note 1" },
	{ id: 2, value: "Note 2" }
];

class NoteList extends React.Component {
	constructor() {
		super();
		this.state = {
			list: noteList
		}
	}
	render() {
		return (
			<ul>
				{ this.state.list.map( note =>
					<li key={note.id}><Note value={note.value} /></li>) }
			</ul>
		);
	}
}

export default NoteList;
