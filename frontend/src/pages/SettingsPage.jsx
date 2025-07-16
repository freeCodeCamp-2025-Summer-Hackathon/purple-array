import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
import api from '../lib/axios';
import Navbar from '../components/generic/Navbar';
import SettingsOptions from '../components/settings/SettingsOptions';

const SettingsPage = () => {
	const navigate = useNavigate();
	const [cookies, _, removeCookie] = useCookies([], {
		doNotUpdate: false,
	});

	useEffect(() => {
		const verifyCookie = async () => {
			if (!cookies.token) {
				navigate('/login');
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
				console.log({ err });
			}
		};
		verifyCookie();
	}, [navigate, cookies, removeCookie]);

	return (
		<div className="min-h-screen">
			<Navbar />
			<div className="max-w-2xl mx-auto px-4 py-20 space-y-12">
				<h1 className="text-center text-3xl font-semibold text-secondary">
					Settings
				</h1>
				<SettingsOptions />
			</div>
		</div>
	);
};

export default SettingsPage;
