const express = require('express'),
fs = require('fs'),
os = require('os'),
router = express.Router(),
urls = require('../urls'),
jsonminify = require("jsonminify"),
chalk = require('chalk'),
modJSON = require('../modules/modJSON'),
config = require('../config/config'),
nodeModulesList = require('../config/nodeModulesList'),
readmeRename = require('../modules/readmeRename').readmeRename,
//marked = require('../modules/marked'),
//listFiles = require('../modules/listFiles'),
pkg = require('../../../package');
const { exec } = require('child_process');

var a = config.entries;

/*
function apiRes(i){
	console.log('API: '+chalk.blue('['+i+']'),chalk.green(`[connected]`));
}



npmApi.getdetails('express',test);
function test(data) {
    console.log(data);
}
*/


//readmeRename();


function modulesReadme() {

  var arr = [];
  var arr2 = [];
  var items = {};
  fs.readdir("./node_modules/", function(err, files) {
    if (err) {
    console.log(err);
    return;
    }
    function remove(arr, what) {
        var found = arr.indexOf(what);

        while (found !== -1) {
            arr.splice(found, 1);
            found = arr.indexOf(what);
        }
    }
    files.forEach(function(f) {
      arr.push(f);
    });
    remove(arr, '.bin');
    arr.forEach(function(f) {
      info = require('../../../node_modules/'+f+'/package.json');
      arr2.push({"title":f,"readme":f+"/Readme.md","version":info.version,"description":info.description,"url":info.homepage,"license":info.license});
    });
    console.log(JSON.stringify(arr2))


    //nodeModulesList.removed.forEach(function(g) {
    //  remove(items, g);
    //});
    //console.log(JSON.stringify(items));
    modJSON.path(urls.nodeModulesList)
      .modify('data', arr2)
  });
};

//modulesReadme();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'dash',
    config:config
  });
});

router.get('/npm', function(req, res) {
  res.render('npm', {
    title: 'npm',
    config:config
  });
});

router.get('/modules', function(req, res) {
  res.render('modules', {
    title: 'modules',
    config:config,
    nodeModulesList:nodeModulesList
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
	  res.format({html: function(){res.send('<p>done!</p><script>open(location, "_self").close()</script>');}});
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
	res.format({html: function(){res.send('<p>done!</p><script>open(location, "_self").close()</script>');}});

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
