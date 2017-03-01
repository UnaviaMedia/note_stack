import React from 'react';
import Note from '../components/Note';

const noteList = [
	{ id: 1, title: 'Title 1', value: 'This is note 1' },
	{ id: 2, title: 'Title 2', value: 'This is note 2' }
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
					<li key={note.id}><Note title={note.title} value={note.value} /></li>) }
			</ul>
		);
	}
}

export default NoteList;
