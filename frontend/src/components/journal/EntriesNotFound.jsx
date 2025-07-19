import { Link } from "react-router";
import { NotebookPen } from "lucide-react";

const EntriesNotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-10 gap-4 max-w-md text-center">
        <div className="bg-primary/10 rounded-[40%] p-8">
          <NotebookPen className="size-10 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">No Journal Entries Yet</h3>
        <p className="text-base-content/70">
          Ready to organize your thoughts? Create your first journal entry to
          get started on your journey.
        </p>
        <Link to="/create" className="btn btn-primary text-base">
          Write your first Entry
        </Link>
      </div>
    </div>
  );
};

export default EntriesNotFound;
