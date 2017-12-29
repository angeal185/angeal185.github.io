var wrap = ("<div id='wrapper'></div>"),
	canvas1 = ("<canvas id='canvas'></canvas>"),
	usr = ("<button class='btn btn-xs btn-rounded' type='button'><i class='online'></i> Online</button>"),
	headerRight = ("<li id='user-header'><a href='https://github.com/angeal185/' target = '_blank'><img id='imgi'>Admin</a></li>"),
	footer = ("<p class='sm-pull-reset shrink' style='margin:10px 80px'>2017 Ben eaves. All rights reserved.</p>"),
	svg1 = ("<div id='svg'></div>"),
	status = "<div class='status'></div>",
	IP = "<code id='ip'></code>",
	toastTpl = "<ul class='toasts'></ul>";


var xtraLnk = [{
	"li":"li:has(#j-p)",
	"link":"https://angeal185.github.io/dynamic-ajax-site-generator/",
	"title":"Codepen-Full"
},{
	"li":"li:has(#j-p)",
	"link":"https://angeal185.github.io/animated-ajax-carosel-portfolio/",
	"title":"Animations"
}];

//init templates
$('body').prepend(wrap).append(toastTpl);
$('#wrapper').jsonRender(sidebarData,sidebar);
$('#wrapper').jsonRender(mainContentData,mainContent);
$('#menu').jsonRender(menuData,menu);
$('#headerRight').jsonRender(headerMainRightData,headerMain);

//snippets
$("body").prepend(canvas1),
$("#usr").prepend(usr),
$("#headerRight").append(headerRight);

$.each( xtraLnk, function( i, e ) {
		$(e.li).not( ".nav-parent" ).after("<li class='cdpLnk'><a href='"+e.link+"' target = '_blank'>"+e.title+"</a></li>");
});
$("#footer").prepend(footer),
$(".main-content").after(svg1),
$( "#svg" ).load( "app/views/svg.tpl" );
$("#footer").append(status);
$("#footer").append(IP);


function statusOut(i){
  $(i).removeClass('statusNot'),
  $(i).addClass('statusOk');
}


var statusList = ["webGl","cache","status"];

statusList.forEach(function(i) {
	var tpl = '<div class="statusItem tooltip"><span class="tooltiptext">'+i+'</span><div id="'+i+'Stat" class="statusNot"></div></div>';
	$('.status').append(tpl);
});
statusOut('#webGlStat');
//globals
$("#wbs1,#cdpt,#lndt").addClass("ani fadeIn");
$("#imgh").attr({
        "src" : "app/images/avatars/github-512.png",
        "class" : "img-responsive img-circle"
    });
$("#user-header > a").attr({
        "data-tip" : "My github",
    });
$("#imgi").attr({
        "src" : "app/images/avatars/github.png",
        "class" : "img-responsive img-circle"
    });

$("#gth2").attr({
        "src" : "app/images/avatars/github.png",
        "class" : "toggle"
    });
$.get('https://ipinfo.io', function (res) {
        $('#ip').html( 'Your IP: ' +res.ip);
    },"jsonp");
$("#gth2").addClass("pull-left");
