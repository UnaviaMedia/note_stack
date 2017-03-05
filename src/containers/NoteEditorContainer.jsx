import React from 'react';
//import { connect } from 'react-redux';
import NoteEditor from '../components/NoteEditor';

class NoteEditorContainer extends React.Component {
	constructor(params) {
		super(params);
		this.state = {
			note: {},
			editorState: 'VIEW'
		};
	}

	componentDidMount() {
		const { store } = this.context;
		this.unsubscribe = store.subscribe(() =>
			this.forceUpdate()
		);
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		//const props = this.props;
		const { store } = this.context;
		const state = store.getState();

		//Get current note and current editor state
		const editorState = state.ui.editorState;
		let note;

		switch (editorState) {
			case 'ADD':
				note = { title: '', content: '' };
				break;
			case 'EDIT':
			case 'VIEW':
			default:
				note = state.notes.filter((item) => state.ui.currentNoteId === item.id)[0];
				//Handle either an invalid id or an empty state
				if (!note || note.length === 0) {
					note = state.notes[0];
				}
				break;
		}

		return (
			<NoteEditor note={note} editorState={editorState} />
		);
	}
}
NoteEditorContainer.contextTypes = {
	store: React.PropTypes.object
};

export default NoteEditorContainer;

//Call whenever current note updates (from NoteList)
/*const mapStateToProps = (state) => {
	//Get the note that correponds to the selected item
	const note = state.notes.filter((item) => state.ui.currentNoteId === item.id);
	return {
		note: note[0], //Ensure only one note is returned
		editorState: state.ui.editorState
	};
};

const NoteEditorContainer = connect(
	mapStateToProps,
	null
)(NoteEditor);*/
