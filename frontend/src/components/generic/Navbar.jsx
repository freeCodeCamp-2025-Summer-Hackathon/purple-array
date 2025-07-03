import toast from 'react-hot-toast';
import { Link } from 'react-router';

const Navbar = () => {
	return (
		<div>
			<header className="bg-base-300 border-b border-base-content/10">
				<div className="mx-auto max-w-6xl p-4">
					<div className="flex items-center justify-between">
						<h1 className="text-3xl font-bold text-primary font-sans tracking-tight">
							<Link to={'/'}> Word of the Day</Link>
						</h1>
						<button
							className="btn btn-primary"
							onClick={() => {
								toast.success('Great Success!');
							}}
						>
							Toast!
						</button>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
