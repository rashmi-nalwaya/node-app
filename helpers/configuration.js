/**
 * @author Rashmi Nalwaya
 */

'use strict';

/**
 * Initialize
 */

var configuration;

configuration = {};

/**
 * Main
 */

configuration.main = {

    // apiKey: process.env.API_KEY,
    httpAllowedOrigin: process.env.HTTP_ALLOWED_ORIGIN || 'http://mytest-dev.com',
    internalHttpPort: process.env.INTERNAL_HTTP_PORT || 7001,
    publicHttpPort: process.env.PUBLIC_HTTP_PORT || 5001,
    // sessionCookieName: process.env.SESSION_COOKIE_NAME || 'SCANOV-SESSION',
    // uploadDirectory: process.env.UPLOAD_DIRECTORY || 'uploads'
};

/**
 * Web Service
 */

/*configuration.webService = {

    apiKey: process.env.WEB_SERVICE_API_KEY,
    hostname: process.env.WEB_SERVICE_HOSTNAME || 'mytest-dev.com',
    httpPort: process.env.WEB_SERVICE_HTTP_PORT || 80
};
*/
/**
 * Export
 */

module.exports = configuration;