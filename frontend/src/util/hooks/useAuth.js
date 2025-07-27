import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
import { verifyCookie } from '../api/auth';

const useAuth = () => {
	const navigate = useNavigate();
	const [cookies, _, removeCookie] = useCookies([], {
		doNotUpdate: false,
	});

	const authenticateUser = useCallback(async () => {
		if (!cookies.token) {
			navigate('/login');
		}

		try {
			const { data } = await verifyCookie();
			const { status } = data;

			if (!status) {
				removeCookie('token'), navigate('/login');
			}
		} catch (error) {
			throw error;
		}
	}, []);

	useEffect(() => {
		authenticateUser();
	}, []);

	const handleLogout = () => {
		removeCookie('token');
		navigate('/login');
		window.location.reload();
	};

	return { navigate, cookies, removeCookie, handleLogout };
};

export default useAuth;
