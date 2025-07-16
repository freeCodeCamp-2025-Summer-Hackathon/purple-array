import { DateTime } from 'luxon';

const checkTimezone = async (timezone) => {
    const results = DateTime.local().setZone(timezone);

    return results.isValid ? timezone : false;
};

const checkInventory = async (settings, inventory) => {
    let updatedSettings = settings;
    Object.keys(settings).forEach((key) => {
        if (inventory[key].length !== 0 && settings[key] !== '') {
            if (!inventory[key].includes(settings[key])) {
                updatedSettings = false;
            }
        }
    });

    return updatedSettings;
};

export const checkSettings = async (settings, inventory) => {
    let updatedTimezone = await checkTimezone(settings.timezone);
    let updatedSettings = await checkInventory(
        {
            theme: settings.theme,
            font: settings.font,
            ink: settings.ink,
            parchment: settings.parchment,
        },
        inventory
    );

    if (updatedTimezone !== false && updatedSettings !== false) return settings;
    return false;
};
