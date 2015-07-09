'use strict';
var h = require('hostile');
module.exports = function (hname,cb) {
	if (typeof hname !== 'string') {
		throw new TypeError('Expected a string');
	}
	if (typeof cb !== 'function') {
		throw new TypeError('Expected a callback function');
	}

	var host = h.get().filter(function(info){
		return info[1] === hname
	})[0];

	if (host) {
		cb(null, host[0])
	} else {
		cb(new Error('No such host!'),false);
	}

};
