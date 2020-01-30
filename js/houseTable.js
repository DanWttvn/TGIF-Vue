
let houseTable = document.getElementById("house-data");
let houseMembersData = dataHouse.results[0].members;
getDataIntoTable(houseMembersData);


function getDataIntoTable(array) {

	let bodySection = document.getElementById("bodySection");

	for (let i = 0; i < array.length; i++) {
		let fullName = "";
		if (houseMembersData[i].middle_name === null) {
			fullName = houseMembersData[i].first_name + " " + houseMembersData[i].last_name;
		} else {
			fullName = houseMembersData[i].first_name + " " + houseMembersData[i].middle_name + " " + houseMembersData[i].last_name; 
		}
		let party = houseMembersData[i].party; 
		let state = houseMembersData[i].state; 
		let seniority = houseMembersData[i].seniority; 
		let percentageVotes = houseMembersData[i].votes_with_party_pct + "%"; 
		let wikiURL = "";
		if (houseMembersData[i].middle_name === null) {
			wikiURL = "https://en.wikipedia.org/wiki/" + houseMembersData[i].first_name + "_" + houseMembersData[i].last_name;
		} else {
			wikiURL = "https://en.wikipedia.org/wiki/" + houseMembersData[i].first_name + "_" + houseMembersData[i].middle_name + "_" + houseMembersData[i].last_name; 
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




