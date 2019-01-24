/* Handler onmessage helps us to run some code each time, when new message is received (message is stored in the data attribute of the event message) */

function bigCalculations(item) {
	let i = 0;
	while (i < 1000000000) {
		i += 1;
	}

	return Math.round(Math.random() * item * 1000);
}

function makeCalculationsOnArray(arr) {
	return arr.map((item) => bigCalculations(item));
}

onmessage = function(e) {
	console.log('Worker: Message received from main script');
	const workerResult = makeCalculationsOnArray(e.data);
	console.log('Worker: Posting message back to main script');
	postMessage(workerResult);
};
