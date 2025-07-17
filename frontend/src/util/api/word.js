import api from '../../lib/axios';

export const fetchWord = async () => {
	const url = `word`;
	try {
		const data = await api.get(url, {
			withCredentials: true,
		});

		return data.data;
	} catch (error) {
		throw error;
	}
};
