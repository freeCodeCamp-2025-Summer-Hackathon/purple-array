import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
import api from '../lib/axios';
import axios from 'axios';
import Navbar from '../components/generic/Navbar';
import WordOfTheDay from '../components/Home/WordOfTheDay';

const HomePage = () => {
	const navigate = useNavigate();
	const [cookies, removeCookie] = useCookies([]);

	useEffect(() => {
		const verifyCookie = async () => {
			if (!cookies.token) {
				// navigate('/login');
				console.log('there is no token');
			}

			const { data } = await axios.post(
				'http://localhost:5001',
				{},
				{
					withCredentials: true,
				}
			);
			const { status } = { data };
			console.log({ status });
			return (
				status ? toast(`Hello`) : removeCookie('token'), navigate('/login')
			);
		};
		verifyCookie();
	}, [cookies, navigate, removeCookie]);

	const Logout = () => {
		removeCookie('token');
		// navigate('/signup');
	};

	return (
		<div className="min-h-screen">
			<Navbar />
			<div className="max-w-4xl mx-auto py-20">
				<h1 className="text-center text-3xl font-semibold text-secondary">
					Word of the Day
				</h1>
			</div>
			<WordOfTheDay />
			<button className="btn btn-outline" onClick={Logout}>
				Logout
			</button>
		</div>
	);
};

export default HomePage;
