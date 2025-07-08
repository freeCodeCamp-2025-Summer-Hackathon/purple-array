import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import JournalPage from './pages/JournalPage';
import JournalEntryDetailPage from './pages/JournalEntryDetailPage';
import MarketPage from './pages/MarketPage';
import SettingsPage from './pages/SettingsPage';

const App = () => {
	return (
		<div data-theme="writeLight">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/signin" element={<SignInPage />} />
				<Route path="/journal" element={<JournalPage />} />
				{/*Path for the Journal Entry Route will need to be updated, once we get the endpoint setup from the Backend*/}
				<Route path="/journal-entry" element={<JournalEntryDetailPage />} />
				<Route path="/market" element={<MarketPage />} />
				<Route path="/settings" element={<SettingsPage />} />
			</Routes>
		</div>
	);
};

export default App;
