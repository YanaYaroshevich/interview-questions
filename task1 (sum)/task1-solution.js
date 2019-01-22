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

console.log(sum(1)(2)(3));
console.log(sum(3)(3)(3));
