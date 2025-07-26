import useAuth from '../util/hooks/useAuth';
import Navbar from '../components/generic/Navbar';
import MarketItems from '../components/Market/MarketItems';

const MarketPage = () => {
	const { navigate, cookies, removeCookie, handleLogout } = useAuth();

	return (
		<div className="min-h-screen">
			<Navbar logout={handleLogout} cookies={cookies} />
			<div className="max-w-4xl mx-auto py-5">
				<MarketItems />
			</div>
		</div>
	);
};

export default MarketPage;
