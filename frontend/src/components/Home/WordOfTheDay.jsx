import { useWord } from "../../util/hooks/useWord";
import AnimatePulseLoader from "../generic/AnimatePulseLoader";

function WordOfTheDay() {
  const { word, isLoading } = useWord();

  return (
    <>
      {isLoading && <AnimatePulseLoader />}

      <div className="flex justify-center">
        <div className="card w-full max-w-3xl bg-base-200 shadow-xl border border-base-300 p-10 text-center space-y-6">
          <h1 className="text-xl font-semibold tracking-tight text-secondary">
            Word of the Day
          </h1>
          <h2 className="text-6xl font-bold text-primary">{word.word}</h2>
          <p className="text-md text-secondary italic">{word.pronunciation}</p>
          <p className="text-lg text-secondary/80 whitespace-pre-line">
            Definition: <b>{word.definition}</b>
          </p>
        </div>
      </div>
    </>
  );
}

export default WordOfTheDay;
