import { useState, useEffect } from 'react';

export const useWordOfTheDay = () => {
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

    const wordData = words[wordIdx];

    console.log('Hook Data:', wordData);
    
  return {
    wordData,
    loading
  };
};

