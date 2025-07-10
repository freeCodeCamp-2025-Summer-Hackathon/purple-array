import api from '../../lib/axios';

export const fetchProducts = async () => {
	const url = `products`;
	try {
		let productsArray = [];

		const data = await api.get(url);

		if (data.data.products) {
			for (let product of data.data.products) {
				productsArray.push(product);
			}
		}

		return productsArray;
	} catch (error) {
		throw error;
	}
};
