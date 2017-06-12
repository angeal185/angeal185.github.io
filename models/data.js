var slideTopData = {};
var sidebarData = {};
var mainContentData = {};

var followData = [{
    "title": " My Website",
    "href": "#",
    "class": "fa fa-bolt"
}, {
    "title": " My Github",
    "href": "https://github.com/angeal185/",
    "class": "fa fa-github"
}, {
    "title": " My Codepen",
    "href": "http://codepen.io/angeal185/",
    "class": "fa fa-codepen"
}, {
    "title": " My linkedin",
    "href": "https://au.linkedin.com/in/ben-eaves-996991125",
    "class": "fa fa-linkedin"
}, ];

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
}];

var headerMainRightData = [{
    "href": "#",
    "id": "wbs1",
    "time": "7s"
}, {
    "href": "http://codepen.io/angeal185/",
    "id": "cdpt",
    "time": "6s"
}, {
    "href": "https://au.linkedin.com/in/ben-eaves-996991125",
    "id": "lndt",
    "time": "5s"
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

var nodejsProjects = [{
    "name": "Nodejs",
    "img": "static/images/nodejs.png",
    "title": "nodejs-chat-room-app",
    "sub": "nodejs chat app created with express, nunjucks, socket.io and materialize",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/nodejs-chat-room-app"
},{
    "name": "Nodejs",
    "img": "static/images/nodejs.png",
    "title": "nodejs-nunjucks-express-project",
    "sub": "nodejs portfolio type webapp with express nunjucks mongodb stylus and keystone admin",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/nodejs-nunjucks-express-project"
}, {
    "name": "Nodejs",
    "img": "static/images/nodejs.png",
    "title": "nodejs-blog-website",
    "sub": "node js blog created with total.js, jquery, bootstrap and stylus",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/nodejs-blog-website-complete"
}, {
    "name": "Nodejs",
    "img": "static/images/nodejs.png",
    "title": "nodejs-website-express-mongodb-nunjucks-passport-oauth-stylus",
    "sub": "nodejs website built with express nunjucks mongodb stylus, using local and passport-oauth authentication",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/nodejs-website-express-mongodb-nunjucks-passport-oauth-stylus"
}, {
    "name": "Nodejs",
    "img": "static/images/nodejs.png",
    "title": "express-nunjucks-admin-template",
    "sub": "nodejs express admin-template with nunjucks stylus mongodb and passport",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/express-nunjucks-admin-template"
}, {
    "name": "Nodejs",
    "img": "static/images/nodejs.png",
    "title": "mean-stack-portfolio-blog-app",
    "sub": "mean-stack portfolio/blog website and cms using mongodb angularjs ejs bootstrap passport and disqus api",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/mean-stack-portfolio-blog-app"
}, {
    "name": "Nodejs",
    "img": "static/images/nodejs.png",
    "title": "express-nunjucks-agency-webapp",
    "sub": "nodejs agency type website created with express, nunjucks and jquery",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/express-nunjucks-agency-webapp"
}, {
    "name": "Nodejs",
    "img": "static/images/nodejs.png",
    "title": "agency-webapp-created-with-koa.js-nunjucks-jquery",
    "sub": "agency type webapp created using koa.js, nunjucks, jquery and bootstrap",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/agency-webapp-created-with-koa.js-nunjucks-jquery"
}, {
    "name": "Nodejs",
    "img": "static/images/nodejs.png",
    "title": "nodejs-material-design-flat-file-blog",
    "sub": "material-design blog created with hexo, ejs stylus and bootstrap",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/nodejs-material-design-flat-file-blog"
}, {
    "name": "Nodejs",
    "img": "static/images/nodejs.png",
    "title": "mean-stack-microblog-starter-app",
    "sub": "mean stack microblog starter",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/mean-stack-microblog-starter-app"
}, {
    "name": "Nodejs",
    "img": "static/images/nodejs.png",
    "title": "jade-one-page-portfolio-template",
    "sub": "jade express stylus bootstrap jquery",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/jade-one-page-portfolio-template"
}, {
    "name": "Nodejs",
    "img": "static/images/nodejs.png",
    "title": "nodejs-twig-ecommerce-webapp",
    "sub": "ecommerce webapp created using express, twig, uikit, jquery and stylus",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/nodejs-twig-ecommerce-webapp"
}];

var javascriptProjects = [{
    "name": " javascript",
    "img": "static/images/jquery.png",
    "title": "dynamic-ajax-site-generator",
    "sub": "dynamic ajax powered website generator using nunjucks, gulp, jquery and materialize",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/dynamic-ajax-site-generator"
},{
    "name": " javascript",
    "img": "static/images/angular.png",
    "title": "angeal185.github.io",
    "sub": "This website",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/angeal185.github.io"
}, {
    "name": " javascript",
    "img": "static/images/jquery.png",
    "title": "animated-agency-webapp-using-GSAP-threejs-json-jquery",
    "sub": "flat-file webapp created using GSAP, threejs, json and jquery",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/animated-agency-webapp-using-GSAP-threejs-json-jquery"
}, {
    "name": " javascript",
    "img": "static/images/angular.png",
    "title": "jquery-audio-player",
    "sub": "audio player created with jquery",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/jquery-audio-player"
}, {
    "name": " javascript",
    "img": "static/images/jquery.png",
    "title": "javascript-aes-encryption-decryption-app",
    "sub": "encryption webapp using javascript",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/javascript-aes-encryption-decryption-app"
}, {
    "name": " javascript",
    "img": "static/images/angular.png",
    "title": "jquery-json-portfolio-webapp-with-audio",
    "sub": "flat-file portfolio webapp created with jquery and json",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/jquery-json-portfolio-webapp-with-audio"
}, {
    "name": " javascript",
    "img": "static/images/jquery.png",
    "title": "json-coming-soon-template",
    "sub": "coming soon template written in json, using foundation and jquery",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/json-coming-soon-template"
}, {
    "name": " javascript",
    "img": "static/images/angular.png",
    "title": "json-portfolio-template",
    "sub": "Dynamic portfolio template written completely using json and jquery",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/json-portfolio-template"
}, {
    "name": " javascript",
    "img": "static/images/jquery.png",
    "title": "js-canvas-animations",
    "sub": "my canvas animations",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/js-canvas-animations"
}, {
    "name": " javascript",
    "img": "static/images/angular.png",
    "title": "jquery-kenburns-coming-soon-template",
    "sub": "webapp written in javascript",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/jquery-kenburns-coming-soon-template"
}, {
    "name": " javascript",
    "img": "static/images/jquery.png",
    "title": "dynamic-jquery-material-design-webapp",
    "sub": "dynamic material design webapp",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/dynamic-jquery-material-design-webapp"
}, {
    "name": " javascript",
    "img": "static/images/angular.png",
    "title": "jquery-one-page-dynamic-website",
    "sub": "one-page dynamic website template built using javascript",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/jquery-one-page-dynamic-website"
}, {
    "name": " javascript",
    "img": "static/images/jquery.png",
    "title": "responsive-one-page-parallax-agency-template",
    "sub": "Responsive parallax webapp built with jquery",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/responsive-one-page-parallax-agency-template"
}, {
    "name": " javascript",
    "img": "static/images/angular.png",
    "title": "tempo.js-jquery-resume-webapp",
    "sub": "resume webapp created with tempo.js and jquery",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/tempo.js-jquery-resume-webapp"
}, {
    "name": " javascript",
    "img": "static/images/jquery.png",
    "title": "Angularjs-materialize-mobile-template",
    "sub": "mobile app template created with angularjs and materialize",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/Angularjs-materialize-mobile-template"
}, {
    "name": " javascript",
    "img": "static/images/angular.png",
    "title": "tempo.js-jquery-onepage-webapp",
    "sub": "onepage coming-soon webapp created with tempo.js and jquery",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/tempo.js-jquery-onepage-webapp"
}, {
    "name": " javascript",
    "img": "static/images/jquery.png",
    "title": "json-compiler",
    "sub": "convert html to json",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/json-compiler"
}, {
    "name": " javascript",
    "img": "static/images/angular.png",
    "title": "jquery-json-resume-webapp",
    "sub": "resume type webapp created using jquery, json and stylus",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/jquery-json-resume-webapp"
}, {
    "name": " javascript",
    "img": "static/images/jquery.png",
    "title": "angular-ionic-booking-app",
    "sub": "mobile booking app created with angular and ionic",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/angular-ionic-booking-app"
}, {
    "name": " javascript",
    "img": "static/images/angular.png",
    "title": "angularjs-mobile-app-using-ionic",
    "sub": "Angular tutorial mobile app using angular and ionic",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/angularjs-mobile-app-using-ionic"
}, {
    "name": " javascript",
    "img": "static/images/jquery.png",
    "title": "js-encryption-webapp",
    "sub": "simple aes javascript encryption application",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/js-encryption-webapp"
}, {
    "name": " javascript",
    "img": "static/images/angular.png",
    "title": "ionic-cordova-app",
    "sub": "mobile app built with ionic",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/ionic-cordova-app"
}, {
    "name": " javascript",
    "img": "static/images/jquery.png",
    "title": "AngularJS-Ionic-tutorial-app",
    "sub": "ionic tutorial mobile app",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/AngularJS-Ionic-tutorial-app"
}, {
    "name": " javascript",
    "img": "static/images/angular.png",
    "title": "angularjs-python-tutorial-mobile-app",
    "sub": "angularjs python tutorial mobile app built with ionic",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/angularjs-python-tutorial-mobile-app"
}, {
    "name": " javascript",
    "img": "static/images/jquery.png",
    "title": "angularjs-xdk-mobile-quiz-app",
    "sub": "mobile ready quiz app created with angularjs and intel xdk",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/angularjs-xdk-mobile-quiz-app"
}, {
    "name": " javascript",
    "img": "static/images/angular.png",
    "title": "Color-Picker-App",
    "sub": "js Color Picker App",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/Color-Picker-App"
}, {
    "name": " javascript",
    "img": "static/images/jquery.png",
    "title": "jquery-dynamic-documentation-starter",
    "sub": "jquery one page dynamic documentation starter app",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/jquery-dynamic-documentation-starter"
}, {
    "name": " javascript",
    "img": "static/images/angular.png",
    "title": "jqueryMobile app",
    "sub": "jqueryMobile mobile template",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/jqueryMobile"
}, {
    "name": " javascript",
    "img": "static/images/jquery.png",
    "title": "materialize-angularjs-mobileApp",
    "sub": "materialize angularjs mobile app template",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/materialize-angularjs-mobileApp"
}, {
    "name": " javascript",
    "img": "static/images/angular.png",
    "title": "xdk-ready-mobile-cheatsheet-app",
    "sub": "xdk cheat-sheet mobile app built with jquery",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/xdk-ready-mobile-cheatsheet-app"
},{
    "name": " javascript",
    "img": "static/images/jquery.png",
    "title": "stylus-xdk-jquery-tutorial-app",
    "sub": "dynamic stylus tutorial mobile app built with jquery and xdk",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/stylus-xdk-jquery-tutorial-app"
},{
    "name": " javascript",
    "img": "static/images/angular.png",
    "title": "ruby-and-rails-tutorial-ionic-MobileApp",
    "sub": "ruby and ruby on rails angular mobile app built on ionic",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/ruby-and-rails-tutorial-ionic-MobileApp"
}, {
    "name": " javascript",
    "img": "static/images/jquery.png",
    "title": "Gradient-App",
    "sub": "JS Gradient APP",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/Gradient-App"
}, {
    "name": " javascript",
    "img": "static/images/jquery.png",
    "title": "angularjs-bootstrap-tutorial-mobileApp",
    "sub": "AngularJs bootstrap tutorial mobile app",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/angularjs-bootstrap-tutorial-mobileApp"
}, {
    "name": " javascript",
    "img": "static/images/jquery.png",
    "title": "simple-jquery-json-search",
    "sub": "simple json search via getJSON",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/simple-jquery-json-search"
}, {
    "name": " javascript",
    "img": "static/images/jquery.png",
    "title": "angularjs-bootstrap-starter-website",
    "sub": "angularjs starter webapp",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/angularjs-bootstrap-starter-website"
}];

var javascriptTemplates = [{
    "name": "",
    "img": "static/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}, {
    "name": "",
    "img": "static/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}, {
    "name": "",
    "img": "static/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}, {
    "name": "",
    "img": "static/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}, {
    "name": "",
    "img": "static/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}, {
    "name": "",
    "img": "static/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}, {
    "name": "",
    "img": "static/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}, {
    "name": "",
    "img": "static/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}, {
    "name": "",
    "img": "static/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}, {
    "name": "",
    "img": "static/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}, {
    "name": "",
    "img": "static/images/codepen-logo.svg",
    "title": "",
    "sub": "",
    "btnA": "Code",
    "hrefA": ""
}];

var phpProjects = [{
    "name": " PHP",
    "img": "static/images/php.png",
    "title": "material-design-php-file-management-cms",
    "sub": "material-design flat-file file management cms created with php",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/material-design-php-file-management-cms"
}, {
    "name": " PHP",
    "img": "static/images/php.png",
    "title": "laravel-media-hosting-webapp",
    "sub": "media hosting cms created with laravel",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/laravel-media-hosting-webapp"
}, {
    "name": " PHP",
    "img": "static/images/php.png",
    "title": "php-media-share-app",
    "sub": "media share app created with php",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/php-media-share-app"
}];

var pythonProjects = [{
    "name": "python",
    "img": "static/images/python.png",
    "title": "flask-jinja-greenshock-portfolio-webapp",
    "sub": "portfolio site created with flask, jinja and gsap",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/flask-jinja-greenshock-portfolio-webapp"
}, {
    "name": "python",
    "img": "static/images/python.png",
    "title": "python-flask-material-design-cms",
    "sub": "python material design cms created with flask",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/python-flask-material-design-cms"
}, {
    "name": "python",
    "img": "static/images/python.png",
    "title": "gulp-grunt-gui-task-runner",
    "sub": "simple gui for running gulp or grunt tasks",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/gulp-grunt-gui-task-runner"
}, {
    "name": "python",
    "img": "static/images/python.png",
    "title": "python-website-created-with-flask-and-jinja",
    "sub": "python website created with flask and jinja",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/python-website-created-with-flask-and-jinja"
}, {
    "name": "python",
    "img": "static/images/python.png",
    "title": "python-micro-twitter-clone",
    "sub": "python twitter clone built with web2py",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/python-micro-twitter-clone"
}, {
    "name": "python",
    "img": "static/images/python.png",
    "title": "python-blog",
    "sub": "python blog created with web2py",
    "btnA": "Code",
    "hrefA": "https://github.com/angeal185/python-blog"
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
}, ];


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
    "title": "GREENSHOCK",
    "percent": "70"
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
}, ];

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
    }

];

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

var resumeData = [{
    "title": "Employment History",
    "title2": "Academic Achievements",
}];

var workData = [{
    "date": " CURRENT - 2013",
    "title": "University Lecturer - computer science",
    "location": "Xingtai University China"
}, {
    "date": " CURRENT - 2006",
    "title": "Freelance Web Development",
    "location": ""
}, {
    "date": " 2010 - 2009",
    "title": "Computer Science Internship",
    "location": "Munich University of Applied Sciences Germany"
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