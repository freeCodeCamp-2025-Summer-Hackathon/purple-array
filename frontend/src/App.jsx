import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import JournalDisplayPage from './pages/JournalDisplayPage';
import JournalEditPage from './pages/JournalEditPage';
import MarketPage from './pages/MarketPage';
import SettingsPage from './pages/SettingsPage';
import JournalCollectionPage from './pages/JournalCollectionPage';

const App = () => {
	return (
		<div data-theme="writeLight">
			<Routes>
				{/* Pathnames for some of these routes will need to be updated, once we get the real endpoints */}
				<Route path="/" element={<HomePage />} />
				<Route path="/signin" element={<SignInPage />} />
				<Route path="/journal" element={<JournalDisplayPage />} />
                <Route path="/journal/collection" element={<JournalCollectionPage />} />
				{/* Journal create route to go here */}
				<Route path="/edit" element={<JournalEditPage />} />
				<Route path="/market" element={<MarketPage />} />
				<Route path="/settings" element={<SettingsPage />} />
			</Routes>
		</div>
	);
};

export default App;
