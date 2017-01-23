var express = require('express');
var router = express.Router();
var project = require('../public/javascripts/projects.json');
var MongoClient = require('mongodb').MongoClient;
var mongoLink = "mongodb://heroku_ttnhg2wc:qdrit7941ju2t957d91dif7lfr@ds147167.mlab.com:47167/heroku_ttnhg2wc";

// Connect to the db


/* GET home page. */
router.get('/', function(req, res) {
	res.render('index');
});

router.get('/projects', function(req, res){
	MongoClient.connect(mongoLink, function(err, db){
		db.collection('project').find().toArray(function(err, result){
			console.log(result);
			res.send(result);
		});
	});
});

module.exports = router;
