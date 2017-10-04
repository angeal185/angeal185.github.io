toasts = document.querySelector('.toasts')

toastr = (type) ->
  toast = undefined
  if type == null
    type = 'unknown'
  toast = document.createElement('li')
  toasts.appendChild toast
  toast.innerHTML = type

toasts.addEventListener 'webkitAnimationEnd', (e) ->
  if e.animationName == 'hide'
    return toasts.removeChild(e.target)
  return
$ ->
  $('.bar').each ->
    $bar = $(this)
    $pct = $bar.find('.pct')
    data = $bar.data('bar')
    setTimeout (->
      $bar.css('background-color', 'red').animate { 'width': $pct.html() }, data.speed or 3000, ->
        $pct.css
          'color': 'red'
          'opacity': 1
        return
      return
    ), data.delay or 0
    return
  return