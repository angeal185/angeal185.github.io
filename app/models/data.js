var sidebarData = {};
var mainContentData = {};

var menuData = [{
    "title": "PROFILE",
    "idProj": "skills",
    "idTemp": "resume",
    "item1": "Skills",
    "item2": "Resume"
}, {
    "title": "NODEJS",
    "idProj": "h-p",
    "idTemp": "h-t",
    "item1": "Projects",
    "item2": ""
}, {
    "title": "JAVASCRIPT",
    "idProj": "j-p",
    "idTemp": "j-t",
    "item1": "Projects",
    "item2": "Codepen-list"
}, {
    "title": "PYTHON",
    "idProj": "py-p",
    "idTemp": "py-t",
    "item1": "Projects",
    "item2": ""
}, {
    "title": "PHP",
    "idProj": "p-p",
    "item1": "Projects",
}, {
    "title": "CSS",
    "idProj": "c-s",
    "item1": "Stylus",
}];

var headerMainRightData = [{
    "href": "#",
    "id": "wbs1",
    "class":"icon-bolt shrink",
    "time": "7s",
    "dataTip":""
}, {
    "href": "http://codepen.io/angeal185/",
    "id": "cdpt",
    "class":"icon-codepen shrink",
    "time": "6s",
    "dataTip":"My codepen"
}, {
    "href": "https://au.linkedin.com/in/ben-eaves-996991125",
    "id": "lndt",
    "class":"icon-linkedin shrink",
    "time": "5s",
    "dataTip":"My linkedin"
}];

var indexHeader = [{
    "title": "DASHBOARD",
    "sub": ""
}];

var nodejsProj = [{
    "title": "NODEJS",
    "sub": "PROJECTS"
}];

var javascriptProj = [{
    "title": "JAVASCRIPT",
    "sub": "PROJECTS"
}];

var javascriptTemp = [{
    "title": "JAVASCRIPT",
    "sub": "CODEPEN"
}];

var pythonProj = [{
    "title": "PYTHON",
    "sub": "PROJECTS"
}];

var phpProj = [{
    "title": "PHP",
    "sub": "PROJECTS"
}];

var stylusProj = [{
    "title": "STYLUS",
    "sub": "PROJECTS"
}];

var timelineHeader = [{
    "title": "TIMELINE",
    "sub": ""
}];

var skillsProj = [{
    "title": "PROFILE",
    "sub": "SKILLS"
}];

var resumeProj = [{
    "title": "PROFILE",
    "sub": "RESUME"
}];

var codePenTplData = [{}];

