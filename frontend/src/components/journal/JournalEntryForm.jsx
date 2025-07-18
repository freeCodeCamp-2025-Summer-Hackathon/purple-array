import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { formatDate } from '../../util/helper/formatDate';
import { useWord } from '../../util/hooks/useWord';
import { Trash2, CircleDollarSign } from 'lucide-react';

const JournalEntryForm = (
	{
		//   initialData = {},
		//   onSubmit = () => {},
		//   onDelete = null,
	}
) => {
	const { wordData, loading } = useWord();
	const wordOfTheDay = wordData?.word || 'your word';

	const [primaryPrompt, setPrimaryPrompt] = useState('');
	const [addPromptOne, setAddPromptOne] = useState('');
	const [addPromptTwo, setAddPromptTwo] = useState('');
	const [addPromptThree, setAddPromptThree] = useState('');

	const [addPromptOneResponse, setAddPromptOneResponse] = useState('');
	const [addPromptTwoResponse, setAddPromptTwoResponse] = useState('');
	const [addPromptThreeResponse, setAddPromptThreeResponse] = useState('');

	//   useEffect(() => {
	//     setPrimaryPrompt(initialData.primaryPrompt?.trim() || "");
	//     setAddPromptOne(initialData.addPromptOne || "");
	//     setAddPromptTwo(initialData.addPromptTwo || "");
	//     setAddPromptThree(initialData.addPromptThree || "");
	//     setAddPromptOneResponse(initialData.addPromptOneResponse || "");
	//     setAddPromptTwoResponse(initialData.addPromptTwoResponse || "");
	//     setAddPromptThreeResponse(initialData.addPromptThreeResponse || "");
	//   }, [initialData]);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(primaryPrompt);
		console.log(addPromptOneResponse);
		console.log(addPromptTwoResponse);
		console.log(addPromptThreeResponse);
		// onSubmit({
		//   primaryPrompt: primaryPrompt.trim(),
		//   addPromptOne,
		//   addPromptOneResponse,
		//   addPromptTwo,
		//   addPromptTwoResponse,
		//   addPromptThree,
		//   addPromptThreeResponse,
		// });
	};

	if (loading) {
		return (
			<div className="flex justify-center items-center min-h-screen">
				<span className="loading loading-spinner loading-lg text-primary"></span>
			</div>
		);
	}

	return (
		<div className="container">
			<div className="card mx-auto max-w-3xl bg-base-200 p-6">
				<header className="flex flex-col items-start">
					<span className="text-xl uppercase tracking-widest text-primary font-semibold bg-primary/10 px-3 py-1 rounded-md">
						{formatDate(new Date())}
					</span>
					{/* <Link to={""} className="btn btn-sm btn-error text-white">
            <Trash2 />
          </Link> */}
				</header>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="form-control">
						<label className="label font-semibold">
							<h2 className="mt-4 text-lg font-semibold">
								How did you use the word{' '}
								<span className="text-primary font-bold">{wordOfTheDay}</span>{' '}
								{/* *********************************************************************** */}
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
						<textarea
							value={primaryPrompt}
							onChange={(e) => setPrimaryPrompt(e.target.value)}
							className="textarea textarea-bordered mt-2"
							rows={4}
							//   *************************************************************************
							placeholder={`Write about how you used ${wordOfTheDay} today...`}
						/>
					</div>

					<hr className="my-6 border-t border-base-300" />
					<div className="mt-4 flex items-center justify-between">
						<h3 className="text-base font-semibold">Additional Reflections</h3>
						<span className="text-base text-yellow-600 font-bold flex items-center gap-1">
							<CircleDollarSign
								className="text-violet-950 fill-yellow-500 size-8"
								strokeWidth={1}
							/>{' '}
							+1
						</span>
					</div>

					<div className="form-control">
						<select
							value={addPromptOne}
							onChange={(e) => setAddPromptOne(e.target.value)}
							className="select select-bordered"
						>
							<option value="What gave you hope today?">
								What gave you hope today?
							</option>
							<option value="How did you show kindness today?">
								How did you show kindness today?
							</option>
							<option value="What are you grateful for today?">
								What are you grateful for today?
							</option>
						</select>
						<textarea
							value={addPromptOneResponse}
							onChange={(e) => setAddPromptOneResponse(e.target.value)}
							className="textarea textarea-bordered mt-2"
							rows={4}
							placeholder="Write your response here..."
						/>
					</div>

					<div className="form-control">
						<select
							value={addPromptTwo}
							onChange={(e) => setAddPromptTwo(e.target.value)}
							className="select select-bordered"
						>
							<option value="How did you challenge yourself today?">
								How did you challenge yourself today?
							</option>
							<option value="When did you feel at peace today?">
								When did you feel at peace today?
							</option>
							<option value="Who made your day better today and why?">
								Who made your day better today and why?
							</option>
						</select>
						<textarea
							value={addPromptTwoResponse}
							onChange={(e) => setAddPromptTwoResponse(e.target.value)}
							className="textarea textarea-bordered mt-2"
							rows={4}
							placeholder="Write your response here..."
						/>
					</div>

					<div className="form-control">
						<select
							value={addPromptThree}
							onChange={(e) => setAddPromptThree(e.target.value)}
							className="select select-bordered"
						>
							<option value="What's something that you learned today?">
								What's something that you learned today?
							</option>
							<option value="What challenge are you ready to face tomorrow?">
								What challenge are you ready to face tomorrow?
							</option>
							<option value="What song would be the soundtrack to your day?">
								What song would be the soundtrack to your day?
							</option>
						</select>
						<textarea
							value={addPromptThreeResponse}
							onChange={(e) => setAddPromptThreeResponse(e.target.value)}
							className="textarea textarea-bordered mt-2"
							rows={4}
							placeholder="Write your response here..."
						/>
					</div>

					<div className="flex justify-between items-center mt-6">
						<Link
							to="/journal"
							className="text-lg font-semibold btn-u text-primary hover:underline"
						>
							← Back to Journal
						</Link>
						<button type="submit" className="btn btn-primary text-lg px-10">
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default JournalEntryForm;
