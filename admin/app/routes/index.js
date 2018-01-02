const express = require('express'),
fs = require('fs'),
router = express.Router(),
chalk = require('chalk'),
config = require('../config/config');
const { exec } = require('child_process');

var a = config.entries;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'dash',
    config:config
  });
});

a.forEach(function(i) {
	router.get('/' + i, function(req, res) {
	  res.render('template', {
		title: i,
		data:require('../../../app/data/' + i),
		config:config
	  });
	});
});

router.get('/skills', function(req, res) {
  res.render('skills', {
    title: 'skills',
    skills:require('../../../app/data/skills'),
    config:config
  });
});

a.forEach(function(i) {
	router.post('/update' + i, function(req, res) {
	var toUpdate = req.body.toUpdate; //get task command from body
	fs.writeFile('./app/data/' + i +'.json', toUpdate, 'utf8'),
			  function(err) {
				  if (err) throw err;
			  };
	  res.redirect('/');
	});
});

router.post('/updateskills', function(req, res) {
var toUpdate = req.body.toUpdate; //get task command from body
fs.writeFile('./app/data/skills.json', toUpdate, 'utf8'),
      function(err) {
        if (err) throw err;
      };
  res.redirect('/');
});

router.post('/task', function(req, res) {
let task = req.body.taskOut; //get task command from body
exec('gulp '+ task, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
  console.log(chalk.greenBright("Task: ") + chalk.cyanBright("[" + task +"]") + chalk.greenBright(" done."));
});
  res.redirect('/');
});

module.exports = router;
