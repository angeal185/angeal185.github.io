consl = '<div id=\'console\' contenteditable=\'true\'><h1>Ben Eaves</h1><h2>Full-Stack web developer</h2><br>welcome to my world...<br><br>Type \'info\' and hit enter for instructions.<br><br>Type \'help\' and hit enter to see a full list of commands.<br>&nbsp;<br>>&nbsp;</div></div><div class=\'row\' style=\'height:10vh\'></div>'
$ ->
  $('#pagecontainer').load 'app/views/index.tpl', ->
    $('#dash').jsonRender(indexHeader, header)
    $(document).prop('title', 'Dashboard')
    toastr('LOADING...')
    $('#pagecontainer').append(consl)
    return
  return
$ ->
  $('#indx').click ->
    $('#pagecontainer').load 'app/views/index.tpl', ->
      $('#dash').jsonRender(indexHeader, header)
      $(document).prop('title', 'Dashboard')
      toastr('DASHBOARD')
      $('#pagecontainer').append consl
      $('html,body').animate { scrollTop: 0 }, 200
      return
    return
  return
$ ->
  $('#h-p').click ->
    $('#pagecontainer').load 'app/views/nodejs-projects.tpl', ->
      $('#hp01').jsonRender(nodejsProj, header)
      $.getJSON('app/data/nodejs.json', (p) ->
        $('#hp01').jsonRender p.entries, template
        return
      )
      $(document).prop('title', 'NodeJS:Projects')
      toastr('NodeJS:Projects')
      $('html,body').animate { scrollTop: 0 }, 200
      return
    return
  return
$ ->
  $('#p-p').click ->
    $('#pagecontainer').load 'app/views/php-projects.tpl', ->
      $('#pp01').jsonRender(phpProj, header)
      $.getJSON('app/data/php.json', (p) ->
        $('#pp01').jsonRender p.entries, template
        return
      )
      $(document).prop('title', 'PHP:Projects')
      toastr('PHP:Projects')
      $('html,body').animate { scrollTop: 0 }, 200
      return
    return
  return
$ ->
  $('#j-p').click ->
    $('#pagecontainer').load 'app/views/javascript-projects.tpl', ->
      $('#jp01').jsonRender(javascriptProj, header)
      $.getJSON('app/data/javascript.json', (p) ->
        $('#jp01').jsonRender p.entries, template
        return
      )
      $(document).prop('title', 'JS:Projects')
      toastr('JS:Projects')
      $('html,body').animate { scrollTop: 0 }, 200
      return
    return
  return
$ ->
  $('#j-t').click ->
    $('#pagecontainer').load 'app/views/javascript-codepen.tpl', ->
      $('#jt01').jsonRender(javascriptTemp, header)
      $('#jt01').jsonRender(codePenTplData, codePenTpl)
      $(document).prop('title', 'JS:Codepen')
      $('.img-demo').css('width', '300px')
      $('#codePen').jsonRender(codePenData, codePen)
      toastr('JS:Codepen')
      $('html,body').animate { scrollTop: 0 }, 200
      return
    return
  return
$ ->
  $('#py-p').click ->
    $('#pagecontainer').load 'app/views/python-projects.tpl', ->
      $('#pyp01').jsonRender(pythonProj, header)
      $.getJSON('app/data/python.json', (p) ->
        $('#pyp01').jsonRender p.entries, template
        return
      )
      $(document).prop('title', 'Python:Projects')
      toastr('Python:Projects')
      $('html,body').animate { scrollTop: 0 }, 200
      return
    return
  return
$ ->
  $('#c-s').click ->
    $('#pagecontainer').load 'app/views/stylus-projects.tpl', ->
      $('#sty01').jsonRender(stylusProj, header)
      $.getJSON('app/data/stylus.json', (p) ->
        $('#sty01').jsonRender p.entries, template
        return
      )
      $(document).prop('title', 'Stylus:Projects')
      toastr('Stylus:Projects')
      $('html,body').animate { scrollTop: 0 }, 200
      return
    return
  return
$ ->
  $('#skills').click ->
    $('#pagecontainer').load 'app/views/skills.tpl', ->
      $('#skills01').jsonRender(skillsProj, header)
      $('#skills01').jsonRender(skillsTemplateData, skillsTemplate)
      $('#codeLeft').jsonRender(codeLeftData, skills)
      $('#codeRight').jsonRender(codeRightData, skills)
      $('#skillsLeft').jsonRender(skillsLeftData, skills)
      $('#skillsRight').jsonRender(skillsRightData, skills)
      $('#dbLeft').jsonRender(dbLeftData, skills)
      $('#dbRight').jsonRender(dbRightData, skills)
      $('#CMSLeft').jsonRender(CMSLeftData, skills)
      $('#CMSRight').jsonRender(CMSRightData, skills)
      $('#OSLeft').jsonRender(OSLeftData, skills)
      $('#OSRight').jsonRender(OSRightData, skills)
      $('#otherLeft').jsonRender(otherLeftData, apiSkills)
      $('#otherRight').jsonRender(otherRightData, apiSkills)
      $('#APILeft').jsonRender(APILeftData, apiSkills)
      $('#APIRight').jsonRender(APIRightData, apiSkills)
      $(document).prop('title', 'Profile:Skills')
      toastr('Profile:Skills')
      $.get('app/js/skills.js')
      $('html,body').animate { scrollTop: 0 }, 200
      return
    return
  return
$ ->
  $('#resume').click ->
    $('#pagecontainer').load 'app/views/resume.tpl', ->
      $('#resume01').jsonRender(resumeProj, header)
      $('#resume01').jsonRender(resumeData, resume)
      $('#work').jsonRender(workData, work)
      $('#edu').jsonRender(eduData, edu)
      $(document).prop('title', 'Profile:Resume')
      toastr('Profile:Resume')
      $('html,body').animate { scrollTop: 0 }, 200
      return
    return
  return