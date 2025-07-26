import { useCallback, useEffect, useState } from 'react';
import { fetchEntries } from '../api/entries';

const useEntries = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getEntries = useCallback(async () => {
		try {
			setIsLoading(true);
			const entries = await fetchEntries();

			setData(entries);
		} catch (error) {
			setData([]);
			console.log('Error fetching entires.');
			throw error;
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		getEntries();
	}, []);

	return { entries: data, isLoading };
};

export default useEntries;
