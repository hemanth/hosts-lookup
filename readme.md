# hosts-lookup [![Build Status](https://travis-ci.org/hemanth/hosts-lookup.svg?branch=master)](https://travis-ci.org/hemanth/hosts-lookup)

> Lookup your `/etc/hosts`


## Install

```
$ npm install --save hosts-lookup
```


## Usage

```js
var hostsLookup = require('hosts-lookup');
hostsLookup('crazy-cat', function(err, ip) {
  // => ip is false if not found and err will be present.
  // => ip is value from `hosts` if found.
});
```
P.S: This module was created as a result of this [issue](https://github.com/sindresorhus/module-requests/issues/13).

## License

MIT © [Hemanth.HM](http://h3manth.com)
