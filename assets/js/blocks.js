
//js
$("a").attr("href", "javascript:void(0)");

$("#mt,#ctm").attr("href", href="mailto:beneaves01@hotmail.com");
$("#nv-0,#nv-1,#nv-2,#nv-3,#nv-4,#nv-5").addClass("tm nav-parent");
$("#cdpt,#jsft,#gtlt,#lndt,#flkrt,#fsc,#ctm,#gth2 ").addClass("fa");
$("#wbs1,#wbs2,#wbs3,#wbs4,#cdpt,#jsft,#gtlt,#lndt").addClass("ani fadeIn");
$("#wbs1,#wbs2,#wbs3,#wbs4 ").addClass("octicon");

$("#cc0,#cc1,#cc2,#cc3 ").addClass("children collapse").add;




$("#imgh").attr({
        "src" : "assets/images/avatars/github-512.png",
        "class" : "img-responsive img-circle"
    });
$("#imgi").attr({
        "src" : "assets/images/avatars/github.png",
        "class" : "img-responsive img-circle"
    });
$("#fsc").attr({
        "src" : "assets/images/avatars/github.png",
        "class" : "toggle_fullscreen",
        "title" : "fullscreen",
    });

$("#ctm").attr({
        "title" : "contact me",
        "class" : "toggle"
        });

$("#gth2").attr({
        "src" : "assets/images/avatars/github.png",
        "class" : "toggle",
        "title" : "back to github"
    });

//$.get('http://jsonip.com', function (res) {
  //      $('#ip').html( 'Your IP: ' +res.ip);
  //  });
$("#fsc,#ctm,#gth2").addClass("pull-left");



document.getElementById('ctm').title = 'contact me';



$(function() {
         $( "#pagecontainer" ).load( "blocks/page/index.tpl" );

});










(function($){

    $.preload = (function(sources, part, callback){
                                                                                                  /*  */
        // Plugin cache
        var cache = [];

        // Wrapper for cache
        var caching = function(image){

            for (var i = 0; i < cache.length; i++) {
                if (cache[i].src === image.src) {
                    return cache[i];
                }
            }

            cache.push(image);
            return image;

        };

        // Execute callback
        var exec = function(sources, callback, last){

            if (typeof callback === 'function') {
                callback.call(sources, last);
            }

        };

        // Closure to hide cache
        return function(sources, part, callback){

            // Check input data
            if (typeof sources === 'undefined') {
                return;
            }

            if (typeof sources === 'string') {
                sources = [sources];
            }

            if (arguments.length === 2 && typeof part === 'function') {
                callback = part;
                part = 0;
            }

            // Split to pieces
            var total = sources.length,
                next;

            if (part > 0 && part < total) {

                next = sources.slice(part, total);
                sources = sources.slice(0, part);

                total = sources.length;

            }

            // If sources array is empty
            if (!total) {
                exec(sources, callback, true);
                return;
            }

            // Image loading callback
            var preload = arguments.callee,
                count = 0;

            var loaded = function(){

                count++;

                if (count !== total) {
                    return;
                }

                exec(sources, callback, !next);
                preload(next, part, callback);

            };

            // Loop sources to preload
            var image;

            for (var i = 0; i < sources.length; i++) {

                image = new Image();
                image.src = sources[i];

                image = caching(image);

                if (image.complete) {
                    loaded();
                } else {
                    $(image).on('load error', loaded);
                }

            }

        };

    })();

    // Get URLs from DOM elements
    var getSources = function(items, options){

        var sources = [],
            reg = new RegExp('url\\([\'"]?([^"\'\)]*)[\'"]?\\)', 'i'),
            $this, imageList, image, url, i;

        if (options.recursive) {
            items = items.find('*').add(items);
        }

        items.each(function(){

            $this = $(this);

            imageList = $this.css('background-image') + ',' + $this.css('border-image-source');
            imageList = imageList.split(',');

            for (i = 0; i < imageList.length; i++) {

                image = imageList[i];

                if (image.indexOf('about:blank') !== -1 ||
                    image.indexOf('data:image') !== -1) {
                    continue;
                }

                url = reg.exec(image);

                if (url) {
                    sources.push(url[1]);
                }

            }

            if (this.nodeName === 'IMG') {
                sources.push(this.src);
            }

        });

        return sources;

    };

    $.fn.preload = function(){

        var options, callback;

        // Make arguments flexible
        if (arguments.length === 1) {
            if (typeof arguments[0] === 'object') {
                options = arguments[0];
            } else {
                callback = arguments[0];
            }
        } else if (arguments.length > 1) {
            options = arguments[0];
            callback = arguments[1];
        }

        // Extend default options
        options = $.extend({
            recursive: true,
            part: 0
        }, options);

        var items = this,
            sources = getSources(items, options);

        $.preload(sources, options.part, function(last){

            if (last && typeof callback === 'function') {
                callback.call(items.get());
            }

        });

        return this;

    };

})(jQuery);

