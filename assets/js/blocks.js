//js
$("a").attr("href", "javascript:void(0)");

$("#mt,#ctm").attr("href", href="mailto:beneaves01@hotmail.com");
$("#nv-0,#nv-1,#nv-2,#nv-3,#nv-4,#nv-5").addClass("tm nav-parent");
$("#wbs1,#wbs2,#wbs3,#wbs4,#cdpt,#jsft,#gtlt,#lndt").addClass("ani fadeIn");
$("#wbs1,#wbs2,#wbs3,#wbs4 ").addClass("octicon");
$("#cdpt,#jsft,#gtlt,#lndt,#flkrt,#fsc,#ctm,#gth2 ").addClass("fa");
$( "#wbs1,#wbs2,#wbs3,#wbs4,#cdpt,#jsft,#gtlt,#lndt" ).data( "ani-duration" ) === "5s";
$("#cc0,#cc1,#cc2,#cc3 ").addClass("children collapse").add;



$("#fsc,#ctm,#gth2").addClass("pull-left");
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

$("#ctm").attr("title", "contact me");
$("#gth2").attr({
        "src" : "assets/images/avatars/github.png",
        "title" : "back to github"
    });

$.get('http://jsonip.com', function (res) {
        $('#ip').html( 'Your IP: ' +res.ip);
    });
//document.getElementById("imgh").src = ("assets/images/avatars/github-512.png");
//$("#imgh").addClass("img-responsive img-circle");



document.getElementById('ctm').title = 'contact me';

//document.getElementById('indx').title = 'index';
//document.getElementById("imgh").src = "assets/images/avatars/github-512.png";
    //document.getElementById("div1").classList.add("classToBeAdded");


$(function() {
         $( "#pagecontainer" ).load( "blocks/page/index.html" );

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
        'blocks/page/h-projects.html',
        'blocks/page/j-projects.html',
        'blocks/page/p-projects.html',
        'blocks/page/py-projects.html',
        'blocks/page/p-sites.html',
        'blocks/page/py-sites.html',
        'blocks/page/j-sites.html',
        'blocks/page/h-sites.html',
        'blocks/page/j-templates.html',
        'blocks/page/h-templates.html',
        'blocks/page/p-templates.html',
        'blocks/page/py-templates.html'




     ]);

});


$(function(){
    $('#snp-pre').click(function(){
       $.preload([
       'blocks/snippets/snp-html.html',
       'blocks/snippets/snp-php.html',
       'blocks/snippets/snp-js.html',
       'blocks/snippets/snp-python.html']
            )}
        );
    });

