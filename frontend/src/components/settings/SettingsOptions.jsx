import React from 'react';

const SettingsOptions = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		// Placeholder for future submit logic
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
		
			<div>
				<label className="block text-sm font-medium text-gray-700 mb-1">Page Background</label>
				<select className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-300 focus:outline-none">
					<option>Default Cream</option>
					<option>Lavender Mist</option>
					<option>Soft Gray</option>
				</select>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700 mb-1">Color / Theme</label>
				<select className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-300 focus:outline-none">
					<option>Light</option>
					<option>Dark</option>
					<option>Serenity Bloom</option>
				</select>
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700 mb-1">Font</label>
				<select className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-300 focus:outline-none">
					<option>Sans Serif (Default)</option>
					<option>Playfair Display</option>
					<option>Nunito</option>
					<option>OpenDyslexic</option>
				</select>
			</div>

			<button type="submit" className="btn btn-primary">
				Save Settings
			</button>
		</form>
	);
};

export default SettingsOptions;
