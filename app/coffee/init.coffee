wrap = '<div id=\'wrapper\'></div>'
canvas1 = '<canvas id=\'canvas\'></canvas>'
usr = '<button class=\'btn btn-xs btn-rounded\' type=\'button\'><i class=\'online\'></i> Online</button>'
headerRight = '<li id=\'user-header\'><a href=\'https://github.com/angeal185/\' target = \'_blank\'><img id=\'imgi\'>Admin</a></li>'
footer = '<p class=\'sm-pull-reset shrink\' style=\'margin:10px 80px\'>2017 Ben eaves. All rights reserved.</p>'
svg1 = '<div id=\'svg\'></div>'
cdpLnk = '<li class=\'cdpLnk\'><a href=\'https://angeal185.github.io/dynamic-ajax-site-generator/\' target = \'_blank\'>Codepen-Full</a></li>'
IP = '<code id=\'ip\'></code>'
toastTpl = '<ul class=\'toasts\'></ul>'
#init templates
$('body').prepend(wrap).append toastTpl
$('#wrapper').jsonRender sidebarData, sidebar
$('#wrapper').jsonRender mainContentData, mainContent
$('#menu').jsonRender menuData, menu
$('#headerRight').jsonRender headerMainRightData, headerMain
#snippets
$('body').prepend(canvas1)
$('#usr').prepend(usr)
$('#headerRight').append(headerRight)
$('li:has(#j-p)').after(cdpLnk)
$('.cdpLnk').eq(1).remove()
$('#footer').prepend(footer)
$('.main-content').after(svg1)
$('#svg').load('app/views/svg.tpl')
$('#footer').append IP
#globals
$('#wbs1,#cdpt,#lndt').addClass 'ani fadeIn'
$('#imgh').attr
  'src': 'app/images/avatars/github-512.png'
  'class': 'img-responsive img-circle'
$('#user-header > a').attr 'data-tip': 'My github'
$('#imgi').attr
  'src': 'app/images/avatars/github.png'
  'class': 'img-responsive img-circle'
$('#gth2').attr
  'src': 'app/images/avatars/github.png'
  'class': 'toggle'
$.get 'https://ipinfo.io', ((res) ->
  $('#ip').html 'Your IP: ' + res.ip
  return
), 'jsonp'
$('#gth2').addClass 'pull-left'