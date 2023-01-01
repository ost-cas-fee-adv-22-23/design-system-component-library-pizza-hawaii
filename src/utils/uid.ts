let counter = 0;

export default (prefix?: string): string => {
	counter++;
	return prefix ? `${prefix}-${counter}` : `${counter}`;
};

export const uidInt = (): number => ++counter;
