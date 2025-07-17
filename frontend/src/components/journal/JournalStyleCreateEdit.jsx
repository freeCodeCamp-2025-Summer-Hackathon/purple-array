import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router";
import JournalEntryForm from "./JournalEntryForm";

const JournalStyleCreateEdit = ({ initialData, onSubmit, onDelete }) => {
  return (
    <div className="min-h-screen flex items-start justify-center px-4 py-10">
      <div className="w-full max-w-3xl mx-auto px-4">
        <div className="card bg-base-200 p-6 rounded-xl shadow">
          {/* <Link to={"/journal"} className="btn btn-outline btn-primary mb-8">
            <ArrowLeftIcon className="size-5" />
            Back to Journal
          </Link> */}

          <JournalEntryForm
            initialData={initialData}
            onSubmit={onSubmit}
            onDelete={onDelete}
          />
        </div>
        {/* {onDelete && <button className="btn btn-primary" onClick={onDelete}> Delete</button>} */}
      </div>
    </div>
  );
};
export default JournalStyleCreateEdit;
