var toasts = document.querySelector('.toasts');

  toastr = function(type) {
    var toast;
    if (type == null) {
      type = 'unknown';
    }
    toast = document.createElement('li');
    toasts.appendChild(toast);
    return toast.innerHTML = type;
  };


  toasts.addEventListener('webkitAnimationEnd', function(e) {
    if (e.animationName === 'hide') {
      return toasts.removeChild(e.target);
    }
  });
  
$(function(){
	$( ".bar" ).each( function() {
		var $bar = $( this ),
			 $pct = $bar.find( ".pct" ),
			 data = $bar.data( "bar" );
		
		setTimeout( function() {
			$bar
				.css( "background-color", "red" )
				.animate({
					"width": $pct.html()
				}, data.speed || 3000, function() {
					$pct.css({
						"color": "red",
						"opacity": 1
					});
				});
		}, data.delay || 0 );			
	});	
});