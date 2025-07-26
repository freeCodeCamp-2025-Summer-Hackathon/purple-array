import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import {
	formatLuxonDate,
	formatUTCDate,
	formatDate,
} from '../../util/helper/formatDate';
import useWord from '../../util/hooks/useWord';
import useEntries from '../../util/hooks/useEntries';
import useSettings from '../../util/hooks/useSettings';
import { Pencil } from 'lucide-react';
import AnimatePulseLoader from '../generic/AnimatePulseLoader';
import { DateTime } from 'luxon';

const JournalEntry = ({ entry_id, entryDate, pastEntry }) => {
	const { word } = useWord();
	const { entries, isLoading } = useEntries();
	const { settings } = useSettings();

	const [currentEntry, setCurrentEntry] = useState({});
	const [entryExists, setEntryExists] = useState(false);
	// const todayDate = formatUTCDate(new Date());
	const [entryLink, setEntryLink] = useState('');

	const userCurrentDate = formatLuxonDate(
		DateTime.utc().setZone(settings.timezone)
	);

	const [fontStyle, setFontStyle] = useState('');
	const [inkStyle, setInkStyle] = useState('');
	const [background, setBackground] = useState('');

	useEffect(() => {
		//set up style customizations pulling state based on useSettings
		const styleChoice = async () => {
			if (settings.font) {
				const font = await settings.font?.toLowerCase();
				switch (font) {
					case 'default':
						setFontStyle(`default`);
						break;
					case 'handwritten':
						setFontStyle(`handwritten`);
						break;
					case 'cursive script':
						setFontStyle(`cursive`);
						break;
					case 'typewriter':
						setFontStyle(`typewriter`);
						break;
					case 'chalk':
						setFontStyle(`chalk`);
						break;
				}
			}
			if (settings.ink) {
				const ink = await settings.ink?.toLowerCase();
				switch (ink) {
					case 'default':
						setInkStyle(`default`);
						break;
					case 'blue ink':
						setInkStyle(`blue`);
						break;
					case 'green ink':
						setInkStyle(`green`);
						break;
					case 'purple ink':
						setInkStyle(`purple`);
						break;
					case 'red ink':
						setInkStyle(`red`);
						break;
					case 'white ink':
						setInkStyle(`white`);
						break;
				}
			}
			if (settings.parchment) {
				const ink = await settings.parchment?.toLowerCase();
				switch (ink) {
					case 'default':
						setBackground(`default`);
						break;
					case 'lined notebook paper':
						setBackground(`notebook`);
						break;
					case 'weathered paper':
						setBackground(`parchment`);
						break;
					case 'post-it notes':
						setBackground(`post-it`);
						break;
					case 'chalkboard':
						setBackground(`chalkboard`);
						break;
				}
			}
		};

		styleChoice();
	}, [settings.font, fontStyle]);

	const initialData = {
		word: word.word,
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
		// set entry for today if one exists
		const todayEntry = entries.find((entry) => {
			return entry.date === userCurrentDate;
		});

		// set date of past entry if one exits
		const dateEntry = entries.find((entry) => {
			return entry.date === entryDate;
		});

		if (entry_id) {
			// if page is a past entry
			setCurrentEntry(dateEntry);
			// set link id to past entry id
			setEntryLink(entry_id);
			setEntryExists(true);
		} else if (!entry_id && todayEntry) {
			// not past journal entry (no entry-id), but there is a today entry
			setCurrentEntry(todayEntry);
			// set link id to current date
			setEntryExists(true);
		} else {
			// not on journal page and no today entry
			setCurrentEntry(initialData);
			setEntryLink(userCurrentDate);
			setEntryExists(false);
		}
	}, [entries]);

	/* *********************** Animated Loader *********************** */
	if (isLoading)
		return (
			<div className="min-h-screen">
				<AnimatePulseLoader />
			</div>
		);

	return (
		<div className="min-h-screen">
			<div className="max-w-4xl mx-auto mt-12 px-6 pb-12">
				{/* *********************** Footer Button Wrapper Header *********************** */}
				<div className="flex justify-between mb-6 items-center">
					<div className="text-3xl font-semibold text-base-content/80 ml-2">
						{!entryDate && `Today's Entry`}
					</div>
					<Link
						to={'/journal/collection'}
						className="btn btn-outline btn-primary rounded-lg btn-md"
					>
						Past Journal Entries
					</Link>
				</div>
				{/* *********************** Journal Entry wrapper *********************** */}
				<div className="card container px-6 py-6 bg-base-200">
					{/* *********************** Journal Entry Header *********************** */}
					<div className="flex justify-between px-2">
						<div className="card-title flex-col items-start">
							<h2 className=" text-2xl font-semibold text-primary w-full">
								{currentEntry?.word || word.word}
							</h2>
							<span className="text-xl uppercase tracking-widest text-secondary font-semibold">
								{!pastEntry && userCurrentDate
									? formatDate(new Date(userCurrentDate + `T00:00:00`))
									: formatDate(new Date(entryDate + `T00:00:00`))}
							</span>
						</div>

						<div className="flex gap-4 items-center bg-base-100 px-2 py-2 rounded-full">
							<span className="text-primary font-semibold text-xl ml-4">
								{entryExists ? 'Edit' : 'Write'}
							</span>
							<Link
								to={`/edit/${entryLink}`}
								className="btn btn-circle bg-neutral-300 btn-lg"
							>
								<Pencil />
							</Link>
						</div>
					</div>

					{/* *********************** Journal Entry Body *********************** */}
					<div
						className={`card border-base-content/20 p-16 mt-6 bg-base-100 ${background}`}
					>
						{/* ******************** Question/Response 1 ******************** */}
						<div className="p-4">
							<h3 className="mb-4 w-full text-lg font-semibold text-secondary">
								How did you use today's word?
							</h3>

							<div className="min-h-[4rem]">
								{fontStyle && inkStyle && (
									<p className={`${fontStyle} ${inkStyle}`}>
										{currentEntry?.response || ''}
									</p>
								)}
							</div>
						</div>

						{/* ******************** Question/Response 2 ******************** */}
						<div className="p-4">
							<h3 className="mb-4 w-full text-lg font-semibold text-secondary">
								{currentEntry?.optionalPrompt1 ||
									"What's something that you learned today?"}
							</h3>
							<div className="min-h-[4rem]">
								{fontStyle && inkStyle && (
									<p className={`${fontStyle} ${inkStyle}`}>
										{currentEntry?.response1 || ''}
									</p>
								)}
							</div>
						</div>

						{/* ******************** Question/Response 3 ******************** */}
						<div className="p-4">
							<h3 className="mb-4 w-full text-lg font-semibold text-secondary">
								{currentEntry?.optionalPrompt2 || 'What gave you hope today?'}
							</h3>
							<div className="min-h-[4rem]">
								{fontStyle && inkStyle && (
									<p className={`${fontStyle} ${inkStyle}`}>
										{currentEntry?.response2 || ''}
									</p>
								)}
							</div>
						</div>

						{/* ******************** Question/Response 4 ******************** */}
						<div className="p-4">
							<h3 className="mb-4 w-full text-lg font-semibold text-secondary">
								{currentEntry?.optionalPrompt3 ||
									'How did you show kindness today?'}
							</h3>
							<div className="min-h-[4rem]">
								{fontStyle && inkStyle && (
									<p className={`${fontStyle} ${inkStyle}`}>
										{currentEntry?.response3 || ''}
									</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JournalEntry;
