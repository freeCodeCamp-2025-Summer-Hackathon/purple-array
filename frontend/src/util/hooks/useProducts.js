import { useCallback, useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';

const useProducts = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getProducts = useCallback(async () => {
		try {
			setIsLoading(true);
			const data = await fetchProducts();
			setProducts(data);
		} catch (error) {
			setIsLoading(false);
			setProducts([]);
			throw error;
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		getProducts();
	}, []);

	return { products, isLoading };
};

export default useProducts;
