var wrap = ("<div id='wrapper'></div>"),
	canvas1 = ("<canvas id='canvas'></canvas>"),
	usr = ("<button class='btn btn-xs btn-rounded' type='button'><i class='online'></i> Online</button>"),
	headerRight = ("<li id='user-header'><a href='https://github.com/angeal185/' target = '_blank'><img id='imgi'>Admin</a></li>"),
	footer = ("<p class='sm-pull-reset' style='margin:10px 80px'>2017 Ben eaves. All rights reserved.</p>"),
	svg1 = ("<div id='svg'></div>"),
	cdpLnk = ("<li class='cdpLnk'><a href='https://angeal185.github.io/dynamic-ajax-site-generator/' target = '_blank'>Codepen-Full</a></li>"),
	IP = "<code id='ip'></code>";

//init templates
$('body').prepend(wrap);
$('#wrapper').jsonRender(sidebarData,sidebar);
$('#wrapper').jsonRender(mainContentData,mainContent);
$('#menu').jsonRender(menuData,menu);
$('#headerRight').jsonRender(headerMainRightData,headerMain);

$('#imgi').prop('data-tip', 'My github');
$('#cdpt').addClass("icon-codepen").prop('data-tip', 'My codepen');
$('#lndt').addClass("icon-linkedin").prop('data-tip', 'My linkedin');
$('#wbs1').addClass("icon-bolt").prop('data-tip', 'My website');

//snippets
$("body").prepend(canvas1),
$("#usr").prepend(usr),
$("#headerRight").append(headerRight),
$("li:has(#j-p)").after(cdpLnk),
$(".cdpLnk").eq(1).remove(),
$("#footer").prepend(footer),
$(".main-content").after(svg1),
$( "#svg" ).load( "app/views/svg.tpl" );
$("#footer").append(IP);

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
$("#fsc").attr({
        "src" : "app/images/avatars/github.png",
        "class" : "toggle_fullscreen",
        "title" : "fullscreen",
    });
$("#gth2").attr({
        "src" : "app/images/avatars/github.png",
        "class" : "toggle"
    });
$.get('https://ipinfo.io', function (res) {
        $('#ip').html( 'Your IP: ' +res.ip);
    },"jsonp");
$("#fsc,#gth2").addClass("pull-left");
