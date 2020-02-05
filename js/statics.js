//SENATE VARIABLES
let membersData = data.results[0].members;

// CALLING
// createGlobalTable(membersData);
createEngagementTables(membersData, 10);





// ! no consigo que me funcione en funcion 
// function createGlobalTable(membersArray) {
	let listDemocrats = [];
	let listRepublicans = [];
	let listIndependents = [];
	getListByParty(membersData);
	console.log(listDemocrats);
	

	let votesWithParty_D = getVotesWithParty(listDemocrats);
	let votesWithParty_R = getVotesWithParty(listRepublicans);

	let statics = {
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

// }




// ******* GLOBAL GLANCE *****

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

function displayGlanceTable(staticsArray) {
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
	td1_I.innerHTML = staticsArray.num_of_Independents;
	td2_I = I_Row.appendChild(document.createElement("td"))
	td2_I.innerHTML = staticsArray.votes_With_I;

	let total_Row = document.getElementById("total_Row");
	td1_total= total_Row.appendChild(document.createElement("td"))
	td1_total.innerHTML = staticsArray.total_Reps;
	td2_total = total_Row.appendChild(document.createElement("td"))
	td2_total.innerHTML = staticsArray.votes_With_total;
}


// ********************* ENGAGEMENT ****************

function createEngagementTables(membersArray, percentage) {
	sortObjectByValue(membersArray);

	let mostTable = document.getElementById("mostTable");
	displayDataIntoTable_Attendance(membersArray, percentage, mostTable);

	let leastTable = document.getElementById("leastTable");
	membersArray.reverse();
	displayDataIntoTable_Attendance(membersArray, percentage, leastTable);

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

// FUNCIONES DENTRO DE BUCLE
function getDataForEngagement(membersArray) { // says [i] is not define. como funcion dentro de bucle?
// 	if (membersData[i].middle_name === null) {
// 		fullName = membersData[i].first_name + " " + membersData[i].last_name;
// 	} else {
// 		fullName = membersData[i].first_name + " " + membersData[i].middle_name + " " + membersData[i].last_name; 
// 	}
// 	missedVotes = membersData[i].missed_votes; 
// 	engagement = membersData[i].missed_votes_pct; 
// 	if (membersData[i].middle_name === null) {
// 		wikiURL = "https://en.wikipedia.org/wiki/" + membersData[i].first_name + "_" + membersData[i].last_name;
// 	} else {
// 		wikiURL = "https://en.wikipedia.org/wiki/" + membersData[i].first_name + "_" + membersData[i].middle_name + "_" + membersData[i].last_name; 
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

	// mostTable.appendChild(newRow);
}
