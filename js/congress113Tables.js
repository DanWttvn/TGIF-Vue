
let membersTable = document.getElementById("membersTable");
let membersData = data.results[0].members;
let bodySection = document.getElementById("bodySection");

getDataIntoTable(membersData);


function getDataIntoTable(array) {

	for (let i = 0; i < array.length; i++) {
		
		let fullName = "";
		if (membersData[i].middle_name === null) {
			fullName = membersData[i].first_name + " " + membersData[i].last_name;
		} else {
			fullName = membersData[i].first_name + " " + membersData[i].middle_name + " " + membersData[i].last_name; 
		}
		let party = membersData[i].party; 
		let state = membersData[i].state; 
		let seniority = membersData[i].seniority; 
		let percentageVotes = membersData[i].votes_with_party_pct + "%"; 
		let wikiURL = "";
		if (membersData[i].middle_name === null) {
			wikiURL = "https://en.wikipedia.org/wiki/" + membersData[i].first_name + "_" + membersData[i].last_name;
		} else {
			wikiURL = "https://en.wikipedia.org/wiki/" + membersData[i].first_name + "_" + membersData[i].middle_name + "_" + membersData[i].last_name; 
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


// EVENT LISTENERS
const filterDemocrats = document.getElementById("filterDemocrats");
filterDemocrats.addEventListener("change", function (e){
	if (filterDemocrats.checked) {
		alert("democrats checked");
	} else if (filterDemocrats.checked == false ) {
		alert("democrats unchecked");
	}
});

filterRepublicans.addEventListener("change", function (e){
	if (filterRepublicans.checked) {
		alert("republicans checked");
	} else if (filterRepublicans.checked == false ) {
		alert("republicans unchecked");
	}
});

filterIndependents.addEventListener("change", function (e){
	if (filterIndependents.checked) {
		alert("independents checked");
	} else if (filterIndependents.checked == false ) {
		alert("independents unchecked");
	}
});


// SEARCH MEMBERS
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


