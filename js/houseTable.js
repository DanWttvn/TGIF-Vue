
let houseTable = document.getElementById("house-data");
let houseMembersData = dataHouse.results[0].members;


function getDataIntoTable(array) {
	// create thead
	let headSection = document.createElement("thead");
	houseTable.appendChild(headSection);

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
	houseTable.appendChild(bodySection);

	for (let i = 0; i < array.length; i++) {
		let fullName = houseMembersData[i].first_name + " " + houseMembersData[i].middle_name + " " + houseMembersData[i].last_name; 
		let party = houseMembersData[i].party; 
		let state = houseMembersData[i].state; 
		let seniority = houseMembersData[i].seniority; 
		let percentageVotes = "que es esto?"; 

		let newRow = document.createElement("tr");

		let td1 = document.createElement("td");
		newRow.appendChild(td1);
		td1.setAttribute("class", "alignLeft")
		td1.innerHTML = fullName;
		
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
getDataIntoTable(houseMembersData);




