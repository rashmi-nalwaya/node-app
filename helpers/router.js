'user strict';

var http,url;

http = require('http');
url = require('url');

var postApiController;
postApiController = require('../controllers/post-api');

exports.routeInternalRequest = function(request,response){
	console.log("Inside route");

	 if(request.method.toUpperCase() === "POST" && request.url === '/feedback'){

	 postApiController.postData(request,response);
	 response.end(request.url+'Inside method\n');

	 }else{
	 response.end('Inside else\n');
	 }

	response.end('Hello, World!');
}