# nm-exists [![Build Status](https://travis-ci.org/iguntur/nm-exists.svg?branch=master)](https://travis-ci.org/iguntur/nm-exists)

> Check if the node module has exists


## Install

```
$ npm install --save nm-exists
```


## Usage

```js
const nmExists = require('nm-exists');

// async
nmExists('fs').then(exists => {
    console.log(exists);
    //=> 'true'
});

// imagine `express` has been installed in `node_modules/express` directorie
nmExists('express').then(exists => {
    console.log(exists);
    //=> 'true'
});

// sync
nmExists.sync('path');
//=> 'true'

nmExists.sync('./unicorn');
//=> 'true'
```


## API

### nmExists(moduleID)

Returns a promise for a boolean of whether the module exists

### nmExists.sync(moduleID)

Returns a boolean of whether the module exists

#### moduleID

Type: `string`


## License

MIT © [Guntur Poetra](http://iguntur.starmediateknik.com)
