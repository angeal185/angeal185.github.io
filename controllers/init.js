var wrap = ("<div id='wrapper'></div>"),
	canvas1 = ("<canvas id='canvas'></canvas>"),
	topA = ("<h6><i class='fa fa-info-circle'></i> ABOUT THIS SITE</h6>"),
	topB = ("<h6><i class='fa fa-code'></i>FOLLOW MY WORK</h6>"),
	topC = ("<h6><i class='fa fa-envelope-o'></i> CONTACT INFO</h6>"),
	blg = ("<i class='fa fa-file-word-o c-primary'></i>My Blog"),
    tml = ("<i class='fa fa-clock-o c-second'></i>My Timeline"),
	usr = ("<button class='btn btn-xs btn-rounded' type='button'><i class='online'></i> Online</button>"),
	headerRight = ("<li id='user-header'><a href='https://github.com/angeal185/' target = '_blank'><img id='imgi'>Admin</a></li>"),
	footer = ("<p class='pull-right sm-pull-reset' style='margin:10px 80px'>Copyright <span class='copyright'>&copy;</span> 2016 Ben eaves. All rights reserved.</p>"),
	svg1 = ("<div id='svg'></div>");

//init templates

$('body').prepend(wrap);
$('#wrapper').jsonRender(slideTopData,slideTop);
$('#wrapper').jsonRender(sidebarData,sidebar);
$('#wrapper').jsonRender(mainContentData,mainContent);
$('#follow').jsonRender(followData,follow);
$('#menu').jsonRender(menuData,menu);
$('#headerRight').jsonRender(headerMainRightData,headerMain);

$('#imgi').prop('data-tip', 'My github');
$('#cdpt').addClass("fa-codepen").prop('data-tip', 'My codepen');
$('#lndt').addClass("fa-linkedin").prop('data-tip', 'My linkedin');
$('#wbs1').addClass("fa-bolt").prop('data-tip', 'My website');

//snippets

$("body").prepend(canvas1),
$("#topA").prepend(topA),
$("#topB").prepend(topB),
$("#topC").prepend(topC),
$("#blg").prepend(blg),
$("#tml").prepend(tml),
$("#usr").prepend(usr),
$("#headerRight").append(headerRight),
$("#footer").prepend(footer),
$(".main-content").after(svg1),
$( "#svg" ).load( "views/page/svg.tpl" );

//globals

$("#mt,#ctm").attr("href", href="mailto:beneaves01@hotmail.com");
$("#mt").html("beneaves01@hotmail.com");
$('#ctm').attr('title','contact me');
$("#cdpt,#wbs1,#jsft,#gtlt,#lndt,#flkrt,#fsc,#ctm,#gth2 ").addClass("fa");
$("#wbs1,#cdpt,#lndt").addClass("ani fadeIn");
$('#fsc').css('float','right');
$("#imgh").attr({
        "src" : "static/images/avatars/github-512.png",
        "class" : "img-responsive img-circle"
    });
$("#user-header > a").attr({
        "data-tip" : "My github",
    });
$("#imgi").attr({
        "src" : "static/images/avatars/github.png",
        "class" : "img-responsive img-circle"
    });
$("#fsc").attr({
        "src" : "static/images/avatars/github.png",
        "class" : "toggle_fullscreen",
        "title" : "fullscreen",
    });
$("#ctm").attr({
        "title" : "contact me",
        "class" : "toggle"
        });
$("#gth2").attr({
        "src" : "static/images/avatars/github.png",
        "class" : "toggle"
    });
$.get('https://ipinfo.io', function (res) {
        $('#ip').html( 'Your IP: ' +res.ip);
    },"jsonp");
$("#fsc,#ctm,#gth2").addClass("pull-left");

