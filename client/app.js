var express = require('express');

var app = express();

var logger= function(req,res,next) {
	console.log('LOGGED');
	next();
}

var requestTime = function (req, res, next) {
	req.requestTime = Date.now()
	next()
}

var app = express()
app.use(function(req, res, next) {
	console.log('Time', Date.now())
	next()
})

app.get('/user/:id', function(req, res, next) {
	console.log('Request Type:', req.method)
	next()
})

app.use(logger);
app.use(requestTime);

app.get('/', function(req, res) {
	var responseText = 'Hello World!<br>'
	responseText += '<small>Requested at: ' + req.requestTime + '</small>'
	res.send(responseText)
})

app.listen(3000)