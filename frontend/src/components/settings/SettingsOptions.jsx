import { useState } from 'react';
import useSettings from '../../util/hooks/useSettings';
import useInventory from '../../util/hooks/useInventory';
import { updateSettings } from '../../util/api/settings';
import { toast } from 'react-hot-toast';

const SettingsOptions = () => {
	const { settings, isLoading } = useSettings();
	const { inventory /*isLoading*/ } = useInventory();
	const [formData, setFormData] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(name, value); // remove log after testing
		// setFormData()
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			/* ******************************************************************* */
			// This is just placeholder data until we have the form set up correctly
			let data = {
				timezone: 'America/New_York',
				theme: 'cupcake',
				font: 'inter',
				ink: 'indigo',
				parchment: 'notebook',
			};
			/* ******************************************************************* */
			const response = await updateSettings(data);
			console.log(response);
			if (response.status === 200)
				toast.success('Settings updated successfully!');
			else {
				throw error;
			}
		} catch (error) {
			console.log(error); // remove log after testing
			toast.error('Settings update failed. Please try again.');
		}
	};

	if (isLoading) return <p>Loading settings...</p>;

	/* ******************************************************************* */
	/* From is currently only showing placeholder values - will need to be */
	/* updated with data from useInventory() Hook                           */
	/* ******************************************************************* */

	return (
		<div className="container">
			<div className="card mx-auto max-w-3xl bg-base-200 p-8 shadow-md">
				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						{/* Option Select for Journal Font Settings */}
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Journal Font
						</label>
						<select
							onChange={handleChange}
							name="font"
							className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-300 focus:outline-none"
						>
							{/* {settings?.backgrounds?.map((bg, idx) => (
								<option key={idx}>{bg}</option>
							)) || ( */}
							<>
								<option>Default</option>
								<option>Handwritten</option>
								<option>Cursive</option>
								<option>Typewriter Mist</option>
								<option>Chalk</option>
							</>
							{/* )} */}
						</select>
					</div>

					<div>
						{/* Option Select for Journal Ink Color Settings */}
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Journal Ink Color
						</label>
						<select
							onChange={handleChange}
							name="ink"
							className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-300 focus:outline-none"
						>
							{/* {settings?.themes?.map((theme, idx) => (
								<option key={idx}>{theme}</option>
							)) || ( */}
							<>
								<option>Default</option>
								<option>Blue</option>
								<option>Green</option>
								<option>Purple</option>
								<option>Red</option>
							</>
							{/* )} */}
						</select>
					</div>

					<div>
						{/* Option Select for Journal 'Parchment' Background Settings */}
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Journal Page Background
						</label>
						<select
							onChange={handleChange}
							name="parchment"
							className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-300 focus:outline-none"
						>
							{/* {settings?.fonts?.map((font, idx) => (
								<option key={idx}>{font}</option>
							)) || ( */}
							<>
								<option>Default</option>
								<option>Lined Notebook paper</option>
								<option>Weathered Parchment</option>
								<option>Chalkboard</option>
								<option>Post-It Note</option>
							</>
							{/* )} */}
						</select>
					</div>

					<button type="submit" className="btn btn-primary text-base">
						Save Settings
					</button>
				</form>
			</div>
		</div>
	);
};

export default SettingsOptions;
