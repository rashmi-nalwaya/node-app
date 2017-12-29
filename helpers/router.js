'user strict';

var http,url;

http = require('http');
url = require('url');

var postApiController;
postApiController = require('../controllers/post-api');

exports.routeInternalRequest = function(request,response){
	console.log("Inside route");
	/*response.end('Inside route\n');
	response.end(request.method);*/
	if(request.method.toUpperCase() === "POST" && request.url === '/feedback'){
		response.write(request.url);
		postApiController.postData();
		response.end(request.url+'Inside method\n');

	}else{
		response.end('Inside else\n');
	}
}