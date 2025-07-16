import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import JournalDisplayPage from './pages/JournalDisplayPage';
import JournalCollectionPage from './pages/JournalCollectionPage';
import JournalEntryPage from './pages/JournalEntryPage';
import JournalCreatePage from './pages/JournalCreatePage';
import JournalEditPage from './pages/JournalEditPage';
import MarketPage from './pages/MarketPage';
import SettingsPage from './pages/SettingsPage';

const App = () => {
	return (
		<div data-theme="writeLight">
			<Routes>
				{/* Pathnames for some of these routes will need to be updated, once we get the real endpoints */}
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/journal" element={<JournalDisplayPage />} />
				<Route path="/journal/collection" element={<JournalCollectionPage />} />
				<Route path="/journal/collection/:id" element={<JournalEntryPage />} />
				<Route path="/create" element={<JournalCreatePage />} />
				<Route path="/edit" element={<JournalEditPage />} />
				<Route path="/market" element={<MarketPage />} />
				<Route path="/settings" element={<SettingsPage />} />
			</Routes>
		</div>
	);
};

export default App;
