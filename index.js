'use strict';
const getHosts = require('get-hosts');
module.exports = function (hname) {
	if (typeof hname !== 'string') {
		throw new TypeError('Expected a string');
	}
	return new Promise((resolve, reject) => {
		const host = getHosts()
			.filter(info => (
				Object.keys(info)[0]).includes(hname)
			)[0];
		host ?
		resolve(host[Object.keys(host)[0]]) :
		reject('No such host!');
	});
};
