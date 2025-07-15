export const checkTimezone = async (timezone) => {
    console.log(timezone);
    return true;
};

export const checkInventory = async (settings, inventory) => {
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
