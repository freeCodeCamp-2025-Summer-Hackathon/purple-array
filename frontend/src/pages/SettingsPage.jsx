import React from 'react';
import Navbar from '../components/generic/Navbar';
import SettingsOptions from '../components/settings/SettingsOptions';

const SettingsPage = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<div className="max-w-2xl mx-auto px-4 py-20 space-y-12">
				<h1 className="text-center text-3xl font-semibold text-secondary">
					Settings
				</h1>
				<SettingsOptions />
			</div>
		</div>
	);
};

export default SettingsPage;
