import Navbar from '../components/generic/Navbar';
import JournalEntryDetail from '../components/journal/JournalEntryDetail';

const JournalCreatePage = () => {

    return (
        <div className="min-h-screen">
            <Navbar />
            <h1>Journal Create Page</h1>
            <JournalEntryDetail />
        </div>
    );
};

export default JournalCreatePage;
