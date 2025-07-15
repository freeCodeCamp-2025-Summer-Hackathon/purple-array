import React, { useState } from 'react';
import Navbar from '../components/generic/Navbar';

const SignInPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await fetch('http://localhost:5001/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
				body: JSON.stringify({ email, password }),
			});

			const data = await res.json();

			if (res.ok) {
				console.log('Login successful!', data);
							console.log ({res, data});
				// TODO: Redirect user after login (e.g., to /journal)
			} else {
				alert(data.message || 'Login failed');
			}
		} catch (err) {
			console.error('Error logging in:', err);
			alert('An error occurred');
		}
	};

	return (
		<div className="min-h-screen bg-base-100">
			<Navbar />
			<div className="flex justify-center items-center pt-20 px-4">
				<div className="card w-full max-w-md bg-base-200 shadow-xl border border-base-300 p-10 space-y-6">
					<h2 className="text-center text-3xl font-bold text-primary">Sign In</h2>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="input input-bordered w-full"
								required
							/>
						</div>
						<div>
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="input input-bordered w-full"
								required
							/>
						</div>
						<button type="submit" className="btn btn-primary w-full">
							Log In
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignInPage;
