import { useCallback, useEffect, useState } from 'react';
import { purchaseProduct } from '../api/products';

const usePurchase = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const purchaseItem = async (itemId) => {
        try {
            setIsLoading(true);
            setError(null);
            const result = await purchaseProduct(itemId);
            return result.data;
        } catch (error) {
            setError(error.message);
            console.log('Error purchasing item:', error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

  return { purchaseItem, isLoading, error };
};

export default usePurchase;