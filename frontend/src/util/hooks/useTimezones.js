import { useCallback, useEffect, useState } from 'react';
import { fetchTimezones } from '../api/timezones';

const useTimezones = () => {
	const [data, setData] = useState([]);

	const getTimezones = useCallback(async () => {
		try {
			const timezones = await fetchTimezones();
			setData(timezones);
		} catch (error) {
			setData([]);
			console.log(error);
		}
	}, []);

	useEffect(() => {
		getTimezones();
	}, []);

	return { timezones: data };
};

export default useTimezones;
