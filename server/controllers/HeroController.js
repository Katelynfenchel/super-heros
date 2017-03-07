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

router.post('/hero', function(req, res) {
	var heros = new Hero({name: req.body.name,
								movie: req.body.movie,
								power: req.body.power,
								height: parseInt(req.body.height)});

	heros.save();
	res.redirect('/hero');
});

//export router to app.js file
module.exports = router;