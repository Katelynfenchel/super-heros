//handles all our http requests for the villains
var express = require('express');
//returns the router object
var router = express.Router();
var Villain = require('../models/Villain')



router.get('/villains', function(request, response){
	Villain.find(function (err, villains){
		response.render('home', {villainsArray: villains});
	})
	
});

router.post('/villains', function(req, res) {
	var villain = new Villain({name: req.body.name,
								movie: req.body.movie,
								power: req.body.power,
								height: parseInt(req.body.height)});

	villain.save();
	res.redirect('/villains');
});

//export router to app.js file
module.exports = router;