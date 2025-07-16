import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
import api from '../lib/axios';
import Navbar from '../components/generic/Navbar';
import WordOfTheDay from '../components/Home/WordOfTheDay';

const HomePage = () => {
	const navigate = useNavigate();
	const [cookies, removeCookie, updateCookies] = useCookies([], {
		doNotUpdate: false,
	});

	useEffect(() => {
		const verifyCookie = async () => {
			if (!cookies.token) {
				navigate('/login');
				console.log(`IF: Cookies.token: ` + cookies.token);
			}
			console.log({ cookies });
			try {
				const { data } = await api.post('/', {}, { withCredentials: true });
				const { status } = data;
				console.log({ status });
				if (!status) {
					removeCookie('token'), navigate('/login');
				}
			} catch (err) {
				console.log(`CATCH: Cookies.token: ` + cookies.token);
				console.log({ err });
				navigate('/login');
			}
		};
		verifyCookie();
	}, [navigate, cookies, removeCookie]);

	const handleLogout = () => {
		removeCookie('token');
		navigate('/login');
	};

	return (
		<div className="min-h-screen">
			<Navbar />
			<div className="max-w-4xl mx-auto py-20">
				<h1 className="text-center text-3xl font-semibold text-secondary">
					Word of the Day
				</h1>
			</div>
			<WordOfTheDay />
			<button className="btn btn-outline" onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
};

export default HomePage;
