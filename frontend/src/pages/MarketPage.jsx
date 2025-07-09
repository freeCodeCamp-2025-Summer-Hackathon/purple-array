import { use } from 'react';
import Navbar from '../components/generic/Navbar';
import useProducts from '../util/hooks/useProducts';

const MarketPage = () => {
	const { isLoading, data } = useProducts();

	// ensure we're getting results back from DB
	console.log({ isLoading, data });

	return (
		<div className="min-h-screen">
			<Navbar />
			<div className="max-w-4xl mx-auto py-20">
				<h1 className="text-center text-3xl font-semibold text-secondary">
					Market
				</h1>
				{/* Items Shop to go here */}
			</div>
		</div>
	);
};

export default MarketPage;
