import toast from 'react-hot-toast';
import { Link } from 'react-router';
import { BookOpen } from 'lucide-react';

const Navbar = () => {
	return (
		<div>
			<header className="bg-base-300 border-b border-base-content/10">
				<div className="mx-auto max-w-6xl p-4">
					<div className="flex items-center justify-between">
						<div className="flex gap-4">
							<BookOpen size={50} fill="#65c3c8" color="#1e293b" />
							<h1 className="text-3xl font-bold text-slate-800 font-sans tracking-tight">
								<Link to={'/'}> Word of the Day</Link>
							</h1>
						</div>
						<h1 className="text-3xl font-bold text-primary font-sans tracking-tight">
							<Link to={'/journal'}> Journal </Link>
						</h1>
						<h1 className="text-3xl font-bold text-primary font-sans tracking-tight">
							<Link to={'/market'}> Market</Link>
						</h1>
						<h1 className="text-3xl font-bold text-primary font-sans tracking-tight">
							<Link to={'/settings'}> Settings</Link>
						</h1>
						<button
							className="btn btn-primary"
							onClick={() => {
								toast.error('Logout not functional yet!');
							}}
						>
							Logout
						</button>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
