import { useState } from 'react';
import Navbar from '../components/generic/Navbar';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import api from '../lib/axios';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!email.trim() || !password.trim()) {
			toast.error(`All fields are required.`);
			return;
		}

		try {
			const { data } = await api.post(
				'/login',
				{ email, password },
				{ withCredentials: true }
			);

			const { success, message } = data;
			if (success) {
				toast.success(message || 'Login Successful!');
				navigate('/');
			}
		} catch (error) {
			toast.error('Login failed. Please try again.');
			console.log(error);
		}
	};

	return (
		<div className="min-h-screen bg-base-100">
			<Navbar />
			<div className="flex justify-center items-center pt-20 px-4">
				<div className="card w-full max-w-md bg-base-200 shadow-xl border border-base-300 p-10 space-y-6">
					<h2 className="text-center text-3xl font-bold text-primary">
						Log In
					</h2>
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

						<div className="card mt-4">
							<Link
								to="/signup"
								className="mx-auto hover:text-primary hover:underline"
							>
								Need to create an account? Please Signup.
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
