var express= require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

require('./db/db');
var Villain = require('./models/Villain');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//hardcoding the view
var villains = [{name: "Penguin",
				 movie: "Batman Returns", 
				 power: "Criminal", 
				 height: 53},
				 {name: "Joker", movie: "Dark Knight", power: "Tricks", height: 60}]

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
	response.render('home', {villainsArray: villains});
});








server.listen(3000, function(){
	console.log("Listening on port 3000");
})