import { useCallback, useEffect, useState } from 'react';
import { fetchCoins } from '../api/coins';

const useCoins = () => {
	const [coins, setCoins] = useState({});
	const [isLoading, setIsLoading] = useState(false);
    
	const getCoins = useCallback(async () => {
		try {
			setIsLoading(true);
			const data = await fetchCoins();
			setCoins(data);
		} catch (error) {
            console.log('Error getting coins:', error);
			setIsLoading(false);
			setCoins({});
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		getCoins();
	}, []);

	return { coins: coins, isLoading };
};

export default useCoins;
