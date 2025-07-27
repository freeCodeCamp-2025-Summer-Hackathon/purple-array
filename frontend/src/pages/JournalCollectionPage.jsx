import Navbar from '../components/generic/Navbar';
import JournalEntriesList from '../components/journal/JournalEntriesList';
import useAuth from '../util/hooks/useAuth';

const JournalCollectionPage = () => {
	const { navigate, cookies, removeCookie, handleLogout } = useAuth();

	return (
		<div className="min-h-screen">
			<Navbar logout={handleLogout} cookies={cookies} />
			<div className="max-w-4xl mx-auto py-20">
				<h1 className="text-center text-3xl font-semibold text-secondary">
					Journal Collection
				</h1>

				<JournalEntriesList />
			</div>
		</div>
	);
};

export default JournalCollectionPage;
