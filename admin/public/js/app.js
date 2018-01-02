
  $(".taskSelect").click(function(){
    $("#taskOut").val(this.name),
    $("#taskBtn").removeAttr("disabled");
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
  		$('#scroll-to-top').fadeIn();
  	} else {
  	  $('#scroll-to-top').fadeOut();
  	}
  });

  $('#scroll-to-top').on('click', function(e) {
    e.preventDefault();
  	$('html, body').animate({scrollTop : 0}, 800);
  });


  (function() {
  var waveElements;

  waveElements = document.querySelectorAll('.effect-waves');

  Array.prototype.forEach.call(waveElements, function(el, i) {
    return el.addEventListener('click', function(e) {
      var _this, firedOnce, posX, posY, waves;
      _this = this;
      firedOnce = false;
      posX = e.pageX - _this.offsetLeft;
      posY = e.pageY - _this.offsetTop;
      waves = document.createElement('div');
      waves.classList.add('effect-waves__waves');
      waves.style.left = posX + 'px';
      waves.style.top = posY + 'px';
      _this.appendChild(waves).focus();
      waves.classList.add('effect-waves__waves--in');
      return waves.addEventListener('transitionend', function(e) {
        if (firedOnce) {
          return waves.parentNode.removeChild(waves);
        } else {
          return firedOnce = true;
        }
      });
    });
  });

}).call(this);
