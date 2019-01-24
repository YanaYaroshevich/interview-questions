/*
* Problem:
* We have a function, which performs some big calculations with all elements of the given array.
* Each time user presses the button we show an alert and then run these calculations.
* What issues may occur? How to solve these problems? Pls try to rewrite the code to avoid such issues.
* */

let workingArr = (new Array(10)).fill(1);

function bigCalculations(item) {
	let i = 0;
	while (i < 1000000000) {
		i += 1;
	}

	return Math.round(Math.random() * item * 1000);
}

function showAlert() {
	alert('lalka');

	workingArr = makeCalculationsOnArray(workingArr);
}

function makeCalculationsOnArray(arr) {
	return arr.map((item) => bigCalculations(item));
}
