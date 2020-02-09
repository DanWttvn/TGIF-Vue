let membersData = data.results[0].members;

let listDemocrats = [];
let listRepublicans = [];
let listIndependents = [];	
getListByParty(membersData);

let votesWithParty_D = getVotesWithParty(listDemocrats);
let votesWithParty_R = getVotesWithParty(listRepublicans);

let membersByAttendanceLess = sortObjectByValue_Attendance(membersData).reverse().slice(1, membersData.length*10/100);
let membersByAttendanceMost = sortObjectByValue_Attendance(membersData).slice(1, membersData.length*10/100);
let membersByLoyaltyLess = sortObjectByValue_Loyalty(membersData).reverse().slice(1, membersData.length*10/100);
let membersByLoyaltyMost = sortObjectByValue_Loyalty(membersData).slice(1, membersData.length*10/100);

// ---------------- TABLA LEAST ------------
const tablesInVue = new Vue ({
	el: "#tablesInVue", 
	data: {
		num_of_Democrats: listDemocrats.length,
		num_of_Republicans: listRepublicans.length,
		num_of_Independents: listIndependents.length,
		total_Reps: membersData.length,

		votesWithParty_D: votesWithParty_D,
		votesWithParty_R: votesWithParty_R,

		membersByAttendanceLess: membersByAttendanceLess,
		membersByAttendanceMost: membersByAttendanceMost,
		membersByLoyaltyLess: membersByLoyaltyLess,
		membersByLoyaltyMost: membersByLoyaltyMost,
	},
	methods: {
		
	}

});



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

// ************************* ATTENDANCE **************************************

function sortObjectByValue_Attendance(membersArray) {
	membersArray.sort((a, b) => {
		if (a.missed_votes_pct > b.missed_votes_pct) {
			return 1;
		} else {
			return -1;
		}
	});
	return membersArray;	
}

// ************************* LOYALTY *****************************************

function sortObjectByValue_Loyalty(membersArray) {
	membersArray.sort((a, b) => {
		if (a.votes_with_party_pct < b.votes_with_party_pct) {
			return 1;
		} else {
			return -1;
		}
	});
	return membersArray;	
}

