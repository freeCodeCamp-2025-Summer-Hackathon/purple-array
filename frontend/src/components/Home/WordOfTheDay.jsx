import { useState, useEffect } from "react";

function WordOfTheDay() {
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch("/wordDict.json")
            .then((res) => res.json())
            .then((data) => setWords(data))
            .catch((err) => console.error("Error loading JSON:", err));
    }, []);

    // let min = 0; //first index
    // let max = 29; //index of the last word since we have 30 words
    // let wordIdx = Math.floor(Math.random() * (max - min + 1)) + min;

    //Function to update the word every day. 
    const getESTDate = () => {
        const now = new Date();
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const estOffset = -5; // EST is UTC-5
        return new Date(utc + 3600000 * estOffset);
    };

    let wordIdx = 0;

    if (words.length > 0) {
        const estDate = getESTDate();
        const start = new Date("2025-07-01T00:00:00");
        const daysSince = Math.floor(
            (estDate - start) / (1000 * 60 * 60 * 24)
        );
        wordIdx = ((daysSince % 30) + 30) % 30;
    }

    if (words.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center space-y-4">
                <h1 className="text-2xl">Word of the Day</h1>
                <h2 className="text-4xl">Word: <b>{words[wordIdx].word}</b></h2>
                <p className="text-xl">Pronunciation: <b>{words[wordIdx].pronunciation}</b></p>
                <p className="text-lg whitespace-pre-line">Definition: <b>{words[wordIdx].definition}</b></p>
            </div>
        </div>
    );
}

export default WordOfTheDay;
