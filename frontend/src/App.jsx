import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import useSettings from './util/hooks/useSettings';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import JournalDisplayPage from './pages/JournalDisplayPage';
import JournalCollectionPage from './pages/JournalCollectionPage';
import JournalEntryPage from './pages/JournalEntryPage';
import JournalEditPage from './pages/JournalEditPage';
import MarketPage from './pages/MarketPage';
import SettingsPage from './pages/SettingsPage';

const App = () => {
	const settings = useSettings();
	const [theme, setTheme] = useState();

	useEffect(() => {
		const useTheme = async () => {
			const theme = await settings.settings.theme.toLowerCase();

			if (theme) {
				setTheme(theme);
			}
		};

		useTheme();
	}, [settings]);

	return (
		theme && (
			<div data-theme={theme}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignupPage />} />
					<Route path="/journal" element={<JournalDisplayPage />} />
					<Route
						path="/journal/collection"
						element={<JournalCollectionPage />}
					/>
					<Route
						path="/journal/collection/:id"
						element={<JournalEntryPage />}
					/>
					<Route path="/edit/:id" element={<JournalEditPage />} />
					<Route path="/market" element={<MarketPage />} />
					<Route path="/settings" element={<SettingsPage />} />
				</Routes>
			</div>
		)
	);
};

export default App;
