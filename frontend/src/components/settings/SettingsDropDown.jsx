const SettingsDropDown = (props) => {
	return (
		<>
			<div>
				{/* Option Select for Journal Font Settings */}
				<label className="block text-sm font-medium text-gray-700 mb-1">
					{props.label}
				</label>
				<select
					disabled={props.disabled}
					defaultValue={props.defaultValue}
					onChange={props.onChange}
					name={props.name}
					className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-300 focus:outline-none"
				>
					<>
						<option></option>
						{props.options}
					</>
				</select>
			</div>
		</>
	);
};

export default SettingsDropDown;
