import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
import api from '../lib/axios';
import Navbar from '../components/generic/Navbar';
import JournalEntry from '../components/journal/JournalEntry';

const JournalDisplayPage = () => {
	const navigate = useNavigate();
	const [cookies, removeCookie] = useCookies([], {
		doNotUpdate: false,
	});

	useEffect(() => {
		const verifyCookie = async () => {
			if (!cookies.token) {
				navigate('/login');
			}

			try {
				const { data } = await api.post('/', {}, { withCredentials: true });
				const { status } = data;
				console.log({ status });
				if (!status) {
					removeCookie('token'), navigate('/login');
				}
			} catch (err) {
				console.log({ err });
				navigate('/login');
			}
		};
		verifyCookie();
	}, [navigate, cookies, removeCookie]);

	return (
		<div className="min-h-screen">
			<Navbar />
			<div className="max-w-4xl mx-auto py-20">
				<h1 className="text-center text-3xl font-semibold text-secondary">
					Journal
				</h1>
				{/* Component for list of past entries should be place on this page as well */}
				<JournalEntry />
			</div>
		</div>
	);
};

export default JournalDisplayPage;
