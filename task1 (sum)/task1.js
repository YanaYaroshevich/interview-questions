/*
* Problem:
* Create a function sum with a numeric parameter.
* The output of console.log(sum(1)(2)...(k)) should be a number (1 + 2 + ... + k)
* */

/* Solution */
function sum(num) {
	let acc = num;

	const newSum = function(nextNum) {
		acc += nextNum;
		return newSum;
	};

	newSum.toString = () => {
		return acc;
	};

	return newSum;
}

/* Testing */
console.log(sum(1)(2)(3));
console.log(sum(3)(3)(3));