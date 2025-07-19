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
