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


// ********************* ENGAGEMENT ****************

// --- TODO EN UNA 

function getLessEngagement(membersArray) {
	let missedvotesNum = [];
	let missedVotesPct  = [];
	for (let i = 0; i < membersArray.length; i++) {
		missedvotesNum.push(membersArray[i].missed_votes);
		missedVotesPct.push(membersArray[i].missed_votes / membersArray[i].total_votes * 100);	
	}	

	sortA(missedVotesPct);
	getRankingLess(sortedArray, 10);
	getInfoIntoTable(membersArray);
}

let sortedArray = senateMembersData.sort(sortNumber);

ççççççççççççççççççççççççççççççççççççççççççççççççç

function sortA(arrayToSort) {
	let sortedArray = arrayToSort.sort(sortNumber);
	return sortedArray;	
}

function sortNumber(a, b) {
	return a - b;
}

function getRankingLess(sortedArrayToRank, percentage) {
	return sortedArrayToRank.slice((100-percentage) * sortedArray.length / 100);
}

function getRankingMost(sortedArrayToRank, percentage) {
	return sortedArrayToRank.slice(0, percentage * sortedArray.length / 100);
}







// ---BORRAR POR SEPARADO
// function getMissedVotesNum(membersArray) {
// 	for (let i = 0; i < membersArray.length; i++) {
// 		let missedvotesNum = membersArray[i].missed_votes;
// 		// console.log(missedvotesNum);
// 		return missedvotesNum;
// 	}

// }
// // console.log(getMissedVotesNum(senateMembersData));

// function getMissedVotesPct(membersArray) {
// 	let missedVotesPct_All = [];
// 	for (let i = 0; i < membersArray.length; i++) {
// 		let missedVotesPct = membersArray[i].missed_votes / membersArray[i].total_votes * 100;		
// 		// console.log(missedVotesPct);
// 		missedVotesPct_All.push(missedVotesPct);
// 	}
// 	sortLess(missedVotesPct_All, 10, membersArray);

// 	return missedVotesPct_All;

// }
// // console.log(getMissedVotesPct(senateMembersData));











function getInfoIntoTable(tableSecc, array) {
	//
}


