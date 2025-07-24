import JournalEntryForm from '../components/journal/JournalEntryForm';
import { useParams } from 'react-router';

const JournalEditPage = () => {
	const id = useParams();

	return (
		<>
			<div className="min-h-screen p-20">
				<JournalEntryForm entry_id={id} />
			</div>
		</>
	);
};

export default JournalEditPage;
