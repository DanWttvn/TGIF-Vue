const membersTable = new Vue ({
	el: "#membersTable", 
	data: {

		url : "",
		data : [],
		membersData : [],

		loader : "",
		bodySection : "",

		filterDemocrats : "",
		filterRepublicans : "",
		filterIndependents : "",
		stateDropdown : "",

		filteredArrayByParty : [],
		filteredArrayByState : [],
		filteredArrayTotal : [],
	
	},
	methods: {
		getURL : function() {
			if (window.location.href.endsWith("senatePage.html")) {
				this.url = "https://api.propublica.org/congress/v1/113/senate/members.json";
			} else if (window.location.href.endsWith("housePage.html")) {
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
				membersTable.data = json;
				membersTable.membersData = membersTable.data.results[0].members;
				
				// -- DEFAULT TABLE -- // 
				membersTable.defaultDataIntoTable();

				// -- HIDE LOADERS -- //
				membersTable.getHTML(),
				membersTable.hideLoaders();
			});
		},
		getHTML : function() {
			this.bodySection = document.getElementById("bodySection");
			this.loader = document.getElementById("loader");
			this.filterDemocrats = document.getElementById("filterDemocrats");
			this.filterRepublicans = document.getElementById("filterRepublicans");
			this.filterIndependents = document.getElementById("filterIndependents");
		},
		defaultDataIntoTable : function() {
			this.filteredArrayTotal = this.membersData.slice();
		},
		checkParty : function(member) {
			if (member.party === "D" && this.filterDemocrats.checked) {
				this.filteredArrayByParty.push(member);
				return this.filteredArrayByParty;
			}
			if (member.party === "R" && this.filterRepublicans.checked) {
				this.filteredArrayByParty.push(member);
				return this.filteredArrayByParty;
			}
			if (member.party === "I" && this.filterIndependents.checked) {
				this.filteredArrayByParty.push(member);
				return this.filteredArrayByParty;
			}
			if (!this.filterDemocrats.checked && !this.filterRepublicans.checked && !this.filterIndependents.checked) {
				this.filteredArrayByParty = this.membersData.slice();
				return this.filteredArrayByParty;
			}
		},		
		checkState : function(member) {
			this.stateDropdown = document.getElementsByName("stateSelection")[0];
			if (this.stateDropdown.value == "all") {
				this.filteredArrayByState = this.membersData.slice();
				return this.filteredArrayByState;
			} else {
				return member.state === this.stateDropdown.value; //es un filter, por eso raro
			}
		},
		getCommonArray: function(arrayByParty, arrayByState) {
			this.filteredArrayTotal = arrayByParty.filter(value => arrayByState.includes(value));
		},
		filterByPartyState: function () {
			// console.log("filter on click");
			this.filteredArrayByParty = this.membersData.filter(this.checkParty);
			this.filteredArrayByState = this.membersData.filter(this.checkState);
			this.getCommonArray(this.filteredArrayByParty, this.filteredArrayByState);
		},
		hideLoaders: function() {
			// console.log("estoy ocultando los loaders");			
			this.loader.setAttribute("hidden", ""),
			this.bodySection.removeAttribute("hidden")
		}
	},
	created: function() {
		this.getURL(),
		this.loadData()
	}
});	



// ******************* SEARCH MEMBERS *********************** 
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