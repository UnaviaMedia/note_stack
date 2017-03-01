import React from 'react';

//TODO: Figure out how to bind the NoteInput to the list of data

class NoteInput extends React.Component {
	constructor() {
		super();
	}
	storeNote(e) {
		//Get the value of the note input field
		let noteValue = this.refs.noteInput.value;
		console.log(noteValue);
	}
	render() {
		return (
			<div className='note-input'>
				<textarea ref='noteInput' rows='10' cols='50' />
				<input type='button' value='Add' onClick={this.storeNote.bind(this)} />
			</div>
		);
	}
}

export default NoteInput;
