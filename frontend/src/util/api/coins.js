import axios from 'axios';

export const fetchCoins = async () => {
	const response = await axios.get('http://localhost:5001/coins', {
		withCredentials: true 
	});
	return response.data;
};
