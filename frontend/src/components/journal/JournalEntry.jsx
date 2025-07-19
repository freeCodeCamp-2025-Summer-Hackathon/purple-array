import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { formatDate } from '../../util/helper/formatDate';
import useWord from '../../util/hooks/useWord';
import useEntries from '../../util/hooks/useEntries';
import { CloudUpload, Pencil, Plus } from 'lucide-react';
import AnimatePulseLoader from '../generic/AnimatePulseLoader';

const JournalEntry = ({ entry_id, entryDate, pastEntry }) => {
	const { word, isLoading } = useWord();
	const { entries } = useEntries();
	const [currentEntry, setCurrentEntry] = useState({});
	const todayDate = formatDate(new Date());
	const initialData = {
		optionalPrompt1: '',
		optionalPrompt2: '',
		optionalPrompt3: '',
		response: '',
		response1: '',
		response2: '',
		response3: '',
	};

	// Determine which entry to load
	useEffect(() => {
		const todayEntry = entries.find((entry) => {
			return formatDate(new Date(entry.date + 'T00:00:00')) === todayDate;
		});

		// check whether this is the journal page or a page entry
		if (!entry_id) {
			setCurrentEntry(initialData);
			// } else if (todayEntry) {
			// 	setCurrentEntry(todayEntry);
		} else {
			setCurrentEntry(
				entries.find((entry) => {
					return formatDate(new Date(entry.date + 'T00:00:00')) === entryDate;
				})
			);
		}
	}, [entries]);

	const [response, setResponse] = useState(null);

	// if (entry_id) {
	// 	setCurrentEntry(
	// 		entries.find((entry) => {
	// 			return formatDate(new Date(entry.date + 'T00:00:00')) === todayDate;
	// 		})
	// 	);
	// }

	// if (!entry_id && !todayEntry) {
	// 	setCurrentEntry(initialData);
	// }

	// journal page - can only be today or empty

	// collection page can only be past entry

	// useEffect(() => {
	// 	const currentDate = formatDate(new Date());
	// 	const targetDate = date || currentDate;
	// 	fetch('/placeholderJournalEntries.json')
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			const targetEntry = data.find((entry) => {
	// 				const entryDate = formatDate(new Date(entry.date + 'T00:00:00'));
	// 				return entryDate === targetDate;
	// 			});
	// 			setResponse(targetEntry || null);
	// 			// setLoading(false);
	// 		})
	// 		.catch((err) => {
	// 			console.error('Error loading response:', err);
	// 			// setLoading(false);
	// 		});
	// }, []);

	return (
		<div className="min-h-screen">
			{/* *********************** Animated Loader *********************** */}
			{isLoading && <AnimatePulseLoader />}

			<div className="max-w-3xl mx-auto">
				{/* *********************** Journal Entry wrapper *********************** */}
				<div className="card container mt-12 p-6 bg-base-200">
					{/* *********************** Journal Entry Header *********************** */}
					<div className="flex justify-between px-6">
						<div className="card-title flex-col items-start">
							<h2 className=" text-2xl font-semibold text-primary w-full">
								{currentEntry?.word || word.word}
							</h2>
							<span className="text-xl uppercase tracking-widest text-secondary font-semibold">
								{!pastEntry ? todayDate : entryDate}
							</span>
						</div>

						<div>
							<Link
								to={'/edit'}
								className="btn btn-circle bg-neutral-300 btn-lg"
							>
								<Pencil />
							</Link>
						</div>
					</div>

					{/* *********************** Journal Entry Body *********************** */}
					<div className="card border-base-content/20 p-2 mt-6">
						{/* ******************** Question/Response 1 ******************** */}
						<div className="p-4">
							<h3 className="mb-4 w-full text-lg font-semibold text-secondary">
								How did you use today's word?
							</h3>

							<div className="p-3 min-h-[10rem] border rounded-md border-base-content/20">
								{currentEntry?.response || ''}
							</div>
						</div>

						{/* ******************** Question/Response 2 ******************** */}
						<div className="p-4">
							<h3 className="mb-4 w-full text-lg font-semibold text-secondary">
								{currentEntry?.optionalPrompt1 ||
									"What's something that you learned today?"}
							</h3>
							<div className="p-3 min-h-[10rem] border rounded-md border-base-content/20">
								{currentEntry?.response1 || ''}
							</div>
						</div>

						{/* ******************** Question/Response 3 ******************** */}
						<div className="p-4">
							<h3 className="mb-4 w-full text-lg font-semibold text-secondary">
								{currentEntry?.optionalPrompt2 || 'What gave you hope today?'}
							</h3>
							<div className="p-3 min-h-[10rem] border rounded-md border-base-content/20">
								{currentEntry?.response2 || ''}
							</div>
						</div>

						{/* ******************** Question/Response 4 ******************** */}
						<div className="p-4">
							<h3 className="mb-4 w-full text-lg font-semibold text-secondary">
								{currentEntry?.optionalPrompt3 ||
									'How did you show kindness today?'}
							</h3>
							<div className="p-3 min-h-[10rem] border rounded-md border-base-content/20">
								{currentEntry?.response3 || ''}
							</div>
						</div>
					</div>
				</div>
				{/* *********************** Footer Button Wrapper Header *********************** */}
				<div className="flex justify-start my-6">
					<Link
						to={'/journal/collection'}
						className="btn btn-outline btn-primary rounded-lg btn-lg"
					>
						Past Journal Entries
					</Link>
				</div>
			</div>
		</div>
	);
};

export default JournalEntry;
