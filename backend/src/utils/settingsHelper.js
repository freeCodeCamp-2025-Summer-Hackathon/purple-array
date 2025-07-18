import { DateTime } from 'luxon';

/* Check whether the value passed in timezone is a valid timezone
 * Return true if true and false if false
 * Input: timezone (String representing user's time zone)
 */
const isValidTimezone = async (timezone) => {
    return DateTime.local().setZone(timezone).isValid; // "Default" value is the time zone of the machine running the code (server)
};

/* Check whether the setting value passed in is a valid inventory-affecting setting
 * Return true if true and false if false
 * Input: setting (String), inventory (array of user's items affecting the setting)
 */
const isValidInventorySetting = (setting, inventory) => {
    if (
        setting !== 'Default' &&
        (inventory.length === 0 || !inventory.includes(setting))
    )
        return false;
    if (setting === undefined) return false;
    return true;
};

/* Modify currentSettings to contain the new values if valid.
 * Modify failedUpdates to contain a key-value pair with the setting as the key and an error message as the value.
 * Input: settings (Object containing request body provided by user), inventory (Object containing user's inventory),
 * currentSettings (Object containing user's current settings), failedUpdates (empty object for storing errors)
 */
const updateInventorySettings = async (
    settings,
    inventory,
    currentSettings,
    failedUpdates
) => {
    console.log('Input settings:', settings);
    console.log('Current settings:', currentSettings);
    const settingsKeys = Object.keys(settings);
    const itemsTags = Object.keys(inventory);
    console.log(settingsKeys, itemsTags);
    settingsKeys.forEach((key) => {
        console.log(key);
        if (itemsTags.includes(key)) {
            if (isValidInventorySetting(settings[key], inventory[key])) {
                currentSettings[key] = settings[key];
            } else {
                failedUpdates[key] = `Invalid ${key} setting`;
            }
        }
    });
};

export const updateSettings = async (
    settings,
    inventory,
    currentSettings,
    failedUpdates
) => {
    if (await isValidTimezone(settings.timezone)) {
        currentSettings.timezone = settings.timezone;
    } else {
        failedUpdates['timezone'] = 'Invalid timezone setting';
    }
    await updateInventorySettings(
        settings,
        inventory,
        currentSettings,
        failedUpdates
    );
    console.log(currentSettings);
    console.log(failedUpdates);
};
