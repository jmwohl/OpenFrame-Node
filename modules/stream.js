var request = require('request');

function _playStream (stream) {

}

function _displayContent(url) {
	request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the Google homepage.
            _stream = body;
            _playStream(_stream);
        } else {
        	console.log(error);
        }
    })
}

exports