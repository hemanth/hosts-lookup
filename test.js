'use strict';
var assert = require('assert');
var hostsLookup = require('./');

it('should return the IP', function () {
	hostsLookup('localhost', function(err,ip){
		assert.equal(ip, "127.0.0.1");
	})
});

it('should return a fasle for the IP', function () {
	hostsLookup('localhose', function(err,ip){
		assert.equal(ip,false);
	})
});
