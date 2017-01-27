'use strict';

module.exports = moduleId => new Promise((resolve, reject) => {
	try {
		resolve(Boolean(require(moduleId)));
	} catch (err) {
		if (err.code === 'MODULE_NOT_FOUND') {
			resolve(false);
		}

		reject(err);
	}
});

module.exports.sync = moduleId => {
	try {
		return Boolean(require(moduleId));
	} catch (err) {
		if (err.code === 'MODULE_NOT_FOUND') {
			return false;
		}

		throw err;
	}
};