$(function(){
    $('.sidebar-widgets').mouseover(function(){
       $.preload([
       'blocks/page/timeline.html']
            )}
        );
    });


            jQuery(function(){
                document.getElementById('indx').title = 'index';
                jQuery('#indx').click(function(){
			        jQuery('#pagecontainer').load('blocks/page/index.html')}
					);
				});
			jQuery(function(){
			       $('#h-p,#h-t,#h-s').prop('title', 'html');
				jQuery('#h-p').click(function(){
					jQuery('#pagecontainer').load('blocks/page/h-projects.html #hp01')}
					);
				});
            jQuery(function(){

				jQuery('#h-p2').click(function(){
					jQuery('#pagecontainer').load('blocks/page/h-projects.html #hp02')}
					);
				});
            jQuery(function(){

                jQuery('#h-p3').click(function(){
					jQuery('#pagecontainer').load('blocks/page/h-projects.html #hp03')}
					);
				});
			jQuery(function(){

				jQuery('#h-t').click(function(){
					jQuery('#pagecontainer').load('blocks/page/h-templates.html #ht01')}
					);
				});
            jQuery(function(){

				jQuery('#h-t2').click(function(){
					jQuery('#pagecontainer').load('blocks/page/h-templates.html #ht02')}
					);
				});
            jQuery(function(){

				jQuery('#h-t3').click(function(){
					jQuery('#pagecontainer').load('blocks/page/h-templates.html #ht03')}
					);
				});
			jQuery(function(){

				jQuery('#h-s').click(function(){
					jQuery('#pagecontainer').load('blocks/page/h-sites.html #hs01')}
					);
				});
            jQuery(function(){

				jQuery('#h-s2').click(function(){
					jQuery('#pagecontainer').load('blocks/page/h-sites.html #hs02')}
					);
				});
            jQuery(function(){

				jQuery('#h-s3').click(function(){
					jQuery('#pagecontainer').load('blocks/page/h-sites.html #hs03')}
					);
				});
			jQuery(function(){
                $('#p-p,#p-t,#p-s').prop('title', 'php');
				jQuery('#p-p').click(function(){
					jQuery('#pagecontainer').load('blocks/page/p-projects.html #pp01')}
					);
				});
            jQuery(function(){

				jQuery('#p-p2').click(function(){
					jQuery('#pagecontainer').load('blocks/page/p-projects.html #pp02')}
					);
				});
            jQuery(function(){

				jQuery('#p-p3').click(function(){
					jQuery('#pagecontainer').load('blocks/page/p-projects.html #pp03')}
					);
				});
			jQuery(function(){

				jQuery('#p-t').click(function(){
					jQuery('#pagecontainer').load('blocks/page/p-templates.html #pt01')}
					);
				});
            jQuery(function(){

				jQuery('#p-t2').click(function(){
					jQuery('#pagecontainer').load('blocks/page/p-templates.html #pt02')}
					);
				});
            jQuery(function(){

				jQuery('#p-t3').click(function(){
					jQuery('#pagecontainer').load('blocks/page/p-templates.html #pt03')}
					);
				});
			jQuery(function(){

				jQuery('#p-s').click(function(){
					jQuery('#pagecontainer').load('blocks/page/p-sites.html #ps01')}
					);
				});
            jQuery(function(){

				jQuery('#p-s2').click(function(){
					jQuery('#pagecontainer').load('blocks/page/p-sites.html #ps02')}
					);
				});
            jQuery(function(){

				jQuery('#p-s3').click(function(){
					jQuery('#pagecontainer').load('blocks/page/p-sites.html #ps03')}
					);
				});
			jQuery(function(){
                $('#j-p,#j-t,#j-s').prop('title', 'javascript');
				jQuery('#j-p').click(function(){
					jQuery('#pagecontainer').load('blocks/page/j-projects.html #jp01')}
					);
				});
            jQuery(function(){

				jQuery('#j-p2').click(function(){
					jQuery('#pagecontainer').load('blocks/page/j-projects.html #jp02')}
					);
				});
            jQuery(function(){

				jQuery('#j-p3').click(function(){
					jQuery('#pagecontainer').load('blocks/page/j-projects.html #jp03')}
					);
				});
			jQuery(function(){

				jQuery('#j-t').click(function(){
					jQuery('#pagecontainer').load('blocks/page/j-templates.html #jt01')}
					);
				});
            jQuery(function(){

				jQuery('#j-t2').click(function(){
					jQuery('#pagecontainer').load('blocks/page/j-templates.html #jt02')}
					);
				});
            jQuery(function(){
				jQuery('#j-t3').click(function(){

					jQuery('#pagecontainer').load('blocks/page/j-templates.html #jt03')}
					);
				});
			jQuery(function(){
				jQuery('#j-s').click(function(){
					jQuery('#pagecontainer').load('blocks/page/j-sites.html #js01')}
					);
				});
            jQuery(function(){
				jQuery('#j-s2').click(function(){
					jQuery('#pagecontainer').load('blocks/page/j-sites.html #js02')}
					);
				});
            jQuery(function(){
				jQuery('#j-s3').click(function(){
					jQuery('#pagecontainer').load('blocks/page/j-sites.html #js03')}
					);
				});
			jQuery(function(){
                $('#py-p,#py-t,#py-s').prop('title', 'python');
				jQuery('#py-p').click(function(){

					jQuery('#pagecontainer').load('blocks/page/py-projects.html #pyp01')}
					);
				});
            jQuery(function(){
				jQuery('#py-p2').click(function(){

					jQuery('#pagecontainer').load('blocks/page/py-projects.html #pyp02')}
					);
				});
            jQuery(function(){
				jQuery('#py-p3').click(function(){

					jQuery('#pagecontainer').load('blocks/page/py-projects.html #pyp03')}
					);
				});
			jQuery(function(){
				jQuery('#py-t').click(function(){

					jQuery('#pagecontainer').load('blocks/page/py-templates.html #pyt01')}
					);
				});
            jQuery(function(){
				jQuery('#py-t2').click(function(){
					jQuery('#pagecontainer').load('blocks/page/py-templates.html #pyt02')}
					);
				});
            jQuery(function(){
				jQuery('#py-t3').click(function(){
					jQuery('#pagecontainer').load('blocks/page/py-templates.html #pyt03')}
					);
				});
			jQuery(function(){
				jQuery('#py-s').click(function(){
					jQuery('#pagecontainer').load('blocks/page/py-sites.html #pys01')}
					);
				});
            jQuery(function(){
				jQuery('#py-s2').click(function(){
					jQuery('#pagecontainer').load('blocks/page/py-sites.html #pys02')}
					);
				});
            jQuery(function(){
				jQuery('#py-s3').click(function(){
					jQuery('#pagecontainer').load('blocks/page/py-sites.html #pys03')}
					);
				});
            jQuery(function(){
                $('#sn-h,#sn-p,#sn-py,#sn-j').prop('title', 'snippets');
				jQuery('#sn-h').click(function(){
					jQuery('#pagecontainer').load('blocks/snippets/snp-html.html #snh01')}
					);
				});
            jQuery(function(){
				jQuery('#sn-h2').click(function(){
					jQuery('#pagecontainer').load('blocks/snippets/snp-html.html #snh02')}
					);
				});
            jQuery(function(){
				jQuery('#sn-h3').click(function(){
					jQuery('#pagecontainer').load('blocks/snippets/snp-html.html #snh03')}
					);
				});
            jQuery(function(){
				jQuery('#sn-py').click(function(){
					jQuery('#pagecontainer').load('blocks/snippets/snp-python.html #snpy01')}
					);
				});
            jQuery(function(){
				jQuery('#sn-py2').click(function(){
					jQuery('#pagecontainer').load('blocks/snippets/snp-python.html #snpy02')}
					);
				});
            jQuery(function(){
				jQuery('#sn-py3').click(function(){
					jQuery('#pagecontainer').load('blocks/snippets/snp-python.html #snpy03')}
					);
				});
            jQuery(function(){
				jQuery('#sn-p').click(function(){
					jQuery('#pagecontainer').load('blocks/snippets/snp-php.html #snp01')}
					);
				})
            jQuery(function(){
				jQuery('#sn-p2').click(function(){
					jQuery('#pagecontainer').load('blocks/snippets/snp-php.html #snp02')}
					);
				});
            jQuery(function(){
				jQuery('#sn-p3').click(function(){
					jQuery('#pagecontainer').load('blocks/snippets/snp-php.html #snp03')}
					);
				});
             jQuery(function(){
				jQuery('#sn-j').click(function(){
					jQuery('#pagecontainer').load('blocks/snippets/snp-js.html #snj01')}
					);
				});
            jQuery(function(){
				jQuery('#sn-j2').click(function(){
					jQuery('#pagecontainer').load('blocks/snippets/snp-js.html #snj02')}
					);
				});
            jQuery(function(){
				jQuery('#sn-j3').click(function(){
					jQuery('#pagecontainer').load('blocks/snippets/snp-js.html #snj03')}
					);
				});
             jQuery(function(){
            //    $('#blg').prop('title', 'blog');
				jQuery('#blg').click(function(){
					jQuery('#pagecontainer').load('blocks/blog/index.html  #blg01')}
					);
				});
            jQuery(function(){
				jQuery('#blg2').click(function(){
					jQuery('#pagecontainer').load('blocks/blog/index.html  #blg02')}
					);
				});
            jQuery(function(){
				jQuery('#blg3').click(function(){
					jQuery('#pagecontainer').load('blocks/blog/index.html  #blg03')}
					);
				});
            jQuery(function(){
				jQuery('#blg4').click(function(){
					jQuery('#pagecontainer').load('blocks/blog/index.html  #blg04')}
					);
				});
            jQuery(function(){
				jQuery('#blg5').click(function(){
					jQuery('#pagecontainer').load('blocks/blog/index.html  #blg05')}
					);
				});
            jQuery(function(){
				jQuery('#blg6').click(function(){
					jQuery('#pagecontainer').load('blocks/blog/index.html  #blg06')}
					);
				});
            jQuery(function(){
				jQuery('#blg7').click(function(){
					jQuery('#pagecontainer').load('blocks/blog/index.html  #blg07')}
					);
				});
            jQuery(function(){
				jQuery('#blg8').click(function(){
					jQuery('#pagecontainer').load('blocks/blog/index.html  #blg08')}
					);
				});
            jQuery(function(){
				jQuery('#blg9').click(function(){
					jQuery('#pagecontainer').load('blocks/blog/index.html  #blg09')}
					);
				});
            jQuery(function(){
				jQuery('#blg10').click(function(){
					jQuery('#pagecontainer').load('blocks/blog/index.html  #blg10')}
					);
				});
             jQuery(function(){
                $('#tml').prop('title', 'timeline');
				jQuery('#tml').click(function(){
					jQuery('#pagecontainer').load('blocks/page/timeline.html')}
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
    window.open("http://angeal185.byethost6.com/html");
}
$('#wbs2').addClass("octicon-database").prop('title', 'My Portfolio');
function wbsp() {
    window.open("http://angeal185.byethost6.com/portfolio.html");
}
$('#wbs3').addClass("octicon-file-text").prop('title', 'Contact me');
function wbsc() {
    window.open("https://angeal185.byethost6.com/contact.html");
}
$('#wbs4').addClass("octicon-comment-discussion").prop('title', 'My resume');
function wbscv() {
    window.open("https://angeal185.byethost6.com/contact.html");
}
















