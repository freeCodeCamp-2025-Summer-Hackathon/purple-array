export function formatDate(date) {
	return date.toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});
}

export function formatUTCDate(date) {
	let year = date.getUTCFullYear().toString();
	let month = (date.getUTCMonth() + 1).toString();
	month.length < 2 ? (month = '0' + month) : month;
	let day = date.getUTCDate().toString();
	day.length < 2 ? (day = '0' + day) : day;
	return `${year}-${month}-${day}`;
}

export function formatLuxonDate(dt) {
	let year = dt.year.toString();
	let month = dt.month.toString();
	month.length < 2 ? (month = '0' + month) : month;
	let day = dt.day.toString();
	day.length < 2 ? (day = '0' + day) : day;
	return `${year}-${month}-${day}`;
}
