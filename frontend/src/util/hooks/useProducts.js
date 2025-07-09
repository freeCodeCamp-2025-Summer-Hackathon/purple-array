import { useCallback, useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';

const useProducts = () => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const getProducts = useCallback(async () => {
		// call fetchProducts & set Data here
	}, []);

	useEffect(() => {
		// call use Products & set dependencies here
	}, []);

	return { data, isLoading };
};

export default useProducts;
