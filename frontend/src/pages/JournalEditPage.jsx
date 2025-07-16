import JournalPage from "./JournalPage";
const JournalEditPage = () => {
	const existingEntry = {
		primaryPrompt: "Existing primary prompt",
		addPromptOne: "Existing prompt 1",
		addPromptTwo: "Existing prompt 2",
		addPromptThree: "Existing prompt 3",
	}
	const onSubmit = () => {
		console.log('submitted')
	}
	const handleDelete = () => {
		console.log('delete');
	}

	return (
		<div>
			<JournalPage initialData={existingEntry} onSubmit={onSubmit} onDelete={handleDelete} />
		</div>

	);
};

export default JournalEditPage;
