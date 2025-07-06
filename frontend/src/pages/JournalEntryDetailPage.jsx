import Navbar from '../components/generic/Navbar';
import JournalDetail from '../components/journal/JournalDetail';

const JournalEntryDetailPage = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<h1>Journal Entry Detail Page</h1>
            <JournalDetail />
		</div>
	);
};

export default JournalEntryDetailPage;
