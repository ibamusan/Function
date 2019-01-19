var checkDriverAge2 = function () {

	var Users = prompt("What is your age?");
alert(Users);

if (Users < 18) {

	alert("Sorry, you are too young to drive this car. Powering off");

} else if (Users == 18) {

	alert("Congratulations on your first year of driving. Enjoy the ride!");

} else if (Users > 18) {

	alert("Powering On. Enjoy the ride!");

}

}


checkDriverAge2();