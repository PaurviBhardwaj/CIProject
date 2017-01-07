const express = require('express');
const app = express();

const port = process.env.PORT || 9080;

app.use(express.static('../client/build'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
});

app.get('/user', function(req, res) {
    res.json({
        username: 'swathi',
        name: 'Swathi',
        sex: 'Female'
    });
});    


app.listen(port, function() {
 console.log('Express App listening on port ', port);
});