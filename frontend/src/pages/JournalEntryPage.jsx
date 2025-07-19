import { useParams } from 'react-router';
import { formatDate } from '../util/helper/formatDate';
import Navbar from '../components/generic/Navbar';
import JournalEntry from '../components/journal/JournalEntry';

const JournalEntryPage = () => {
	const { id } = useParams();
	const todayDate = formatDate(new Date());
	const entryDate = formatDate(new Date(id + 'T00:00:00'));
	const pastEntry = todayDate !== entryDate;

	return (
		<>
			<Navbar />
			<JournalEntry entry_id={id} entryDate={entryDate} pastEntry={pastEntry} />
		</>
	);
};

export default JournalEntryPage;
