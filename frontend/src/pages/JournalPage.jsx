import Navbar from '../components/generic/Navbar';
import { BookOpen } from 'lucide-react';
import JournalEntry from '../components/journal/JournalEntry';

const JournalPage = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<div className="max-w-4xl mx-auto py-20">
				<h1 className="text-center text-3xl font-semibold text-secondary">
					Journal
				</h1>
				<JournalEntry />
			</div>
		</div>
	);
};

export default JournalPage;
