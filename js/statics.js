
console.log(window.location.href);

let data;
let membersData;

let listDemocrats = [];
let listRepublicans = [];
let listIndependents = [];	


// *********** ATT SENATE
if (window.location.href == "file:///C:/Users/Daniela/OneDrive%20-%20Universidad%20Polit%C3%A9cnica%20de%20Madrid/Documentos/CODE/UBIQUM/P2/S_Attendance.html") {
	fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
		method: "GET",
		headers: {
			'X-API-KEY': "FqzcD73sx0q8pCMxXJo58m4TfvslZ3bEwG3FPqau"
		} 
	}).then(function(response) {
		if (response.ok) {
			return response.json();
		}
		throw new Error(response.statusText);
	}).then(function(json) {
		
		data = json;
		membersData = data.results[0].members;
		getListByParty(membersData);

		
		let statics = {};
		getStatics();
		
		createAttendanceTables(membersData, 10);

		console.log(data);
		
	}).catch(function(error) {
		console.log("Request failed: " + error.message);
	});
}
// *********** ATT HOUSE
else if (window.location.href == "file:///C:/Users/Daniela/OneDrive%20-%20Universidad%20Polit%C3%A9cnica%20de%20Madrid/Documentos/CODE/UBIQUM/P2/H_Attendance.html") {
	fetch("https://api.propublica.org/congress/v1/113/house/members.json", {
		method: "GET",
		headers: {
			'X-API-KEY': "FqzcD73sx0q8pCMxXJo58m4TfvslZ3bEwG3FPqau"
		} 
	}).then(function(response) {
		if (response.ok) {
			return response.json();
		}
		throw new Error(response.statusText);
	}).then(function(json) {
		
		data = json;
		membersData = data.results[0].members;
		getListByParty(membersData);

		let statics = {};
		getStatics();
		
		createAttendanceTables(membersData, 10);

		console.log(data);
		
	}).catch(function(error) {
		console.log("Request failed: " + error.message);
	});
}
// *********** PL SENATE
else if (window.location.href == "file:///C:/Users/Daniela/OneDrive%20-%20Universidad%20Polit%C3%A9cnica%20de%20Madrid/Documentos/CODE/UBIQUM/P2/S_PartyLoyalty.html") {
	fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
		method: "GET",
		headers: {
			'X-API-KEY': "FqzcD73sx0q8pCMxXJo58m4TfvslZ3bEwG3FPqau"
		} 
	}).then(function(response) {
		if (response.ok) {
			return response.json();
		}
		throw new Error(response.statusText);

	}).then(function(json) {
		
		data = json;
		membersData = data.results[0].members;
		getListByParty(membersData);

		let statics = {};
		getStatics();

		createLoyaltyTables(membersData, 10);

		console.log(data);
		
	}).catch(function(error) {
		console.log("Request failed: " + error.message);
	});
}

// *********** PL HOUSE
else if (window.location.href == "file:///C:/Users/Daniela/OneDrive%20-%20Universidad%20Polit%C3%A9cnica%20de%20Madrid/Documentos/CODE/UBIQUM/P2/H_PartyLoyalty.html") {
	fetch("https://api.propublica.org/congress/v1/113/house/members.json", {
		method: "GET",
		headers: {
			'X-API-KEY': "FqzcD73sx0q8pCMxXJo58m4TfvslZ3bEwG3FPqau"
		} 
	}).then(function(response) {
		if (response.ok) {
			return response.json();
		}
		throw new Error(response.statusText);

	}).then(function(json) {
		
		data = json;
		membersData = data.results[0].members;
		getListByParty(membersData);

		let statics = {};
		getStatics();

		createLoyaltyTables(membersData, 10);

		console.log(data);
		
	}).catch(function(error) {
		console.log("Request failed: " + error.message);
	});
}


// ******************** GLOBAL GLANCE ********************************

