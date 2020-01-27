
// alert("soy main"); 


console.log("estoy en la consola");

const myName = "Daniela";
console.log(myName);

const myAge = 24;
console.log(myAge);

const ignasiAge = 32;
const ageDiff = ignasiAge - myAge;
console.log(ageDiff);

function compareAge21(age) {
	if (age > 21) {
		console.log("You are older than 21")
	} 
	else {
		console.log("You are NOT older than 21")
	}
}
console.log(compareAge21(myAge));

function ageCompare(age1, age2) {
	if (age1>age2) {
		console.log("you older than ignasi");
	}
	else if (age1 === age2) {
		console.log("you the same age");
	}
	else {
		console.log("you younger");
	}
}

console.log(ageCompare(myAge,ignasiAge));
