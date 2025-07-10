import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router';
import JournalEntryForm from '../components/journal/JournalEntryForm'

const JournalCreatePage = () => {
    return (
        <div className="min-h-screen">
            <div className="container px-12 py-20">
                <div className="max-w-6xl mx-auto">
                    <Link to={'/journal'} className="btn btn-outline btn-primary mb-8">
                        <ArrowLeftIcon className="size-5" />
                        Back to Journal
                    </Link>

                    {/* Form to edit/update journal entry */}
                    <JournalEntryForm />
                </div>
            </div>
        </div>
    );
};
export default JournalCreatePage;
