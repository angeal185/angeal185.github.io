var consl = "<div id='console' contenteditable='true'><h1>Ben Eaves</h1><h2>Full-Stack web developer</h2><br>welcome to my world...<br><br>Type 'info' and hit enter for instructions.<br><br>Type 'help' and hit enter to see a full list of commands.<br>&nbsp;<br>>&nbsp;</div></div><div class='row' style='height:10vh'></div>";

$(function() {
		$('#pagecontainer').load('app/views//index.tpl', function() {
		$('#dash').jsonRender(indexHeader,header),
		$(document).prop('title', 'Dashboard'),
		toastr.success('LOADING...');
		$("#pagecontainer").append(consl);
		});
	});

$(function(){
	$('#indx').click(function(){
		$('#pagecontainer').load('app/views//index.tpl', function() {
		$('#dash').jsonRender(indexHeader,header),
		$(document).prop('title', 'Dashboard'),
		toastr.success('DASHBOARD');
		$("#pagecontainer").append(consl);
		$('html,body').animate({scrollTop:0},200);
		});
	});
});

$(function(){
	$('#h-p').click(function(){
		$('#pagecontainer').load('app/views//nodejs-projects.tpl', function() {
			$('#hp01').jsonRender(nodejsProj,header),
			$('#hp01').jsonRender(nodejsProjects,template),
			$(document).prop('title', 'NodeJS:Projects'),
			toastr.success('NodeJS:Projects');
			$('html,body').animate({scrollTop:0},200);
		});
	});
});

$(function(){
	$('#p-p').click(function(){
		$('#pagecontainer').load('app/views//php-projects.tpl', function() {
		$('#pp01').jsonRender(phpProj,header),
		$('#pp01').jsonRender(phpProjects,template),
		$(document).prop('title', 'PHP:Projects'),
		toastr.success('PHP:Projects');
		$('html,body').animate({scrollTop:0},200);
		});
	});
});

$(function(){
	$('#j-p').click(function(){
		$('#pagecontainer').load('app/views//javascript-projects.tpl', function() {
		$('#jp01').jsonRender(javascriptProj,header),
		$('#jp01').jsonRender(javascriptProjects,template),
		$(document).prop('title', 'JS:Projects'),
		toastr.success('JS:Projects');
		$('html,body').animate({scrollTop:0},200);
		});
	});
});

$(function(){
	$('#j-t').click(function(){
		$('#pagecontainer').load('app/views//javascript-codepen.tpl', function() {
		$('#jt01').jsonRender(javascriptTemp,header),
		$('#jt01').jsonRender(codePenTplData,codePenTpl),
		
		$(document).prop('title', 'JS:Codepen'),
		$('.img-demo').css('width','300px'),
		$('#codePen').jsonRender(codePenData,codePen),
		toastr.success('JS:Codepen');
		$('html,body').animate({scrollTop:0},200);
		});
	});
});
	
$(function(){
	$('#py-p').click(function(){
		$('#pagecontainer').load('app/views//python-projects.tpl', function() {
		$('#pyp01').jsonRender(pythonProj,header),
		$('#pyp01').jsonRender(pythonProjects,template),
		$(document).prop('title', 'Python:Projects'),
		toastr.success('Python:Projects');
		$('html,body').animate({scrollTop:0},200);
		});
	});
});

$(function(){
	$('#skills').click(function(){
		$('#pagecontainer').load('app/views//skills.tpl', function() {
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
		$('#OSLeft').jsonRender(OSLeftData,skills),
		$('#OSRight').jsonRender(OSRightData,skills),
		$('#otherLeft').jsonRender(OSLeftData,skills),
		$('#otherRight').jsonRender(OSRightData,skills),
		$(document).prop('title', 'Profile:Skills'),
		toastr.success('Profile:Skills'),
		$.get("app/js/skills.js");
		$('html,body').animate({scrollTop:0},200);
		});
	});
});

$(function(){
	$('#resume').click(function(){
		$('#pagecontainer').load('app/views//resume.tpl', function() {
		$('#resume01').jsonRender(resumeProj,header),
		$('#resume01').jsonRender(resumeData,resume),
		$('#work').jsonRender(workData,work),
		$('#edu').jsonRender(eduData,edu),
		$(document).prop('title', 'Profile:Resume'),
		toastr.success('Profile:Resume');
		$('html,body').animate({scrollTop:0},200);
		});
	});
});
