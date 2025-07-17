import { useCallback, useEffect, useState } from 'react';
import { fetchWord } from '../api/word';

export const useWord = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const getWord = useCallback(async () => {
		try {
			setIsLoading(true);
			const word = await fetchWord();
			setData(word);
		} catch (error) {
			setData({});
			throw error;
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		getWord();
	}, []);

	return { word: data, isLoading };
};

export default useWord;
