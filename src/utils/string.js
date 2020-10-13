export const stripTimezoneString = (timezoneString) => {
	// const cutFromIndex = timezoneString.indexOf('/') + 1;
	// timezoneString = timezoneString.slice(cutFromIndex);
	const matches = [...timezoneString.matchAll(/[/a-zA-Z]+/g)];
	return matches.join(' ');
};
