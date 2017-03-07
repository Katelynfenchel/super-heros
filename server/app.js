var express= require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var path = require('path');

var mongoose = require('mongoose');











server.listen(3000, function(){
	console.log("Listening on port 3000");
})