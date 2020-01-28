

// 1
console.log("EX 1");

let myClassmatesNames = ["Harris", "Dani", "Daniela", "Gonzalo", "Jorge"];

console.log(myClassmatesNames[0], myClassmatesNames[myClassmatesNames.length-1]);

for (var i = 0; i < myClassmatesNames.length; i++) {
	console.log(myClassmatesNames[i]);
}

// 2
console.log("EX 2");

let myClassmatesAges = [21, 23, 24, 32, 35];

console.log("- with while:");
let j = 0;
while (j < myClassmatesAges.length) {
	if (myClassmatesAges[j] % 2 === 0) {
		console.log(myClassmatesAges[j]);
	}
	j++;
}
console.log("- with for:");
for (let i = 0; i < myClassmatesAges.length; i++) {
	if (myClassmatesAges[i] % 2 === 0) {
		console.log(myClassmatesAges[i]);
	}
}

// 3
let array3 = [22, 45, 3, 999, 7,77, 78, 999];

console.log("EX 3");

console.log("- with for");

function lowestNumber(values) {
	let lowestNum = array3[0];
	for (var i = 0; i < values.length; i++) {
		if (values[i] < lowestNum) {
			lowestNum = values[i];
		}
	}
	return lowestNum;
}
console.log(lowestNumber(array3));


console.log("- with Math");
console.log(Math.min(...array3)); // la buena

//4
console.log("EX 4");

console.log("- with for");

let higgestNum = 0;
function biggestNumber(values) {
	for (var i = 0; i < values.length; i++) {
		if (values[i] > higgestNum) {
			higgestNum = values[i];
		}
	}
	return higgestNum;
}
console.log("biggestNumber", biggestNumber(array3));


console.log("- with Math");
console.log(Math.max(...array3)); // la buena



//5
console.log("EX 5"); 

function printIndex(array, x) {
	return array[x];	
}
console.log(printIndex(array3, 6));

//6
let array6 = [3, 22, 45, 3, 999, 77, 77, 78, 999];

function checkRepitedNumbers(array) {
	const arrayLength = array.length;
	let arrayCheck = array.slice(); //duplico mi array para que no me mmodifiqe la original	
	let repitedNums = [];
	
	for (let i = 0; i < arrayLength; i++) {
		let checkedNum = arrayCheck.pop();
			
		if (arrayCheck.indexOf(checkedNum) !== -1) { //si no (no está)
			repitedNums.unshift(checkedNum);
		}	
	}
	return repitedNums;
}

console.log(checkRepitedNumbers(array6));
console.log(array6); // original perfe

// 7
const myColor = ["Red", "Green", "White", "Black"];

const colorString = myColor.join(' , ');
console.log(colorString);


// const colorString = "";

// function arrayToString(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		colorString.concat(" ", "red");		
// 	}
// 	return colorString;
	
// }
// console.log(colorString);

// console.log(arrayToString(myColor));









