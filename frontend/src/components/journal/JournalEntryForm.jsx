import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { formatDate } from '../../util/helper/formatDate';

const JournalEntryForm = ({ initialData = {}, onSubmit = () => { }, onDelete = null,
}) => {
	const [primaryPrompt, setPrimaryPrompt] = useState('');
	const [addPromptOne, setAddPromptOne] = useState('');
	const [addPromptTwo, setAddPromptTwo] = useState('');
	const [addPromptThree, setAddPromptThree] = useState('');

	useEffect(() => {
		setPrimaryPrompt(initialData.primaryPrompt || '');
		setAddPromptOne(initialData.addPromptOne || '');
		setAddPromptTwo(initialData.addPromptTwo || '');
		setAddPromptThree(initialData.addPromptThree || '');
	}, [initialData]);

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit({
			primaryPrompt,
			addPromptOne,
			addPromptTwo,
			addPromptThree,
		});
	};
	return (
		<div>
			<header>
				<span>{formatDate(new Date())}</span>
				<button>
					<Link to={''}>Delete?</Link>
				</button>
			</header>
			<h2>WORD</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Primary Prompt/Question:
					<input
						type="text"
						value={primaryPrompt}
						onChange={(e) => setPrimaryPrompt(e.target.value)}
						className='border'
					/>
				</label>
				<label>
					Additional Prompt 1:
					<input
						type="text"
						value={addPromptOne}
						onChange={(e) => setAddPromptOne(e.target.value)}
						className='border'

					/>
				</label>
				<label>
					Additional Prompt 2:
					<input
						type="text"
						value={addPromptTwo}
						onChange={(e) => setAddPromptTwo(e.target.value)}
						className='border'

					/>
				</label>
				<label>
					Additional Prompt 3:
					<input
						type="text"
						value={addPromptThree}
						onChange={(e) => setAddPromptThree(e.target.value)}
						className='border'

					/>
				</label>
				<br />
				<button type="submit">Save</button>
			</form>
		</div>
	);
};

export default JournalEntryForm;
