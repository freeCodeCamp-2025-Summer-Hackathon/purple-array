const JournalEntryFormDropDown = (props) => {
	return (
		<>
			<select
				disabled={props.disabled}
				defaultValue={props.defaultValue}
				name={props.name}
				onChange={props.onChange}
				className="w-full select select-bordered"
			>
				{!props.defaultValue && <option>{props.option1}</option>}
				<option>{props.option2}</option>
				<option>{props.option3}</option>
				<option>{props.option4}</option>
			</select>
		</>
	);
};

export default JournalEntryFormDropDown;
