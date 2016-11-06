'use strict';
var getHosts = require('get-hosts');
module.exports = function (hname,cb) {
	if (typeof hname !== 'string') {
		throw new TypeError('Expected a string');
	}
	if (typeof cb !== 'function') {
		throw new TypeError('Expected a callback function');
	}

	var host = getHosts()
		.filter(info => (
			Object.keys(info)[0]).includes(hname)
		)[0];

	if (host) {
		cb(null, host[Object.keys(host)[0]])
	} else {
		cb(new Error('No such host!'),false);
	}

};
