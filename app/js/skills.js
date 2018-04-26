$(function(){
	$( ".bar" ).each( function() {
		var $bar = $( this ),
			 $pct = $bar.find( ".pct" ),
			 data = $bar.data( "bar" );
		setTimeout( function() {
			$bar
				.css( "background-color", "#6a00ff" )
				.animate({
					"width": $pct.html()
				}, data.speed || 3000, function() {
					$pct.css({
						"color": "whitesmoke",
						"opacity": 1
					});
				});
		}, data.delay || 0 );			
	});	
});