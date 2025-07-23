import { useCallback, useEffect, useState } from 'react';
import { fetchInventory } from '../api/inventory';

const useInventory = () => {
	const [inventory, setInventory] = useState({});
	const [isLoading, setIsLoading] = useState(false);


	const getInventory = useCallback(async () => {
		try {
			setIsLoading(true);
			const data = await fetchInventory();
			setInventory(data);
		} catch (error) {
            console.log('Error getting inventory:', error);
			setInventory({});
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		getInventory();
	}, []);

	return { inventory: inventory.inventory, isLoading };
};

export default useInventory;
