// File:	src/reducers/notes.js
// Purpose:	Provide a Redux reducer for Note actions

//NOTE: The following actions follow a pattern:
//			- _REQUEST_NOTE - Could be used to update UI state to indicate processing
//			- _RECEIVE_NOTE - Handles updating the local state after a successful request
//			- _FAILURE_NOTE - Handles updating the local state after a failed request
//		I have not handled the REQUEST or FAILURE events due to time constraints,
//			but they would be fairly straightforward and I wanted to leave them here so you can see they are triggered
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
		//GET (single) reducer
		case 'GET_RECEIVE_NOTE':
			//NOTE: This is deliberately empty, as I couldn't think of why to use it (already have posts in state)
			return state;

		//GET (list) reducer
		case 'GET_RECEIVE_NOTES':
			console.log('GET_RECEIVE_NOTES');
			//CHANGE: Simple way of handling retrieval errors
			return action.notes.constructor === Array ? action.notes : [];

		//ADD reducer
		case 'ADD_RECEIVE_NOTE':
			console.log('ADD_RECEIVE_NOTE');
			//Append the new note to the current state
			return [
				...state,
				{
					id: action.note.id,
					title: action.note.title,
					content: action.note.content
				}
			];
		//UPDATE reducer
		case 'UPDATE_RECEIVE_NOTE':
			console.log('UPDATE_RECEIVE_NOTE');
			//Map the current state to a new state, replacing the old note with the updated one
			return state.map(note => {
				if (note.id === action.note.id) {
					return {
						id: action.note.id,
						title: action.note.title,
						content: action.note.content
					};
				}

				return note;
			});
		//DELETE reducer
		case 'DELETE_RECEIVE_NOTE':
			console.log('DELETE_RECEIVE_NOTE');
			//Filter out the deleted note
			return state.filter(note => note.id !== action.id);
		default:
			//Return the current state for unknown actions
			return state;
	}
};

export default notes;
