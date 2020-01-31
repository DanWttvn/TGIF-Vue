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


getLessEngagement(senateMembersData);

function getLessEngagement(membersArray) {
	sortObjectByValue(membersArray);
	rankingMostEngagement(membersArray, 10);
	// rankingLessEngagement(membersArray, 10);

}

// ------ SORT OBJ MEMBERS BY ENGAGEMENT
function sortObjectByValue(membersArray) {
	membersArray.sort((a, b) => {
		if (a.missed_votes_pct > b.missed_votes_pct) {
			return 1;
		} else {
			return -1;
		}
	});
	return membersArray;	
}

//-------- MOST
function rankingMostEngagement(membersArray, percentage) {
	let mostEngagementTable = document.getElementById("mostEngagementTable");

	for (let i = 0; i < membersArray.length*0.1; i++) {
		let fullName = "";
		let missedVotes = "";
		let engagement = ""; 
		let wikiURL = "";
		// getDataForEngagement(membersArray);
		if (senateMembersData[i].middle_name === null) {
			fullName = senateMembersData[i].first_name + " " + senateMembersData[i].last_name;
		} else {
			fullName = senateMembersData[i].first_name + " " + senateMembersData[i].middle_name + " " + senateMembersData[i].last_name; 
		}
		missedVotes = senateMembersData[i].missed_votes; 
		engagement = senateMembersData[i].missed_votes_pct; 
		if (senateMembersData[i].middle_name === null) {
			wikiURL = "https://en.wikipedia.org/wiki/" + senateMembersData[i].first_name + "_" + senateMembersData[i].last_name;
		} else {
			wikiURL = "https://en.wikipedia.org/wiki/" + senateMembersData[i].first_name + "_" + senateMembersData[i].middle_name + "_" + senateMembersData[i].last_name; 
		}
		// displayDataIntoTable(membersArray);
		let newRow = document.createElement("tr");

		let td1 = document.createElement("td");
		let linkTag = document.createElement("a");
		td1.appendChild(linkTag);
		newRow.appendChild(td1);
		td1.setAttribute("class", "alignLeft");
		linkTag.setAttribute("href", wikiURL);
		linkTag.innerHTML = fullName;
	
		let td2 = newRow.appendChild(document.createElement("td"));
		td2.innerHTML = missedVotes;
		let td3 = newRow.appendChild(document.createElement("td"));
		td3.innerHTML = engagement;
	
		mostEngagementTable.appendChild(newRow);
	}
}

// 

function displayDataIntoTable(membersArray) {
	// let newRow = document.createElement("tr");

	// let td1 = document.createElement("td");
	// let linkTag = document.createElement("a");
	// td1.appendChild(linkTag);
	// newRow.appendChild(td1);
	// td1.setAttribute("class", "alignLeft");
	// linkTag.setAttribute("href", wikiURL);
	// linkTag.innerHTML = fullName;

	// let td2 = newRow.appendChild(document.createElement("td"));
	// td2.innerHTML = missed_votes;
	// let td3 = newRow.appendChild(document.createElement("td"));
	// td3.innerHTML = engagement;

	// mostEngagementTable.appendChild(newRow);
}

function getDataForEngagement(membersArray) { // says [i] is not define. como funcion dentro de bucle?
// 	if (senateMembersData[i].middle_name === null) {
// 		fullName = senateMembersData[i].first_name + " " + senateMembersData[i].last_name;
// 	} else {
// 		fullName = senateMembersData[i].first_name + " " + senateMembersData[i].middle_name + " " + senateMembersData[i].last_name; 
// 	}
// 	missedVotes = senateMembersData[i].missed_votes; 
// 	engagement = senateMembersData[i].missed_votes_pct; 
// 	if (senateMembersData[i].middle_name === null) {
// 		wikiURL = "https://en.wikipedia.org/wiki/" + senateMembersData[i].first_name + "_" + senateMembersData[i].last_name;
// 	} else {
// 		wikiURL = "https://en.wikipedia.org/wiki/" + senateMembersData[i].first_name + "_" + senateMembersData[i].middle_name + "_" + senateMembersData[i].last_name; 
// 	}
}






// --------------- LESS 
function rankingLessEngagement(membersArray, percentage) {
	// REVERSE!
	
}


