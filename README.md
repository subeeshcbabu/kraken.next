#### Basic Usage
```javascript
'use strict';

var express = require('express'),
    kraken = require('kraken-js');

var app = express();
app.use(kraken());
app.listen(8000);
```

#### API
##### kraken([options])
All kraken-js configuration settings are optional.

- `basedir` (*String*, optional) - specify the working directory for kraken-js to use.
- `onconfig` (*Function*, optional) - provides an asynchronous hook for loading additional configuration. Signature: `function (config, cb) { /* ... */ }`
- `protocols` (*Object*, optional) - protocol implementations for use when processing configuration. For more information on protocols see [shortstop](https://github.com/paypal/shortstop).
- `uncaughtException` (*Function*, optional) - Handler for `uncaughtException` errors. See the [endgame](https://github.com/totherik/endgame) module for defaults.


#### Features

##### Environment-aware Configuration
TODO


##### Configuration-based Middleware
Middleware is completely configuration-based. [meddleware](https://github.com/paypal/meddleware) is used internally to read,
resolve, and register middleware with your express application.


##### Safe startup and shutdown
TODO


##### Configuration-based `express` Settings (including view engines)
TODO