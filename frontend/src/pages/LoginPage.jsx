import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { loginUser } from '../util/api/auth';
import toast from 'react-hot-toast';
import Navbar from '../components/generic/Navbar';

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
			const { data } = await loginUser(email, password);
			const { success, message } = data;

			localStorage.setItem('user', data.email);

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
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<div className="flex flex-col lg:flex-row w-full flex-grow">
				<div className="w-full lg:w-2/3 m:w-1/2 flex items-center justify-center bg-base-100 px-8 py-12 relative">
					<img
						src="../../../assets/Signup_PromoBackground.png"
						alt="Promo Background"
						className="absolute inset-0 w-full h-full object-cover z-0"
					/>

					<div className="relative z-10 flex flex-col items-center justify-center text-center max-w-lg mt-12 lg:-mt-36">
						<div>
							<h1 className="text-4xl md:text-5xl font-bold leading-tight text-secondary">
								Discover a <span className="text-primary">Brighter</span>
								<br />
								Way to Journal
							</h1>
							<p className="text-lg md:text-xl mt-7 text-secondary">
								✨ Learn a new uplifting word every day ✨
							</p>
						</div>

						<img
							src="../../../assets/wotd_example_promo.png"
							alt="Word of the Day Preview"
							className="w-full max-w-none h-auto scale-95 mt-7 shadow-sm border border-base-300 rounded-2xl"
						/>

						<div className="mt-10 flex flex-col items-center justify-center text-secondary">
							<div className="flex flex-col md:flex-row md:justify-center md:gap-10 text-base font-medium text-center leading-relaxed">
								<p className="md:min-w-[220px]">
									Reflect with thoughtful journaling prompts
								</p>
								<p className="md:min-w-[220px]">
									Earn coins for every journal entry you complete
								</p>
								<p className="md:min-w-[260px]">
									Customize your journal with fonts, colors, and backgrounds
								</p>
							</div>
						</div>
					</div>

					<div className="absolute bottom-6 left-6 z-10 hidden lg:flex items-center gap-3">
						<img
							src="../../../assets/icon_promo.png"
							alt="Journal Icon"
							className="w-20"
						/>
						<span className="font-bold text-lg text-primary">
							#purple-array
						</span>
					</div>
				</div>
				<div className="w-full lg:w-1/3 m:w-1/2 flex justify-center items-center px-6 py-12">
					<div className="card w-full max-w-md bg-base-200 shadow-md border border-base-300 p-10 space-y-6">
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
		</div>
	);
};

export default LoginPage;
