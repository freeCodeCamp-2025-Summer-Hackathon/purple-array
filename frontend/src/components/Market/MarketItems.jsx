import { useState, useEffect } from 'react';
import useProducts from '../../util/hooks/useProducts';
import useCoins from '../../util/hooks/useCoins';

function MarketItems() {
	/**********************************************************************/
	// use the products array being fetched in on line 8 to populate the UI
	const { products, isLoading } = useProducts();
	const { coins } = useCoins();
	console.log(coins);

	/**********************************************************************/
	// Lines 14 - 28 will be replaced with the destructured values from line 7
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('/marketDummyData.json')
			.then((res) => res.json())
			.then((data) => {
				setItems(data);
				setLoading(false);
			})
			.catch((err) => {
				console.error('Error loading JSON:', err);
				setLoading(false);
			});
	}, []);

	/*****************************************************************************/
	// loading here on line 30 will need to be replaced with isLoading from line 8
	if (loading) {
		return <p className="text-center py-10">Loading market items...</p>;
	}

	return (
		<>
			{/* Balance will need to be styled - then this comment can be removed */}
			<div>{`Your Balance: $` + coins.coins}</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pt-10">
				{items.map((item) => (
					<div
						key={item._id.$oid}
						className="card bg-base-200 border border-base-300 shadow-md hover:shadow-xl transition-shadow"
					>
						<div className="card-body">
							<h2 className="card-title text-primary">{item.name}</h2>
							<p className="text-base-content/70">{item.description}</p>
							<p className="font-semibold text-base-content">
								💰 ${item.cost.$numberInt}
							</p>

							<div className="flex flex-wrap gap-2 mt-4">
								{item.tags.map((tag) => (
									<div
										key={`${item._id.$oid}-${tag}`}
										className="badge badge-outline badge-secondary"
									>
										{tag}
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default MarketItems;
