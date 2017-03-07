//handles all our http requests for the villains
var express = require('express');
//returns the router object
var router = express.Router();
var Hero = require('../models/Hero')



router.get('/hero', function(request, response){
	Hero.find(function (err, heros){
		response.render('hero', {heroArray: heros});
	})
	
});

router.post('/hero', function(request, response) {
	var hero = new Hero({name: request.body.name,
								movie: request.body.movie,
								power: request.body.power,
								height: parseInt(request.body.height)});

	hero.save();
	resquest.redirect('/hero');
});

//export router to app.js file
module.exports = router;