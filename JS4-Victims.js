// Example from previous project
// var postalCode = prompt("Please enter your 5-digit postal code");
// 	console.log(postalCode);
// 	alert(postalCode.length === 5)

var victimName = [];
var victimPhone = [];
var victimStreet = [];



var numberOfVictims = prompt("Please enter the number of victims");
	console.log(numberOfVictims);


for (var i = 1; i <= numberOfVictims; i++) {
	var name = prompt("Please enter the victim's name");
	var phone = prompt("Please enter the victim's phone number");
	var street = prompt("Please enter the victim's street name");
	}


	var victimInfo = {
 	name: name,
 	phone: phone,
 	address: street

	};

	console.log(victimInfo)

// VOLUNTEER SECTION

var numberOfVolunteers = prompt("Please enter the number of volunteers");
	console.log(numberOfVolunteers);

var volunteerName = [];
var volunteerPhone = [];
var volunteerStreet = [];

for (var i = 1; i <= numberOfVolunteers; i++) {
	var name = prompt("Please enter the volunteer's name");
	var phone = prompt("Please enter the volunteer's phone number");
	var street = prompt("Please enter the volunteer's street name");
	}

	var volunteerInfo = {
		name: name,
		phone: phone,
		address: street

	};

	console.log(volunteerInfo)

	alert("There are " + numberOfVictims + "  victim(s) and " + numberOfVolunteers + " volunteer(s)")











