// File:	src/reducers/notes.js
// Purpose:	Provide a Redux reducer for Note actions

/**
 * Redux reducer for Notes
 * @param {array}	state	Current Redux notes state
 * @param {object}	action	Action to perform against state
 * @return {array}	New Redux state
 */
const notes = (state = [], action) => {
	switch (action.type) {
		case 'GET_NOTE':
			return state;
		//This would set the state to show a spinner
		case 'FETCH_REQUEST_NOTES':
			console.log('FETCH_REQUEST_NOTES');
			console.log(action);
			return state;
		//This handles a successful retrieval of data
		case 'FETCH_RECEIVE_NOTES':
			console.log('FETCH_RECEIVE_NOTES');
			//TODO: Change this to not mutate state
			state = action.payload.data;
			return state;
		case 'FETCH_FAILURE_NOTES':
			console.error('FETCH_FAILURE_NOTES');
			console.log(action);
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
			//Return the current state for unknown actions
			return state;
	}
};

export default notes;
