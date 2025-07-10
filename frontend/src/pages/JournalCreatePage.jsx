import Navbar from '../components/generic/Navbar';

const JournalCreatePage = () => {
    return (

        <div className="min-h-screen">
            <Navbar />
            <div className="container px-12 py-20">
                <div className="max-w-6xl mx-auto">
                    <Link to={'/journal'} className="btn btn-outline Ibtn-primary mb-8">
                        <ArrowLeftIcon className="size-5" />
                        Back to Journal
                    </Link>

                    <JournalEntryForm />
                </div>
            </div>
        </div >
    );
};
export default JournalCreatePage;
