const JournalEntryFormTextArea = (props) => {
	return (
		<>
			<textarea
				className="textarea textarea-bordered mt-2 h-20"
				placeholder={props.placeholder}
				name={props.name}
				value={props.value}
				onChange={props.onChange}
			/>
		</>
	);
};

export default JournalEntryFormTextArea;
