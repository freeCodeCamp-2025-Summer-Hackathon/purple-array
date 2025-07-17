import { useCallback, useEffect, useState } from 'react';
import { fetchCoins } from '../api/coins';

const useCoins = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getCoins = useCallback(async () => {
		try {
			setIsLoading(true);
			const coins = await fetchCoins();
			setData(coins);
			console.log('Coins from DB:', coins); // logging per ticket scope
		} catch (error) {
			setIsLoading(false);
			setData([]);
			console.error('Error fetching coins:', error);
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
