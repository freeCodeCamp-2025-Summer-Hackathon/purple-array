import { useWord } from '../../util/hooks/useWord';
import AnimatePulseLoader from '../generic/AnimatePulseLoader';

function WordOfTheDay() {
	const { word, isLoading } = useWord();

	return (
		<>
			{isLoading && <AnimatePulseLoader />}

			<div className="flex justify-center px-4 py-10">
				<div className="card w-full max-w-3xl bg-base-200 shadow-xl border border-base-300 p-10 text-center space-y-6">
					<h2 className="text-4xl font-bold text-primary">{word.word}</h2>
					<p className="text-md text-neutral italic">{word.pronunciation}</p>
					<p className="text-lg text-base-content/70 whitespace-pre-line">
						Definition: <b>{word.definition}</b>
					</p>
				</div>
			</div>
		</>
	);
}

export default WordOfTheDay;
