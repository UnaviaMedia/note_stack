{
	ui: {
		//Filter state
		filterText: 'random',
		filterOrder: 'asc',
		filterLimit: 10,
		filterStart: 5,
		//Editor state
		isEditing: false,
		//Currently viewed note (whether editing or viewing)
		currentNoteId: 2,
		//Setting modal state
		isSettingsShown: false,
		settingsClone: {
			filterOrder: 'desc',
			filterLimit: 10
		}
	},
	notes: [
		{
			id: 1,
			title: 'React is cool',
			description: 'This is a note about React',
			content: 'This is the content of the note',
			dateCreated: '2017-03-05 12:02:41',
			dateModified: 'null',
			isArchived: false
		},
		{
			id: 2,
			title: 'Redux is nice',
			description: 'This is a note about Redux',
			content: 'Random contents of the note',
			dateCreated: '2017-03-06 03:58:17',
			dateModified: '2017-03-07 18:22:01',
			isArchived: false
		}
	]
}
