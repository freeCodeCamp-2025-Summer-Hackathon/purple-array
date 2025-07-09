import { useState, useEffect } from 'react';

function WordOfTheDay() {
	const [words, setWords] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('/wordDict.json')
			.then((res) => res.json())
			.then((data) => {
				setWords(data);
				setLoading(false);
			})
			.catch((err) => {
				console.error('Error loading JSON:', err);
				setLoading(false);
			});
	}, []);

	const getESTDate = () => {
		const now = new Date();
		const utc = now.getTime() + now.getTimezoneOffset() * 60000;
		const estOffset = -5;
		return new Date(utc + 3600000 * estOffset);
	};

	let wordIdx = 0;
	if (words.length > 0) {
		const estDate = getESTDate();
		const start = new Date('2025-07-01T00:00:00');
		const daysSince = Math.floor((estDate - start) / (1000 * 60 * 60 * 24));
		wordIdx = ((daysSince % 30) + 30) % 30;
	}

	if (loading) {
		return (
			<div className="flex justify-center items-center h-64">
				<div className="card w-full max-w-3xl bg-base-100 p-10 shadow-md animate-pulse">
					<div className="h-6 bg-base-300 rounded w-1/3 mb-4"></div>
					<div className="h-4 bg-base-300 rounded w-2/3 mb-2"></div>
					<div className="h-4 bg-base-300 rounded w-full mb-1"></div>
					<div className="h-4 bg-base-300 rounded w-5/6"></div>
				</div>
			</div>
		);
	}

	const wordData = words[wordIdx];

	return (
		<div className="flex justify-center px-4 py-10">
			<div className="card w-full max-w-3xl bg-base-100 shadow-xl border border-base-300 p-10 text-center space-y-6">
				<h2 className="text-4xl font-bold text-primary">
					{wordData.word}
				</h2>
				<p className="text-md text-neutral italic">
					{wordData.pronunciation}
				</p>
				<p className="text-lg text-neutral-content whitespace-pre-line">
					{wordData.definition}
				</p>
			</div>
		</div>
	);
}

export default WordOfTheDay;

