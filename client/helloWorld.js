var express = require('express')
var app = express()


app.get('/', function (req, res) {
	res.send('Hello World!')
})

app.post('/', function (req, res) {
	res.send('Got a POST request')
})

app.put('/', function(req, res) {
	res.send('Got a PUT request at /user')
})

app.listen(3000, function () {
	console.log('App listening on port 3000!')
})