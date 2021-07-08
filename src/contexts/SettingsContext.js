import { createContext, useEffect, useState } from "react";
import { THEMES } from 'src/utils/constants';

const defaultSettings = {
  theme: THEMES.LIGHT,
};

const SettingsContext = createContext({
  settings: defaultSettings,
  saveSettings: () => { },
});

export const restoreSettings = () => {
  let settings = null;

  try {
    const storeData = window.localStorage.getItem('settings');

    if (storeData) {
      settings = JSON.parse(storeData);
    }
  } catch (err) {
    console.error(err);
  }
  return settings;
};

export const storeSettings = (settings) => {
  window.localStorage.setItem('settings', JSON.stringify(settings));
};

export const SettingsProvider = ({ settings, children }) => {
  const [currentSettings, setCurrentSettings] = useState(
    settings || defaultSettings,
  );

  const handleSenttings = (update = {}) => {
    const mergedSettings = update;

    setCurrentSettings(mergedSettings);
    storeSettings(mergedSettings);
  };

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setCurrentSettings(restoredSettings);
    }
  }, []);

  return (
    <SettingsContext.Provider
      value={ {
        settings: currentSettings,
        saveSettings: handleSenttings,
      } }
    >
      { children }
    </SettingsContext.Provider>
  );

};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
