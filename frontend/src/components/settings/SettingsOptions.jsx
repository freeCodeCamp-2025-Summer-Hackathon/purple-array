import { useState } from 'react';
import useSettings from '../../util/hooks/useSettings';
import useInventory from '../../util/hooks/useInventory';
import { updateSettings } from '../../util/api/settings';
import { toast } from 'react-hot-toast';
import useTimezones from '../../util/hooks/useTimezones';
import SettingsDropDown from './SettingsDropDown';
import AnimatePulseLoader from '../generic/AnimatePulseLoader';

const SettingsOptions = () => {
	const { settings } = useSettings();
	const { inventory, isLoading } = useInventory();
	const { timezones } = useTimezones();
	const [formData, setFormData] = useState({});
	const [isSaving, setIsSaving] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prior) => ({
			...prior,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setIsSaving(true);
		try {
			const response = await updateSettings(formData);

			if (response.status === 200)
				toast.success('Settings updated successfully!');
			else {
				throw error;
			}
		} catch (error) {
			console.log(error);
			toast.error('Settings update failed. Please try again.');
		} finally {
			setIsSaving(false);
			setTimeout(() => {
				window.location.reload();
			}, 1000);
		}
	};

	if (isLoading)
		return (
			<div className="min-h-screen">
				<AnimatePulseLoader />
			</div>
		);

	return (
		!isLoading &&
		settings.font &&
		settings.ink &&
		settings.parchment && (
			<div className="container">
				<div className="card mx-auto max-w-3xl bg-base-200 p-8 shadow-md">
					{!isLoading && settings && (
						<form onSubmit={handleSubmit} className="space-y-6">
							{/* Option Select for Timezone Settings */}
							<SettingsDropDown
								disabled={isLoading}
								label={'Timezone'}
								defaultValue={settings?.timezone}
								onChange={handleChange}
								name={'timezone'}
								options={timezones
									// .sort((a, b) => a.location.localeCompare(b.location))
									.map((e) => {
										return <option key={e.location}>{e.location}</option>;
									})}
							/>

							{/* Option Select for Journal Font Settings */}
							<SettingsDropDown
								disabled={isLoading}
								label={'Journal Font'}
								defaultValue={settings?.font}
								onChange={handleChange}
								name={'font'}
								options={inventory?.font?.map((e) => {
									return <option key={e}>{e}</option>;
								})}
							/>

							{/* Option Select for Journal Ink Color Settings */}
							<SettingsDropDown
								disabled={isLoading}
								label={'Journal Ink'}
								defaultValue={settings?.ink}
								onChange={handleChange}
								name={'ink'}
								options={inventory?.ink?.map((e) => {
									return <option key={e}>{e}</option>;
								})}
							/>

							{/* Option Select for Journal 'Parchment' Background */}
							<SettingsDropDown
								disabled={isLoading}
								label={'Journal Page Background'}
								defaultValue={settings?.parchment}
								onChange={handleChange}
								name={'parchment'}
								options={inventory?.parchment?.map((e) => {
									return <option key={e}>{e}</option>;
								})}
							/>

							<div className="card-actions justify-end">
								<button
									type="submit"
									disabled={isSaving}
									className="btn btn-primary text-base"
								>
									{isSaving ? `Saving...` : `Save Changes`}
								</button>
							</div>
						</form>
					)}
				</div>
			</div>
		)
	);
};

export default SettingsOptions;
