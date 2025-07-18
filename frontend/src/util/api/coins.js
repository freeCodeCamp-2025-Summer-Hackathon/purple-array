import api from '../../lib/axios';

export const fetchCoins = async () => {
	try {
		const data = await api.get('coins', {
			withCredentials: true,
		});

		return data.data.coins;
	} catch (error) {
		throw error;
	}
};