function getListByParty(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i].party === "D") {
			listDemocrats.push(array[i]);
		}
		else if (array[i].party === "R") {
			listRepublicans.push(array[i]);
		}
		else {
			listIndependents.push(array[i]);
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

function getStatics() {
	let votesWithParty_D = getVotesWithParty(listDemocrats);
	let votesWithParty_R = getVotesWithParty(listRepublicans);
	statics = {
		"num_of_Democrats" : listDemocrats.length,
		"num_of_Republicans" : listRepublicans.length,
		"num_of_Independents" : listIndependents.length,
		"total_Reps" : membersData.length,
	
		"votes_With_D" : votesWithParty_D,
		"votes_With_R" : votesWithParty_R,
		"votes_With_I" : "-",
		"votes_With_total" : "-",
	}
	displayGlanceTable(statics);
}

function displayGlanceTable(staticsArray) {
	let D_Row = document.getElementById("D_Row");
	td1_D = D_Row.appendChild(document.createElement("td"))
	td1_D.innerHTML = staticsArray.num_of_Democrats; // ESTE ES EL QUE NOPUEDE LEER ÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇÇ
	td2_D = D_Row.appendChild(document.createElement("td"))
	td2_D.innerHTML = staticsArray.votes_With_D;

	let R_Row = document.getElementById("R_Row");
	td1_R= R_Row.appendChild(document.createElement("td"))
	td1_R.innerHTML = staticsArray.num_of_Republicans;
	td2_R = R_Row.appendChild(document.createElement("td"))
	td2_R.innerHTML = staticsArray.votes_With_R;

	let I_Row = document.getElementById("I_Row");
	td1_I= I_Row.appendChild(document.createElement("td"))
	td1_I.innerHTML = staticsArray.num_of_Independents;
	td2_I = I_Row.appendChild(document.createElement("td"))
	td2_I.innerHTML = staticsArray.votes_With_I;

	let total_Row = document.getElementById("total_Row");
	td1_total= total_Row.appendChild(document.createElement("td"))
	td1_total.innerHTML = staticsArray.total_Reps;
	td2_total = total_Row.appendChild(document.createElement("td"))
	td2_total.innerHTML = staticsArray.votes_With_total;
}


// ************************* ATTENDANCE **************************************

function createAttendanceTables(membersArray, percentage, missed_votes_pct) {
	sortObjectByValue_Attendance(membersArray, missed_votes_pct);

	let mostTable = document.getElementById("mostTable");
	displayDataIntoTable_Attendance(membersArray, percentage, mostTable);

	let leastTable = document.getElementById("leastTable");
	membersArray.reverse();
	displayDataIntoTable_Attendance(membersArray, percentage, leastTable);

}

// ------ SORT OBJ MEMBERS BY ATTENDANCE
function sortObjectByValue_Attendance(membersArray, missed_votes_pct) {
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

// ************************* LOYALTY *****************************************

function createLoyaltyTables(membersArray, percentage) {
	sortObjectByValue_Loyalty(membersArray);

	let mostTable = document.getElementById("mostTable");
	displayDataIntoTable_Loyalty(membersArray, percentage, mostTable);

	let leastTable = document.getElementById("leastTable");
	membersArray.reverse();
	displayDataIntoTable_Loyalty(membersArray, percentage, leastTable);

}

// ------ SORT OBJ MEMBERS BY Loyalty
function sortObjectByValue_Loyalty(membersArray) {
	membersArray.sort((a, b) => {
		if (a.votes_with_party_pct < b.votes_with_party_pct) { //!! HE TENIDO QUE CAMBIAR < ççççç
			return 1;
		} else {
			return -1;
		}
	});
	return membersArray;	
}

//-------- DATA INTO TABLE Loyalty
function displayDataIntoTable_Loyalty(membersArray, percentage, tableToDisplay) {

	for (let i = 0; i < membersArray.length*percentage/100; i++) {
		let fullName = "";
		let partyVotesNum = "";
		let loyalty = ""; 
		let wikiURL = "";
		// getDataForLoyalty(membersArray);
		if (membersArray[i].middle_name === null) {
			fullName = membersArray[i].first_name + " " + membersArray[i].last_name;
		} else {
			fullName = membersArray[i].first_name + " " + membersArray[i].middle_name + " " + membersArray[i].last_name; 
		}
		if (membersArray[i].middle_name === null) {
			wikiURL = "https://en.wikipedia.org/wiki/" + membersArray[i].first_name + "_" + membersArray[i].last_name;
		} else {
			wikiURL = "https://en.wikipedia.org/wiki/" + membersArray[i].first_name + "_" + membersArray[i].middle_name + "_" + membersArray[i].last_name; 
		}

		partyVotesNum = (membersArray[i].total_votes * membersArray[i].votes_with_party_pct / 100).toFixed(0);
		loyalty = membersArray[i].votes_with_party_pct; 

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
		td2.innerHTML = partyVotesNum;
		let td3 = newRow.appendChild(document.createElement("td"));
		td3.innerHTML = loyalty;
	
		tableToDisplay.appendChild(newRow);
	}
}



// function displayDataIntoTable(membersArray) {
// 	let newRow = document.createElement("tr");

// 	let td1 = document.createElement("td");
// 	let linkTag = document.createElement("a");
// 	td1.appendChild(linkTag);
// 	newRow.appendChild(td1);
// 	td1.setAttribute("class", "alignLeft");
// 	linkTag.setAttribute("href", wikiURL);
// 	linkTag.innerHTML = fullName;

// 	let td2 = newRow.appendChild(document.createElement("td"));
// 	td2.innerHTML = partyVotesNum;
// 	let td3 = newRow.appendChild(document.createElement("td"));
// 	td3.innerHTML = loyalty;

// 	tableToDisplay.appendChild(newRow);
// }