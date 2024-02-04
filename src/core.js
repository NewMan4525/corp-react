'use strict';
export function core() {
	try {
		class Core {
			constructor() {}
			start() {
				//this.logger(this)
			}
			logger(elem) {
				console.log(elem);
				console.dir(elem);
			}
		}
		const core = new Core();
		core.start()
		return core
	} catch (error) {
		console.log('core Error: ', error);
	}
}