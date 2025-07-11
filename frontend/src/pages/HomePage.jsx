import Navbar from '../components/generic/Navbar';
import WordOfTheDay from '../components/Home/WordOfTheDay';

const HomePage = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<div className="max-w-4xl mx-auto py-20">
				<h1 className="text-center text-3xl font-semibold text-secondary">
					Word of the Day
				</h1>
			</div>
			<WordOfTheDay />
		</div>
	);
};

export default HomePage;
