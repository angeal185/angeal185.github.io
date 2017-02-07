﻿//routes
$(function() {
		$('#pagecontainer').load('views/page/index.tpl', function() {
		$('#dash').jsonRender(indexHeader,header),
		$('#dash .row').css('height','1200px'),
		$(document).prop('title', 'Dashboard'),
			toastr.success('DASHBOARD');
		});
	});

$(function(){
	$('#indx').click(function(){
		$('#pagecontainer').load('views/page/index.tpl', function() {
		$('#dash').jsonRender(indexHeader,header),
		$('#dash .row').css('height','1200px'),
		$(document).prop('title', 'Dashboard'),
			toastr.success('DASHBOARD');
		});
	});
});

$(function(){
	$('#h-p').click(function(){
		$('#pagecontainer').load('views/page/nodejs-projects.tpl', function() {
			$('#hp01').jsonRender(nodejsProj,header),
			$('#hp01').jsonRender(nodejsProjects,template),
			$(document).prop('title', 'NodeJS:Projects'),
			toastr.success('NodeJS:Projects');
		});
	});
});

$(function(){
	$('#h-t').click(function(){
		$('#pagecontainer').load('views/page/nodejs-templates.tpl', function() {
			$('#ht01').jsonRender(nodejsTemp,header),
			$('#ht01').jsonRender(nodejsTemplates,template),
			$(document).prop('title', 'NodeJS:Templates'),
			toastr.success('NodeJS:Templates');
		});
	});
});

$(function(){
	$('#p-p').click(function(){
		$('#pagecontainer').load('views/page/php-projects.tpl', function() {
		$('#pp01').jsonRender(phpProj,header),
		$('#pp01').jsonRender(phpProjects,template),
		$(document).prop('title', 'PHP:Projects'),
		toastr.success('PHP:Projects');
		});
	});
});

$(function(){
	$('#p-t').click(function(){
		$('#pagecontainer').load('views/page/php-templates.tpl', function() {
		$('#pt01').jsonRender(phpTemp,header),
		$('#pt01').jsonRender(phpTemplates,template),
		$(document).prop('title', 'PHP:Templates'),
		toastr.success('PHP:Templates');
		});
	});
});

$(function(){
	$('#j-p').click(function(){
		$('#pagecontainer').load('views/page/javascript-projects.tpl', function() {
		$('#jp01').jsonRender(javascriptProj,header),
		$('#jp01').jsonRender(javascriptProjects,template),
		$(document).prop('title', 'JS:Projects'),
		toastr.success('JS:Projects');
		});
	});
});

$(function(){
	$('#j-t').click(function(){
		$('#pagecontainer').load('views/page/javascript-templates.tpl', function() {
		$('#jt01').jsonRender(javascriptTemp,header),
		$('#jt01').jsonRender(javascriptTemplates,template),
		$(document).prop('title', 'JS:Templates'),
		toastr.success('JS:Templates');
		});
	});
});
	
$(function(){
	$('#py-p').click(function(){
		$('#pagecontainer').load('views/page/python-projects.tpl', function() {
		$('#pyp01').jsonRender(pythonProj,header),
		$('#pyp01').jsonRender(pythonProjects,template),
		$(document).prop('title', 'Python:Projects'),
		toastr.success('Python:Projects');
		});
	});
});

$(function(){
	$('#py-t').click(function(){
		$('#pagecontainer').load('views/page/python-templates.tpl', function() {
		$('#pyt01').jsonRender(pythonTemp,header),
		$('#pyt01').jsonRender(pythonTemplates,template),
		$(document).prop('title', 'Python:Templates'),
		toastr.success('Python:Templates');
		});
	});
});

$(function(){
	$('#skills').click(function(){
		$('#pagecontainer').load('views/page/skills.tpl', function() {
		$('#skills01').jsonRender(skillsProj,header),
		$('#skills01').jsonRender(skillsTemplateData,skillsTemplate),
		$('#codeLeft').jsonRender(codeLeftData,skills),
		$('#codeRight').jsonRender(codeRightData,skills),
		$('#skillsLeft').jsonRender(skillsLeftData,skills),
		$('#skillsRight').jsonRender(skillsRightData,skills),
		$('#dbLeft').jsonRender(dbLeftData,skills),
		$('#dbRight').jsonRender(dbRightData,skills),
		$('#CMSLeft').jsonRender(CMSLeftData,skills),
		$('#CMSRight').jsonRender(CMSRightData,skills),
		$(document).prop('title', 'Profile:Skills'),
		toastr.success('Profile:Skills'),
		$.get("static/js/skills.js");
		
		});
	});
});

$(function(){
	$('#resume').click(function(){
		$('#pagecontainer').load('views/page/resume.tpl', function() {
		$('#resume01').jsonRender(resumeProj,header),
		$('#resume01').jsonRender(resumeData,resume),
		$('#work').jsonRender(workData,work),
		$('#edu').jsonRender(eduData,edu),
		$(document).prop('title', 'Profile:Resume'),
		toastr.success('Profile:Resume');
		});
	});
});

$(function(){
	$('#tml').click(function(){
		$('#pagecontainer').load('views/page/timeline.tpl', function() {
		$('#timeline').jsonRender(timelineHeader,header),
		$('#timelineData').jsonRender(timelineData,timeline),
		$(document).prop('title', 'Timeline'),
		toastr.success('Timeline');
		});
	});
});
