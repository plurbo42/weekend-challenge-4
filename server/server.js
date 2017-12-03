var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.port || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.listen(port, function(){
    console.log('server is listening on port', port);
});