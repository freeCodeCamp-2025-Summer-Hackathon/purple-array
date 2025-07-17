import { Loader, CalendarFold } from 'lucide-react';
import { Link, useParams } from 'react-router';
import useEntries from '../../util/hooks/useEntries';
import EntriesNotFound from './EntriesNotFound';

const JournalEntriesList = () => {
	const { entries, isLoading } = useEntries();

	const id = useParams();

	return (
		<>
			<div className="container mx-auto min-h-screen">
				<div className="card mx-auto max-w-3xl my-10 bg-base-200">
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
									<Link
										to={`${entry.date}`}
										key={entry.date}
										className="flex flex-1 basis-1/3 m-1 min-w-fit p-6 bg-base-100 rounded-md"
									>
										<div className="flex justify-between w-full">
											<div className="flex gap-3">
												<CalendarFold
													className="text-primary"
													strokeWidth={1}
												/>{' '}
												{entry.date}
											</div>
											<div>{entry.word}</div>
										</div>
									</Link>
								);
							})}
					</div>
				</div>
			</div>
		</>
	);
};

export default JournalEntriesList;
