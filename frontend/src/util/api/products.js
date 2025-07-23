import api from '../../lib/axios';

export const fetchProducts = async () => {
	const url = `products/`;
	try {
		let productsArray = [];

		const data = await api.get(url, {
			withCredentials: true,
		});
        
		if (Array.isArray((data.data))) {
			productsArray = data.data;
            return productsArray;

		} else if (data.data.products) {
            return data.data.products;
        } 
        
        return productsArray;

    
        } catch (error) {
        console.log('Fetch product error:', error)
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
        console.log('Purchase product error:', error);
		throw error;
	}
};