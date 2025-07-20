import useAuth from '../util/hooks/useAuth';
import Navbar from '../components/generic/Navbar';
import SettingsOptions from '../components/settings/SettingsOptions';

const SettingsPage = () => {
	const { navigate, cookies, removeCookie, handleLogout } = useAuth();

	return (
		<div className="min-h-screen">
			<Navbar logout={handleLogout} />
			<div className="max-w-2xl mx-auto px-4 py-16 space-y-12">
				<SettingsOptions />
			</div>
		</div>
	);
};

export default SettingsPage;
