let counter = 0;

export default (prefix?: string): number | string => {
	counter++;
	if (prefix) return `${prefix}-${counter}`;
	return counter;
};
