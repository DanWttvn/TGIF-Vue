
let senateTable = document.getElementById("senate-data");
let senateMembersData = dataSenate.results[0].members;


function getDataIntoTable(array) {
		// create thead
		let headSection = document.createElement("thead");
		senateTable.appendChild(headSection);
	
		let headRow = document.createElement("tr")
		headSection.appendChild(headRow);
	
		let th1 = headRow.appendChild(document.createElement("th"));
		th1.innerText = "name";
		let th2 = headRow.appendChild(document.createElement("th"));
		th2.innerText = "party";
		let th3 = headRow.appendChild(document.createElement("th"));
		th3.innerText = "state";
		let th4 = headRow.appendChild(document.createElement("th"));
		th4.innerText = "seniority";
		let th5 = headRow.appendChild(document.createElement("th"));
		th5.innerText = "% of votes";
	
		// create tbody
		let bodySection = document.createElement("tbody");
		senateTable.appendChild(bodySection);

	for (let i = 0; i < array.length; i++) {
		
		let fullName;
		if (senateMembersData[i].middle_name === null) {
			fullName = senateMembersData[i].first_name + " " + senateMembersData[i].last_name;
		} else {
			fullName = senateMembersData[i].first_name + " " + senateMembersData[i].middle_name + " " + senateMembersData[i].last_name; 
		}
		let party = senateMembersData[i].party; 
		let state = senateMembersData[i].state; 
		let seniority = senateMembersData[i].seniority; 
		let percentageVotes = "?"; 
		let wikiURL;
		if (senateMembersData[i].middle_name === null) {
			wikiURL = "https://en.wikipedia.org/wiki/" + senateMembersData[i].first_name + "_" + senateMembersData[i].last_name;
		} else {
			wikiURL = "https://en.wikipedia.org/wiki/" + senateMembersData[i].first_name + "_" + senateMembersData[i].middle_name + "_" + senateMembersData[i].last_name; 
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
getDataIntoTable(senateMembersData);




