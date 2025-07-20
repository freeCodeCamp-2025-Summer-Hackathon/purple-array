import api from '../../lib/axios';

export const loginUser = async (email, password) => {
	const url = '/login';
	try {
		const { data } = await api.post(
			url,
			{ email, password },
			{ withCredentials: true }
		);
		return data;
	} catch (error) {
		throw error;
	}
};
