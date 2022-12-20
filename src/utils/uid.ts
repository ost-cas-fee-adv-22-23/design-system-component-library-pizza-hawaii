let counter = 0;

export default (prefix?: string): string => {
	counter++;
	if (prefix) return `${prefix}-${counter}`;
	return `${counter}`;
};
