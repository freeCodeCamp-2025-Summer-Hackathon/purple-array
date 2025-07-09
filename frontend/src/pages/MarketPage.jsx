import Navbar from '../components/generic/Navbar';

const MarketPage = () => {
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
