/**
 * External Dependencies
 */

var mysql;

mysql = require('mysql');

var databaseConnection = _createConnection();

/**
 * Public Functions
 */

exports.formatStatement = function (statement, values) {
    return mysql.format(statement, values);
};

exports.executeStatement = function (statement, callback) {


    if(databaseConnection.state === 'disconnected') {
        databaseConnection = _createConnection();
    }
    databaseConnection.query(statement, function (error, data, response) {

        //databaseConnection.end();

        if (error) {
            console.error(error);
        }

        if (callback) {
            callback(error, data, response);
        }
    });

}


exports.createConnection = function() {

    return mysql.createConnection({

        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT
    });
}

/**
 * Public Functions
 */

function _createConnection() {

    return mysql.createConnection({

        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT
    });
}
