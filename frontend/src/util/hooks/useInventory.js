import { useCallback, useEffect, useState } from 'react';
import { fetchInventory } from '../api/inventory';

const useInventory = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const getInventory = useCallback(async () => {
		try {
			setIsLoading(true);
			const inventory = await fetchInventory();
			setData(inventory);
		} catch (error) {
			console.log('Error fetching inventory: ', error);
			setData({});
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		getInventory();
	}, []);

	return { inventory: data.inventory, isLoading };
};

export default useInventory;
