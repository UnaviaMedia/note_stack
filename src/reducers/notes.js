//Reducer for notes
const notes = (state = [], action) => {
	switch (action.type) {
		case 'GET_NOTE':
			return state;
		case 'GET_NOTES':
			return state;
		case 'ADD_NOTE':
			return state;
		case 'UPDATE_NOTE':
			return state;
		case 'DELETE_NOTE':
			//Filter out the deleted note
			return state.filter(note => note.id !== action.id);
		default:
			return state;
	}
};

export default notes;
