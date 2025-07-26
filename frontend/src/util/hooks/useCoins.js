import { useCallback, useEffect, useState } from 'react';
import { fetchCoins } from '../api/coins';

const useCoins = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const getCoins = useCallback(async () => {
		try {
			setIsLoading(true);
			const coins = await fetchCoins();
			setData(coins);
		} catch (error) {
			console.log('Error getting coins:', error);
			setIsLoading(false);
			setData({});
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		getCoins();
	}, []);

	return { coins: data, isLoading };
};

export default useCoins;
