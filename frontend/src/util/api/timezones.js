import axios from 'axios';

export const fetchTimezones = async () => {
	const url = `./timezones.json`;
	try {
		let timezonesArray = [];

		const data = await axios.get(url);
		if (data.data) {
			for (let timezone of data.data) {
				timezonesArray.push(timezone);
			}
		}

		return timezonesArray;
	} catch (error) {
		console.log(error);
	}
};
