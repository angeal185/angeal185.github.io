//routes
$(function() {
		$('#pagecontainer').load('views/page/index.tpl', function() {
		$('#dash').jsonRender(indexHeader,header),
		$('#dash .row').css('height','1200px'),
		$(document).prop('title', 'Dashboard'),
			toastr.success('LOADING...');
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
		$('#pagecontainer').load('views/page/javascript-codepen.tpl', function() {
		$('#jt01').jsonRender(javascriptTemp,header),
		$('#jt01').jsonRender(javascriptTemplates,template),
		$(document).prop('title', 'JS:Codepen'),
		$('.img-demo').css('width','300px'),
		toastr.success('JS:Codepen');
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
