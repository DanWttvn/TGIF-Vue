
// 1
function multiplying() {return 3*4}
console.log(multiplying());

// 2
function printMultiplied() {
	let multiplication = 3 * 5;
	console.log(multiplication);
	return multiplication;
}
printMultiplied(); //si que sale al llamarla

// 3
function printMultiplyWithParameters(n1, n2) {
	let multiplication = n1 * n2;
	console.log(multiplication);
	return multiplication;
}

printMultiplyWithParameters(2, 100);

// 4
function triangleType(a, b, c) {
	if (a===b && b===c) {
		return "This triangle is an equilátero";
	}
	else if (a===b || b===c || a===c) {
		return  "This triangle is an isósceles";
	}
	else {
		return  "This triangle is irregular"
	}
}

console.log(triangleType(20,20,50));
console.log(triangleType(10,10,10));
console.log(triangleType(30,20,50));

// 5
function replaceABy1(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === "a") {
			array[i] = "1";
		}		
	}
	return array;
}
let arrayToReplace = ["c", "a", "s", "a"];
console.log(replaceABy1(arrayToReplace));

// 6
function sumOfElements(array) {
	let sumaTotal = 0;
	for (let i = 0; i < array.length; i++) {
		sumaTotal += array[i];		
	}
	console.log(sumaTotal);
	return sumaTotal;
}
sumOfElements([1, 2, 3]);

// 7
function sumOfEvenNums(array) {
	let sumaTotal = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0) {
			sumaTotal += array[i];	
		}				
	}
	console.log(sumaTotal);
	return sumaTotal;
}
sumOfEvenNums([1, 2, 3, 4, 5, 10, 11]);

// 8
function sumOfEvenPositions(array) {
	let sumaTotal = 0;
	for (let i = 0; i < array.length; i++) {
		if (i % 2 === 0 && i != 0) {
			sumaTotal += array[i];	
		}				
	}
	console.log(sumaTotal);
	return sumaTotal;
}
sumOfEvenPositions([1, 2, 8, 3, 2, 3, 4]);

// 9
function printPreviousEvens(num) {
	for (let i = 0; i <= num; i++) {
		if (i % 2 === 0 && i != 0) {
			console.log(i);
		}
	}
}
printPreviousEvens(10);

// 10  
function printBtwOdds(num1, num2) {
	for (let i = num1; i <= num2; i++) {
		if (i % 2 !== 0 && i != 0) {
			console.log(i);
		}
	}
}
printBtwOdds(1, 13);