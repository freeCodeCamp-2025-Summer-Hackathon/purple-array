import { useWord } from '../../util/hooks/useWord';

function WordOfTheDay() {
	const { word, isLoading } = useWord();
	console.log(word);

	return (
		<>
			{isLoading && (
				<div className="flex justify-center items-center h-64">
					<div className="card w-full max-w-3xl bg-base-200 p-10 shadow-md animate-pulse">
						<div className="h-6 bg-base-300 rounded w-1/3 mb-4"></div>
						<div className="h-4 bg-base-300 rounded w-2/3 mb-2"></div>
						<div className="h-4 bg-base-300 rounded w-full mb-1"></div>
						<div className="h-4 bg-base-300 rounded w-5/6"></div>
					</div>
				</div>
			)}

			<div className="flex justify-center px-4 py-10">
				<div className="card w-full max-w-3xl bg-base-200 shadow-xl border border-base-300 p-10 text-center space-y-6">
					<h2 className="text-4xl font-bold text-primary">{'word'}</h2>
					<p className="text-md text-neutral italic">{'pronunciation'}</p>
					<p className="text-lg text-base-content/70 whitespace-pre-line">
						Definition: <b>{'definition'}</b>
					</p>
				</div>
			</div>
		</>
	);
}

export default WordOfTheDay;
