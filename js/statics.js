const tablesInVue = new Vue ({
	el: "#tablesInVue", 
	data: {

		url : "",
		data : [],
		membersData : [],

		leastTable : "",
		mostTable : "",
		glanceBody : "",
		loaderRanking1 : "",
		loaderRanking2 : "",
		loaderGlance : "",

		listDemocrats : [],
		listRepublicans : [],
		listIndependents : [],	

		num_of_Democrats: "",
		num_of_Republicans: "",
		num_of_Independents: "",
		total_Reps: "",

		votesWithParty_D: "",
		votesWithParty_R: "",

		membersByAttendanceLess: [],
		membersByAttendanceMost: [],
		membersByLoyaltyLess: [],
		membersByLoyaltyMost: [],
	},

	methods: {
		getURL : function() {
			if (window.location.href.endsWith("S_Attendance.html") || window.location.href.endsWith("S_PartyLoyalty.html")) {
				this.url = "https://api.propublica.org/congress/v1/113/senate/members.json";
			} else if (window.location.href.endsWith("H_Attendance.html") || window.location.href.endsWith("H_PartyLoyalty.html")) {
				this.url = "https://api.propublica.org/congress/v1/113/house/members.json";
			}
		},
		loadData : function() {
			
			// para todos el mismo (cambia url)
			fetch(this.url , {
				method: "GET",
				headers: {
					'X-API-KEY': "FqzcD73sx0q8pCMxXJo58m4TfvslZ3bEwG3FPqau"
				} 
			}).then(function(response) {
				if (response.ok) {
					return response.json();
				}
			}).then(function(json) {
				
				// -- GET DATA -- //
				tablesInVue.data = json;
				tablesInVue.membersData = tablesInVue.data.results[0].members;
				// console.log("estoy en el then");
				// tablesInVue.getTablesHTML(),

				// -- GLANCE TABLES -- //
				tablesInVue.getListByParty(tablesInVue.membersData),								
				
				tablesInVue.votesWithParty_D = tablesInVue.getVotesWithParty(tablesInVue.listDemocrats),
				tablesInVue.votesWithParty_R = tablesInVue.getVotesWithParty(tablesInVue.listRepublicans),
				tablesInVue.votesWithParty_I = tablesInVue.getVotesWithParty(tablesInVue.listIndependents),

				tablesInVue.num_of_Democrats = tablesInVue.listDemocrats.length,
				tablesInVue.num_of_Republicans = tablesInVue.listRepublicans.length,
				tablesInVue.num_of_Independents = tablesInVue.listIndependents.length,
				tablesInVue.total_Reps = tablesInVue.membersData.length,

				// -- RANKING TABLES -- //
				tablesInVue.membersByAttendanceLess = tablesInVue.sortObjectByValue_Attendance(tablesInVue.membersData).reverse().slice(1, tablesInVue.membersData.length*10/100),
				tablesInVue.membersByAttendanceMost = tablesInVue.sortObjectByValue_Attendance(tablesInVue.membersData).slice(1, tablesInVue.membersData.length*10/100);
				tablesInVue.membersByLoyaltyLess = tablesInVue.sortObjectByValue_Loyalty(tablesInVue.membersData).reverse().slice(1, tablesInVue.membersData.length*10/100);
				tablesInVue.membersByLoyaltyMost = tablesInVue.sortObjectByValue_Loyalty(tablesInVue.membersData).slice(1, tablesInVue.membersData.length*10/100);

				// -- HIDE LOADERS -- //
				tablesInVue.getTablesHTML(),
				tablesInVue.hideLoaders()
			});
		},
		getTablesHTML : function() {
			this.leastTable = document.getElementById("leastTable");
			this.mostTable = document.getElementById("mostTable");
			this.glanceBody = document.getElementById("glanceBody");
			this.loaderRanking1 = document.getElementById("loaderRanking1");
			this.loaderRanking2 = document.getElementById("loaderRanking2");
			this.loaderGlance = document.getElementById("loaderGlance");
		},
		getListByParty: function(membersArray) {
			for (let i = 0; i < membersArray.length; i++) {
				if (membersArray[i].party === "D") {
					this.listDemocrats.push(membersArray[i]);
				}
				else if (membersArray[i].party === "R") {
					this.listRepublicans.push(membersArray[i]);
				}
				else {
					this.listIndependents.push(membersArray[i]);
				}
			}
			// console.log("soy get list")
		},
		getVotesWithParty: function(membersArray) {
			let totalSum = 0
			for (let i = 0; i < membersArray.length; i++) {
				totalSum += membersArray[i].votes_with_party_pct
			}
			return (totalSum / membersArray.length).toFixed(1)
			// console.log("soy get votes")
		},
		sortObjectByValue_Attendance: function(membersArray) {
			membersArray.sort((a, b) => {
				if (a.missed_votes_pct > b.missed_votes_pct) {
					return 1;
				} else {
					return -1;
				}
			});
			return membersArray;	
		},
		sortObjectByValue_Loyalty: function(membersArray) {
			membersArray.sort((a, b) => {
				if (a.votes_with_party_pct < b.votes_with_party_pct) {
					return 1;
				} else {
					return -1;
				}
			});
			return membersArray;	
		},
		hideLoaders: function() {
			// console.log("estoy ocultando los loaders");			
			this.loaderRanking1.setAttribute("hidden", ""),
			this.loaderRanking2.setAttribute("hidden", ""),
			this.loaderGlance.setAttribute("hidden", ""),
			this.glanceBody.removeAttribute("hidden"),
			this.leastTable.removeAttribute("hidden"),
			this.mostTable.removeAttribute("hidden")
		}		
	},
	created: function() {
		this.getURL(),
		this.loadData()
	}
});	


