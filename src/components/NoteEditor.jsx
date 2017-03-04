import React from 'react';

require('../styles/NoteEditor.scss');

//TODO: Figure out how to bind the NoteInput to the list of data

class NoteEditor extends React.Component {
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
			<div className='editor'>
				<div className='editor__content'>
					<input type='text' className='editor__title input' placeholder='Title' />
					<textarea ref='noteInput' className='editor__content input' rows='10' cols='50' />
				</div>
				<div className='editor__actions'>
					<input type='button' className='btn' value='Cancel' onClick={this.storeNote.bind(this)} />
					<input type='button' className='btn' value='Add' onClick={this.storeNote.bind(this)} />
				</div>
			</div>
		);
	}
}

export default NoteEditor;
