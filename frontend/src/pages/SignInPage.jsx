import React from 'react';
import Navbar from '../components/generic/Navbar';

const SignInPage = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<div className="max-w-4xl mx-auto py-20">
				<h1 className="text-3xl font-semibold text-secondary">
					Sign In / Log In
				</h1>
				{/* Signin Options to go here */}
			</div>
		</div>
	);
};

export default SignInPage;
