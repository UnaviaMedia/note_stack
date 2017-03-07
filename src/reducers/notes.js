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
			//NOTE: This is deliberately empty, as I couldn't think of why to use it (already have posts in state)
			return state;

		//GET reducers
		//NOTE: This would set the state to show a spinner
		case 'GET_REQUEST_NOTES':
			console.log('FETCH_REQUEST_NOTES');
			return state;
		//This handles a successful retrieval of data
		case 'GET_RECEIVE_NOTES':
			console.log('FETCH_RECEIVE_NOTES');
			return action.payload.data;
		case 'GET_FAILURE_NOTES':
			console.error('FETCH_FAILURE_NOTES');
			return state;

		//ADD reducers
		case 'ADD_RECEIVE_NOTES':
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

		//UPDATE reducers
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

		//DELETE REDUCERS
		case 'DELETE_NOTE':
			//Filter out the deleted note
			return state.filter(note => note.id !== action.id);
		default:
			//Return the current state for unknown actions
			return state;
	}
};

export default notes;
