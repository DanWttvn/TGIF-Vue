let arrayPrueba2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getRankingLess(sortedArray, percentage) {
	return sortedArray.slice((100-percentage) * sortedArray.length / 100);
}
// console.log(getRankingLess(arrayPrueba2, 10));


function getRankingMost(sortedArray, percentage) {
	return sortedArray.slice(0, percentage * sortedArray.length / 100);
}
// console.log(getRankingMost(arrayPrueba2, 10));




// FUNCIÓN PARA ENCONTRAR INDEX (luego de ahhi sacar nombre)
let arrayToLook = [
	{prop1:"abc",prop2:"qwe"},
	{prop1:"bnmb",prop2:"yutu"},
	{prop1:"zxvz",prop2:"qwrq"}
];
	  
index = arrayToLook.findIndex(x => x.prop2 ==="qwrq");  
// console.log(index);


// --YO en FUNCION: 

let members = [
	{
	   "first_name": "Lamar",
	   "middle_name": null,
	   "last_name": "Alexander",
	   "votes" : 10
	},
	{
	   "first_name": "Tammy",
	   "middle_name": null,
	   "last_name": "Baldwin",
	   "votes" : 20
	},
	{
	   "first_name": "John",
	   "middle_name": null,
	   "last_name": "Barrasso",
	   "votes" : 30
	}
];

let values = [10, 30, 30, 20];



// function findIndexByValueEx() {
// 	let indexLess = 0;
// 	for (let i = 0; i < values.length; i++) {
// 		indexLess = members.findIndex(x => x.votes === values[i]);
// 		console.log(indexLess);
// 	}	
	
// 	// return indexLess;	
// }
// findIndexByValueEx();

function findIndexByValueEx2(propertyName) {
	let indexLess = 0;
	for (let i = 0; i < values.length; i++) {
		indexLess = members.findIndex(x => x.propertyName === values[i]);
		console.log(indexLess);
	}	
	
	return indexLess;	
}
findIndexByValueEx2(votes);


function findIndexByValue(arrayToLook, votes, arrayValues) {
	let indexLess = 0;
	for (let i = 0; i < arrayValues.length; i++) {
		indexLess = arrayToLook.findIndex(x => x.votes === arrayValues[i]);
	}	
	return indexLess;	
}

console.log(findIndexByValue(members, votes, values));
