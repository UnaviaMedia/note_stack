//Reducer for notes
const notes = (state = [], action) => {
	switch (action.type) {
		case 'GET_NOTE':
			return state;
		case 'GET_NOTES':
			return state;
		case 'ADD_NOTE':
			//Append the new note to the current state
			return [
				...state,
				{
					id: action.id,
					title: action.title,
					content: action.content
				}
			];
		case 'UPDATE_NOTE':
			//Map the current state to a new state, replacing the old note with the updated one
			return state.map(note => {
				if (note.id === action.id) {
					return {
						id: action.id,
						title: action.title,
						content: action.content
					};
				}

				return note;
			});
		case 'DELETE_NOTE':
			//Filter out the deleted note
			return state.filter(note => note.id !== action.id);
		default:
			return state;
	}
};

export default notes;
