var slideTopData={},sidebarData={},mainContentData={},followData=[{title:" My Website",href:"#",class:"fa fa-bolt"},{title:" My Github",href:"https://github.com/angeal185/",class:"fa fa-github"},{title:" My Codepen",href:"http://codepen.io/angeal185/",class:"fa fa-codepen"},{title:" My linkedin",href:"https://au.linkedin.com/in/ben-eaves-996991125",class:"fa fa-linkedin"}],menuData=[{title:"PROFILE",idProj:"skills",idTemp:"resume",item1:"Skills",item2:"Resume"},{title:"NODEJS",idProj:"h-p",idTemp:"h-t",item1:"Projects",item2:""},{title:"JAVASCRIPT",idProj:"j-p",idTemp:"j-t",item1:"Projects",item2:"Codepen-list"},{title:"PYTHON",idProj:"py-p",idTemp:"py-t",item1:"Projects",item2:""},{title:"PHP",idProj:"p-p",item1:"Projects"}],headerMainRightData=[{href:"#",id:"wbs1",time:"7s"},{href:"http://codepen.io/angeal185/",id:"cdpt",time:"6s"},{href:"https://au.linkedin.com/in/ben-eaves-996991125",id:"lndt",time:"5s"}],indexHeader=[{title:"DASHBOARD",sub:""}],nodejsProj=[{title:"NODEJS",sub:"PROJECTS"}],javascriptProj=[{title:"JAVASCRIPT",sub:"PROJECTS"}],javascriptTemp=[{title:"JAVASCRIPT",sub:"CODEPEN"}],pythonProj=[{title:"PYTHON",sub:"PROJECTS"}],phpProj=[{title:"PHP",sub:"PROJECTS"}],timelineHeader=[{title:"TIMELINE",sub:""}],skillsProj=[{title:"PROFILE",sub:"SKILLS"}],resumeProj=[{title:"PROFILE",sub:"RESUME"}],nodejsProjects=[{name:"Nodejs",img:"app/images/nodejs.png",title:"nodejs-chat-room-app",sub:"nodejs chat app created with express, nunjucks, socket.io and materialize",btnA:"Code",hrefA:"https://github.com/angeal185/nodejs-chat-room-app"},{name:"Nodejs",img:"app/images/nodejs.png",title:"nodejs-nunjucks-express-project",sub:"nodejs portfolio type webapp with express nunjucks mongodb stylus and keystone admin",btnA:"Code",hrefA:"https://github.com/angeal185/nodejs-nunjucks-express-project"},{name:"Nodejs",img:"app/images/nodejs.png",title:"ghost-minify-output",sub:"ghost middleware to minify compiled handlebars output",btnA:"Code",hrefA:"https://github.com/angeal185/ghost-minify-output"},{name:"Nodejs",img:"app/images/nodejs.png",title:"nodejs-blog-website",sub:"node js blog created with total.js, jquery, bootstrap and stylus",btnA:"Code",hrefA:"https://github.com/angeal185/nodejs-blog-website-complete"},{name:"Nodejs",img:"app/images/nodejs.png",title:"nodejs-website-express-mongodb-nunjucks-passport-oauth-stylus",sub:"nodejs website built with express nunjucks mongodb stylus, using local and passport-oauth authentication",btnA:"Code",hrefA:"https://github.com/angeal185/nodejs-website-express-mongodb-nunjucks-passport-oauth-stylus"},{name:"Nodejs",img:"app/images/nodejs.png",title:"express-nunjucks-admin-template",sub:"nodejs express admin-template with nunjucks stylus mongodb and passport",btnA:"Code",hrefA:"https://github.com/angeal185/express-nunjucks-admin-template"},{name:"Nodejs",img:"app/images/nodejs.png",title:"nodejs-encrypted-chat",sub:"nodejs encrypted chat app using nunjucks, socket.io, require.js, jquery and materialize",btnA:"Code",hrefA:"https://github.com/angeal185/nodejs-encrypted-chat"},{name:"Nodejs",img:"app/images/nodejs.png",title:"mean-stack-portfolio-blog-app",sub:"mean-stack portfolio/blog website and cms using mongodb angularjs ejs bootstrap passport and disqus api",btnA:"Code",hrefA:"https://github.com/angeal185/mean-stack-portfolio-blog-app"},{name:"Nodejs",img:"app/images/nodejs.png",title:"express-nunjucks-agency-webapp",sub:"nodejs agency type website created with express, nunjucks and jquery",btnA:"Code",hrefA:"https://github.com/angeal185/express-nunjucks-agency-webapp"},{name:"Nodejs",img:"app/images/nodejs.png",title:"agency-webapp-created-with-koa.js-nunjucks-jquery",sub:"agency type webapp created using koa.js, nunjucks, jquery and bootstrap",btnA:"Code",hrefA:"https://github.com/angeal185/agency-webapp-created-with-koa.js-nunjucks-jquery"},{name:"Nodejs",img:"app/images/nodejs.png",title:"nodejs-material-design-flat-file-blog",sub:"material-design blog created with hexo, ejs stylus and bootstrap",btnA:"Code",hrefA:"https://github.com/angeal185/nodejs-material-design-flat-file-blog"},{name:"Nodejs",img:"app/images/nodejs.png",title:"mean-stack-microblog-starter-app",sub:"mean stack microblog starter",btnA:"Code",hrefA:"https://github.com/angeal185/mean-stack-microblog-starter-app"},{name:"Nodejs",img:"app/images/nodejs.png",title:"jade-one-page-portfolio-template",sub:"jade express stylus bootstrap jquery",btnA:"Code",hrefA:"https://github.com/angeal185/jade-one-page-portfolio-template"},{name:"Nodejs",img:"app/images/nodejs.png",title:"nodejs-twig-ecommerce-webapp",sub:"ecommerce webapp created using express, twig, uikit, jquery and stylus",btnA:"Code",hrefA:"https://github.com/angeal185/nodejs-twig-ecommerce-webapp"}],javascriptProjects=[{name:" javascript",img:"app/images/jquery.png",title:"dynamic-ajax-site-generator",sub:"dynamic ajax powered website generator using nunjucks, gulp, jquery and materialize",btnA:"Code",hrefA:"https://github.com/angeal185/dynamic-ajax-site-generator"},{name:" javascript",img:"app/images/angular.png",title:"angeal185.github.io",sub:"This website",btnA:"Code",hrefA:"https://github.com/angeal185/angeal185.github.io"},{name:" javascript",img:"app/images/jquery.png",title:"animated-agency-webapp-using-GSAP-threejs-json-jquery",sub:"flat-file webapp created using GSAP, threejs, json and jquery",btnA:"Code",hrefA:"https://github.com/angeal185/animated-agency-webapp-using-GSAP-threejs-json-jquery"},{name:" javascript",img:"app/images/angular.png",title:"jquery-audio-player",sub:"audio player created with jquery",btnA:"Code",hrefA:"https://github.com/angeal185/jquery-audio-player"},{name:" javascript",img:"app/images/jquery.png",title:"javascript-aes-encryption-decryption-app",sub:"encryption webapp using javascript",btnA:"Code",hrefA:"https://github.com/angeal185/javascript-aes-encryption-decryption-app"},{name:" javascript",img:"app/images/angular.png",title:"jquery-json-portfolio-webapp-with-audio",sub:"flat-file portfolio webapp created with jquery and json",btnA:"Code",hrefA:"https://github.com/angeal185/jquery-json-portfolio-webapp-with-audio"},{name:" javascript",img:"app/images/jquery.png",title:"json-coming-soon-template",sub:"coming soon template written in json, using foundation and jquery",btnA:"Code",hrefA:"https://github.com/angeal185/json-coming-soon-template"},{name:" javascript",img:"app/images/angular.png",title:"json-portfolio-template",sub:"Dynamic portfolio template written completely using json and jquery",btnA:"Code",hrefA:"https://github.com/angeal185/json-portfolio-template"},{name:" javascript",img:"app/images/jquery.png",title:"js-canvas-animations",sub:"my canvas animations",btnA:"Code",hrefA:"https://github.com/angeal185/js-canvas-animations"},{name:" javascript",img:"app/images/angular.png",title:"jquery-kenburns-coming-soon-template",sub:"webapp written in javascript",btnA:"Code",hrefA:"https://github.com/angeal185/jquery-kenburns-coming-soon-template"},{name:" javascript",img:"app/images/jquery.png",title:"dynamic-jquery-material-design-webapp",sub:"dynamic material design webapp",btnA:"Code",hrefA:"https://github.com/angeal185/dynamic-jquery-material-design-webapp"},{name:" javascript",img:"app/images/angular.png",title:"jquery-one-page-dynamic-website",sub:"one-page dynamic website template built using javascript",btnA:"Code",hrefA:"https://github.com/angeal185/jquery-one-page-dynamic-website"},{name:" javascript",img:"app/images/jquery.png",title:"responsive-one-page-parallax-agency-template",sub:"Responsive parallax webapp built with jquery",btnA:"Code",hrefA:"https://github.com/angeal185/responsive-one-page-parallax-agency-template"},{name:" javascript",img:"app/images/angular.png",title:"tempo.js-jquery-resume-webapp",sub:"resume webapp created with tempo.js and jquery",btnA:"Code",hrefA:"https://github.com/angeal185/tempo.js-jquery-resume-webapp"},{name:" javascript",img:"app/images/jquery.png",title:"Angularjs-materialize-mobile-template",sub:"mobile app template created with angularjs and materialize",btnA:"Code",hrefA:"https://github.com/angeal185/Angularjs-materialize-mobile-template"},{name:" javascript",img:"app/images/angular.png",title:"tempo.js-jquery-onepage-webapp",sub:"onepage coming-soon webapp created with tempo.js and jquery",btnA:"Code",hrefA:"https://github.com/angeal185/tempo.js-jquery-onepage-webapp"},{name:" javascript",img:"app/images/jquery.png",title:"json-compiler",sub:"convert html to json",btnA:"Code",hrefA:"https://github.com/angeal185/json-compiler"},{name:" javascript",img:"app/images/angular.png",title:"jquery-json-resume-webapp",sub:"resume type webapp created using jquery, json and stylus",btnA:"Code",hrefA:"https://github.com/angeal185/jquery-json-resume-webapp"},{name:" javascript",img:"app/images/jquery.png",title:"angular-ionic-booking-app",sub:"mobile booking app created with angular and ionic",btnA:"Code",hrefA:"https://github.com/angeal185/angular-ionic-booking-app"},{name:" javascript",img:"app/images/angular.png",title:"angularjs-mobile-app-using-ionic",sub:"Angular tutorial mobile app using angular and ionic",btnA:"Code",hrefA:"https://github.com/angeal185/angularjs-mobile-app-using-ionic"},{name:" javascript",img:"app/images/jquery.png",title:"js-encryption-webapp",sub:"simple aes javascript encryption application",btnA:"Code",hrefA:"https://github.com/angeal185/js-encryption-webapp"},{name:" javascript",img:"app/images/angular.png",title:"ionic-cordova-app",sub:"mobile app built with ionic",btnA:"Code",hrefA:"https://github.com/angeal185/ionic-cordova-app"},{name:" javascript",img:"app/images/jquery.png",title:"AngularJS-Ionic-tutorial-app",sub:"ionic tutorial mobile app",btnA:"Code",hrefA:"https://github.com/angeal185/AngularJS-Ionic-tutorial-app"},{name:" javascript",img:"app/images/angular.png",title:"angularjs-python-tutorial-mobile-app",sub:"angularjs python tutorial mobile app built with ionic",btnA:"Code",hrefA:"https://github.com/angeal185/angularjs-python-tutorial-mobile-app"},{name:" javascript",img:"app/images/jquery.png",title:"angularjs-xdk-mobile-quiz-app",sub:"mobile ready quiz app created with angularjs and intel xdk",btnA:"Code",hrefA:"https://github.com/angeal185/angularjs-xdk-mobile-quiz-app"},{name:" javascript",img:"app/images/angular.png",title:"Color-Picker-App",sub:"js Color Picker App",btnA:"Code",hrefA:"https://github.com/angeal185/Color-Picker-App"},{name:" javascript",img:"app/images/jquery.png",title:"jquery-dynamic-documentation-starter",sub:"jquery one page dynamic documentation starter app",btnA:"Code",hrefA:"https://github.com/angeal185/jquery-dynamic-documentation-starter"},{name:" javascript",img:"app/images/angular.png",title:"jqueryMobile app",sub:"jqueryMobile mobile template",btnA:"Code",hrefA:"https://github.com/angeal185/jqueryMobile"},{name:" javascript",img:"app/images/jquery.png",title:"materialize-angularjs-mobileApp",sub:"materialize angularjs mobile app template",btnA:"Code",hrefA:"https://github.com/angeal185/materialize-angularjs-mobileApp"},{name:" javascript",img:"app/images/angular.png",title:"xdk-ready-mobile-cheatsheet-app",sub:"xdk cheat-sheet mobile app built with jquery",btnA:"Code",hrefA:"https://github.com/angeal185/xdk-ready-mobile-cheatsheet-app"},{name:" javascript",img:"app/images/jquery.png",title:"stylus-xdk-jquery-tutorial-app",sub:"dynamic stylus tutorial mobile app built with jquery and xdk",btnA:"Code",hrefA:"https://github.com/angeal185/stylus-xdk-jquery-tutorial-app"},{name:" javascript",img:"app/images/angular.png",title:"ruby-and-rails-tutorial-ionic-MobileApp",sub:"ruby and ruby on rails angular mobile app built on ionic",btnA:"Code",hrefA:"https://github.com/angeal185/ruby-and-rails-tutorial-ionic-MobileApp"},{name:" javascript",img:"app/images/jquery.png",title:"Gradient-App",sub:"JS Gradient APP",btnA:"Code",hrefA:"https://github.com/angeal185/Gradient-App"},{name:" javascript",img:"app/images/jquery.png",title:"angularjs-bootstrap-tutorial-mobileApp",sub:"AngularJs bootstrap tutorial mobile app",btnA:"Code",hrefA:"https://github.com/angeal185/angularjs-bootstrap-tutorial-mobileApp"},{name:" javascript",img:"app/images/jquery.png",title:"simple-jquery-json-search",sub:"simple json search via getJSON",btnA:"Code",hrefA:"https://github.com/angeal185/simple-jquery-json-search"},{name:" javascript",img:"app/images/jquery.png",title:"angularjs-bootstrap-starter-website",sub:"angularjs starter webapp",btnA:"Code",hrefA:"https://github.com/angeal185/angularjs-bootstrap-starter-website"}],javascriptTemplates=[{name:"",img:"app/images/codepen-logo.svg",title:"",sub:"",btnA:"Code",hrefA:""},{name:"",img:"app/images/codepen-logo.svg",title:"",sub:"",btnA:"Code",hrefA:""},{name:"",img:"app/images/codepen-logo.svg",title:"",sub:"",btnA:"Code",hrefA:""},{name:"",img:"app/images/codepen-logo.svg",title:"",sub:"",btnA:"Code",hrefA:""},{name:"",img:"app/images/codepen-logo.svg",title:"",sub:"",btnA:"Code",hrefA:""},{name:"",img:"app/images/codepen-logo.svg",title:"",sub:"",btnA:"Code",hrefA:""},{name:"",img:"app/images/codepen-logo.svg",title:"",sub:"",btnA:"Code",hrefA:""},{name:"",img:"app/images/codepen-logo.svg",title:"",sub:"",btnA:"Code",hrefA:""},{name:"",img:"app/images/codepen-logo.svg",title:"",sub:"",btnA:"Code",hrefA:""},{name:"",img:"app/images/codepen-logo.svg",title:"",sub:"",btnA:"Code",hrefA:""},{name:"",img:"app/images/codepen-logo.svg",title:"",sub:"",btnA:"Code",hrefA:""}],phpProjects=[{name:" PHP",img:"app/images/php.png",title:"material-design-php-file-management-cms",sub:"material-design flat-file file management cms created with php",btnA:"Code",hrefA:"https://github.com/angeal185/material-design-php-file-management-cms"},{name:" PHP",img:"app/images/php.png",title:"laravel-media-hosting-webapp",sub:"media hosting cms created with laravel",btnA:"Code",hrefA:"https://github.com/angeal185/laravel-media-hosting-webapp"},{name:" PHP",img:"app/images/php.png",title:"php-media-share-app",sub:"media share app created with php",btnA:"Code",hrefA:"https://github.com/angeal185/php-media-share-app"}],pythonProjects=[{name:"python",img:"app/images/python.png",title:"flask-jinja-greenshock-portfolio-webapp",sub:"portfolio site created with flask, jinja and gsap",btnA:"Code",hrefA:"https://github.com/angeal185/flask-jinja-greenshock-portfolio-webapp"},{name:"python",img:"app/images/python.png",title:"python-flask-material-design-cms",sub:"python material design cms created with flask",btnA:"Code",hrefA:"https://github.com/angeal185/python-flask-material-design-cms"},{name:"python",img:"app/images/python.png",title:"gulp-grunt-gui-task-runner",sub:"simple gui for running gulp or grunt tasks",btnA:"Code",hrefA:"https://github.com/angeal185/gulp-grunt-gui-task-runner"},{name:"python",img:"app/images/python.png",title:"python-website-created-with-flask-and-jinja",sub:"python website created with flask and jinja",btnA:"Code",hrefA:"https://github.com/angeal185/python-website-created-with-flask-and-jinja"},{name:"python",img:"app/images/python.png",title:"python-micro-twitter-clone",sub:"python twitter clone built with web2py",btnA:"Code",hrefA:"https://github.com/angeal185/python-micro-twitter-clone"},{name:"python",img:"app/images/python.png",title:"python-blog",sub:"python blog created with web2py",btnA:"Code",hrefA:"https://github.com/angeal185/python-blog"}],skillsTemplateData=[{title:"CODE SKILLS",idLeft:"codeLeft",idRight:"codeRight",subtitle:"A list of the code that i am most familiar with"},{title:"FRAMEWORKS",idLeft:"skillsLeft",idRight:"skillsRight",subtitle:"A list of the frameworks that i am most familiar with"},{title:"DB SKILLS",idLeft:"dbLeft",idRight:"dbRight",subtitle:"A list of the db types that i am most familiar with"},{title:"CMS SKILLS",idLeft:"CMSLeft",idRight:"CMSRight",subtitle:"CMS development and design"},{title:"OS SKILLS",idLeft:"OSLeft",idRight:"OSRight",subtitle:"A list of the OS types that i am most familiar with"},{title:"OTHER SKILLS",idLeft:"otherLeft",idRight:"otherRight",subtitle:"A list of other skills that i am most familiar with"}],codeLeftData=[{title:"JAVASCRIPT",percent:"95"},{title:"NODEJS",percent:"95"},{title:"CSS",percent:"100"},{title:"STYLUS",percent:"100"},{title:"XML",percent:"70"},{title:"PHP",percent:"50"},{title:"BASH",percent:"80"},{title:"PUG",percent:"70"},{title:"DUST",percent:"70"},{title:"HANDLEBARS",percent:"95"},{title:"MUSTACHE",percent:"70"},{title:"COFFEESCRIPT",percent:"90"}],codeRightData=[{title:"HTML",percent:"100"},{title:"PYTHON",percent:"90"},{title:"JSON",percent:"90"},{title:"SCSS",percent:"80"},{title:"LESS",percent:"80"},{title:"CMD",percent:"80"},{title:"NUNJUCKS",percent:"100"},{title:"JINJA",percent:"100"},{title:"DJANGO-TPL",percent:"90"},{title:"TWIG",percent:"90"},{title:"EJS",percent:"80"},{title:"BABEL",percent:"70"}],skillsLeftData=[{title:"JQUERY",percent:"100"},{title:"ANGULAR.JS",percent:"100"},{title:"SOCKET.IO",percent:"90"},{title:"SAILS.JS",percent:"90"},{title:"TOTAL.JS",percent:"90"},{title:"HAPI.JS",percent:"80"},{title:"KOA.JS",percent:"75"},{title:"ADONIS.JS",percent:"85"},{title:"THREE.JS",percent:"70"},{title:"GREENSOCK",percent:"70"},{title:"KNOCKOUT.js",percent:"75"},{title:"TWEEN.JS",percent:"70"},{title:"DJANGO",percent:"80"},{title:"WEB2PY",percent:"80"},{title:"JQUERYMOBILE",percent:"90"},{title:"CATBERRY",percent:"70"},{title:"WE.JS",percent:"70"},{title:"CODEIGNITER",percent:"55"},{title:"SEMANTIC",percent:"90"},{title:"UIKIT",percent:"90"},{title:"MATERIALIZE",percent:"90"}],skillsRightData=[{title:"MEAN.IO",percent:"95"},{title:"EXPRESS.JS",percent:"95"},{title:"MEAN.JS",percent:"95"},{title:"EMBER.JS",percent:"90"},{title:"METEOR",percent:"80"},{title:"DERBY.JS",percent:"80"},{title:"IONIC",percent:"95"},{title:"CORDOVA",percent:"90"},{title:"FLASK",percent:"100"},{title:"JQUERYUI",percent:"90"},{title:"REACTIVE.JS",percent:"80"},{title:"POLYMER",percent:"70"},{title:"VUE.JS",percent:"70"},{title:"BACKBONE",percent:"65"},{title:"KEYSTONE",percent:"90"},{title:"MITHRIL",percent:"70"},{title:"SYMFONY",percent:"55"},{title:"LARAVEL",percent:"50"},{title:"BOOTSTRAP",percent:"100"},{title:"FOUNDATION",percent:"85"},{title:"SKELETON",percent:"70"}],dbLeftData=[{title:"MONGODB",percent:"90"},{title:"COUCHDB",percent:"80"},{title:"MYSQL",percent:"65"},{title:"REDIS",percent:"70"}],dbRightData=[{title:"SQLITE",percent:"80"},{title:"NOSQL EMBEDDED DB",percent:"80"},{title:"REASONDB",percent:"60"},{title:"POSTGRESQL",percent:"60"}],CMSLeftData=[{title:"CODY",percent:"90"},{title:"TARACOT",percent:"80"},{title:"KEYSTONE CMS",percent:"90"},{title:"PENCILBLUE",percent:"80"},{title:"DJANGO CMS",percent:"95"},{title:"OCTOBER CMS",percent:"80"},{title:"PHPBB",percent:"80"},{title:"GRAV",percent:"95"},{title:"WAGTAIL",percent:"70"},{title:"GHOST",percent:"100"},{title:"OXWALL",percent:"60"},{title:"MAGENTO",percent:"65"}],CMSRightData=[{title:"APOSTROPHE",percent:"90"},{title:"ULBORA",percent:"80"},{title:"NODEBB",percent:"85"},{title:"MEZZANINE",percent:"90"},{title:"WORDPRESS",percent:"80"},{title:"DRUPAL",percent:"70"},{title:"JOOMLA",percent:"65"},{title:"BOLT",percent:"80"},{title:"MODX",percent:"80"},{title:"MOODLE",percent:"85"},{title:"PYRO",percent:"65"},{title:"OPENCART",percent:"65"}],OSLeftData=[{title:"UBUNTU",percent:"90"},{title:"SUSE",percent:"80"},{title:"FENDORA",percent:"70"},{title:"KALI",percent:"80"}],OSRightData=[{title:"WINDOWS(ALL)",percent:"100"},{title:"OSX",percent:"50"},{title:"DEBIAN",percent:"70"},{title:"MINT",percent:"60"}],otherLeftData=[{title:"GULP",percent:"100"},{title:"NPM",percent:"100"},{title:"COMPOSER",percent:"60"},{title:"SEO",percent:"90"},{title:"AWS",percent:"50"},{title:"DOCKER",percent:"50"},{title:"DIGITALOCEAN",percent:"60"},{title:"AZURE",percent:"40"},{title:"BITBUCKET",percent:"70"}],otherRightData=[{title:"GRUNT",percent:"90"},{title:"BOWER",percent:"100"},{title:"WEBPACK",percent:"70"},{title:"RESTFUL API",percent:"90"},{title:"HEROKU",percent:"80"},{title:"BITNAMI",percent:"60"},{title:"FIREBASE",percent:"60"},{title:"GITHUB",percent:"100"},{title:"GITLAB",percent:"90"}],resumeData=[{title:"Employment History",title2:"Academic Achievements"}],workData=[{date:" CURRENT - 2013",title:"University Lecturer - computer science",location:"Xingtai University China"},{date:" CURRENT - 2006",title:"Freelance Web Development",location:""},{date:" 2010 - 2009",title:"Computer Science Internship",location:"Munich University of Applied Sciences Germany"}],eduData=[{date:" 2012 - 2010",title:"Master of Computer Science",location:"University of Newcastle, Sydney, Australia"},{date:" 2008 - 2005",title:"Bachelor's Degree in Computer Science",location:"University of Newcastle, Sydney, Australia"}],slideTop={"<>":"div",id:"slidetop",class:"ani flash","data-ani-duration":"6s","data-ani-delay":"6s",html:[{"<>":"div",class:"container",style:"display: none",html:[{"<>":"div",class:"row",html:[{"<>":"div",id:"topA",class:"col-md-4",html:[{"<>":"p",html:"..."},{"<>":"br",html:""},{"<>":"p",html:"SITE IS UNDER CONSTRUCTION"}]},{"<>":"div",id:"topB",class:"col-md-4",html:[{"<>":"ul",id:"follow",class:"list-unstyled",html:""}]},{"<>":"div",id:"topC",class:"col-md-4",html:[{"<>":"ul",class:"list-unstyled",html:[{"<>":"li",html:[{"<>":"b",html:"Address:"},{"<>":"p",html:"Melbourne, Australia"}]},{"<>":"li",html:[{"<>":"b",html:"Email:"},{"<>":"br",html:""},{"<>":"a",id:"mt",html:""}]}]}]}]}]},{"<>":"a",class:"slidetop-toggle",html:""}]},sidebar={"<>":"div",class:"sidebar",html:[{"<>":"div",class:"logopanel",html:[{"<>":"h1",style:"text-align:center",html:"GITHUB"}]},{"<>":"div",class:"sidebar-inner",html:[{"<>":"div",class:"sidebar-top small-img clearfix",style:"display: block",html:[{"<>":"div",class:"user-image",html:[{"<>":"img",id:"imgh",html:""}]},{"<>":"div",class:"user-details",html:[{"<>":"h4",html:"ANGEAL"},{"<>":"div",id:"usr",class:"user-login",html:""}]}]},{"<>":"div",class:"menu-title",html:[{"<>":"span",html:"Navigation"},{"<>":"div",class:"pull-right menu-settings",html:[{"<>":"a",id:"hide-top-sidebar",title:"hide",class:"hide-top-sidebar",html:[{"<>":"i",class:"fa fa-cog",html:""}]}]}]},{"<>":"ul",id:"menu",class:"nav nav-sidebar",html:[{"<>":"li",class:"tm nav-parent",html:[{"<>":"a",id:"indx",html:[{"<>":"i",class:"fa fa-tachometer c-primary",html:""},{"<>":"span",html:"Index"}]}]}]},{"<>":"div",html:""},{"<>":"div",class:"sidebar-footer clearfix",html:[{"<>":"a",id:"ctm",html:[{"<>":"i",class:"fa fa-envelope-o",html:""}]},{"<>":"a",id:"fsc",html:[{"<>":"i",class:"fa fa-arrows-alt",html:""}]}]}]}]},mainContent={"<>":"div",class:"main-content",html:[{"<>":"div",class:"topbar",html:[{"<>":"div",class:"header-left",style:"display: block",html:[{"<>":"div",class:"topnav",html:[{"<>":"a",class:"menutoggle","data-toggle":"sidebar-collapsed",html:[{"<>":"span",class:"menu__handle",html:[{"<>":"span",html:"Menu"}]}]}]},{"<>":"ul",id:"headerLeft",class:"header-menu nav navbar-nav",html:""}]},{"<>":"div",class:"topnav",html:[{"<>":"div",class:"header-right",html:[{"<>":"ul",id:"headerRight",class:"header-menu nav navbar-nav",html:""}]}]}]},{"<>":"div",id:"pagecontainer",html:""},{"<>":"div",id:"footer",class:"copyright col-md-12",html:""},{"<>":"a",class:"scrollup",html:[{"<>":"i",class:"fa fa-angle-up",html:""}]}]},follow={"<>":"li",html:[{"<>":"a",href:"${href}",target:"_blank",html:[{"<>":"i",class:"${class}",html:[{"<>":"span",html:"${title}"}]}]}]},menu={"<>":"li",class:"tm nav-parent",html:[{"<>":"a",html:[{"<>":"i",class:"fa fa-code c-fourth",html:""},{"<>":"span",html:"${title}"},{"<>":"span",class:"fa arrow",html:""}]},{"<>":"ul",class:"children collapse",html:[{"<>":"li",html:[{"<>":"a",id:"${idProj}",html:"${item1}"}]},{"<>":"li",html:[{"<>":"a",id:"${idTemp}",html:"${item2}"}]}]}]},headerMain={"<>":"li",html:[{"<>":"a",href:"${href}",target:"_blank",html:[{"<>":"i",id:"${id}","data-ani-delay":"${time}",html:""}]}]},header={"<>":"div",class:"row",html:[{"<>":"div",class:"col-md-12",html:[{"<>":"div",class:"header",html:[{"<>":"h2",class:"c-primary",html:"${title}:${sub}"},{"<>":"div",class:"breadcrumb-wrapper",html:[{"<>":"ol",class:"breadcrumb",html:[{"<>":"li",class:"c-third",html:"${title}"}]}]},{"<>":"p",style:"display: block",html:"${title} ${sub} LIST"}]}]}]},template={"<>":"div",class:"row",html:[{"<>":"div",class:"col-md-6",html:[{"<>":"div",class:"fileinput fileinput-new","data-provides":"fileinput",html:[{"<>":"div",class:"text",html:[{"<>":"img",class:"img-demo",src:"${img}",html:"${name}"}]}]}]},{"<>":"div",class:"col-md-6",html:[{"<>":"div",class:"panel",html:[{"<>":"div",class:"panel-content",html:[{"<>":"h3",class:"c-primary",html:"${title}"},{"<>":"p",class:"m-t-40",html:"${sub}"}]},{"<>":"div",class:"panel-footer clearfix",html:[{"<>":"div",class:"pull-right",html:[{"<>":"a",href:"${hrefA}",target:"_blank",html:[{"<>":"button",type:"button",class:"btn btn-white m-r-10",formaction:"${hrefA}",html:"${btnA}"}]}]}]}]}]}]},skillsTemplate=[{"<>":"h2",class:"skills-title c-primary  ani fadeIn",html:"${title}"},{"<>":"h3",class:"skills-title",html:"${subtitle}"},{"<>":"div",class:"row",html:[{"<>":"div",class:"col-md-6",html:[{"<>":"ul",id:"${idLeft}",class:"skillsBar",html:""}]},{"<>":"div",class:"col-md-6",html:[{"<>":"ul",id:"${idRight}",class:"skillsBar",html:""},{"<>":"br",html:""}]}]}],skills={"<>":"li",class:"ani fadeIn",html:[{"<>":"h4",html:"${title}"},{"<>":"div",class:"bar_container",html:[{"<>":"span",class:"bar","data-bar":"{}",html:[{"<>":"span",class:"pct",html:"${percent}%"}]}]}]},apiSkills={"<>":"li",class:"ani fadeIn animated",html:[{"<>":"h4",html:"${title}"},{"<>":"hr",html:""}]},resume={"<>":"div",class:"row panel",style:"padding: 100px;margin-top: 200px;",html:[{"<>":"div",class:"col-md-12 col-sm-12",style:"height:40px;",html:""},{"<>":"div",class:"container",html:[{"<>":"div",class:"text-center ani fadeIn",html:[{"<>":"h2",class:"c-primary",html:"Ben Eaves"},{"<>":"br",html:""},{"<>":"h2",html:"${title}"}]},{"<>":"hr",html:""}]},{"<>":"div",class:"container",html:[{"<>":"div",id:"work",html:""}]},{"<>":"div",class:"container",html:[{"<>":"div",class:"text-center",html:[{"<>":"h2",html:"${title2}"}]},{"<>":"hr",html:""}]},{"<>":"div",class:"container",html:[{"<>":"div",id:"edu",html:""}]}]},work=[{"<>":"div",class:"block",html:[{"<>":"h3",html:"${date}"},{"<>":"h2",class:"ani fadeIn c-primary",html:"${title}"},{"<>":"p",html:"${location}"}]},{"<>":"br",html:""},{"<>":"br",html:""}],edu={"<>":"div",class:"block",html:[{"<>":"h3",html:"${date}"},{"<>":"h2",class:" ani  fadeIn c-primary",html:"${title}"},{"<>":"p",html:"${location}"},{"<>":"br",html:""},{"<>":"br",html:""}]},codePenTpl=[{"<>":"div",class:"row text",style:"width: 100%;margin:50px 0;",html:[{"<>":"img",class:"img-demo",src:"app/images/codepen-logo.svg",html:""}]},{"<>":"div",class:"container panel list-view pen-grid",style:"padding:60px",html:[{"<>":"div",class:"pens-in-list-view-wrap",html:[{"<>":"table",class:"pens-in-list-view",html:[{"<>":"thead",html:[{"<>":"tr",html:[{"<>":"th",class:"title-header",html:"Codepen Portfolio"},{"<>":"th",class:"sort-created_at",html:"Created"},{"<>":"th",class:"sort-updated_at sorted_desc",html:"Last Updated"}]}]},{"<>":"tbody",id:"codePen",html:""}]}]}]}],codePen={"<>":"tr",class:"pen-in-list-view",html:[{"<>":"td",class:"title",html:[{"<>":"a",href:"${href}",target:"_blank",html:"${name}"}]},{"<>":"td",class:"date",title:"Created on ${date}",html:"${date}"},{"<>":"td",class:"date",title:"Last updated on ${update}",html:"${update}"}]},codePenTplData=[{}],codePenData=[{href:"http://codepen.io/angeal185/pen/wWbXWw",name:"image zoom",date:"August 23, 2016",update:"November 16, 2016"},{href:"http://codepen.io/angeal185/pen/ZBNVVN",name:"animated canvas bubbles",date:"December 26, 2016",update:"January 25, 2017"},{href:"http://codepen.io/angeal185/pen/rLgGLj",name:"bootstrap social login with particle background",date:"August 22, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/ozoxzd",name:"animated canvas backgrounds",date:"October 03, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/bZyoaE",name:"social icons",date:"August 22, 2016",update:"October 10, 2016"},{href:"http://codepen.io/angeal185/pen/ZpjdpN",name:"jquery overlay menu",date:"October 15, 2016",update:"October 15, 2016"},{href:"http://codepen.io/angeal185/pen/dXmPPm",name:"Sidebar Animations",date:"July 20, 2016",update:"December 24, 2016"},{href:"http://codepen.io/angeal185/pen/ZONAdo",name:"transitional hover overlay effects",date:"August 23, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/ozvzKY",name:"Js Ken Burns",date:"August 30, 2016",update:"December 26, 2016"},{href:"http://codepen.io/angeal185/pen/dpyLYA",name:"interactive site map",date:"September 03, 2016",update:"December 23, 2016"},{href:"http://codepen.io/angeal185/pen/vXaoga",name:"jquery folding panel",date:"October 15, 2016",update:"January 03, 2017"},{href:"http://codepen.io/angeal185/pen/WRgNBJ",name:"blood cell animated canvas",date:"February 07, 2017",update:"February 08, 2017"},{href:"http://codepen.io/angeal185/pen/rrAYOR",name:"jquery sliding menu",date:"October 14, 2016",update:"October 15, 2016"},{href:"http://codepen.io/angeal185/pen/EyzmrZ",name:"css image display spinner",date:"August 22, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/JKqyaJ",name:"bootstrap login form",date:"August 22, 2016",update:"January 12, 2017"},{href:"http://codepen.io/angeal185/pen/akAwRb",name:"responsive transitional css image grid",date:"August 22, 2016",update:"October 10, 2016"},{href:"http://codepen.io/angeal185/pen/rLgzmN",name:"bootstrap mobile responsive menu",date:"August 22, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/jrzvBL",name:"hover blur effect",date:"October 10, 2016",update:"December 23, 2016"},{href:"http://codepen.io/angeal185/pen/YGOqKg",name:"animated dots jquery canvas plugin",date:"October 16, 2016",update:"October 28, 2016"},{href:"http://codepen.io/angeal185/pen/NAQjWo",name:"jquery slider",date:"August 27, 2016",update:"November 08, 2016"},{href:"http://codepen.io/angeal185/pen/PGMKZy",name:"jquery slide down navigation",date:"November 01, 2016",update:"November 01, 2016"},{href:"http://codepen.io/angeal185/pen/XKwZGY",name:"bootstrap social hover links",date:"August 22, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/dpmjxA",name:"jquery sliding side panel",date:"October 10, 2016",update:"October 10, 2016"},{href:"http://codepen.io/angeal185/pen/ZONXEL",name:"bootstrap contact form",date:"August 22, 2016",update:"October 12, 2016"},{href:"http://codepen.io/angeal185/pen/ALPEdR",name:"Embeded content Popup Modal",date:"October 16, 2016",update:"October 16, 2016"},{href:"http://codepen.io/angeal185/pen/XjVzqP",name:"css only button animations",date:"October 05, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/ObJpPz",name:"Random Javascript password generator",date:"November 04, 2016",update:"November 04, 2016"},{href:"http://codepen.io/angeal185/pen/vKRaEX",name:"AES JS Encryption APP",date:"July 21, 2016",update:"October 10, 2016"},{href:"http://codepen.io/angeal185/pen/bwLVYZ",name:"icon glitch on hover",date:"October 06, 2016",update:"January 31, 2017"},{href:"http://codepen.io/angeal185/pen/zBQzjV",name:"balls",date:"August 22, 2016",update:"October 17, 2016"},{href:"http://codepen.io/angeal185/pen/grJKEp",name:"css animated clouds",date:"August 23, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/xEPVvy",name:"icon menu",date:"October 03, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/bBdXWr",name:"simple jquery slider",date:"November 08, 2016",update:"November 08, 2016"},{href:"http://codepen.io/angeal185/pen/RRrxrv",name:"Hex to Decimal",date:"July 21, 2016",update:"October 16, 2016"},{href:"http://codepen.io/angeal185/pen/RoNYMg",
name:"jquery responsive image grid",date:"November 07, 2016",update:"November 07, 2016"},{href:"http://codepen.io/angeal185/pen/wzwrOj",name:"particleBlur",date:"August 30, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/rrpJVa",name:"hamburger menu toggle animations",date:"October 05, 2016",update:"October 15, 2016"},{href:"http://codepen.io/angeal185/pen/OXZmjZ",name:"JS Hangman",date:"August 25, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/LRBGxm",name:"simple signup form",date:"October 14, 2016",update:"October 15, 2016"},{href:"http://codepen.io/angeal185/pen/jrPORb",name:"js loader",date:"September 07, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/QERxPp",name:"QERxPp",date:"August 23, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/LbYyZd",name:"jquery animated login form",date:"November 04, 2016",update:"November 04, 2016"},{href:"http://codepen.io/angeal185/pen/KrLBqo",name:"link animate on hover",date:"August 23, 2016",update:"November 06, 2016"},{href:"http://codepen.io/angeal185/pen/oYgGxo",name:"particle animation",date:"November 06, 2016",update:"November 07, 2016"},{href:"http://codepen.io/angeal185/pen/dpyLWB",name:"gradient bubble animation",date:"September 03, 2016",update:"January 19, 2017"},{href:"http://codepen.io/angeal185/pen/KgwkPg",name:"KgwkPg",date:"September 05, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/GrXvrM",name:"star particle animated gradient canvas",date:"February 08, 2017",update:"February 08, 2017"},{href:"http://codepen.io/angeal185/pen/zKLVVB",name:"jquery overlay sliding svg navigation",date:"October 15, 2016",update:"October 15, 2016"},{href:"http://codepen.io/angeal185/pen/vKqkZO",name:"vKqkZO",date:"August 25, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/bZyjQL",name:"canvas animate",date:"August 23, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/XjVzxx",name:"bottom bar slider",date:"October 05, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/WGZGBg",name:"WGZGBg",date:"August 30, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/JKqNbv",name:"css flip cards",date:"August 22, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/GrvEZg",name:"animated canvas bubbles(css)",date:"January 25, 2017",update:"January 25, 2017"},{href:"http://codepen.io/angeal185/pen/PGRRwX",name:"custom scrollbar template",date:"October 10, 2016",update:"November 08, 2016"},{href:"http://codepen.io/angeal185/pen/ORyKoK",name:"ORyKoK",date:"September 12, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/yJWzmp",name:"yJWzmp",date:"August 22, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/WGdzLE",name:"jquery slide on hover footer",date:"October 05, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/ORBQGX",name:"JS word animation",date:"October 18, 2016",update:"October 18, 2016"},{href:"http://codepen.io/angeal185/pen/YWbkdv",name:"3d ... ish css flip animation",date:"August 22, 2016",update:"October 28, 2016"},{href:"http://codepen.io/angeal185/pen/GrXJOL",name:"calm animated particle background",date:"February 07, 2017",update:"February 19, 2017"},{href:"http://codepen.io/angeal185/pen/wovpMj",name:"Simple Email Validation",date:"November 04, 2016",update:"November 04, 2016"},{href:"http://codepen.io/angeal185/pen/qaOkPz",name:"canvas loader",date:"September 09, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/eBmRoQ",name:"canvas triangular particle animation",date:"November 06, 2016",update:"January 25, 2017"},{href:"http://codepen.io/angeal185/pen/dpKYKm",name:"responsive dummy image",date:"October 12, 2016",update:"November 03, 2016"},{href:"http://codepen.io/angeal185/pen/ZpgyOw",name:"Full screen jquery slide navigation",date:"November 01, 2016",update:"November 01, 2016"},{href:"http://codepen.io/angeal185/pen/YGOzPW",name:"css loader of hell",date:"October 15, 2016",update:"October 15, 2016"},{href:"http://codepen.io/angeal185/pen/LkoOaN",name:"bootstrap mobile iframe and Carousel preview",date:"August 23, 2016",update:"August 23, 2016"},{href:"http://codepen.io/angeal185/pen/GqbENp",name:"password protected",date:"August 25, 2016",update:"August 25, 2016"},{href:"http://codepen.io/angeal185/pen/yavqXr",name:"yavqXr",date:"October 07, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/rWgoJb",name:"animated hex canvas",date:"December 26, 2016",update:"December 26, 2016"},{href:"http://codepen.io/angeal185/pen/oBMKLY",name:"css background gradient animation",date:"February 07, 2017",update:"February 07, 2017"},{href:"http://codepen.io/angeal185/pen/bBNoQN",name:"flashing elements",date:"November 06, 2016",update:"November 07, 2016"},{href:"http://codepen.io/angeal185/pen/LRdBXJ",name:"webkit scrollbar simple",date:"October 10, 2016",update:"October 10, 2016"},{href:"http://codepen.io/angeal185/pen/GjXkdk",name:"Drag element",date:"October 16, 2016",update:"October 16, 2016"},{href:"http://codepen.io/angeal185/pen/BQyqRb",name:"jquery animated starfield",date:"November 07, 2016",update:"February 25, 2017"},{href:"http://codepen.io/angeal185/pen/ALzLNm",name:"css pagination",date:"October 26, 2016",update:"November 01, 2016"},{href:"http://codepen.io/angeal185/pen/yaxORj",name:"yaxORj",date:"October 16, 2016",update:"October 16, 2016"},{href:"http://codepen.io/angeal185/pen/rLgYZK",name:"animated css loaders",date:"August 22, 2016",update:"January 09, 2017"},{href:"http://codepen.io/angeal185/pen/pbmxGw",name:"pbmxGw",date:"August 23, 2016",update:"October 11, 2016"},{href:"http://codepen.io/angeal185/pen/pROvYo",name:"animated attract triangle canvas",date:"February 07, 2017",update:"February 07, 2017"},{href:"http://codepen.io/angeal185/pen/pROWzo",name:"animated fireworks canvas",date:"February 08, 2017",update:"February 08, 2017"},{href:"http://codepen.io/angeal185/pen/mOPpEg",name:"mOPpEg",date:"November 13, 2016",update:"November 13, 2016"},{href:"http://codepen.io/angeal185/pen/gLbGXq",name:"bubble",date:"November 06, 2016",update:"December 23, 2016"},{href:"http://codepen.io/angeal185/pen/dOPVMJ",name:"dOPVMJ",date:"November 06, 2016",update:"November 06, 2016"},{href:"http://codepen.io/angeal185/pen/ZBYqGG",name:"alert on resize function",date:"November 07, 2016",update:"November 07, 2016"},{href:"http://codepen.io/angeal185/pen/RoWbGj",name:"RoWbGj",date:"November 08, 2016",update:"November 08, 2016"},{href:"http://codepen.io/angeal185/pen/NRgVzv",name:"NRgVzv",date:"September 29, 2016",update:"September 29, 2016"},{href:"http://codepen.io/angeal185/pen/LbYWLx",name:"Javascript Calculator With Memory",date:"November 04, 2016",update:"November 04, 2016"},{href:"http://codepen.io/angeal185/pen/LbEzNz",name:"LbEzNz",date:"November 06, 2016",update:"November 06, 2016"},{href:"http://codepen.io/angeal185/pen/KrovAN",name:"escape and encode",date:"July 21, 2016",update:"October 16, 2016"},{href:"http://codepen.io/angeal185/pen/KrjqVv",name:"KrjqVv",date:"August 25, 2016",update:"August 25, 2016"},{href:"http://codepen.io/angeal185/pen/ALrzPo",name:"ALrzPo",date:"September 29, 2016",update:"September 29, 2016"}];