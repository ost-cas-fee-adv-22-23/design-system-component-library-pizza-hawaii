export type RichtextSettings = {
	basics?: boolean;
	links?: boolean;
	tags?: boolean;
	tagLinkpattern?: string;
};

const defaultSettings: RichtextSettings = {
	basics: true,
	links: true,
	tags: true,
	tagLinkpattern: '/tag/$1',
};

export default (plainText: string, settings: RichtextSettings = defaultSettings): string => {
	let richText = plainText;

	if (settings.links) {
		// Use a regular expression to find URLs in the texta and replace URLs with anchor tags
		richText = richText.replace(/((https?:\/\/|www\.)[^\s]+)/g, '<a href="//$1">$1</a>');
	}

	if (settings.tags) {
		// Use a regular expression to find Hashtag-Links in the texta and wrap with anchor tags
		richText = richText.replace(/(#[^\s]+)/g, `<a href="${settings.tagLinkpattern}">$1</a>`);
	}

	if (settings.basics) {
		// Add paragraph tags to the text
		richText = `<p>${richText.split('\n\n').join('</p><p>')}</p>`;

		// Replace newline characters with line break tags
		richText = richText.replace(/\n/g, '<br>');
	}

	return richText;
};
