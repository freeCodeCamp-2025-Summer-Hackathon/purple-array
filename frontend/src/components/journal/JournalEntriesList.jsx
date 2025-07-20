import useEntries from '../../util/hooks/useEntries';
import { Loader } from 'lucide-react';
import CollectionListCard from './CollectionListCard';
import EntriesNotFound from './EntriesNotFound';

const JournalEntriesList = () => {
	const { entries, isLoading } = useEntries();

	return (
		<>
			<div className="container mx-auto min-h-screen">
				<div className="card mx-auto max-w-[52rem] my-10 bg-base-200">
					{isLoading && (
						<div className="flex p-6 gap-3 items-center">
							<Loader className="animate-spin-slow text-primary" size={30} />
							<span className="text-2xl text-primary">Loading...</span>
						</div>
					)}

					<div className="card-actions p-4 mx-auto">
						{/* When collection is empty direct user to create page*/}
						{!isLoading && entries.length === 0 && <EntriesNotFound />}

						{entries.length > 0 &&
							entries.map((entry) => {
								return (
									<CollectionListCard
										key={entry._id}
										to={`${entry.date}`}
										date={entry.date}
										word={entry.word}
									/>
								);
							})}
					</div>
				</div>
			</div>
		</>
	);
};

export default JournalEntriesList;
