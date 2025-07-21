import api from '../../lib/axios';

export const fetchEntries = async () => {
	const url = `journal`;

	try {
		let entriesArray = [];

		const data = await api.get(url, {
			withCredentials: true,
		});

		if (data.data.journal) {
			for (let entry of data.data.journal) {
				entriesArray.push(entry);
			}
		}
		return entriesArray;
	} catch (error) {
		throw error;
	}
};

export const updateEntry = async (entryId, updatedData) => {
	const url = `journal/${entryId}`;

	try {
		const response = await api.put(
			url,
			{
				// Update these fields based on your Journal schema
				title: updatedData.title,
				body: updatedData.body,
				mood: updatedData.mood,
				tags: updatedData.tags, // optional
				updatedAt: new Date(),  // optional, backend might handle this
			},
			{
				withCredentials: true,
			}
		);

		return response;
	} catch (error) {
		throw error;
	}
};
