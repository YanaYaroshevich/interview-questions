/* Solution - using web workers and timeout */

let workingArr = (new Array(10)).fill(1);

function showAlert() {
	alert('lalka');

	makeCalculationsOnArray(workingArr);
}

function makeCalculationsOnArray(arr) {
	// Check if Browser supports the Worker api.
	if (window.Worker) {
		// Requires script name as input
		const myWorker = new Worker("worker.js");

		myWorker.postMessage(arr);
		console.log('Message posted to worker');


		myWorker.onmessage = function(e) {
			workingArr = e.data;
			console.log('Main (myWorker.onmessage): Message received from worker');
		};

		return;
	}


	/* If web workers are not supported - use Event Loop features */
	function bigCalculations(item) {
		let i = 0;
		while (i < 1000000000) {
			i += 1;
		}

		return Math.round(Math.random() * item * 1000);
	}

	workingArr.forEach((item, ind, arr) => {
		setTimeout(() => {
			arr[ind] = bigCalculations(item);
		}, ind * 1000);
	});
}

