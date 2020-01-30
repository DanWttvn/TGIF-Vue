let arrayPrueba2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ----------------------------------------

let senateMembersData = dataSenate.results[0].members;

let listDemocrats_S = [];
let listRepublicans_S = [];
let listIndependents_S = [];
getListByParty(senateMembersData);

let votesWithParty_D_S = getVotesWithParty(listDemocrats_S);
let votesWithParty_R_S = getVotesWithParty(listRepublicans_S);



let statics = {
	"Number of Democrats" : listDemocrats_S.length,
	"Number of Republicans" : listRepublicans_S.length,
	"Number of Independents" : listIndependents_S.length,
	"Total Representantives" : senateMembersData.length,

	"Votes with of D" : votesWithParty_D_S,
	"Votes with of R" : votesWithParty_R_S,
	"Votes with of I" : "-",

	// "senateMembers" : [
	// 	{

	// 	}
	// ], 
	// "houseMembers" : [
	// 	{

	// 	}
	// ]
}

// ******* GLOBAL GLANCE *****

function getListByParty(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i].party === "D") {
			listDemocrats_S.push(array[i]);
		}
		else if (array[i].party === "R") {
			listRepublicans_S.push(array[i]);
		}
		else {
			listIndependents_S.push(array[i]);
		}
	}
}
// console.log(listDemocrats_S);
// console.log(listRepublicans_S);
// console.log(listIndependents_S);
// console.log(statics);


function getVotesWithParty(array) {
	let totalSum = 0;
	for (let i = 0; i < array.length; i++) {
		totalSum += array[i].votes_with_party_pct;
	}
	return totalSum / array.length;
}
// console.log(votesWithParty_D_S);
// console.log(votesWithParty_R_S);
// console.log(votesWithParty_I);


// ******* ENGAGEMENT *****

// --- POR EN UNA 

function getLessEngagement(membersArray) {
	...ççç //how to get the i of a data
	for (let i = 0; i < membersArray.length; i++) {
		let numMissedVotes = membersArray[i].missed_votes;
		// console.log(numMissedVotes);

		let missedVotesPct = membersArray[i].missed_votes / membersArray[i].total_votes * 100;	
	}	

	sortLess(missedVotesPct);
	getInfoIntoTable(membersArray);
}

// --- POR SEPARADO

function getMissedVotesNum(membersArray) {
	for (let i = 0; i < membersArray.length; i++) {
		let numMissedVotes = membersArray[i].missed_votes;
		// console.log(numMissedVotes);
		return numMissedVotes;
	}

}
// console.log(getMissedVotesNum(senateMembersData));

function getMissedVotesPct(membersArray) {
	let missedVotesPct_All = [];
	for (let i = 0; i < membersArray.length; i++) {
		let missedVotesPct = membersArray[i].missed_votes / membersArray[i].total_votes * 100;		
		// console.log(missedVotesPct);
		missedVotesPct_All.push(missedVotesPct);
	}
	sortLess(missedVotesPct_All, 10, membersArray);

	return missedVotesPct_All;

}
// console.log(getMissedVotesPct(senateMembersData));

// ççççççç
function sortLess(arrayToSort, percentage, membersArray) {
	//..ordenar:
	let sortedArray = arrayToSort.sort(sortNumber);
	
	// .. 10% menos. cortar lista en 10% çççç
	getRankingLess(sortedArray, percentage);

	//..get index of the 10%

	// .. nombre (asociar según numero value, buscar el nombre)
	// for (let i = 0; i < membersArray.length; i++) {	
	// 	let fullName = "";
	// 	if (membersArray[i].middle_name === null) {
	// 		fullName = membersArray[i].first_name + " " + membersArray[i].last_name;
	// 	} else {
	// 		fullName = membersArray[i].first_name + " " + membersArray[i].middle_name + " " + membersArray[i].last_name; 
	// 	}
	// }
	
}


function sortNumber(a, b) {
	return a - b;
}
// arrayPrueba = [2, 32, 81, 17, 1, 27];
// console.log(arrayPrueba.sort(sortNumber));

function getRankingLess(sortedArray, percentage) {
	return sortedArray.slice((100-percentage) * sortedArray.length / 100);
}
// console.log(getRankingLess(arrayPrueba2, 10));

function getRankingMost(sortedArray, percentage) {
	return sortedArray.slice(0, percentage * sortedArray.length / 100);
}
// console.log(getRankingMost(arrayPrueba2, 10));














function getInfoIntoTable(tableSecc, array) {
	//
}


