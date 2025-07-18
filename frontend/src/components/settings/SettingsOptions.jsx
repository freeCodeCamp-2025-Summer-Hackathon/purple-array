import React from "react";
import useSettings from "../../util/hooks/useSettings";

const SettingsOptions = () => {
  const { settings, isLoading } = useSettings();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for future submit logic
  };

  if (isLoading) return <p>Loading settings...</p>;

  return (
    <div className="container">
      <div className="card mx-auto max-w-3xl bg-base-200 p-8 shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Using fallback if real settings aren't wired yet */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Page Background
            </label>
            <select className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-300 focus:outline-none">
              {settings?.backgrounds?.map((bg, idx) => (
                <option key={idx}>{bg}</option>
              )) || (
                <>
                  <option>Default Cream</option>
                  <option>Lavender Mist</option>
                  <option>Soft Gray</option>
                </>
              )}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Color / Theme
            </label>
            <select className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-300 focus:outline-none">
              {settings?.themes?.map((theme, idx) => (
                <option key={idx}>{theme}</option>
              )) || (
                <>
                  <option>Light</option>
                  <option>Dark</option>
                  <option>Serenity Bloom</option>
                </>
              )}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Font
            </label>
            <select className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-300 focus:outline-none">
              {settings?.fonts?.map((font, idx) => (
                <option key={idx}>{font}</option>
              )) || (
                <>
                  <option>Sans Serif (Default)</option>
                  <option>Playfair Display</option>
                  <option>Nunito</option>
                  <option>OpenDyslexic</option>
                </>
              )}
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
