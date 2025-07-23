import api from '../../lib/axios';

export const fetchInventory = async () => {
	try {
		const data = await api.get('inventory/', {
			withCredentials: true,
		});

		return data.data;
	} catch (err) {
		console.error('Error fetching inventory:', err);
		throw err;
	}
};
