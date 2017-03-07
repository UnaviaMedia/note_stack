// File:	src/actions/note.js
// Purpose:	Handle Redux actions for Notes

//Action to get a note
//NOTE: This is currently unused but let here for future use
export const fetchGetNote = (id) => {
	return function (dispatch) {
		return fetch(`http://localhost:3000/note/${id}`, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(json => {
			//TODO: Handle errors by dispatching elsewhere
			dispatch(receiveGetNote(json.data[0]));
		});
	};
};

//Action called after receiving the note
export const receiveGetNote = (note) => {
	return {
		type: 'GET_RECEIVE_NOTE',
		note: note
	};
};


//Action to get all notes
export const fetchGetNotes = (order = '', limit = '', offset = '') => {
	return function (dispatch) {
		return fetch(`http://localhost:3000/note?order=${order.toLowerCase()}&limit=${limit}&start=${offset}`, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(json => {
			//TODO: Handle errors by dispatching elsewhere
			dispatch(receiveGetNotes(json.data));
		});
	};
};

//Action called after receiving all notes
export const receiveGetNotes = (notes) => {
	return {
		type: 'GET_RECEIVE_NOTES',
		notes: notes
	};
};


//Action to add a note
export const fetchAddNote = (note) => {
	return function (dispatch) {
		return fetch(`http://localhost:3000/note/add`, {
			method: 'POST',
			body: JSON.stringify(note),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(json => {
			//TODO: Handle errors by dispatching elsewhere
			dispatch(receiveAddNote(note));
		});
	};
};

//Action called after adding a note
export const receiveAddNote = (note) => {
	return {
		type: 'ADD_RECEIVE_NOTE',
		note: note
	};
}


//Action to update a note
export const fetchUpdateNote = (note) => {
	return function (dispatch) {
		return fetch(`http://localhost:3000/note/${note.id}`, {
			method: 'PUT',
			body: JSON.stringify(note),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(json => {
			//TODO: Handle errors by dispatching elsewhere
			dispatch(receiveUpdateNote(note));
		});
	};
};

//Action called after updating a note
export const receiveUpdateNote = (note) => {
	return {
		type: 'UPDATE_RECEIVE_NOTE',
		note: note
	};
}


//Action to delete a note
export const fetchDeleteNote = (id) => {
	return function (dispatch) {
		return fetch(`http://localhost:3000/note/${id}`, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(json => {
			//TODO: Handle errors by dispatching elsewhere
			dispatch(receiveDeleteNote(id));
		});
	};
};

//Action called after deleting a note
export const receiveDeleteNote = (id) => {
	return {
		type: 'DELETE_RECEIVE_NOTE',
		id: id
	}
}
