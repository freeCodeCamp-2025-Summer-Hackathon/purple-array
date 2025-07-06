import Navbar from '../components/generic/Navbar';
import JournalEntry from '../components/journal/JournalEntry';

const JournalPage = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<h1>Journal Page</h1>
            <JournalEntry />
		</div>
        
	);
};

export default JournalPage;
