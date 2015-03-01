// Dependencies
var config = require('config/config.js'),
	request = require('request');

// Local vars
var stream = {};


function _init (config) {
	_fetchStream(config.stream_url);
}

function _fetchStream(url) {
	request
		.get(url)
		.on('response', function(response) {
		    console.log(response.statusCode); // 200 
		    console.log(response.headers['content-type']); // 'image/png' 
		  })
		.on('error', function(err) {
			console.log(err);
		});
}

_init();