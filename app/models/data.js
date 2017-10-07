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
