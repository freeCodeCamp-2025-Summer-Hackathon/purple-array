import { Link, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import useEntries from '../../util/hooks/useEntries';
import useWord from '../../util/hooks/useWord';
import { updateEntry } from '../../util/api/entries';
import AnimatePulseLoader from '../generic/AnimatePulseLoader';
import { formatDate } from '../../util/helper/formatDate';
import { CircleDollarSign, ArrowLeft } from 'lucide-react';
import JournalEntryFormDropDown from './JournalEntryFormDropDown';
import JournalEntryFormTextArea from './JournalEntryFormTextArea';
import toast from 'react-hot-toast';

const JournalEntryForm = ({ entry_id }) => {
	const { word } = useWord();
	const { entries, isLoading } = useEntries();
	const entryDate = entry_id.id;
	const navigate = useNavigate();
	const [isSaving, setIsSaving] = useState(false);
	const [journalEntryData, setJournalEntryData] = useState({
		date: entryDate,
		word: '',
		response: '',
		optionalPrompt1: '',
		response1: '',
		optionalPrompt2: '',
		response2: '',
		optionalPrompt3: '',
		response3: '',
	});

	useEffect(() => {
		// load current entry if it exists
		const entry = entries.find((entry) => {
			return entry.date === entryDate;
		});
		// load data if present
		if (entry) {
			setJournalEntryData((prev) => ({
				...prev,
				word: entry.word,
				response: entry.response,
				optionalPrompt1: entry.optionalPrompt1,
				response1: entry.response1,
				optionalPrompt2: entry.optionalPrompt2,
				response2: entry.response2,
				optionalPrompt3: entry.optionalPrompt3,
				response3: entry.response3,
			}));
		} else {
			setJournalEntryData((prev) => ({
				...prev,
				word: word.word,
			}));
		}
	}, [entries]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setJournalEntryData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setIsSaving(true);
		try {
			const response = await updateEntry(journalEntryData);
			if (response.status === 200 || 201) toast.success('Journal Entry Saved!');
			setTimeout(() => {
				navigate(`/journal/collection/${entryDate}`);
			}, 1000);
		} catch (error) {
			console.log(error);
			toast.error('Error saving journal entry. Please try again.');
		} finally {
			setIsSaving(false);
		}
	};

	if (isLoading) {
		return <AnimatePulseLoader />;
	}

	return (
		<div className="card mx-auto">
			<div className="card mx-auto max-w-3xl min-w-[48rem] bg-base-200 p-8">
				<header className="flex flex-col items-start">
					<span className="text-xl uppercase tracking-widest text-primary font-semibold bg-primary/10 px-3 py-1 rounded-md">
						{formatDate(new Date(entryDate + `T00:00:00`))}
					</span>
				</header>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="form-control">
						<label className="label font-semibold">
							<h2 className="mt-4 text-lg font-semibold">
								How did you use the word{' '}
								<span className="text-primary font-bold">
									{journalEntryData?.word}
								</span>{' '}
								today?
							</h2>

							<span className="text-base font-bold text-yellow-600 flex items-center gap-1">
								<CircleDollarSign
									className="text-violet-950 fill-yellow-500 size-8"
									strokeWidth={1}
								/>{' '}
								+3
							</span>
						</label>
						{/* ************************ Form Block 1 ************************ */}
						{/* ************************************************************** */}
						<JournalEntryFormTextArea
							name={'response'}
							value={journalEntryData?.response}
							onChange={handleChange}
							placeholder={`Write about how you used ${journalEntryData?.word} today...`}
						/>
					</div>

					<hr className="my-6 border-t border-base-300" />
					<div className="mt-4 flex items-center justify-between">
						<h3 className="text-base font-semibold">Additional Reflections</h3>
						<span className="text-base text-yellow-600 font-bold flex items-center gap-1">
							<CircleDollarSign
								className="text-violet-950 fill-yellow-500 size-8"
								strokeWidth={1}
							/>
							+1
						</span>
					</div>

					{/* ************************ Form Block 2 ************************ */}
					{/* ************************************************************** */}
					<div className="form-control">
						<JournalEntryFormDropDown
							disabled={isLoading}
							defaultValue={journalEntryData?.optionalPrompt1}
							name={'optionalPrompt1'}
							onChange={handleChange}
							option1={`What gave you hope today?`}
							option2={`How did you show kindness today?`}
							option3={`What are you grateful for today?`}
						/>
						<JournalEntryFormTextArea
							name={'response1'}
							value={journalEntryData?.response1}
							onChange={handleChange}
							placeholder={'Write your response here...'}
						/>
					</div>

					{/* ************************ Form Block 3 ************************ */}
					{/* ************************************************************** */}
					<div className="form-control">
						<JournalEntryFormDropDown
							disabled={isLoading}
							defaultValue={journalEntryData?.optionalPrompt2}
							name={'optionalPrompt2'}
							onChange={handleChange}
							option1={`How did you challenge yourself today?`}
							option2={`When did you feel at peace today?`}
							option3={`Who made your day better today and why?`}
						/>
						<JournalEntryFormTextArea
							name={'response2'}
							value={journalEntryData?.response2}
							onChange={handleChange}
							placeholder={'Write your response here...'}
						/>
					</div>

					{/* ************************ Form Block 4 ************************ */}
					{/* ************************************************************** */}
					<div className="form-control">
						<JournalEntryFormDropDown
							disabled={isLoading}
							defaultValue={journalEntryData?.optionalPrompt3}
							name={'optionalPrompt3'}
							onChange={handleChange}
							option1={`What's something that you learned today?`}
							option2={`What challenge are you ready to face tomorrow?`}
							option3={`What song would be the soundtrack to your day?`}
						/>
						<JournalEntryFormTextArea
							name={'response3'}
							value={journalEntryData?.response3}
							onChange={handleChange}
							placeholder={'Write your response here...'}
						/>
					</div>

					{/* ************************ Form Footer  ************************ */}
					{/* ************************************************************** */}
					<div className="flex justify-between items-center mt-6">
						<Link
							to={`/journal/collection/${entryDate}`}
							className="flex gap-2 btn btn-outline btn-primary rounded-lg btn-md"
						>
							<ArrowLeft />
							Back to Journal Entry
						</Link>

						<button
							type="submit"
							disabled={isSaving}
							className="btn btn-primary text-lg px-10"
						>
							{isSaving ? `Saving...` : `Save`}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default JournalEntryForm;
