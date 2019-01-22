/*
* Problem:
* Iterate through array of numbers with the given API req:
* At first call API with arr[0], then call it with the (output of API call + arr[1]) and etc.
* You should get the result on the last iteration and show it in console.
* */

function apiCall(param) {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(`Input param: ${param}`);

			const output = Math.ceil(Math.random() * 10);
			console.log(`New number: ${output}`);

			resolve(output);
		}, 1000);
	});
}

function work(arr) {
	/* Solution goes here */
}

const arr = [1, 2, 3, 4, 5];

/* Some details may be added for the function call */
work(arr);
