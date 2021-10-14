export default function capitalizeFirstLetter(string) {
	const splitWords = string.toLowerCase().split(' ');
	const uppercasedWords = splitWords.map(
		(word) => word.charAt(0).toUpperCase() + word.slice(1)
	);
	return uppercasedWords.join(' ');
}
