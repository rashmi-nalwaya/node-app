/**
 * @author Rashmi Nalwaya
 */
'use strict';

var http;

http = require('http');

/**
 * Internal Dependencies
 */

var configuration,router;

configuration = require('./helpers/configuration');

router = require('./helpers/router');

/**
 * Main
 */

var internalHttpServer, publicHttpServer;

// Creates the internal and public HTTP servers.
internalHttpServer = http.createServer(router.routeInternalRequest);

// publicHttpServer = http.createServer(router.routePublicRequest);

// Makes the internal HTTP server listen to a specific port.
internalHttpServer.listen(configuration.main.internalHttpPort);

// Console will print the message
console.log('Server running at http://127.0.0.1:7001/');

// Makes the public HTTP server listen to a specific port.
// publicHttpServer.listen(configuration.main.publicHttpPort);
