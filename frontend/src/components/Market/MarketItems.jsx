//import { useState, useEffect } from 'react';
import useProducts from '../../util/hooks/useProducts.js';
import { CircleDollarSign } from 'lucide-react';

function MarketItems() {
	/**********************************************************************/
	// use the products array being fetched in on line 7 to populate the UI
	const { products, isLoading } = useProducts();

	/*
	/*
	// Lines 12 - 26 will be replaced with the destructured values from line 7
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

    */
	// loading here on line 30 will need to be replaced with isLoading from line 7
	
	if (isLoading) {
		return <p className="text-center py-10">Loading market items...</p>;
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pt-10">
			{products.map((item) => (
				<div
					key={item._id.$oid}
					className="card bg-base-100 border border-base-200 shadow-sm transition duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-base-200"
				>
					<figure>
						<img
							src={`https://picsum.photos/seed/${encodeURIComponent(
								item.name
							)}/300/200`}
							alt={item.name}
							className="w-full h-48 object-cover"
						/>
					</figure>

					<div className="card-body text-center">
						<h2 className="card-title justify-center text-primary">
							{item.name}
						</h2>
						<p className="text-sm text-base-content/70">{item.description}</p>

						<div className="flex items-center font-semibold text-base-content">
							<CircleDollarSign
								className="text-violet-950 fill-yellow-500 size-7 pr-1"
								strokeWidth={1}
							/>
							{item.cost.$numberInt}
						</div>

						<div className="flex flex-wrap justify-center gap-2 mt-3">
							{item.tags.map((tag) => (
								<span
									key={`${item._id.$oid}-${tag}`}
									className="badge badge-outline"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default MarketItems;
