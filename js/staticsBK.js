let senateMembersData = dataSenate.results[0].members;

let listDemocrats = [];
let listRepublicans = [];
let listIndependents = [];
getListByParty(senateMembersData);

let votesWithParty_D = getVotesWithParty(listDemocrats);
let votesWithParty_R = getVotesWithParty(listRepublicans);



let statics = {
	"Number of Democrats" : listDemocrats.length,
	"Number of Republicans" : listRepublicans.length,
	"Number of Independents" : listIndependents.length,
	"Total Representantives" : senateMembersData.length,

	"Votes with of D" : votesWithParty_D,
	"Votes with of R" : votesWithParty_R,
	"Votes with of I" : "-",
}



function getListByParty(array) {
	
	for (let i = 0; i < array.length; i++) {
		if (senateMembersData[i].party === "D") {
			listDemocrats.push(senateMembersData[i]);
		}
		else if (senateMembersData[i].party === "R") {
			listRepublicans.push(senateMembersData[i]);
		}
		else {
			listIndependents.push(senateMembersData[i]);
		}
	}
}
// console.log(listDemocrats);
// console.log(listRepublicans);
// console.log(listIndependents);
// console.log(statics);


function getVotesWithParty(array) {
	let totalSum = 0;
	for (let i = 0; i < array.length; i++) {
		totalSum += array[i].votes_with_party_pct;
	}
	return totalSum / array.length;
}
// console.log(votesWithParty_D);
// console.log(votesWithParty_R);
// console.log(votesWithParty_I);


function getNumMissedVotes(array) {
	for (let i = 0; i < array.length; i++) {
		let numMissedVotes = senateMembersData[i].missed_votes;
		// console.log(numMissedVotes);
		return numMissedVotes;
	}

	getInfoIntoTable(array);
}
// console.log(getNumMissedVotes(senateMembersData));

function getLessEngagement(array) {
	getPctMissedVotes(array);
	sort10Pct(array);
	getInfoIntoTable(array);
}


function getPctMissedVotes(array) {
	for (let i = 0; i < array.length; i++) {
		let missedVotesPercentage = senateMembersData[i].missed_votes / senateMembersData[i].total_votes;		
		// console.log(missedVotesPercentage);
		return missedVotesPercentage;
	}
}
// console.log(getPctMissedVotes(senateMembersData));

function sort(params) {
	
}







function getInfoIntoTable(tableSecc, array) {
	//
}


