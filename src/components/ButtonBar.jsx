import React from 'react';
import Button from './Button';

const ButtonBar = ({ currentNoteId, isEditing, events }) => {
	if (isEditing) {
		return (
			<div className='editor__actions button-group'>
				<Button
					icon='x'
					className='button--cancel'
					onClick={() => events.onCancelClick()}
				/>
				<Button
					icon='check'
					className='button--save'
					onClick={() => events.onSaveClick()}
				/>
				<Button
					icon='trash'
					className='button--delete'
					onClick={() => events.onDeleteClick(currentNoteId)}
				/>
			</div>
		);
	}

	return (
		<div className='editor__actions button-group'>
			<Button
				icon='pencil'
				className='button--edit'
				onClick={() => events.onEditClick()}
			/>
			{/*<Button
				icon='archive'
				className='button--archive'
				onClick={() => events.onArchiveClick()}
			/>*/}
			<Button
				icon='trash'
				className='button--delete'
				onClick={() => events.onDeleteClick(currentNoteId)}
			/>
		</div>
	);
};

export default ButtonBar;
