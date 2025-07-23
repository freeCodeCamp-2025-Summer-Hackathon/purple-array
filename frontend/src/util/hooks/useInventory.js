import { useCallback, useEffect, useState } from 'react';
import { fetchInventory } from '../api/inventory';

const useInventory = () => {
	const [inventory, setInventory] = useState({});
	const [inventoryLoading, setInventoryIsLoading] = useState(false);


	const getInventory = useCallback(async () => {
		try {
			setInventoryIsLoading(true);
			const data = await fetchInventory();
			setInventory(data);
		} catch (error) {
            console.log('Erorr getting inventory:', error);
			setInventory({});
		} finally {
			setInventoryIsLoading(false);
		}
	}, []);

	useEffect(() => {
		getInventory();
	}, []);

	return { inventory: inventory.inventory, inventoryLoading };
};

export default useInventory;
