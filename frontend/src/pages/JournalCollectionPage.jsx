import Navbar from '../components/generic/Navbar';
import JournalEntriesList from '../components/journal/JournalEntriesList';

const JournalCollectionPage = () => {
  return (
    <div className="min-h-screen">
        <Navbar />
        <div className="max-w-4xl mx-auto py-20">
            <h1 className="text-center text-3xl font-semibold text-secondary">
                Journal Collection
            </h1>
            {/*Journal collection Components*/}
            <JournalEntriesList />
        </div>
    </div>
  );
};

export default JournalCollectionPage;