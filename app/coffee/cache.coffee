$(window).load ->
  $((e) ->
    e.preload = ((t, n, a) ->
      r = []

      s = (e) ->
        `var t`
        t = 0
        while t < r.length
          if r[t].src == e.src
            return r[t]
          t++
        r.push(e)
        e

      p = (e, t, n) ->
        'function' == typeof t and t.call(e, n)
        return

      (t, n, a) ->
        `var r`
        if 'undefined' != typeof t
          'string' == typeof t and (t = [ t ])
          2 == arguments.length and 'function' == typeof n and a = n
          n = 0

          r = undefined
          i = t.length
          if n > 0 and i > n and r = t.slice(n, i)
            t = t.slice(0, n)
            i = t.length

            !i

            return undefined
          o = undefined
          c = arguments.callee
          g = 0

          u = ->
            g++
            g == i and p(t, a, !r)
            c(r, n, a)

            return

          l = 0
          while l < t.length
            o = new Image
            o.src = t[l]
            o = s(o)
            if o.complete then u() else e(o).on('load error', u)
            l++
        return
    )()

    t = (t, n) ->
      a = undefined
      r = undefined
      s = undefined
      p = undefined
      i = undefined
      o = []
      c = new RegExp('url\\([\'"]?([^"\')]*)[\'"]?\\)', 'i')
      n.recursive and (t = t.find('*').add(t))
      t.each(->
        a = e(this)
        r = a.css('background-image') + ',' + a.css('border-image-source')
        r = r.split(',')
        i = 0
        while i < r.length
          s = r[i]
          -1 == s.indexOf('about:blank') and -1 == s.indexOf('data:image') and p = c.exec(s)
          p and o.push(p[1])

          i++
        'IMG' == @nodeName and o.push(@src)
        return
      )
      o

    e.fn.preload = ->
      n = undefined
      a = undefined
      if 1 == arguments.length then (if 'object' == typeof arguments[0] then (n = arguments[0]) else (a = arguments[0])) else arguments.length > 1 and n = arguments[0]
      a = arguments[1]

      n = e.extend({
        recursive: !0
        part: 0
      }, n)
      r = this
      s = t(r, n)
      e.preload(s, n.part, (e) ->
        e and 'function' == typeof a and a.call(r.get())
        return
      )
      this

    return
  )
  $(->
    $.preload [
      'app/views/nodejs-projects.tpl'
      'app/views/javascript-projects.tpl'
      'app/views/javascript-codepen.tpl'
      'app/views/python-projects.tpl'
      'app/views/php-projects.tpl'
      'app/views/stylus-projects.tpl'
      'app/views/resume.tpl'
      'app/views/skills.tpl'
      'app/images/nodejs.png'
      'app/images/python.png'
      'app/images/jquery.png'
      'app/images/codepen-logo.svg'
      'app/images/php.png'
      'app/images/angular.png'
      'app/images/stylus.png'
    ]
    return
  )
  return