$(function() {

    $.preload([
        'blocks/page/h-projects.tpl',
        'blocks/page/j-projects.tpl',
        'blocks/page/p-projects.tpl',
        'blocks/page/py-projects.tpl',
        'blocks/page/j-templates.tpl',
        'blocks/page/h-templates.tpl',
        'blocks/page/p-templates.tpl',
        'blocks/page/py-templates.tpl'




     ]);

});



$(function(){
    $('.sidebar-widgets').mouseover(function(){
       $.preload([
       'blocks/page/timeline.tpl']
            )}
        );
    });

//routes
            $(function(){
                $('indx').title = 'index';
                $('#indx').click(function(){
			        $('#pagecontainer').load('blocks/page/index.tpl')}
					);

			       $('#h-p,#h-t,#h-s').prop('title', 'NODEJS');
				$('#h-p').click(function(){
					$('#pagecontainer').load('blocks/page/h-projects.tpl #hp01')}
					);


				$('#h-p2').click(function(){
					$('#pagecontainer').load('blocks/page/h-projects.tpl #hp02')}
					);


                $('#h-p3').click(function(){
					$('#pagecontainer').load('blocks/page/h-projects.tpl #hp03')}
					);


				$('#h-t').click(function(){
					$('#pagecontainer').load('blocks/page/h-templates.tpl #ht01')}
					);


				$('#h-t2').click(function(){
					$('#pagecontainer').load('blocks/page/h-templates.tpl #ht02')}
					);


				$('#h-t3').click(function(){
					$('#pagecontainer').load('blocks/page/h-templates.tpl #ht03')}
					);
			});



			$(function(){
                $('#p-p,#p-t,#p-s').prop('title', 'php');
				$('#p-p').click(function(){
					$('#pagecontainer').load('blocks/page/p-projects.tpl #pp01')}
					);

				$('#p-p2').click(function(){
					$('#pagecontainer').load('blocks/page/p-projects.tpl #pp02')}
					);


				$('#p-p3').click(function(){
					$('#pagecontainer').load('blocks/page/p-projects.tpl #pp03')}
					);


				$('#p-t').click(function(){
					$('#pagecontainer').load('blocks/page/p-templates.tpl #pt01')}
					);


				$('#p-t2').click(function(){
					$('#pagecontainer').load('blocks/page/p-templates.tpl #pt02')}
					);


				$('#p-t3').click(function(){
					$('#pagecontainer').load('blocks/page/p-templates.tpl #pt03')}
					);

                $('#j-p,#j-t,#j-s').prop('title', 'javascript');
				$('#j-p').click(function(){
					$('#pagecontainer').load('blocks/page/j-projects.tpl #jp01')}
					);
			});
				
            $(function(){

				$('#j-p2').click(function(){
					$('#pagecontainer').load('blocks/page/j-projects.tpl #jp02')}
					);

				$('#j-p3').click(function(){
					$('#pagecontainer').load('blocks/page/j-projects.tpl #jp03')}
					);

				$('#j-t').click(function(){
					$('#pagecontainer').load('blocks/page/j-templates.tpl #jt01')}
					);

				$('#j-t2').click(function(){
					$('#pagecontainer').load('blocks/page/j-templates.tpl #jt02')}
					);
					
				$('#j-t3').click(function(){

					$('#pagecontainer').load('blocks/page/j-templates.tpl #jt03')}
					);
			});
				
			$(function(){
                $('#py-p,#py-t,#py-s').prop('title', 'python');
				$('#py-p').click(function(){

					$('#pagecontainer').load('blocks/page/py-projects.tpl #pyp01')}
					);

				$('#py-p2').click(function(){

					$('#pagecontainer').load('blocks/page/py-projects.tpl #pyp02')}
					);

				$('#py-p3').click(function(){

					$('#pagecontainer').load('blocks/page/py-projects.tpl #pyp03')}
					);

				$('#py-t').click(function(){

					$('#pagecontainer').load('blocks/page/py-templates.tpl #pyt01')}
					);

				$('#py-t2').click(function(){
					$('#pagecontainer').load('blocks/page/py-templates.tpl #pyt02')}
					);

				$('#py-t3').click(function(){
					$('#pagecontainer').load('blocks/page/py-templates.tpl #pyt03')}
					);
			});
				
             $(function(){
            //    $('#blg').prop('title', 'blog');
				$('#blg').click(function(){
					$('#pagecontainer').load('blocks/blog/index.tpl  #blg01')}
					);

				$('#blg2').click(function(){
					$('#pagecontainer').load('blocks/blog/index.tpl  #blg02')}
					);

				$('#blg3').click(function(){
					$('#pagecontainer').load('blocks/blog/index.tpl  #blg03')}
					);

				$('#blg4').click(function(){
					$('#pagecontainer').load('blocks/blog/index.tpl  #blg04')}
					);

				$('#blg5').click(function(){
					$('#pagecontainer').load('blocks/blog/index.tpl  #blg05')}
					);

				$('#blg6').click(function(){
					$('#pagecontainer').load('blocks/blog/index.tpl  #blg06')}
					);

				$('#blg7').click(function(){
					$('#pagecontainer').load('blocks/blog/index.tpl  #blg07')}
					);

				$('#blg8').click(function(){
					$('#pagecontainer').load('blocks/blog/index.tpl  #blg08')}
					);

				$('#blg9').click(function(){
					$('#pagecontainer').load('blocks/blog/index.tpl  #blg09')}
					);

				$('#blg10').click(function(){
					$('#pagecontainer').load('blocks/blog/index.tpl  #blg10')}
					);
			});
			
            $(function(){
                $('#tml').prop('title', 'timeline');
				$('#tml').click(function(){
					$('#pagecontainer').load('blocks/page/timeline.tpl')}
					);
				});

