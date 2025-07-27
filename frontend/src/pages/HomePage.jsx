import useAuth from '../util/hooks/useAuth';
import Navbar from '../components/generic/Navbar';
import WordOfTheDay from '../components/Home/WordOfTheDay';

const HomePage = () => {
	const { navigate, cookies, removeCookie, handleLogout } = useAuth();

	return (
		<div className="min-h-screen">
			<Navbar logout={handleLogout} cookies={cookies} />
			<div className="max-w-4xl mx-auto py-5"></div>
			<WordOfTheDay />
		</div>
	);
};

export default HomePage;
