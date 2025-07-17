import axios from 'axios';

export const fetchInventory = async () => {
	try {
		const res = await axios.get('/inventory', {
			withCredentials: true, 
		});
		return res.data;
	} catch (err) {
		console.error('Error fetching inventory:', err);
		throw err;
	}
};
