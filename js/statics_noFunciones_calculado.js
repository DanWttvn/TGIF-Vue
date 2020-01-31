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

console.log(getLessEngagement(senateMembersData));


function getLessEngagement(membersArray) {

	// sortObjectByValue(membersArray);
	membersArray.sort((a, b) => {
		if (a.engagement_Pct > b.engagement_Pct) {
			return 1;
		} else {
			return -1;
		}
	});

	// getRankingLess(membersArray, 10);
	let rankedArray = membersArray.slice((100-10) * membersArray.length / 100);
	return rankedArray;
}

// let sortedArray = senateMembersData.sort(sortNumber);

// ADD VALUES TO OBJ
function addValuesToObject(membersArray) {
	for (let i = 0; i < membersArray.length; i++) {
		membersArray[i].engagement_Pct = missedVotesPct[i]
	}	
}
// SORT OBJ MEMBERS BY ENGAGEMENT
function sortObjectByValue(membersArray) {
	membersArray.sort((a, b) => {
		if (a.engagement_Pct > b.engagement_Pct) {
			return 1;
		} else {
			return -1;
		}
	});
	return membersArray;	
}

// RANKING
function getRankingLess(sortedArray, percentage) {
	let rankedArray = sortedArray.slice((100-percentage) * sortedArray.length / 100);
	return rankedArray;
}

function getRankingMost(sortedArray, percentage) {
	let rankedArray = sortedArray.slice(0, percentage * sortedArray.length / 100);
	return rankedArray;

}






function getInfoIntoTable(tableSecc, array) {
	//
}


