import { useCallback, useEffect, useState } from 'react';
import { fetchCoins } from '../api/coins';

const useCoins = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const getCoins = useCallback(async () => {
		try {
			setIsLoading(true);
			const coins = await fetchCoins();
			console.log(`hook: `, coins);
			setData(coins);
		} catch (error) {
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
