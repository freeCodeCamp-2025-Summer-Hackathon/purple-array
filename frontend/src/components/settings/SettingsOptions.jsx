import { useState } from 'react';
import useSettings from '../../util/hooks/useSettings';
import useInventory from '../../util/hooks/useInventory';
import { updateSettings } from '../../util/api/settings';
import { toast } from 'react-hot-toast';

const fontOptions = [
  { label: 'Default', value: 'font-sans' },
  { label: 'Handwritten', value: 'font-handwritten' },
  { label: 'Cursive', value: 'font-cursive' },
  { label: 'Typewriter', value: 'font-typewriter' },
  { label: 'Chalkboard', value: 'font-chalkboard' },
];

const inkOptions = [
  { label: 'Default', value: 'text-base-content' },
  { label: 'Blue', value: 'text-blue-700' },
  { label: 'Green', value: 'text-green-700' },
  { label: 'Purple', value: 'text-purple-700' },
  { label: 'Red', value: 'text-red-700' },
];

const parchmentOptions = [
  { label: 'Default', value: 'bg-base-100' },
  { label: 'Lined Notebook Paper', value: 'bg-notebook' },
  { label: 'Weathered Parchment', value: 'bg-parchment' },
  { label: 'Chalkboard', value: 'bg-chalkboard' },
  { label: 'Post-It Note', value: 'bg-postit' },
];

const SettingsOptions = () => {
  const { settings, isLoading } = useSettings();
  const { inventory } = useInventory();
  const [formData, setFormData] = useState({
    font: settings?.font || 'font-sans',
    ink: settings?.ink || 'text-base-content',
    parchment: settings?.parchment || 'bg-base-100',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      timezone: 'America/New_York', // hardcoded for now
      theme: settings?.theme || 'cupcake',
    };

    try {
      const response = await updateSettings(data);
      if (response.status === 200) {
        toast.success('Settings updated successfully!');
      } else {
        throw new Error('Failed to update settings');
      }
    } catch (error) {
      console.error(error);
      toast.error('Settings update failed. Please try again.');
    }
  };

  if (isLoading) return <p>Loading settings...</p>;

  return (
    <div className="container">
      <div className="card mx-auto max-w-3xl bg-base-200 p-8 shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Font Selector */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Journal Font</span>
            </label>
            <select
              name="font"
              value={formData.font}
              onChange={handleChange}
              className="select select-bordered"
            >
              {fontOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Ink Color Selector */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Journal Ink Color</span>
            </label>
            <select
              name="ink"
              value={formData.ink}
              onChange={handleChange}
              className="select select-bordered"
            >
              {inkOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Parchment Selector */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Journal Page Background</span>
            </label>
            <select
              name="parchment"
              value={formData.parchment}
              onChange={handleChange}
              className="select select-bordered"
            >
              {parchmentOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettingsOptions;