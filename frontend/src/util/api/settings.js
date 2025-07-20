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

export const updateSettings = async (data) => {
	const url = 'settings';

	try {
		const response = await api.patch(
			url,
			{
				timezone: data.timezone,
				theme: data.theme,
				font: data.font,
				ink: data.ink,
				parchment: data.parchment,
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
