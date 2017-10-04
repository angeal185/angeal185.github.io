$(window).on('load', function() {
	 $(function(e) {
		e.preload = function(t, n, a) {
			var r = [],
				s = function(e) {
					for (var t = 0; t < r.length; t++)
						if (r[t].src === e.src) return r[t];
					return r.push(e), e;
				},
				p = function(e, t, n) {
					"function" == typeof t && t.call(e, n);
				};
			return function(t, n, a) {
				if ("undefined" != typeof t) {
					"string" == typeof t && (t = [t]), 2 === arguments.length && "function" == typeof n && (a = n, n = 0);
					var r, i = t.length;
					if (n > 0 && i > n && (r = t.slice(n, i), t = t.slice(0, n), i = t.length), !i) return void p(t, a, !0);
					for (var o, c = arguments.callee, g = 0, u = function() {
							g++, g === i && (p(t, a, !r), c(r, n, a));
						}, l = 0; l < t.length; l++) o = new Image(), o.src = t[l], o = s(o), o.complete ? u() : e(o).on("load error", u);
				}
			};
		}();
		var t = function(t, n) {
			var a, r, s, p, i, o = [],
				c = new RegExp("url\\(['\"]?([^\"')]*)['\"]?\\)", "i");
			return n.recursive && (t = t.find("*").add(t)), t.each(function() {
				for (a = e(this), r = a.css("background-image") + "," + a.css("border-image-source"), r = r.split(","), i = 0; i < r.length; i++) s = r[i], -1 === s.indexOf("about:blank") && -1 === s.indexOf("data:image") && (p = c.exec(s), p && o.push(p[1]));
				"IMG" === this.nodeName && o.push(this.src);
			}), o;
		};
		e.fn.preload = function() {
			var n, a;
			1 === arguments.length ? "object" == typeof arguments[0] ? n = arguments[0] : a = arguments[0] : arguments.length > 1 && (n = arguments[0], a = arguments[1]), n = e.extend({
				recursive: !0,
				part: 0
			}, n);
			var r = this,
				s = t(r, n);
			return e.preload(s, n.part, function(e) {
				e && "function" == typeof a && a.call(r.get());
			}), this;
		};
	}),
	$(function() {
		var arr1 = [
			'app/images/nodejs.png',
			'app/images/python.png',
			'app/images/jquery.png',
			'app/images/codepen-logo.svg',
			'app/images/php.png',
			'app/images/angular.png',
			'app/images/stylus.png'
		];		
		var arr2 = [
			'nodejs',
			'javascript',
			'python',
			'stylus',
			'php',
			'codepen'
		];
		$.preload(arr1);
		arr2.forEach(function(i) {
			$.getJSON('app/data/' + i + '.json');
		});
	});
});
