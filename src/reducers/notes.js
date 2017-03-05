//Manage operations on a set
const notes = (state = {}, action) => {
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
			return state;
		default:
			return state;
	}
};

export default notes;
