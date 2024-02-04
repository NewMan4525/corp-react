'use strict'
import {
	body,
	html,
	elCreater,
	query
} from '../common/helpers.js';

function clean(elem) {
	try {


		while (body.firstChild) {
			body.removeChild(body.firstChild)
		}




	} catch (err) {
		console.log('clean error: ' + err);
	}
}

export {
	clean
}