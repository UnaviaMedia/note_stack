import React from 'react';
import Button from './Button';

const ButtonBar = ({ currentNoteId, editorState = 'VIEW', events }) => {
	if (editorState === 'ADD' || editorState === 'EDIT') {
		return (
			<div className='editor__actions button-group'>
				<Button icon='x' className='button--cancel' onClick={() => events.onCancelClick()} />
				<Button icon='check' className='button--save' onClick={() => events.onSaveClick()} type='submit' />
				<Button icon='trash' className='button--delete' onClick={() => events.onDeleteClick(currentNoteId)} />
			</div>
		);
	}

	return (
		<div className='editor__actions button-group'>
			<Button icon='plus' className='button--add' onClick={() => events.onAddClick()} />
			<Button icon='pencil' className='button--edit' onClick={() => events.onEditClick()} />
			<Button icon='trash' className='button--delete' onClick={() => events.onDeleteClick(currentNoteId)} />
		</div>
	);
};

export default ButtonBar;
