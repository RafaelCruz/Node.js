var http = require('http');

var options = {
	host: 'www.google.com',
	port: 80,
	path: '/',
	method: 'GET'
};

console.log("Going to make request...");

var req = http.request('http://www.google.com/', function(response) {
	console.log(response.statusCode);
	response.pipe(process.stdout);
});

/*
var req2 = http.request(options, function(response) {
	console.log(response.statusCode);
	response.pipe(process.stdout);
});

http.get(options, function(response) {
	console.log(response.statusCode);
	response.pipe(process.stdout);
});
*/