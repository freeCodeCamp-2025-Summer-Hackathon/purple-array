import useAuth from '../util/hooks/useAuth';
import Navbar from '../components/generic/Navbar';
import JournalEntry from '../components/journal/JournalEntry';

const JournalDisplayPage = () => {
	const { navigate, cookies, removeCookie, handleLogout } = useAuth();

	return (
		<div className="min-h-screen">
			<Navbar logout={handleLogout} cookies={cookies} />
			<div className="max-w-4xl mx-auto py-5">
				<JournalEntry />
			</div>
		</div>
	);
};

export default JournalDisplayPage;