$('#flkrt').addClass("fa-flickr c-third").prop('title', 'My flickr');
function flkr() {
    window.open("https://www.flickr.com/photos/angeal185");
}
$('#gtlt').addClass("fa-gitlab").prop('title', 'My gitlab');
function gtl() {
    window.open("https://gitlab.com/angeal185");
}
$('#imgi').prop('title', 'My github');
function gth() {
    window.open("https://github.com/angeal185/");
}


$('#cdpt').addClass("fa-codepen").prop('title', 'My codepen');
function cdp() {
    window.open("https://codepen.io/angeal185/");
}
$('#jsft').addClass("fa-jsfiddle").prop('title', 'My jsfiddle');
function jsf() {
    window.open("https://jsfiddle.net/user/angeal185/");
}
$('#lndt').addClass("fa-linkedin").prop('title', 'My linkedin');
function lnd() {
    window.open("https://au.linkedin.com/in/ben-eaves-996991125");
}
$('#wbs1').addClass("octicon-flame").prop('title', 'My website');
function wbs() {
    window.open("http://angeal185.gitlab.io/angeal185/");
}
$('#wbs2').addClass("octicon-database").prop('title', 'My Portfolio');
function wbsp() {
    window.open("http://angeal185.gitlab.io/angeal185/");
}
$('#wbs3').addClass("octicon-file-text").prop('title', 'Contact me');
function wbsc() {
    window.open("http://angeal185.gitlab.io/angeal185/");
}
$('#wbs4').addClass("octicon-comment-discussion").prop('title', 'My resume');
function wbscv() {
    window.open("http://angeal185.gitlab.io/angeal185/");
}
















