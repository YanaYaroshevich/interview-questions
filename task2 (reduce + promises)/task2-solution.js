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
	return arr.reduce((prev, cur) => {
		return prev.then((res) => {
			return apiCall(res + cur);
		});

	}, Promise.resolve(0))
}

const arr = [1, 2, 3, 4, 5];
work(arr).then((res) => {
	console.log(`RESULT: ${res}`);
});
