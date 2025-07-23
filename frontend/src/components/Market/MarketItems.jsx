import useProducts from '../../util/hooks/useProducts.js';
import useInventory from '../../util/hooks/useInventory.js';
import usePurchase from '../../util/hooks/usePurchase.js';
import useCoins from '../../util/hooks/useCoins.js';
import { toast } from 'react-hot-toast';
import { CircleDollarSign } from 'lucide-react';

function MarketItems() {
	const { products, isLoading } = useProducts();
	const { inventory, refreshInventory } = useInventory();
    const { purchaseItem, error} = usePurchase();
    const { coins } = useCoins();

    const handlePurchase = async(item) => {
        if (item.cost > coins) {
            toast.error('Not enough coins for this purchase!')
        } else {
            if (window.confirm(`Buy ${item.name} for ${item.cost} coins?`)) {
                try {
                    await purchaseItem(item._id);
                    refreshInventory();
                    toast.success(`Your have successfully purchased ${item.name}`);
                } catch (error) {
                    toast.error('Purchase Failed');
                }
            }
        }
    };

	if (isLoading || !inventory) {
		return <p className="text-center py-10">Loading market items...</p>;
	}
	
	const marketItems = products.filter((product) => {
		return !product.tags.some((tag) => inventory[tag]?.includes(product.name));
	});

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pt-10">
			{marketItems.map((item) => (
				<div
					key={item._id}
					className="card bg-base-100 border border-base-200 shadow-sm transition duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-base-200"
				>
					<figure>
						<img
							src={`assets/${item.tags[0]}/${encodeURIComponent(
								item.name.toLowerCase().replace(/\s+/g, '-')
							)}.png`}
							alt={item.name}
							className="w-full h-48 object-contain"
						/>
					</figure>

					<div className="card-body text-center">
						<h2 className="card-title justify-center text-primary">
							{item.name}
						</h2>
						<p className="text-sm text-base-content/70">{item.description}</p>

						<div className="flex items-center justify-evenly font-semibold text-base-content">
							<div className="flex items-center justify-center">
								<CircleDollarSign
									className="text-violet-950 fill-yellow-500 size-7 pr-1"
									strokeWidth={1}
								/>
								{item.cost}
							</div>
							{item.tags.map((tag) => (
								<span
									key={`${item._id}-${tag}`}
									className="badge badge-outline"
								>
									{tag}
								</span>
							))}
						</div>

						<div className="flex flex-wrap justify-center gap-2 mt-3">
                            <button
                            className="btn btn-outline btn-primary btn-sm btn-wide"
                            onClick={() => handlePurchase(item)}
                            >
                                Buy
                            </button>
                        </div>
					</div>
				</div>
			))}
		</div>
	);
}
export default MarketItems;
