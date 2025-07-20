import api from '../../lib/axios';

export const fetchSettings = async () => {
	try {
		const response = await fetch('/settingsDummyData.json'); // placeholder for now
		if (!response.ok) {
			throw new Error('Failed to fetch settings');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching settings:', error);
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
