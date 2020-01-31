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
	   "votes" : 30
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
	   "votes" : 100
	},
	{
		"first_name": "John",
		"middle_name": null,
		"last_name": "Barrasso",
		"votes" : 100
	 },
	 {
		"first_name": "John",
		"middle_name": null,
		"last_name": "Barrasso",
		"votes" : 100
	 }
];

let newValuesArray = [10, 30, 105, 20, 302];

// ADD VALUES TO OBJ çççççç
for (let i = 0; i < members.length; i++) {
	members[i].newValue = newValuesArray[i]
}
// console.log(members);


// SORT BY PROPERTY VALUE çççççççç
members.sort((a, b) => {
	if (a.newValue > b.newValue) {
		return 1;
	} else {
		return -1;
	}
});
// console.log(members);

// SLICE POR RANKING ÇÇÇÇÇÇÇÇÇÇ
let rankingLess = members.slice((100 - 25) * members.length / 100);
console.log(rankingLess);








// ----- ENTCONTRAR INDEX
function findIndexByValueEx() {
	let indexLess = 0;
	for (let i = 0; i < values.length; i++) {
		indexLess = members.findIndex(x => x.votes === values[i]);
		console.log(indexLess);
	}	
	
	// return indexLess;	
}
findIndexByValueEx();



function findIndexByValue(arrayToLook, arrayValues) {
	let indexLess = 0;
	for (let i = 0; i < arrayValues.length; i++) {
		indexLess = arrayToLook.findIndex(x => x.votes === arrayValues[i]);
	}	
	return indexLess;	
}

console.log(findIndexByValue(members, values));
