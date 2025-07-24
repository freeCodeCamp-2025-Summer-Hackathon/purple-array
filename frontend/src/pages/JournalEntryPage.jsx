import React from 'react';
import Navbar from '../components/generic/Navbar';
import useAuth from '../util/hooks/useAuth';
import { useParams } from 'react-router';
import { formatUTCDate } from '../util/helper/formatDate';
import JournalEntry from '../components/journal/JournalEntry';

const JournalEntryPage = () => {
	const { navigate, cookies, removeCookie, handleLogout } = useAuth();

	const { id } = useParams();
	const todayDate = formatUTCDate(new Date());
	const entryDate = id;
	const pastEntry = todayDate !== entryDate;
	console.log({ todayDate, entryDate, pastEntry });

	return (
		<div className="min-h-screen">
			<Navbar logout={handleLogout} />
			<JournalEntry entry_id={id} entryDate={entryDate} pastEntry={pastEntry} />
		</div>
	);
};

export default JournalEntryPage;
