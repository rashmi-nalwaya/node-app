'use strict';

var database;
database = require('../helpers/database');

var http,url,qs;

http = require('http');
url = require('url');
// qs = require('querystring');

exports.postData = function(request,response){
	var insertQuery ,preparedStatement;

	var body = "";

	request.on('data', function (chunk) {
		body += chunk;
	});
	request.on('end', function () {
		var jsonObj = JSON.parse(body);
		console.log(jsonObj.name);
		insertQuery = 'Insert into feedback ("name","email","phone","message") values(?,?,?,?)';
		preparedStatement = database.formatStatement(insertQuery, [jsonObj.name,jsonObj.email,jsonObj.phone,jsonObj.feedback]);
		console.log(preparedStatement);
		database.executeStatement(preparedStatement, function (error, data, response) {
			callback(error, data, response);
		});
	})


};