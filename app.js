var express = require('express');
//var bodyparser = require('body-parser');
//var parse = require('./routes');
//var http = require('http');
//var path = require('path');
//var url = require('url');

var app = express();

app.set('port', 3000);
app.set('views', __dirname);
app.set('view_engine', 'jade');

app.get('/', function(req, res){
	res.render('index.jade', {title: 'Express'});
});

app.post('/gecko', function(req, res){
	res.send("ASD");
	console.log("Gecko created successfully");
});

app.listen(app.get('port'), function(){
	console.log("Listening on port " + app.get('port'));
});

