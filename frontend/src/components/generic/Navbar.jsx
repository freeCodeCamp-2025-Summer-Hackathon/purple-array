import toast from 'react-hot-toast';
import { Link } from 'react-router';
import { Sparkles, BookOpen, Store, Cog } from 'lucide-react';

const Navbar = () => {
	return (
		<div>
			<header className="bg-base-200 border-b border-base-content/10">
				<div className="mx-auto max-w-7xl p-4">
					<div className="flex items-center justify-between">
						{/* Logo & Site Title  */}
						<div className="flex gap-4">
							<Sparkles
								className="text-neutral fill-accent size-10"
								strokeWidth={1}
							/>
							<Link
								to={'/'}
								className="text-2xl font-bold text-neutral font-sans tracking-normal"
							>
								<p className=" hover:opacity-75 hover:scale-105 transition-all ease-in-out duration-300">
									Word of the Day
								</p>
							</Link>
						</div>

						{/* Journal Icon & Link */}
						<div className="flex gap-4">
							<BookOpen
								className="text-neutral fill-accent size-8"
								strokeWidth={1}
							/>
							<Link
								to={'/journal'}
								className="text-2xl font-semibold text-secondary font-sans tracking-normal"
							>
								<p className="hover:opacity-75 hover:scale-105 transition-all ease-in-out duration-300">
									Journal
								</p>
							</Link>
						</div>

						{/* Market Icon & Link */}
						<div className="flex gap-4">
							<Store
								className="text-neutral fill-accent size-8"
								strokeWidth={1}
							/>
							<Link
								to={'/market'}
								className="text-2xl font-semibold text-secondary font-sans tracking-normal"
							>
								<p className="hover:opacity-75 hover:scale-105 transition-all ease-in-out duration-300">
									Market
								</p>
							</Link>
						</div>

						{/* Settings Icon & Link */}
						<div className="flex gap-4">
							<Cog
								className="text-neutral fill-accent size-8"
								strokeWidth={1}
							/>
							<Link
								to={'/settings'}
								className="text-2xl font-semibold text-secondary font-sans tracking-normal"
							>
								<p className="hover:opacity-75 hover:scale-105 transition-all ease-in-out duration-300">
									Settings
								</p>
							</Link>
						</div>
						<button
							className="btn btn-outline btn-primary"
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
