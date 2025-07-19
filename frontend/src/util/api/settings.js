import api from '../../lib/axios';

export const fetchSettings = async () => {
	const url = `settings`;

	try {
		const data = await api.get(url, {
			withCredentials: true,
		});

		return data.data.settings;
	} catch (error) {
		throw error;
	}
};
