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

export const deleteEntry = async (entryId) => {
	const url = `journal/${entryId}`;

	try {
		const response = await api.delete(url, {
			withCredentials: true,
		});

		return response;
	} catch (error) {
		throw error;
	}
};