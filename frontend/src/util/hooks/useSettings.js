import { useCallback, useEffect, useState } from 'react';
import { fetchSettings } from '../api/settings';

const useSettings = () => {
	const [settings, setSettings] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getSettings = useCallback(async () => {
		try {
			setIsLoading(true);
			const data = await fetchSettings();
			setSettings(data);
		} catch (err) {
			setSettings([]);
			throw err;
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		getSettings();
	}, [getSettings]);

	return { settings, isLoading };
};

export default useSettings;
