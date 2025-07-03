import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import JournalPage from './pages/JournalPage';
import MarketPage from './pages/MarketPage';
import SettingsPage from './pages/SettingsPage';

const App = () => {
	return (
		<div data-theme="cupcake">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/signin" element={<SignInPage />} />
				<Route path="/journal" element={<JournalPage />} />
				<Route path="/market" element={<MarketPage />} />
				<Route path="/settings" element={<SettingsPage />} />
			</Routes>
		</div>
	);
};

export default App;
