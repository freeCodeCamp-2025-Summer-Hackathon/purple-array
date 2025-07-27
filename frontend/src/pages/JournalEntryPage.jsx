import Navbar from '../components/generic/Navbar';
import useAuth from '../util/hooks/useAuth';
import useSettings from '../util/hooks/useSettings';
import { useParams } from 'react-router';
import { DateTime } from 'luxon';
import { formatLuxonDate } from '../util/helper/formatDate';
import JournalEntry from '../components/journal/JournalEntry';

const JournalEntryPage = () => {
	const { navigate, cookies, removeCookie, handleLogout } = useAuth();
	const { settings } = useSettings();

	const { id } = useParams();

	const userCurrentDate = formatLuxonDate(
		DateTime.utc().setZone(settings.timezone)
	);

	const entryDate = id;

	const pastEntry = userCurrentDate !== entryDate;

	return (
		<div className="min-h-screen">
			<Navbar logout={handleLogout} cookies={cookies} />
			<JournalEntry entry_id={id} entryDate={entryDate} pastEntry={pastEntry} />
		</div>
	);
};

export default JournalEntryPage;
