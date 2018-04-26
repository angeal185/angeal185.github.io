$ ->
  $('.bar').each ->
    $bar = $(this)
    $pct = $bar.find('.pct')
    data = $bar.data('bar')
    setTimeout (->
      $bar.css('background-color', '#6a00ff').animate { 'width': $pct.html() }, data.speed or 3000, ->
        $pct.css
          'color': 'whitesmoke'
          'opacity': 1
        return
      return
    ), data.delay or 0
    return
  return