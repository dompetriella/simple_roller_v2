export const formatDateTime = (date: Date | string, use24HourClock: boolean = false) => {
	const d = new Date(date);
	const time = d.toLocaleTimeString('en-US', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: !use24HourClock
	});
	const dateStr = d.toLocaleDateString('en-US', {
		month: '2-digit',
		day: '2-digit',
		year: 'numeric'
	});
	return `${time} ${dateStr}`;
};
