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
		console.error('Failed to fetch journal entries:', error);
		throw error;
	}
};

export const updateEntry = async (entry) => {
	const url = `journal`;

	try {
		const response = await api.put(
			url,
			{
				date: entry.date,
				word: entry.word,
				response: entry.response,
				optionalPrompt1: entry.optionalPrompt1,
				response1: entry.response1,
				optionalPrompt2: entry.optionalPrompt2,
				response2: entry.response2,
				optionalPrompt3: entry.optionalPrompt3,
				response3: entry.response3,
			},
			{
				withCredentials: true,
			}
		);

		return response;
	} catch (error) {
		console.error('Failed to update journal entry:', error);
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
