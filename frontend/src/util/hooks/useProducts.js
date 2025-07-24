import { useCallback, useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';

const useProducts = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getProducts = useCallback(async () => {
		try {
			setIsLoading(true);
			const products = await fetchProducts();
			setData(products);
		} catch (error) {
			setIsLoading(false);
			setData([]);
			throw error;
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		getProducts();
	}, []);

	return { products: data, isLoading };
};

export default useProducts;
