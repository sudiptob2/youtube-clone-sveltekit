export const formatLargeNumber = (num: number) => {
	const formatter = Intl.NumberFormat('en', { notation: 'compact' });
	return formatter.format(num);
};
