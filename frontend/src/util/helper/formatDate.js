export function formatDate(date) {
	return date.toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});
}

export function formatUTCDate(date) {
	return `${date.getUTCFullYear()}-${
		date.getUTCMonth() + 1
	}-${date.getUTCDate()}`;
}
