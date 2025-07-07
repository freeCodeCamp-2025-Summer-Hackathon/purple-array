import React from 'react';
import Navbar from '../components/generic/Navbar';
import SettingsOptions from '../components/settings/SettingsOptions';

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
