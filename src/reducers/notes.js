// File:	src/reducers/notes.js
// Purpose:	Provide a Redux reducer for Note actions

//NOTE: The following actions follow a pattern:
//			- _REQUEST_NOTE - Could be used to update UI state to indicate processing
//			- _RECEIVE_NOTE - Handles updating the local state after a successful request
//			- _FAILURE_NOTE - Handles updating the local state after a failed request
//		I have not handled the REQUEST or FAILURE events due to time constraints,
//			but they would be fairly straightforward
//			(ie. displaying a spinner when REQUEST is received and hiding it when RECEIVE is received)
//		It does result in a large file, but I think it's clearer and easier for future use

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

		//GET (list) reducers
		case 'GET_REQUEST_NOTES':
			console.log('FETCH_REQUEST_NOTES');
			return state;
		case 'GET_RECEIVE_NOTES':
			console.log('FETCH_RECEIVE_NOTES');
			return action.payload.data;
		case 'GET_FAILURE_NOTES':
			console.error('FETCH_FAILURE_NOTES');
			return state;

		//ADD reducers
		case 'ADD_REQUEST_NOTE':
			console.log('ADD_REQUEST_NOTE');
			return state;
		case 'ADD_RECEIVE_NOTE':
			console.log('ADD_RECEIVE_NOTE');
			return state;
		case 'ADD_FAILURE_NOTE':
			console.log('ADD_FAILURE_NOTE');
			return state;
		//State reducer action
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
		case 'UPDATE_REQUEST_NOTE':
			console.log('UPDATE_REQUEST_NOTE');
			return state;
		case 'DELETE_RECEIVE_NOTE':
			console.log('UPDATE_RECEIVE_NOTE');
			return state;
		case 'DELETE_FAILURE_NOTE':
			console.log('UPDATE_FAILURE_NOTE');
			return state;
		//State reducer action
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
		case 'DELETE_REQUEST_NOTE':
			console.log('DELETE_REQUEST_NOTE');
			return state;
		case 'DELETE_RECEIVE_NOTE':
			console.log('DELETE_RECEIVE_NOTE');
			return state;
		case 'DELETE_FAILURE_NOTE':
			console.log('DELETE_FAILURE_NOTE');
			return state;
		//State reducer action
		case 'DELETE_NOTE':
			//Filter out the deleted note
			return state.filter(note => note.id !== action.id);
		default:
			//Return the current state for unknown actions
			return state;
	}
};

export default notes;
