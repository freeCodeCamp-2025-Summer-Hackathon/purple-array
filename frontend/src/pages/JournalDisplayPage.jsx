import Navbar from '../components/generic/Navbar';
import JournalEntry from '../components/journal/JournalEntry';

const JournalDisplayPage = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<div className="max-w-4xl mx-auto py-20">
				<h1 className="text-center text-3xl font-semibold text-secondary">
					Journal
				</h1>
				{/* Component for list of past entries should be place on this page as well */}
				<JournalEntry />
			</div>
		</div>
	);
};

export default JournalDisplayPage;
