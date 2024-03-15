// Check two strings to see if they are anagrams
export function isAnagram(str1, str2) {
	// remove spaces and convert to lowercase

	str1 = str1.replace(/\s/g, '').toLowerCase();
	str2 = str2.replace(/\s/g, '').toLowerCase();

	if (str1.length !== str2.length) {
		return false;
	}

	// sort the characters
	str1 = str1.split('').sort().join('');
	str2 = str2.split('').sort().join('');

	return str1 === str2;
}

// example of use of the function
const check = isAnagram('star', 'rats');
console.log(check);
