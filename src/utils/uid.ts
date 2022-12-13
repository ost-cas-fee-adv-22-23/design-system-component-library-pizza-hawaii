let counter = 0;

function uid(prefix?: string): string {
	counter++;
	if (prefix) return `${prefix}-${counter}`;
	return `${counter}`;
}

export default uid;
