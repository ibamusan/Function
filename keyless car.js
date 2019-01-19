// Instead of using the prompt. Now, only use the return keyword and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"

function checkDriverAge(Users) {


if (Users < 18) {

	return "Sorry, you are too young to drive this car. Powering off";

} else if (Users == 18) {

	return "Congratulations on your first year of driving. Enjoy the ride!";
	
} else if (Users > 18) {

	return "Powering On. Enjoy the ride!";
	
}

}

alert(checkDriverAge(92));






// function checkDriverAge() {

// 	var Users = prompt("What is your age?");
// alert(Users);

// if (Users < 18) {

// 	alert("Sorry, you are too young to drive this car. Powering off");

// } else if (Users == 18) {

// 	alert("Congratulations on your first year of driving. Enjoy the ride!");

// } else if (Users > 18) {

// 	alert("Powering On. Enjoy the ride!");

// }

// }

// checkDriverAge();

