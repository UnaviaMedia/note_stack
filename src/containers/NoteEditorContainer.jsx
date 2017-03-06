import React from 'react';
import { connect } from 'react-redux';
import { setEditorState, setEditorNote, addNote, updateNote } from '../actions/note';
import NoteEditor from '../components/NoteEditor';

const mapStateToProps = (state) => {
	//Get the note that correponds to the selected item
	let note = state.notes.filter((item) => state.ui.currentNoteId === item.id)[0];

	//Pass an empty Note if the editor state is ADD (id of 0 is necessary)
	if (!note || state.ui.editorState === 'ADD') {
		note = { id: 0, title: '', content: '' };
	}

	return {
		note: note,
		editorState: state.ui.editorState,
		//Contains initial form values (for redux-form)
		initialValues: {
			id: note.id,
			title: note.title,
			content: note.content
		}
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		//Handler for editor submit button
		onSubmit: (values) => {
			console.log('onEditorSubmit');
			//Switch back to a viewing state and trigger the appropriate action
			dispatch(setEditorState('VIEW'));

			//Dispatch added and updated notes to different locations (added notes always have an id of 0)
			if (values.id === 0) {
				dispatch(addNote(values));
				dispatch(setEditorNote(-1));
			} else {
				dispatch(updateNote(values));
			}
		}
	};
};

//Connect the container to the presentation component
const NoteEditorContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(NoteEditor);

export default NoteEditorContainer;

/*class NoteEditorContainer extends React.Component {
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
};*/
