import Navbar from '../components/generic/Navbar';
import useProducts from '../util/hooks/useProducts';
import MarketItems from '../components/Market/MarketItems';

const MarketPage = () => {
	const { products, isLoading } = useProducts();
	//this log will show you the shape of the data being returned, but should be removed before we ship
	console.log({ isLoading, products });

	return (
		<div className="min-h-screen">
			<Navbar />
			<div className="max-w-4xl mx-auto py-20">
				<h1 className="text-center text-3xl font-semibold text-secondary">
					Market
				</h1>
				<MarketItems />
				{/* Items Shop to go here */}
			</div>
		</div>
	);
};

export default MarketPage;
