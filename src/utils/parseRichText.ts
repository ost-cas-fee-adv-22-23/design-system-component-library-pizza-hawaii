export default (plainText: string): string => {
	// Add paragraph tags to the text
	let richText = `<p>${plainText.split('\n\n').join('</p><p>')}</p>`;
	console.log(richText);
	// Replace newline characters with line break tags
	richText = richText.replace(/\n/g, '<br>');

	// Use a regular expression to find URLs in the texta and replace URLs with anchor tags
	richText = richText.replace(/((https?:\/\/|www\.)[^\s]+)/g, '<a href="$1">$1</a>');

	// Use a regular expression to find Hashtag-Links in the texta and wrap with anchor tags
	richText = richText.replace(/(#[^\s]+)/g, '<a href="$1">$1</a>');

	return richText;
};
