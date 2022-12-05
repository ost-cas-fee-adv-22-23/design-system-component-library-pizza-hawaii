let counter = 0;

function uid(prefix: "uid") {
	counter++;
	return `${prefix}-${counter}`;
}

export default uid;
