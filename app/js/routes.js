var consl = "<div id='console' contenteditable='true'><h1>Ben Eaves</h1><h2>Full-Stack web developer</h2><br>welcome to my world...<br><br>Type 'info' and hit enter for instructions.<br><br>Type 'help' and hit enter to see a full list of commands.<br>&nbsp;<br>>&nbsp;</div></div><div class='row' style='height:10vh'></div>";


function loadTpl(i){
$('#pagecontainer').empty().prepend('<div id="'+i+'" class="page-content"></div>');
}

$(function(){
	loadTpl('dash'),
	$('#dash').jsonRender(indexHeader,header),
	$(document).prop('title', 'Dashboard'),
	toastr('LOADING...'),
	$("#pagecontainer").append(consl);
	
});

$(function(){
	$('#indx').click(function(){
		loadTpl('dash'),
		$('#dash').jsonRender(indexHeader,header),
		$(document).prop('title', 'Dashboard'),
		toastr('DASHBOARD');
		$("#pagecontainer").append(consl);
		$('html,body').animate({scrollTop:0},200);
	});
});

$(function(){
	$('#h-p').click(function(){
		loadTpl('hp01'),
		$('#hp01').jsonRender(nodejsProj,header),
		$.getJSON("app/data/nodejs.json",function(p){
			$('#hp01').jsonRender(p.entries,template);
		}),	
		$(document).prop('title', 'NodeJS:Projects'),
		toastr('NodeJS:Projects');
		$('html,body').animate({scrollTop:0},200);
		
	});
});

$(function(){
	$('#p-p').click(function(){
		loadTpl('pp01')
		$('#pp01').jsonRender(phpProj,header),
		$.getJSON("app/data/php.json",function(p){
			$('#pp01').jsonRender(p.entries,template);
		}),	
		$(document).prop('title', 'PHP:Projects'),
		toastr('PHP:Projects');
		$('html,body').animate({scrollTop:0},200);
	});
});

$(function(){
	$('#j-p').click(function(){
		loadTpl('jp01'),
		$('#jp01').jsonRender(javascriptProj,header),
		$.getJSON("app/data/javascript.json",function(p){
			$('#jp01').jsonRender(p.entries,template);
		}),	
		$(document).prop('title', 'JS:Projects'),
		toastr('JS:Projects');
		$('html,body').animate({scrollTop:0},200);
	});
});

$(function(){
	$('#j-t').click(function(){
		loadTpl('jt01'),
		$('#jt01').jsonRender(javascriptTemp,header),
		$('#jt01').jsonRender(codePenTplData,codePenTpl),
		$(document).prop('title', 'JS:Codepen'),
		$('.img-demo').css('width','300px'),
		$.getJSON("app/data/codepen.json",function(p){
			$('#codePen').jsonRender(p.entries,codePen);
		}),
		toastr('JS:Codepen');
		$('html,body').animate({scrollTop:0},200);
	});
});

$(function(){
	$('#py-p').click(function(){
		loadTpl('pyp01'),
		$('#pyp01').jsonRender(pythonProj,header),
		$.getJSON("app/data/python.json",function(p){
			$('#pyp01').jsonRender(p.entries,template);
		}),
		$(document).prop('title', 'Python:Projects'),
		toastr('Python:Projects');
		$('html,body').animate({scrollTop:0},200);
	});
});

$(function(){
	$('#c-s').click(function(){
		loadTpl('sty01'),
		$('#sty01').jsonRender(stylusProj,header),
		$.getJSON("app/data/stylus.json",function(p){
			$('#sty01').jsonRender(p.entries,template);
		}),
		$(document).prop('title', 'Stylus:Projects'),
		toastr('Stylus:Projects');
		$('html,body').animate({scrollTop:0},200);
	});
});

$(function(){
	$('#skills').click(function(){
		loadTpl('skills01'),
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
		$('#otherLeft').jsonRender(otherLeftData,apiSkills),
		$('#otherRight').jsonRender(otherRightData,apiSkills),
		$('#APILeft').jsonRender(APILeftData,apiSkills),
		$('#APIRight').jsonRender(APIRightData,apiSkills),
		$(document).prop('title', 'Profile:Skills'),
		toastr('Profile:Skills'),
		$.get("app/js/skills.js");
		$('html,body').animate({scrollTop:0},200);
	});
});

$(function(){
	$('#resume').click(function(){
		loadTpl('resume01'),
		$('#resume01').jsonRender(resumeProj,header),
		$('#resume01').jsonRender(resumeData,resume),
		$('#work').jsonRender(workData,work),
		$('#edu').jsonRender(eduData,edu),
		$(document).prop('title', 'Profile:Resume'),
		toastr('Profile:Resume');
		$('html,body').animate({scrollTop:0},200);
	});
});
