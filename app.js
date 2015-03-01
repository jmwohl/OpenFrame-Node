// Dependencies
var config = require('./config/config.js'),
    request = require('request');

console.log(config);

// Local vars
var _stream = {};


function _init(config) {
    _fetchStream(config.stream_url);
}

function _fetchStream(url) {
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body); // Show the HTML for the Google homepage.
            _stream = body;
            _playStream(_stream);
        } else {
        	console.log(error);
        }
    });
}

_init(config);
