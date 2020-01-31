//SENATE VARIABLES
let senateMembersData = dataSenate.results[0].members;

let listDemocrats_S = [];
let listRepublicans_S = [];
let listIndependents_S = [];
getListByParty(senateMembersData);

let votesWithParty_D_S = getVotesWithParty(listDemocrats_S);
let votesWithParty_R_S = getVotesWithParty(listRepublicans_S);


let statics_S = {
	"num_of_Democrats" : listDemocrats_S.length,
	"num_of_Republicans" : listRepublicans_S.length,
	"num_of_Independents" : listIndependents_S.length,
	"total_Reps" : senateMembersData.length,

	"votes_With_D" : votesWithParty_D_S,
	"votes_With_R" : votesWithParty_R_S,
	"votes_With_I" : "-",
}

// HOUSE VARIABLES
// let houseMembersData = dataHouse.results[0].members;

// let listDemocrats_H = [];
// let listRepublicans_H = [];
// let listIndependents_H = [];
// getListByParty(houseMembersData);

// let votesWithParty_D_H = getVotesWithParty(listDemocrats_H);
// let votesWithParty_R_H = getVotesWithParty(listRepublicans_H);


// let statics_H = {
// 	"num_of_Democrats" : listDemocrats_H.length,
// 	"num_of_Republicans" : listRepublicans_H.length,
// 	"num_of_Independents" : listIndependents_H.length,
// 	"total_Reps" : houseMembersData.length,

// 	"votes_With_D" : votesWithParty_D_H,
// 	"votes_With_R" : votesWithParty_R_H,
// 	"votes_With_I" : "-",
// }



// S_ATTENDANCE
createGlanceTable(statics_S);
createEngagementTables(senateMembersData, 10);
// H_ATTENDANCE
// createHouseGlanceTable(statics_H);
// createEngagementTables(houseMembersData, 10);

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


function getVotesWithParty(array) {
	let totalSum = 0;
	for (let i = 0; i < array.length; i++) {
		totalSum += array[i].votes_with_party_pct;
	}
	return (totalSum / array.length).toFixed(1);
}

function createGlanceTable(staticsArray) {
	let D_Row = document.getElementById("D_Row");
	td1_D = D_Row.appendChild(document.createElement("td"))
	td1_D.innerHTML = staticsArray.num_of_Democrats;
	td2_D = D_Row.appendChild(document.createElement("td"))
	td2_D.innerHTML = staticsArray.votes_With_D;

	let R_Row = document.getElementById("R_Row");
	td1_R= R_Row.appendChild(document.createElement("td"))
	td1_R.innerHTML = staticsArray.num_of_Republicans;
	td2_R = R_Row.appendChild(document.createElement("td"))
	td2_R.innerHTML = staticsArray.votes_With_R;

	let I_Row = document.getElementById("I_Row");
	td1_I= I_Row.appendChild(document.createElement("td"))
	td1_I.innerHTML = staticsArray.num_of_Republicans;
	td2_I = I_Row.appendChild(document.createElement("td"))
	td2_I.innerHTML = staticsArray.votes_With_I;
}


// ********************* ENGAGEMENT ****************

function createEngagementTables(membersArray, percentage) {
	sortObjectByValue(membersArray);

	let mostEngagementTable = document.getElementById("mostEngagementTable");
	displayDataIntoTable_Attendance(membersArray, percentage, mostEngagementTable);

	let lessEngagementTable = document.getElementById("lessEngagementTable");
	membersArray.reverse();
	displayDataIntoTable_Attendance(membersArray, percentage, lessEngagementTable);

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

//-------- DATA INTO TABLE ATTENDANCE
function displayDataIntoTable_Attendance(membersArray, percentage, tableToDisplay) {

	for (let i = 0; i < membersArray.length*percentage/100; i++) {
		let fullName = "";
		let missedVotes = "";
		let engagement = ""; 
		let wikiURL = "";
		// getDataForEngagement(membersArray);
		if (membersArray[i].middle_name === null) {
			fullName = membersArray[i].first_name + " " + membersArray[i].last_name;
		} else {
			fullName = membersArray[i].first_name + " " + membersArray[i].middle_name + " " + membersArray[i].last_name; 
		}
		missedVotes = membersArray[i].missed_votes; 
		engagement = membersArray[i].missed_votes_pct; 
		if (membersArray[i].middle_name === null) {
			wikiURL = "https://en.wikipedia.org/wiki/" + membersArray[i].first_name + "_" + membersArray[i].last_name;
		} else {
			wikiURL = "https://en.wikipedia.org/wiki/" + membersArray[i].first_name + "_" + membersArray[i].middle_name + "_" + membersArray[i].last_name; 
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
	
		tableToDisplay.appendChild(newRow);
	}
}

// 
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
