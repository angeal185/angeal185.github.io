function collapsedSidebar() {
	"relative" != $body.css("position") ? $body.hasClass("sidebar-collapsed") ? removeCollapsedSidebar() : createCollapsedSidebar() : $body.hasClass("sidebar-show") ? $body.removeClass("sidebar-show") : $body.addClass("sidebar-show")
}

function createCollapsedSidebar() {
	$body.addClass("sidebar-collapsed"), $(".nav-sidebar ul").attr("style", ""), $(this).addClass("menu-collapsed"), $("#switch-sidebar").prop("checked")
}

function removeCollapsedSidebar() {
	$body.removeClass("sidebar-collapsed"), $body.hasClass("submenu-hover") || $(".nav-sidebar li.active ul").css({
		display: "block"
	}), $(this).removeClass("menu-collapsed"), $body.hasClass("sidebar-light") && !$body.hasClass("sidebar-fixed") && $(".sidebar").height("")
}

function toggleFullScreen() {
	doc.fullscreenElement || doc.msFullscreenElement || doc.webkitIsFullScreen || doc.mozFullScreenElement ? doc.exitFullscreen ? doc.exitFullscreen() : doc.webkitExitFullscreen ? doc.webkitExitFullscreen() : doc.webkitCancelFullScreen ? doc.webkitCancelFullScreen() : doc.msExitFullscreen ? doc.msExitFullscreen() : doc.mozCancelFullScreen && doc.mozCancelFullScreen() : docEl.requestFullscreen ? docEl.requestFullscreen() : docEl.webkitRequestFullScreen ? docEl.webkitRequestFullscreen() : docEl.webkitRequestFullScreen ? docEl.webkitRequestFullScreen() : docEl.msRequestFullscreen ? docEl.msRequestFullscreen() : docEl.mozRequestFullScreen && docEl.mozRequestFullScreen()
}

function handleSidebarHide() {
	hiddenElements = $(":hidden"), visibleElements = $(":visible"), $(".menu-settings").on("click", "#hide-top-sidebar", function(e) {
		e.preventDefault();
		var i = $(this).text();
		$(".sidebar .sidebar-top").slideToggle(300), "Hide user & search" == i && $(this).text("Show user & search")
	}), $(".topbar").on("click", ".toggle-sidebar-top", function(e) {
		e.preventDefault(), $(".sidebar .sidebar-top").slideToggle(300), $(".toggle-sidebar-top span").hasClass("icon-user-following") ? $(".toggle-sidebar-top span").removeClass("icon-user-following").addClass("icon-user-unfollow") : $(".toggle-sidebar-top span").removeClass("icon-user-unfollow").addClass("icon-user-following")
	})
}

function toggleSidebarMenu() {
	$("body").hasClass("sidebar-collapsed") || $("body").hasClass("sidebar-top") || $("body").hasClass("submenu-hover") ? $(".nav-sidebar .children").css({
		display: ""
	}) : $(".nav-active.active .children").css("display", "block"), $(".sidebar").on("click", ".nav-sidebar li.nav-parent > a", function(e) {
		if(e.preventDefault(), (!$("body").hasClass("sidebar-collapsed") || $("body").hasClass("sidebar-hover")) && !$("body").hasClass("submenu-hover")) {
			var i = $(this).parent().parent();
			i.children("li.active").children(".children").slideUp(200), $(".nav-sidebar .arrow").removeClass("active"), i.children("li.active").removeClass("active");
			var t = $(this).next();
			t.is(":visible") ? (t.children().addClass("hidden-item"), $(this).parent().removeClass("active"), t.slideUp(200, function() {
				t.children().removeClass("hidden-item")
			})) : ($(this).find(".arrow").addClass("active"), t.children().addClass("is-hidden"), setTimeout(function() {
				t.children().addClass("is-shown")
			}, 0), t.slideDown(200, function() {
				$(this).parent().addClass("active"), setTimeout(function() {
					t.children().removeClass("is-hidden").removeClass("is-shown")
				}, 500)
			}))
		}
	})
}

function sidebarBehaviour() {
	windowWidth = $(window).width(), windowHeight = $(window).height() - $(".topbar").height(), sidebarMenuHeight = $(".nav-sidebar").height(), windowWidth < 1024 && $("body").removeClass("sidebar-collapsed"), $("body").hasClass("sidebar-collapsed") && sidebarMenuHeight > windowHeight && $("body").removeClass("fixed-sidebar")
}

function scrollTop() {
	$(window).scroll(function() {
		$(this).scrollTop() > 100 ? $(".scrollup").fadeIn() : $(".scrollup").fadeOut()
	}), $(".scrollup").click(function() {
		return $("html, body").animate({
			scrollTop: 0
		}, 1e3), !1
	})
}

function detectIE() {
	var e = window.navigator.userAgent,
		i = e.indexOf("MSIE "),
		t = e.indexOf("Trident/"),
		s = e.indexOf("Edge/");
	(i > 0 || t > 0 || s > 0) && $("html").addClass("ie-browser")
}

