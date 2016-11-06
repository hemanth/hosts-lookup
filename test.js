'use strict';
var assert = require('assert');
var hostsLookup = require('./');

it('should return the IP', function () {
	hostsLookup('localhost')
  .then(ip => assert.equal(!!ip, true));
});

it('should return a fasle for the IP', function () {
	hostsLookup('localhose')
  .catch(err => assert.equal(err,'No such host!'));
});
