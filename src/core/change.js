'use strict'

function change(displaySide) {

	try {

		body.addEventListener('wheel', () => {
			switch (displaySide) {
				case 'odd':
					displaySide = 'even';
					break;
				case 'even':
					displaySide = 'odd';
					break;

				default:

					break;
			}

			clean();
			let debounceDisplay = debounce(display, animTime);
			debounceDisplay(displaySide)
		})


	} catch (err) {
		console.log('change error: ' + err);
	}
}

export {
	change
};