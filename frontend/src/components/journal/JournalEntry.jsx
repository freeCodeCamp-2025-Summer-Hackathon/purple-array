import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { formatDate } from '../../util/helper/formatDate';
import { useWord } from '../../util/hooks/useWord';
import { Pencil, Plus } from 'lucide-react';
import AnimatePulseLoader from '../generic/AnimatePulseLoader';

const JournalEntry = ({ date }) => {
	const { word, isLoading } = useWord();

	// const [loading, setLoading] = useState(true);
	// const displayDate = formatDate(new Date());

	const [response, setResponse] = useState(null);

	useEffect(() => {
		const currentDate = formatDate(new Date());
		const targetDate = date || currentDate;
		fetch('/placeholderJournalEntries.json')
			.then((res) => res.json())
			.then((data) => {
				const targetEntry = data.find((entry) => {
					const entryDate = formatDate(new Date(entry.date + 'T00:00:00'));
					return entryDate === targetDate;
				});
				setResponse(targetEntry || null);
				// setLoading(false);
			})
			.catch((err) => {
				console.error('Error loading response:', err);
				// setLoading(false);
			});
	}, []);

	return (
		<div className="min-h-screen">
			{isLoading && <AnimatePulseLoader />}

			<div className="flex flex-col items-center justify-center p-10">
				<header className="flex justify-center"></header>
				<div className="flex flex-col items-center justify-center p-4">
					{/*Podium Background*/}
					{/* <div
        // className="bg-cover bg-center rounded-2xl shadow-2xl p-8 min-w-full min-h-96"
        // style={{ backgroundImage: 'url("../../../assets/woodSurface.jpg")' }}
        > */}
					<div className="container">
						<div className="card mx-auto max-w-3xl bg-base-200 p-6 shadow-md">
							<div className="grid grid-cols-[auto_1fr_auto] items-center gap-2">
								<div>
									<h2 className="mb-2 text-2xl font-semibold text-primary">
										{word.word}
									</h2>
									{/*Ternary option for edit/create*/}
									<span className="text-xl uppercase tracking-widest text-secondary font-semibold mt-0">
										{formatDate(new Date())}
									</span>
								</div>
								<div></div>
								<div>
									{response ? (
										<Link
											to={'/edit'}
											className="btn btn-circle bg-neutral-300 btn-lg"
										>
											<Pencil />
										</Link>
									) : (
										<Link
											to={'/create'}
											className="btn btn-circle bg-neutral-300 btn-lg"
										>
											<Plus />
										</Link>
									)}
								</div>
							</div>
							{/*Journal Container*/}
							{/* <div className="flex flex-col lg:flex-row gap-6 max-w-4xl drop-shadow-xl"> */}
							{/* Left Page */}
							{/* <div
                className="bg-cover bg-center flex-1 p-6 space-y-6"
                style={
                  {
                    // backgroundImage: 'url("../../../assets/parchment/parchmentPaper.png")',
                  }
                }
              > */}
							<hr className="my-6 border-t border-base-300" />
							<div className="min-h-28 pb-5 m-3 space-y-2">
								<h3 className="w-full text-lg font-semibold text-secondary">
									How did you use today's word?
								</h3>
								{response?.response ? (
									<p>{response.response}</p>
								) : (
									<div className="min-h-24 w-full p-4"></div>
								)}
							</div>
							<div className="min-h-28 pb-5 m-3 space-y-2">
								{response?.optionalPrompt1 ? (
									<h3 className="text-lg font-semibold text-secondary">
										{response.optionalPrompt1}
									</h3>
								) : (
									<h3 className="text-lg font-semibold text-secondary">
										Additional Prompt 1
									</h3>
								)}
								{response?.response1 ? (
									<p>{response.response1}</p>
								) : (
									<div className="min-h-24 w-full p-4"></div>
								)}
							</div>
							{/* Right Page */}
							{/* <div
                className="bg-cover bg-center flex-1 p-6 space-y-6"
                // style={{
                //   backgroundImage: 'url("../../../assets/parchmentPaper.png")',
                // }}
              > */}
							<div className="min-h-28 pb-5 m-3 space-y-2">
								{response?.optionalPrompt2 ? (
									<h3 className="text-lg font-semibold text-secondary">
										{response.optionalPrompt2}
									</h3>
								) : (
									<h3 className="text-lg font-semibold text-secondary">
										Additional Prompt 2
									</h3>
								)}
								{response?.response2 ? (
									<p>{response.response2}</p>
								) : (
									<div className="min-h-24 w-full p-4"></div>
								)}
							</div>
							<div className="min-h-28 pb-5 m-3 space-y-2">
								{response?.optionalPrompt3 ? (
									<h3 className="text-lg font-semibold text-secondary">
										{response.optionalPrompt3}
									</h3>
								) : (
									<h3 className="text-lg font-semibold text-secondary">
										Additional Prompt 3
									</h3>
								)}
								{response?.response3 ? (
									<p>{response.response3}</p>
								) : (
									<div className="min-h-24 w-full p-4"></div>
								)}
							</div>
						</div>
						{/* </div> */}
						{/* </div> */}
						{/* </div> */}
					</div>
					<div className="w-full max-w-3xl mt-4 flex justify-center">
						<Link
							to={'/journal/collection'}
							className="btn rounded-full bg-neutral-200 btn-lg mt-2"
						>
							Past Journal Entries
						</Link>
					</div>
				</div>
			</div>

			{/* {response && (
				<footer className="text-end">
					<Link to={'/'} className="btn btn-sm md:btn-md">
						Delete
					</Link>
				</footer>
			)} */}
		</div>
	);
};

export default JournalEntry;
