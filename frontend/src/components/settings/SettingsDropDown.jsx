const SettingsDropDown = (props) => {
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-primary mb-1">
          {props.label}
        </label>
        <select
          disabled={props.disabled}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          name={props.name}
          className="w-full px-4 py-2 bg-gray-100 text-secondary rounded-md border border-gray-300 focus:outline-none"
        >
          <>
            <option>Default</option>
            {props.options}
          </>
        </select>
      </div>
    </>
  );
};

export default SettingsDropDown;
