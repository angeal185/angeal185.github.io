const express = require('express'),
fs = require('fs'),
os = require('os'),
router = express.Router(),
jsonminify = require("jsonminify"),
chalk = require('chalk'),
config = require('../config/config'),
//listFiles = require('../modules/listFiles'),
pkg = require('../../../package');
const { exec } = require('child_process');

var a = config.entries;

function apiRes(i){
	console.log('API: '+chalk.blue('['+i+']'),chalk.green(`[connected]`));
}

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

router.get('/status', function(req, res) {
  res.render('status', {
    title: 'status',
    config:config,
    pkg:pkg
  });
});

router.get('/API', function(req, res) {
  res.json({
		platform: os.platform(),
		prelease: os.release(),
		ptype: os.type(),
		arch: os.arch(),
		cpu: os.cpus(),
		cpuUsage:process.cpuUsage(),
		freemem: os.freemem(),
		totalmem: os.totalmem(),
		nodemem:process.memoryUsage().rss,
		hostname: os.hostname(),
		loadavg: os.loadavg(),
		nodev:process.versions,
		uptime:process.uptime(),
		cwd:process.cwd()
	});
	apiRes('status');

});

a.forEach(function(i) {
	router.post('/update' + i, function(req, res) {
	var toUpdate = req.body.toUpdate; //get task command from body
  //console.log(toUpdate);
  fs.writeFile('./app/data/' + i +'.json', jsonminify(toUpdate), 'utf8'),
			  function(err) {
				  if (err) throw err;
			  };
    console.log(chalk.greenBright("Task: ") + chalk.cyanBright("[" + i +"]") + chalk.greenBright(" done."));
	  res.redirect('/');
	});

});

router.post('/updateskills', function(req, res) {
var toUpdate = req.body.toUpdate; //get task command from body
//console.log(toUpdate);
fs.writeFile('./app/data/skills.json', jsonminify(toUpdate), 'utf8'),
      function(err) {
        if (err) throw err;
      };
  console.log(chalk.greenBright("Task: ") + chalk.cyanBright("[updateSkills]") + chalk.greenBright(" done."));
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
