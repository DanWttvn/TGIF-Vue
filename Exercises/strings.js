
// 1

function reverseNumber(string) {
	let array = string.split("");
	const arrayLength = array.length;
	let reversedArray = [];

	for (let i = 0; i < arrayLength ; i++) {
		
		reversedArray.push(array.pop());
	
	}
	return reversedArray.join("");	
}

console.log(reverseNumber("123456789"));


// 2

function orderAlphabetically(str) {
	let arr = str.split("");
	let sortedWord = arr.sort();

	return sortedWord.join("");	
}

console.log(orderAlphabetically("zxaty"));


// 3

function capitalizeFirst(str) {
	str = str.split(" ");

	for (let i = 0; i < str.length ; i++) {
		str[i] = str[i][0].toUpperCase() + str[i].substr(1); //la primera uppercase, el resto se suma
		// console.log(str[i]);		
    }
	return str.join(" ");	
}

console.log(capitalizeFirst("hoLa que pasa"));


// 4
function getLongestWord(str) {
	str = str.split(" ");
	let longestWord = "";
	console.log(str[2].length);
	
	for (let i = 0; i < str.length ; i++) {
		
		if (str[i].length > longestWord.length) {
			longestWord = str[i];			
		}
		// console.log(longestWord.length);
    }
	return longestWord;
}

console.log(getLongestWord("hoLa que pasaaaaaa"));


