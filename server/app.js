var express= require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

require('./db/db');

require('./models/Villain');
require('./models/Hero');

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(express.static(path.join(__dirname, 'public')));

var VillainController = require('./controllers/VillainController');
var HeroController = require('./controllers/HeroController');

//any requests to the /villains are going to be sent to the VillainController
app.use('/', VillainController);
app.use('/', HeroController);






server.listen(3000, function(){
	console.log("Listening on port 3000");
})