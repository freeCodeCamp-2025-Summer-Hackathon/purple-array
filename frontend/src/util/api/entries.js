import api from '../../lib/axios';

export const fetchEntries = async () => {
	const url = `journal`;

	try {
		let entriesArray = [];

		const data = await api.get(url, {
			withCredentials: true,
		});

		if (data.data) {
			for (let entry of data.data) {
				entriesArray.push(entry);
			}
		}
		return entriesArray;
	} catch (error) {
		console.error('Failed to fetch journal entries:', error); // Log the error
		throw error;
	}
};

export const updateEntry = async (entryId, updatedData) => {
	const url = `journal/${entryId}`;

	try {
		const response = await api.put(
			url,
			{
				title: updatedData.title,
				body: updatedData.body,
				mood: updatedData.mood,
				tags: updatedData.tags,
				updatedAt: new Date(),
			},
			{
				withCredentials: true,
			}
		);

		return response;
	} catch (error) {
		console.error('Failed to delete journal entry:', error); // Log the error
		throw error;
	}
};

export const deleteEntry = async (entryId) => {
	const url = `journal/${entryId}`;

	try {
		const response = await api.delete(url, { withCredentials: true });
	} catch (error) {
		console.log(error);
	}
};
