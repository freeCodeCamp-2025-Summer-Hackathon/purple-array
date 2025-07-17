import { Link } from "react-router";
import { useState, useEffect } from "react";
import { formatDate } from "../../util/helper/formatDate";
import { useWord } from "../../util/hooks/useWord";

const JournalEntry = ({ date }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const hookResult = useWord();

  const currentWord = hookResult.wordData?.word || "WORD";
  const displayDate = formatDate(new Date());

  useEffect(() => {
    const currentDate = formatDate(new Date());
    const targetDate = date || currentDate;
    fetch("/placeholderJournalEntries.json")
      .then((res) => res.json())
      .then((data) => {
        const targetEntry = data.find((entry) => {
          const entryDate = formatDate(new Date(entry.date + "T00:00:00"));
          return entryDate === targetDate;
        });
        setResponse(targetEntry || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading response:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="card w-full max-w-3xl bg-base-200 p-10 shadow-md animate-pulse">
          <div className="h-6 bg-base-300 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-base-300 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-base-300 rounded w-full mb-1"></div>
          <div className="h-4 bg-base-300 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8">
      <header className="flex justify-between">
        <h2 className="text-2xl font-semibold text-secondary">
          {response?.word || currentWord}
        </h2>
        <span>{displayDate}</span>

        {/*Ternary option for edit/create*/}
        {response ? (
          <Link to={"/edit"} className="btn btn-sm md:btn-md">
            Edit
          </Link>
        ) : (
          <Link to={"/create"} className="btn btn-sm md:btn-md">
            Create
          </Link>
        )}
      </header>
      <br />
      <div className="flex items-center justify-center p-4">
        {/*Podium Background*/}
        <div
          className="bg-cover bg-center rounded-2xl shadow-2xl p-8 min-w-full min-h-96"
          style={{ backgroundImage: 'url("../../../assets/woodSurface.jpg")' }}
        >
          {/*Journal Container*/}
          <div className="flex flex-col lg:flex-row gap-6 max-w-4xl drop-shadow-xl">
            {/* Left Page */}
            <div
              className="bg-cover bg-center flex-1 shadow-lg p-6 space-y-6"
              style={{
                backgroundImage: 'url("../../../assets/parchmentPaper.png")',
              }}
            >
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
              <div className="min-h-28 m-3 space-y-2">
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
            </div>

            {/* Right Page */}
            <div
              className="bg-cover bg-center flex-1 shadow-lg p-6 space-y-6"
              style={{
                backgroundImage: 'url("../../../assets/parchmentPaper.png")',
              }}
            >
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
