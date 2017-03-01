import React from 'react';
import Note from '../components/Note';

const noteList = [
	{ value: "Note 1" },
	{ value: "Note 2" }
];

class NoteList extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<ul>
				{ noteList.map( (item, key) =>
					<li key={key}><Note value={item.value} /></li>) }
			</ul>
		);
	}
}

export default NoteList;
