import api from '../../lib/axios';

export const signupUser = async (email, password) => {
	const url = 'signup';
	try {
		const { data } = await api.post(
			url,
			{ email, password },
			{ withCredentials: true }
		);

		return { data };
	} catch (error) {
		throw error;
	}
};

export const loginUser = async (email, password) => {
	const url = 'login';
	try {
		const { data } = await api.post(
			url,
			{ email, password },
			{ withCredentials: true }
		);
		// window.location.reload();
		return { data };
	} catch (error) {
		throw error;
	}
};

export const verifyCookie = async () => {
	try {
		const { data } = await api.post('/', {}, { withCredentials: true });

		return { data };
	} catch (error) {
		throw error;
	}
};
