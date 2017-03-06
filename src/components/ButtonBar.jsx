// File:	src/components/ButtonBar.jsx
// Purpose:	ButtonBar presentational component

import React from 'react';
import Button from './Button';

const ButtonBar = ({ currentNoteId, editorState = 'VIEW', events }) => {
	//Display the available actions when the editor state is add/edit
	if (editorState === 'ADD' || editorState === 'EDIT') {
		return (
			<div className='editor__actions button-group'>
				<Button icon='x' className='button--cancel' onClick={() => events.onCancelClick()} />
				<Button icon='check' className='button--save' type='submit' />
			</div>
		);
	}

	//Display the available actions when the editor state is anything else
	//	Conditional JSX is used rather than creating a separate check for when no current id is passed in
	//	No current id should display an empty state (after delete, initial, etc)
	return (
		<div className='editor__actions button-group'>
			<Button icon='plus' className='button--add' onClick={() => events.onAddClick()} />
			{ currentNoteId && <Button icon='pencil' className='button--edit' onClick={() => events.onEditClick()} /> }
			{ currentNoteId && <Button icon='trash' className='button--delete' onClick={() => events.onDeleteClick(currentNoteId)} /> }
		</div>
	);
};

export default ButtonBar;
