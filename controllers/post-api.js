'use strict';

var database;
database = require('../helpers/database');

var http,url;

http = require('http');
url = require('url');

exports.postData = function(request,response){
	console.log('Hello inside api');
};