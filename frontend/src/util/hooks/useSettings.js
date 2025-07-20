import { useCallback, useEffect, useState } from 'react';
import { fetchSettings } from '../api/settings';

const useSettings = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const getSettings = useCallback(async () => {
		try {
			setIsLoading(true);
			const data = await fetchSettings();
			setData(data);
		} catch (err) {
			setData({});
			throw err;
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		getSettings();
	}, []);

	return { settings: data, isLoading };
};

export default useSettings;
