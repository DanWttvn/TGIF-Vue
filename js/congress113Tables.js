
let membersTable = document.getElementById("membersTable");
let membersData = data.results[0].members;
let bodySection = document.getElementById("bodySection");

getDataIntoTable(membersData);


function getDataIntoTable(array) {

	for (let i = 0; i < array.length; i++) {
		
		let fullName = "";
		if (array[i].middle_name === null) {
			fullName = array[i].first_name + " " + array[i].last_name;
		} else {
			fullName = array[i].first_name + " " + array[i].middle_name + " " + array[i].last_name; 
		}
		let party = array[i].party; 
		let state = array[i].state; 
		let seniority = array[i].seniority; 
		let percentageVotes = array[i].votes_with_party_pct + "%"; 
		let wikiURL = "";
		if (array[i].middle_name === null) {
			wikiURL = "https://en.wikipedia.org/wiki/" + array[i].first_name + "_" + array[i].last_name;
		} else {
			wikiURL = "https://en.wikipedia.org/wiki/" + array[i].first_name + "_" + array[i].middle_name + "_" + array[i].last_name; 
		}

		let newRow = document.createElement("tr");
		let td1 = document.createElement("td");
		let linkTag = document.createElement("a");

		td1.appendChild(linkTag);
		newRow.appendChild(td1);

		td1.setAttribute("class", "alignLeft memberName");
		linkTag.setAttribute("href", wikiURL);
		linkTag.innerHTML = fullName;

		let td2 = newRow.appendChild(document.createElement("td"));
		td2.innerHTML = party;
		let td3 = newRow.appendChild(document.createElement("td"));
		td3.innerHTML = state;
		let td4 = newRow.appendChild(document.createElement("td"));
		td4.innerHTML = seniority;
		let td5 = newRow.appendChild(document.createElement("td"));
		td5.innerHTML = percentageVotes;

		bodySection.appendChild(newRow);			
	}
}



// *******************SEARCH MEMBERS*********************** 
const searchBar = document.getElementById("searchMember");
searchBar.addEventListener("keyup", function(e) {
	const term = e.target.value.toLowerCase();
	const membersList = bodySection.getElementsByTagName("tr");
	
	Array.from(membersList).forEach(function (member){
		const name =  member.firstElementChild.textContent;
		if (name.toLowerCase().indexOf(term) != -1) {
			member.style.display = "table-row";
		} else {
			member.style.display = "none";
		}
	});
});


// *******************FILTER BY PARTY***********************


const allCheckboxes = document.getElementById("checkboxesForFilter");
const filterDemocrats = document.getElementById("filterDemocrats");
const filterRepublicans = document.getElementById("filterRepublicans");
const filterIndependents = document.getElementById("filterIndependents");

function cleanTable() {
	bodySection.innerHTML = "";
}

// ----------- SIN FOR

let listDemocrats = [];
let listRepublicans = [];
let listIndependents = [];

getListByParty(membersData);

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


function filterByParty(){
	
	let checkedDemocrats = false;
	let checkedRepublicans = false;
	let checkedIndependents = false;
	let filteredArray = [];
	
	// changeBooleanValue();
	if (filterDemocrats.checked) {
		checkedDemocrats = true;
	} else {
		checkedDemocrats = false;
	}
	if (filterRepublicans.checked) {
		checkedRepublicans = true;
	} else {
		checkedRepublicans = false;
	}
	if (filterIndependents.checked) {
		checkedIndependents = true;
	} else {
		checkedIndependents = false;
	}
	// solo con .checked o != .checked çççççç
	console.log(checkedDemocrats, checkedRepublicans, checkedIndependents);
		
	if (checkedDemocrats == true) {
		filteredArray = filteredArray.concat(listDemocrats);
	}
	if (checkedRepublicans == true) {
		filteredArray = filteredArray.concat(listRepublicans);
	}
	if (checkedIndependents == true) {
		filteredArray = filteredArray.concat(listIndependents);
	}

	cleanTable();
	
	console.log(filteredArray);
	
	getDataIntoTable(filteredArray);
}