import React, { useState } from 'react';
import Navbar from '../components/generic/Navbar';

const SignUpPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			const res = await fetch('http://localhost:5001/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				// credentials: 'include',
				body: JSON.stringify({ email, password }),
			});

			const data = await res.json();

			if (res.ok) {
				console.log('Sign up successful!', data);
				alert('Sign up complete! You can now log in.');
				console.log ({res, data});
				// Optionally redirect to /signin
			} else {
				alert(data.message || 'Sign up failed');
			}
		} catch (err) {
			console.error('Error signing up:', err);
			alert('An error occurred');
		}
	};

	return (
		<div className="min-h-screen bg-base-100">
			<Navbar />
			<div className="flex justify-center items-center pt-20 px-4">
				<div className="card w-full max-w-md bg-base-200 shadow-xl border border-base-300 p-10 space-y-6">
					<h2 className="text-center text-3xl font-bold text-primary">Create Account</h2>
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
						<div>
							<label className="label">
								<span className="label-text">Confirm Password</span>
							</label>
							<input
								type="password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								className="input input-bordered w-full"
								required
							/>
						</div>
						<button type="submit" className="btn btn-primary w-full">
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;
