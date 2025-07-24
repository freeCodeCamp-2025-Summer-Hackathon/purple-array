import { createContext, useContext, useState, useEffect } from 'react';
import useSettings from '../util/hooks/useSettings';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const { settings, isLoading } = useSettings();

  const [font, setFont] = useState('sans');
  const [ink, setInk] = useState('text-base-content');
  const [parchment, setParchment] = useState('bg-base-100');

  useEffect(() => {
    if (!isLoading && settings) {
      setFont(mapFont(settings.font));
      setInk(mapInk(settings.ink));
      setParchment(mapParchment(settings.parchment));
    }
  }, [settings, isLoading]);

  const mapFont = (value) => {
    switch (value?.toLowerCase()) {
      case 'handwritten': return 'font-handwritten';
      case 'cursive': return 'font-cursive';
      case 'typewriter': return 'font-typewriter';
      case 'chalk': return 'font-chalkboard';
      default: return 'sans';
    }
  };

  const mapInk = (value) => {
    switch (value?.toLowerCase()) {
      case 'blue': return 'text-blue-700';
      case 'green': return 'text-green-700';
      case 'purple': return 'text-purple-700';
      case 'red': return 'text-red-700';
      default: return 'text-base-content';
    }
  };

  const mapParchment = (value) => {
    switch (value?.toLowerCase()) {
      case 'lined notebook paper': return 'bg-white';
      case 'weathered parchment': return 'bg-yellow-50';
      case 'chalkboard': return 'bg-gray-900';
      case 'post-it note': return 'bg-yellow-200';
      default: return 'bg-base-100';
    }
  };

  return (
    <SettingsContext.Provider value={{ font, ink, parchment }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useJournalTheme = () => useContext(SettingsContext);
