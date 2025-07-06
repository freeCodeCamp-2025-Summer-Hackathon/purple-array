import Navbar from '../components/generic/Navbar';
import JournalDetail from '../components/journal/JournalEntryDetail';

const JournalEntryDetailPage = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<h1>Journal Entry Detail Page</h1>
            <JournalEntryDetail />
		</div>
	);
};

export default JournalEntryDetailPage;
