var wrap = ("<div id='wrapper'></div>"),
	canvas1 = ("<canvas id='canvas'></canvas>"),
	topA = ("<h6><i class='fa fa-info-circle'></i> ABOUT THIS SITE</h6>"),
	topB = ("<h6><i class='fa fa-code'></i>FOLLOW MY WORK</h6>"),
	topC = ("<h6><i class='fa fa-envelope-o'></i> CONTACT INFO</h6>"),
	blg = ("<i class='fa fa-file-word-o c-primary'></i>My Blog"),
    tml = ("<i class='fa fa-clock-o c-second'></i>My Timeline"),
	usr = ("<button class='btn btn-xs btn-rounded' type='button'><i class='online'></i> Online</button>"),
	headerRight = ("<li id='user-header'><a onclick='gth()'><img id='imgi'>Admin</a></li>"),
	footer = ("<p class='pull-right sm-pull-reset' style='margin:10px 80px'>Copyright <span class='copyright'>&copy;</span> 2016 Ben eaves. All rights reserved.</p>"),
	svg1 = ("<div id='svg'></div>");

//init templates
$('body').prepend(wrap);
$('#wrapper').jsonRender(slideTopData,slideTop);
$('#wrapper').jsonRender(sidebarData,sidebar);
$('#wrapper').jsonRender(mainContentData,mainContent);
$('#follow').jsonRender(followData,follow);
$('#menu').jsonRender(menuData,menu);
$('#headerLeft').jsonRender(headerMainLeftData,headerMain);
$('#headerRight').jsonRender(headerMainRightData,headerMain);
$('#spinner').jsonRender(loaderData,loader);

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
$("a").attr("href", "javascript:void(0)");
$("#mt,#ctm").attr("href", href="mailto:beneaves01@hotmail.com");
$("#mt").html("beneaves01@hotmail.com");
$('#ctm').attr('title','contact me');
$("#cdpt,#jsft,#gtlt,#lndt,#flkrt,#fsc,#ctm,#gth2 ").addClass("fa");
$("#wbs1,#wbs2,#wbs3,#wbs4,#cdpt,#jsft,#gtlt,#lndt").addClass("ani fadeIn");
$("#wbs1,#wbs2,#wbs3,#wbs4 ").addClass("octicon");
$('#fsc').css('float','right');
$("#imgh").attr({
        "src" : "static/images/avatars/github-512.png",
        "class" : "img-responsive img-circle"
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
        "class" : "toggle",
        "title" : "back to github"
    });
$.get('http://ipinfo.io', function (res) {
        $('#ip').html( 'Your IP: ' +res.ip);
    },"jsonp");
$("#fsc,#ctm,#gth2").addClass("pull-left");