var javascriptTemplates = [{
    "name": "",
    "img": "app/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}, {
    "name": "",
    "img": "app/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}, {
    "name": "",
    "img": "app/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}, {
    "name": "",
    "img": "app/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}, {
    "name": "",
    "img": "app/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}, {
    "name": "",
    "img": "app/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}, {
    "name": "",
    "img": "app/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}, {
    "name": "",
    "img": "app/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}, {
    "name": "",
    "img": "app/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}, {
    "name": "",
    "img": "app/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}, {
    "name": "",
    "img": "app/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}];

var skillsTemplateData = [{
    "title": "CODE SKILLS",
    "idLeft": "codeLeft",
    "idRight": "codeRight",
    "subtitle": "A list of the code that i am most familiar with"
}, {
    "title": "FRAMEWORKS",
    "idLeft": "skillsLeft",
    "idRight": "skillsRight",
    "subtitle": "A list of the frameworks that i am most familiar with"
}, {
    "title": "DB SKILLS",
    "idLeft": "dbLeft",
    "idRight": "dbRight",
    "subtitle": "A list of the db types that i am most familiar with"
}, {
    "title": "CMS SKILLS",
    "idLeft": "CMSLeft",
    "idRight": "CMSRight",
    "subtitle": "CMS development and design"
}, {
    "title": "OS SKILLS",
    "idLeft": "OSLeft",
    "idRight": "OSRight",
    "subtitle": "A list of the OS types that i am most familiar with"
}, {
    "title": "OTHER SKILLS",
    "idLeft": "otherLeft",
    "idRight": "otherRight",
    "subtitle": "A list of other skills that i am most familiar with"
}, {
    "title": "API SKILLS",
    "idLeft": "APILeft",
    "idRight": "APIRight",
    "subtitle": "A list of API's that i am familiar with"
}];


var codeLeftData = [{
        "title": "JAVASCRIPT",
        "percent": "95"
    }, {
        "title": "NODEJS",
        "percent": "95"
    }, {
        "title": "CSS",
        "percent": "100"
    }, {
        "title": "STYLUS",
        "percent": "100"
    }, {
        "title": "XML",
        "percent": "70"
    }, {
        "title": "PHP",
        "percent": "50"
    }, {
        "title": "BASH",
        "percent": "80"
    }, {
        "title": "PUG",
        "percent": "70"
    }, {
        "title": "DUST",
        "percent": "70"
    }, {
        "title": "HANDLEBARS",
        "percent": "95"
    }, {
        "title": "MUSTACHE",
        "percent": "70"
    }, {
        "title": "COFFEESCRIPT",
        "percent": "90"
    }

];

var codeRightData = [{
    "title": "HTML",
    "percent": "100"
}, {
    "title": "PYTHON",
    "percent": "90"
}, {
    "title": "JSON",
    "percent": "90"
}, {
    "title": "SCSS",
    "percent": "80"
}, {
    "title": "LESS",
    "percent": "80"
}, {
    "title": "CMD",
    "percent": "80"
}, {
    "title": "NUNJUCKS",
    "percent": "100"
}, {
    "title": "JINJA",
    "percent": "100"
}, {
    "title": "DJANGO-TPL",
    "percent": "90"
}, {
    "title": "TWIG",
    "percent": "90"
}, {
    "title": "EJS",
    "percent": "80"
}, {
    "title": "BABEL",
    "percent": "70"
}];

var skillsLeftData = [{
    "title": "JQUERY",
    "percent": "100"
}, {
    "title": "ANGULAR.JS",
    "percent": "100"
}, {
    "title": "SOCKET.IO",
    "percent": "90"
}, {
    "title": "SAILS.JS",
    "percent": "90"
}, {
    "title": "TOTAL.JS",
    "percent": "90"
}, {
    "title": "HAPI.JS",
    "percent": "80"
}, {
    "title": "KOA.JS",
    "percent": "75"
}, {
    "title": "ADONIS.JS",
    "percent": "85"
}, {
    "title": "THREE.JS",
    "percent": "70"
}, {
    "title": "GREENSOCK",
    "percent": "70"
}, {
    "title": "KNOCKOUT.js",
    "percent": "75"
}, {
    "title": "TWEEN.JS",
    "percent": "70"
}, {
    "title": "DJANGO",
    "percent": "80"
}, {
    "title": "WEB2PY",
    "percent": "80"
}, {
    "title": "JQUERYMOBILE",
    "percent": "90"
}, {
    "title": "CATBERRY",
    "percent": "70"
}, {
    "title": "WE.JS",
    "percent": "70"
}, {
    "title": "CODEIGNITER",
    "percent": "55"
}, {
    "title": "SEMANTIC",
    "percent": "90"
}, {
    "title": "UIKIT",
    "percent": "90"
}, {
    "title": "MATERIALIZE",
    "percent": "90"
}];

var skillsRightData = [{
        "title": "MEAN.IO",
        "percent": "95"
    }, {
        "title": "EXPRESS.JS",
        "percent": "95"
    }, {
        "title": "MEAN.JS",
        "percent": "95"
    }, {
        "title": "EMBER.JS",
        "percent": "90"
    }, {
        "title": "METEOR",
        "percent": "80"
    }, {
        "title": "DERBY.JS",
        "percent": "80"
    }, {
        "title": "IONIC",
        "percent": "95"
    }, {
        "title": "CORDOVA",
        "percent": "90"
    }, {
        "title": "FLASK",
        "percent": "100"
    }, {
        "title": "JQUERYUI",
        "percent": "90"
    }, {
        "title": "REACTIVE.JS",
        "percent": "80"
    }, {
        "title": "POLYMER",
        "percent": "70"
    }, {
        "title": "VUE.JS",
        "percent": "70"
    }, {
        "title": "BACKBONE",
        "percent": "65"
    }, {
        "title": "KEYSTONE",
        "percent": "90"
    }, {
        "title": "MITHRIL",
        "percent": "70"
    }, {
        "title": "SYMFONY",
        "percent": "55"
    }, {
        "title": "LARAVEL",
        "percent": "50"
    }, {
        "title": "BOOTSTRAP",
        "percent": "100"
    }, {
        "title": "FOUNDATION",
        "percent": "85"
    }, {
        "title": "SKELETON",
        "percent": "70"
    }

];

var dbLeftData = [{
    "title": "MONGODB",
    "percent": "90"
}, {
    "title": "COUCHDB",
    "percent": "80"
}, {
    "title": "MYSQL",
    "percent": "65"
}, {
    "title": "REDIS",
    "percent": "70"
}];

var dbRightData = [

    {
        "title": "SQLITE",
        "percent": "80"
    }, {
        "title": "NOSQL EMBEDDED DB",
        "percent": "80"
    }, {
        "title": "REASONDB",
        "percent": "60"
    }, {
        "title": "POSTGRESQL",
        "percent": "60"
    }
];


var CMSLeftData = [{
    "title": "CODY",
    "percent": "90"
}, {
    "title": "TARACOT",
    "percent": "80"
}, {
    "title": "KEYSTONE CMS",
    "percent": "90"
}, {
    "title": "PENCILBLUE",
    "percent": "80"
}, {
    "title": "DJANGO CMS",
    "percent": "95"
}, {
    "title": "OCTOBER CMS",
    "percent": "80"
}, {
    "title": "PHPBB",
    "percent": "80"
}, {
    "title": "GRAV",
    "percent": "95"
}, {
    "title": "WAGTAIL",
    "percent": "70"
}, {
    "title": "GHOST",
    "percent": "100"
}, {
    "title": "OXWALL",
    "percent": "60"
}, {
    "title": "MAGENTO",
    "percent": "65"
}];

var CMSRightData = [{
    "title": "APOSTROPHE",
    "percent": "90"
}, {
    "title": "ULBORA",
    "percent": "80"
}, {
    "title": "NODEBB",
    "percent": "85"
}, {
    "title": "MEZZANINE",
    "percent": "90"
}, {
    "title": "WORDPRESS",
    "percent": "80"
}, {
    "title": "DRUPAL",
    "percent": "70"
}, {
    "title": "JOOMLA",
    "percent": "65"
}, {
    "title": "BOLT",
    "percent": "80"
}, {
    "title": "MODX",
    "percent": "80"
}, {
    "title": "MOODLE",
    "percent": "85"
}, {
    "title": "PYRO",
    "percent": "65"
}, {
    "title": "OPENCART",
    "percent": "65"
}];


var OSLeftData = [{
    "title": "UBUNTU",
    "percent": "90"
}, {
    "title": "SUSE",
    "percent": "80"
}, {
    "title": "FENDORA",
    "percent": "70"
}, {
    "title": "KALI",
    "percent": "80"
}];

var OSRightData = [{
    "title": "WINDOWS(ALL)",
    "percent": "100"
}, {
    "title": "OSX",
    "percent": "50"
}, {
    "title": "DEBIAN",
    "percent": "70"
}, {
    "title": "MINT",
    "percent": "60"
}];

var otherLeftData = [{
    "title": "GULP"
}, {
    "title": "NPM"
}, {
    "title": "COMPOSER"
}, {
    "title": "SEO"
}, {
    "title": "AWS"
}, {
    "title": "DOCKER"
}, {
    "title": "DIGITALOCEAN"
}, {
    "title": "AZURE"
}, {
    "title": "BITBUCKET"
}, {
    "title": "SOAP"
}, {
    "title": "WAMP STACk"
}, {
    "title": "LAMP STACK"
}, {
    "title": "DEVOPS"
}, {
    "title": "TRAVIS CI"
}];


var otherRightData = [{
    "title": "GRUNT"
}, {
    "title": "BOWER"
}, {
    "title": "WEBPACK"
}, {
    "title": "REST"
}, {
    "title": "HEROKU"
}, {
    "title": "BITNAMI"
}, {
    "title": "FIREBASE"
}, {
    "title": "GITHUB"
}, {
    "title": "GITLAB"
}, {
    "title": "STORMPATH"
}, {
    "title": "OKTA"
}, {
    "title": "MVC/MVVM/MVP"
}, {
    "title": "YEOMAN"
}, {
    "title": "SLACK"
}];

var APILeftData = [{
    "title": "FACEBOOK API"
}, {
    "title": "TWITTER API"
}, {
    "title": "GITHUB API"
}, {
    "title": "PINTEREST API"
}, {
    "title": "PAYPAL API"
}, {
    "title": "SNIPCART API"
}, {
    "title": "CODEPEN API"
}, {
    "title": "DISQUS API"
}, {
    "title": "UNSPLASH API"
}, {
    "title": "OPENWEATHER API"
}, {
    "title": "TAWK.TO API"
}, {
    "title": "HACKERNEWS API"
}];

var APIRightData = [{
    "title": "LINKEDIN API"
}, {
    "title": "GOOGLE API"
}, {
    "title": "YOUTUBE API"
}, {
    "title": "VIMEO API"
}, {
    "title": "FLICKR API"
}, {
    "title": "AMAZON API"
}, {
    "title": "EBAY API"
}, {
    "title": "INSTAGRAM API"
}, {
    "title": "FIXER.IO API"
}, {
    "title": "REDDIT API"
}, {
    "title": "LIVEFYRE API"
}, {
    "title": "DISCOURSE API"
}];

var resumeData = [{
    "title": "Employment History",
    "title2": "Academic Achievements",
}];

var workData = [{
    "date": " CURRENT - 2013",
    "title": "University Lecturer - computer science",
    "location": "Xingtai University China",
	"about":"<h3 class='c-primary'>Lecture classes on languages and framework ops including:</h3><ul><li class='ani fadeIn animated'><h4>javascript</h4></li><li class='ani fadeIn animated'><h4>node.js</h4></li><li class='ani fadeIn animated'><h4>python</h4></li><li class='ani fadeIn animated'><h4>ajax</h4></li><li class='ani fadeIn animated'><h4>angular.js</h4></li><li class='ani fadeIn animated'><h4>jquery</h4></li><li class='ani fadeIn animated'><h4>express</h4></li></ul>"
}, {
    "date": " CURRENT - 2006",
    "title": "Freelance Web Development",
    "location": "",
	"about":"<h3 class='c-primary'>Web Development including:</h3><ul><li class='ani fadeIn animated'><h4>node.js site development</h4></li><li class='ani fadeIn animated'><h4>node.js App development</h4></li><li class='ani fadeIn animated'><h4>ajax site development</h4></li><li class='ani fadeIn animated'><h4>flask site development</h4></li><li class='ani fadeIn animated'><h4>django site development</h4></li><li class='ani fadeIn animated'><h4>angular.js site development</h4></li><li class='ani fadeIn animated'><h4>cordova App development</h4></li><li class='ani fadeIn animated'><h4>ionic App development</h4></li><li class='ani fadeIn animated'><h4>jquery App development</h4></li><li class='ani fadeIn animated'><h4>jquery mobile App development</h4></li><li class='ani fadeIn animated'><h4>jqueryUI App development</h4></li></ul><h3 class='c-primary'>CMS development including:</h3><ul><li class='ani fadeIn animated'><h4>custom cms development</h4></li><li class='ani fadeIn animated'><h4>django cms site development</h4></li><li class='ani fadeIn animated'><h4>drupal site development</h4></li><li class='ani fadeIn animated'><h4>ghost site development</h4></li><li class='ani fadeIn animated'><h4>apostrophe site development</h4></li><li class='ani fadeIn animated'><h4>grav site development</h4></li><li class='ani fadeIn animated'><h4>bolt cms site development</h4></li><li class='ani fadeIn animated'><h4>joomla site development</h4></li><li class='ani fadeIn animated'><h4>keystone.js site development</h4></li><li class='ani fadeIn animated'><h4>magento site development</h4></li><li class='ani fadeIn animated'><h4>mezzanine site development</h4></li><li class='ani fadeIn animated'><h4>modX site development</h4></li><li class='ani fadeIn animated'><h4>moodle site development</h4></li><li class='ani fadeIn animated'><h4>nodebb site development</h4></li><li class='ani fadeIn animated'><h4>october cms site development</h4></li><li class='ani fadeIn animated'><h4>opencart site development</h4></li><li class='ani fadeIn animated'><h4>oxwall site development</h4></li><li class='ani fadeIn animated'><h4>pencilblue site development</h4></li><li class='ani fadeIn animated'><h4>phpbb site development</h4></li><li class='ani fadeIn animated'><h4>ulbora site development</h4></li><li class='ani fadeIn animated'><h4>wigtail site development</h4></li><li class='ani fadeIn animated'><h4>wordpress site developmen</h4></li></ul>"
}, {
    "date": " 2010 - 2009",
    "title": "Computer Science Internship",
    "location": "Munich University of Applied Sciences Germany",
	"about":"<h3 class='c-primary'>Web Development including:</h3><ul><li class='ani fadeIn animated'><h4>DevOps</h4></li><li class='ani fadeIn animated'><h4>debugging</h4></li><li class='ani fadeIn animated'><h4>assist in lectures</h4></li><li class='ani fadeIn animated'><h4>ajax site development</h4></li><li class='ani fadeIn animated'><h4>flask site development</h4></li><li class='ani fadeIn animated'><h4>django site development</h4></li><li class='ani fadeIn animated'><h4>jquery App development</h4></li><li class='ani fadeIn animated'><h4>jquery mobile App development</h4></li><li class='ani fadeIn animated'><h4>jqueryUI App development</h4></li></ul>"
}, ];

var eduData = [{
    "date": " 2012 - 2010",
    "title": "Master of Computer Science",
    "location": "University of Newcastle, Sydney, Australia"
}, {
    "date": " 2008 - 2005",
    "title": "Bachelor's Degree in Computer Science",
    "location": "University of Newcastle, Sydney, Australia"
}];
