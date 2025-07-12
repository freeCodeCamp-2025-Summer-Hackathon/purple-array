import { Link } from 'react-router';
import { formatDate } from '../../util/helper/formatDate';

const JournalEntry = () => {
	return (
		<div className="min-h-screen">
			<header>
				<span>{formatDate(new Date())}</span>
				<button>
					<Link to={''}>Edit</Link>
				</button>
			</header>
			<br />
			<h2>Word of the Day</h2>
			<br />
			<div>
				<h3>Primary Prompt/Question</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia modi
					reprehenderit optio, iste possimus cupiditate accusamus tenetur cumque
					fugit tempora voluptas illum ex est! Incidunt exercitationem quis
					molestias magnam qui!
				</p>
				<br />
				<h3>Additional Prompts</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
					excepturi cum incidunt optio iusto nemo, eius praesentium in est fuga
					facilis totam cupiditate iste vitae. Architecto porro quos similique
					doloremque.
				</p>
			</div>
		</div>
	);
};

export default JournalEntry;
