import React from 'react';
import Navbar from '../components/generic/Navbar';
import JournalEntry from '../components/home/JournalEntry';

const JournalPage = () => {
	return (
		<div>
			<Navbar />
			<h1>Journal Page</h1>
            <JournalEntry />
		</div>
        
	);
};

export default JournalPage;
