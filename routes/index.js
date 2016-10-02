var express = require('express');
var router = express.Router();
var project = require('../public/javascripts/projects.json');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/projects', function(req, res){
	res.send(project);
});

module.exports = router;
