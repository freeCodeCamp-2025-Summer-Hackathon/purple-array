import React from 'react';
import Navbar from '../components/generic/Navbar';
import WordOfTheDay from '../components/Home/WordOfTheDay';
const HomePage = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<h1>Home Page</h1>
			<WordOfTheDay />

		</div>
	);
};

export default HomePage;
