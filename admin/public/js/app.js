$(document).ready(function() {
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



setTimeout(function(){
  $('code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
}, 300);

setTimeout(function(){
$("input").keyup(function(){
    $('code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
});
}, 1000);
setTimeout(function(){
$("code,.add").click(function(){
    $('code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
});
}, 1000);

function formatBytes(a,b){
	if(0==a)return"0 Bytes";
	var c=1024,d=b||2,e=["Bytes","KB","MB","GB"],
	f=Math.floor(Math.log(a)/Math.log(c));
	return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f]
}

function formatKiloBytes(a,b){
	if(0==a)return"0 Bytes";
	var c=1024,d=b||2,e=["KB","MB","GB"],
	f=Math.floor(Math.log(a)/Math.log(c));
	return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f]
}

function addcard(i,e){
	$("#status").append('<div class="col s6 m3"><div class="card-panel blue"><h4 class="card-title">'+i+'</h4><h5 class="green">'+e+'</h5></div></div>');
}

$.getJSON("/API", function(data){
//console.log(data.cpu[0].model);
  addcard("Platform",data.platform);
  addcard("Architecture",data.arch);
  addcard("Nodejs","v"+data.nodev.node);
  addcard("Uptime",data.uptime+"s");
  addcard("CWD",data.cwd);
  addcard("totalmem",formatBytes(data.totalmem,3));
  addcard("freemem",formatBytes(data.freemem,3));
  addcard("nodemem",formatBytes(data.nodemem,3));
  addcard("hostname",data.hostname);
  addcard("cpu",data.cpu[0].model);
  addcard("cpuUsage:user",formatKiloBytes(data.cpuUsage.user,2));
  addcard("cpuUsage:system",formatKiloBytes(data.cpuUsage.system,2));

});


});

var Ping = function(opt) {
    this.opt = opt || {};
    this.favicon = this.opt.favicon || "";
    this.timeout = this.opt.timeout || 0;
};

Ping.prototype.ping = function(source, callback) {
    this.img = new Image();
    var timer;

    var start = new Date();
    this.img.onload = pingCheck;
    this.img.onerror = pingCheck;
    if (this.timeout) { timer = setTimeout(pingCheck, this.timeout); }

    function pingCheck(e) {
        if (timer) { clearTimeout(timer); }
        var pong = new Date() - start;

        if (typeof callback === "function") {
            if (e.type === "error") {
                console.error("error loading resource");
                return callback("error", pong);
            }
            return callback(null, pong);
        }
    }

    this.img.src = source + this.favicon + "?" + (+new Date()); // Trigger image load with cache buster
};
