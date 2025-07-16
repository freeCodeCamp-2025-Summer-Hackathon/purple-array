import { ArrowLeftIcon } from 'lucide-react';
import { Link } from 'react-router';
import JournalEntryForm from '../components/journal/JournalEntryForm'

const JournalPage = ({ initialData, onSubmit, onDelete }) => {
    return (
        <div>
            <div className="container px-12 py-20">
                <div className="max-w-6xl mx-auto">
                    <Link to={'/journal'} className="btn btn-outline btn-primary mb-8">
                        <ArrowLeftIcon className="size-5" />
                        Back to Journal
                    </Link>

                    <JournalEntryForm initialData={initialData} onSubmit={onSubmit} onDelete={onDelete} />

                </div>
                {onDelete && <button className="btn btn-primary" onClick={onDelete}> Delete</button>}

            </div>
        </div>
    );
};
export default JournalPage;
