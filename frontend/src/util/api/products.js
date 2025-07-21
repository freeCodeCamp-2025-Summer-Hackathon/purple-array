import api from '../../lib/axios';

export const fetchProducts = async () => {
	const url = `products`;
	try {
		let productsArray = [];

		const data = await api.get(url, {
			withCredentials: true,
		});

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

export const purchaseProduct = async (productId) => {
	const url = `products/${productId}`;

	try {
		const response = await api.put(
			url,
			{},
			{
				withCredentials: true,
			}
		);

		return response;
	} catch (error) {
		throw error;
	}
};