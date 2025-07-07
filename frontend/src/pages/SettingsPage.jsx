import React from 'react';
import Navbar from '../components/generic/Navbar';

const SettingsPage = () => {
	return (
		<div className="min-h-screen bg-[#FDF6EC]">
			<Navbar />
			<div className="max-w-2xl mx-auto px-4 py-12 space-y-8">
				<h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
				<SettingsOptions />
			</div>
		</div>
	);
};

const SettingsOptions = () => {
	return (
		<form className="space-y-6">
			
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
		</form>
	);
};

export default SettingsPage;