function line() {
	this.path = [], this.speed = rand(10, 20), this.count = randInt(10, 30), this.x = width / 2, this.y = height / 2 + 1, this.target = {
		x: width / 2,
		y: height / 2
	}, this.dist = 0, this.angle = 0, this.hue = tick / 5, this.life = 1, this.updateAngle(), this.updateDist()
}

function rand(e, i) {
	return Math.random() * (i - e) + e
}

function randInt(e, i) {
	return Math.floor(e + Math.random() * (i - e + 1))
}

function init() {
	canvas = document.getElementById("canvas"), ctx = canvas.getContext("2d"), size = 30, lines = [], reset(), loop()
}

function reset() {
	width = 2 * Math.ceil(window.innerWidth / 2), height = 2 * Math.ceil(window.innerHeight / 2), tick = 0, lines.length = 0, canvas.width = width, canvas.height = height
}

function create() {
	tick % 10 === 0 && lines.push(new line)
}

function step() {
	for(var e = lines.length; e--;) lines[e].step(e)
}

function clear() {
	ctx.globalCompositeOperation = "destination-out", ctx.fillStyle = "hsla(0, 0%, 0%, 0.1", ctx.fillRect(0, 0, width, height), ctx.globalCompositeOperation = "lighter"
}

function draw() {
	ctx.save(), ctx.translate(width / 2, height / 2), ctx.rotate(.001 * tick);
	var e = .8 + .2 * Math.cos(.02 * tick);
	ctx.scale(e, e), ctx.translate(-width / 2, -height / 2);
	for(var i = lines.length; i--;) lines[i].draw(i);
	ctx.restore()
}

function loop() {
	requestAnimationFrame(loop), create(), step(), clear(), draw(), tick++
}

function onresize() {
	reset()
}

var doc = document,
	docEl = document.documentElement,
	$body = $("body"),
	$sidebar = $(".sidebar"),
	content = document.querySelector(".page-content"),
	$loader = $("#preloader"),
	docHeight = $(document).height(),
	windowHeight = $(window).height(),
	start = delta = end = 0;

$(window).load(function() {
	setTimeout(function() {
		$(".loader-overlay").addClass("loaded"), $("body > section").animate({
			opacity: 1
		}, 400)
	}, 500)
}), $("[data-toggle]").on("click", function(e) {
	e.preventDefault();
	var i = $(this).data("toggle");
	"sidebar-behaviour" == i && toggleSidebar(), "submenu" == i && toggleSubmenuHover(), "sidebar-collapsed" == i && collapsedSidebar(), "sidebar-top" == i && toggleSidebarTop(), "sidebar-hover" == i && toggleSidebarHover()
}), $(".toggle_fullscreen").click(function() {
	toggleFullScreen()
});
var hoverTimeout;
$(".nav-sidebar > li").hover(function() {
	clearTimeout(hoverTimeout), $(this).siblings().removeClass("nav-hover"), $(this).addClass("nav-hover")
}, function() {
	var e = $(this);
	hoverTimeout = setTimeout(function() {
		e.removeClass("nav-hover")
	}, 200)
}), $(".nav-sidebar > li .children").hover(function() {
	clearTimeout(hoverTimeout), $(this).closest(".nav-parent").siblings().removeClass("nav-hover"), $(this).closest(".nav-parent").addClass("nav-hover")
}, function() {
	$(this), hoverTimeout = setTimeout(function() {
		$(this).closest(".nav-parent").removeClass("nav-hover")
	}, 200)
}), $("body").hasClass("sidebar-collapsed") && $(".nav-sidebar .children").css({
	display: ""
}), $(document).ready(function() {
	toggleSidebarMenu(), handleSidebarHide(), scrollTop(), sidebarBehaviour(), detectIE(), $("body").hasClass("sidebar-hover") && sidebarHover()
});
var toolTips = {
	timeout: null,
	html: '<div id="tooltip"></div>',
	init: function() {
		$(toolTips.html).appendTo("body"), $("[data-tip]").on("mouseenter", toolTips.show), $("[data-tip]").on("mouseleave", toolTips.hide)
	},
	show: function() {
		$("#tooltip").css({
			opacity: 0
		}), clearTimeout(toolTips.timeout), $("#tooltip").html($(this).data("tip"));
		var e = $(this).offset(),
			i = $(this).outerHeight() + 15,
			t = $(this).outerWidth() / 2,
			s = $("#tooltip").outerWidth() / 2 - t;
		$("#tooltip").css({
			top: e.top + i,
			left: e.left - s,
			opacity: 1
		})
	},
	hide: function() {
		toolTips.timeout = setTimeout(function() {
			$("#tooltip").css({
				opacity: 0
			})
		}, 50)
	}
};
toolTips.init(), $(window).load(function() {
	$("#wrapper").css("display", "inherit"), (new ANI).init(), $("#loader").delay(3e3).fadeOut(1500), toastr.success("DASHBOARD")
});
