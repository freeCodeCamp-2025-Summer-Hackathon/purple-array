import { NavLink } from 'react-router';
import { Sparkles, NotebookPen, Store, Cog } from 'lucide-react';

const Navbar = ({ logout, cookies }) => {
	const user = localStorage.getItem('user');

	return (
		<div>
			<header className="bg-base-200 border-b border-base-content/10">
				<div className="mx-auto max-w-7xl p-4">
					<div className="flex items-center justify-between">
						{/* Logo & Site Title  */}
						<div className="flex gap-4">
							<NavLink
								to={'/'}
								className={({ isActive }) =>
									isActive
										? 'text-2xl text-primary bg-gradient-to-b from-primary/10 to-transparent px-6 py-2 rounded-t-xl'
										: 'text-2xl font-semibold text-secondary px-6 py-2'
								}
							>
								<div className="flex items-center gap-4 hover:opacity-75 hover:scale-105 transition-all ease-in-out duration-300">
									<Sparkles
										className="text-neutral fill-accent size-8"
										strokeWidth={1}
									/>
									WriteLight
								</div>
							</NavLink>
						</div>
						{/* Journal Icon & Link */}
						<div className="flex gap-4">
							<NavLink
								to={'/journal'}
								className={({ isActive }) =>
									isActive
										? 'text-2xl text-primary bg-gradient-to-b from-primary/10 to-transparent px-6 py-2 rounded-t-xl'
										: 'text-2xl font-semibold text-secondary px-6 py-2'
								}
							>
								<div className="flex items-center gap-4 hover:opacity-75 hover:scale-105 transition-all ease-in-out duration-300">
									<NotebookPen
										className="text-neutral fill-accent size-8"
										strokeWidth={1}
									/>
									Journal
								</div>
							</NavLink>
						</div>
						{/* Market Icon & Link */}
						<div className="flex gap-4">
							<NavLink
								to={'/market'}
								className={({ isActive }) =>
									isActive
										? 'text-2xl text-primary bg-gradient-to-b from-primary/10 to-transparent px-6 py-2 rounded-t-xl'
										: 'text-2xl font-semibold text-secondary px-6 py-2'
								}
							>
								<div className="flex items-center gap-4 hover:opacity-75 hover:scale-105 transition-all ease-in-out duration-300">
									<Store
										className="text-neutral fill-accent size-8"
										strokeWidth={1}
									/>
									Market
								</div>
							</NavLink>
						</div>
						{/* Settings Icon & Link */}
						<div className="flex gap-4">
							<NavLink
								to={'/settings'}
								className={({ isActive }) =>
									isActive
										? 'text-2xl text-primary bg-gradient-to-b from-primary/10 to-transparent px-6 py-2 rounded-t-xl'
										: 'text-2xl font-semibold text-secondary px-6 py-2'
								}
							>
								<div className="flex items-center gap-4 hover:opacity-75 hover:scale-105 transition-all ease-in-out duration-300">
									<Cog
										className="text-neutral fill-accent size-8"
										strokeWidth={1}
									/>
									Settings
								</div>
							</NavLink>
						</div>
						{/* This button will remain conditionally not visible for now, until logout can be refactored */}
						{cookies?.token && (
							<div className="card-actions gap-2 items-center">
								<button
									className="btn btn-outline btn-primary btn-sm"
									onClick={logout}
								>
									Logout
								</button>
								{user && (
									<span className="text-xs font-semibold text-primary/75">
										{user}
									</span>
								)}
							</div>
						)}
					</div>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
