import { useCallback, useEffect, useState } from 'react';
import { fetchInventory } from '../api/inventory';

const useInventory = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getInventory = useCallback(async () => {
		try {
			setIsLoading(true);
			const inventory = await fetchInventory();
			setData(inventory);
			console.log('Fetched inventory:', inventory); // just log for now
		} catch (error) {
			setData([]);
			console.error('Failed to fetch inventory:', error);
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		getInventory();
	}, []);

	return { inventory: data, isLoading };
};

export default useInventory;
