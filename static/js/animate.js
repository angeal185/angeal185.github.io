(function(){var t,e,n,i=function(t,e){return function(){return t.apply(e,arguments)}},o=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,o,r;for(r=this.keys,e=i=0,o=r.length;o>i;e=++i)if(n=r[e],n===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,o,r,s;for(s=this.keys,n=o=0,r=s.length;r>o;n=++o)if(i=s[n],i===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){console.warn("MutationObserver is not supported by your browser."),console.warn("ANI.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),this.ANI=function(){function r(t){null==t&&(t={}),this.scrollCallback=i(this.scrollCallback,this),this.scrollHandler=i(this.scrollHandler,this),this.start=i(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),this.animationNameCache=new n}return r.prototype.defaults={boxClass:"ani",animateClass:"animated",offset:0,mobile:!1,live:!0},r.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():document.addEventListener("DOMContentLoaded",this.start),this.finished=[]},r.prototype.start=function(){var e,n,i,o;if(this.stopped=!1,this.boxes=function(){var t,n,i,o;for(i=this.element.querySelectorAll("."+this.config.boxClass),o=[],t=0,n=i.length;n>t;t++)e=i[t],o.push(e);return o}.call(this),this.all=function(){var t,n,i,o;for(i=this.boxes,o=[],t=0,n=i.length;n>t;t++)e=i[t],o.push(e);return o}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else{for(o=this.boxes,n=0,i=o.length;i>n;n++)e=o[n],this.applyStyle(e,!0);window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}return this.config.live?new t(function(t){return function(e){var n,i,o,r,s;for(s=[],o=0,r=e.length;r>o;o++)i=e[o],s.push(function(){var t,e,o,r;for(o=i.addedNodes||[],r=[],t=0,e=o.length;e>t;t++)n=o[t],r.push(this.doSync(n));return r}.call(t));return s}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},r.prototype.stop=function(){return this.stopped=!0,window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},r.prototype.sync=function(e){return t.notSupported?this.doSync(this.element):void 0},r.prototype.doSync=function(t){var e,n,i,r,s;if(!this.stopped){if(null==t&&(t=this.element),1!==t.nodeType)return;for(t=t.parentNode||t,r=t.querySelectorAll("."+this.config.boxClass),s=[],n=0,i=r.length;i>n;n++)e=r[n],o.call(this.all,e)<0?(this.applyStyle(e,!0),this.boxes.push(e),this.all.push(e),s.push(this.scrolled=!0)):s.push(void 0);return s}},r.prototype.show=function(t){return this.applyStyle(t),t.className=""+t.className+" "+this.config.animateClass},r.prototype.applyStyle=function(t,e){var n,i,o;return i=t.getAttribute("data-ani-duration"),n=t.getAttribute("data-ani-delay"),o=t.getAttribute("data-ani-iteration"),this.animate(function(r){return function(){return r.customStyle(t,e,i,n,o)}}(this))},r.prototype.animate=function(){return"requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()}}(),r.prototype.resetStyle=function(){var t,e,n,i,o;for(i=this.boxes,o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(t.setAttribute("style","visibility: visible;"));return o},r.prototype.customStyle=function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},r.prototype.vendors=["moz","webkit"],r.prototype.vendorSet=function(t,e){var n,i,o,r;r=[];for(n in e)i=e[n],t[""+n]=i,r.push(function(){var e,r,s,a;for(s=this.vendors,a=[],e=0,r=s.length;r>e;e++)o=s[e],a.push(t[""+o+n.charAt(0).toUpperCase()+n.substr(1)]=i);return a}.call(this));return r},r.prototype.vendorCSS=function(t,e){var n,i,o,r,s,a;for(i=window.getComputedStyle(t),n=i.getPropertyCSSValue(e),a=this.vendors,r=0,s=a.length;s>r;r++)o=a[r],n=n||i.getPropertyCSSValue("-"+o+"-"+e);return n},r.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=window.getComputedStyle(t).getPropertyValue("animation-name")}return"none"===e?"":e},r.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},r.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},r.prototype.scrollHandler=function(){return this.scrolled=!0},r.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,n,i,o;for(i=this.boxes,o=[],e=0,n=i.length;n>e;e++)t=i[e],t&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},r.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},r.prototype.isVisible=function(t){var e,n,i,o,r;return n=t.getAttribute("data-ani-offset")||this.config.offset,r=window.pageYOffset,o=r+Math.min(this.element.clientHeight,innerHeight)-n,i=this.offsetTop(t),e=i+t.clientHeight,o>=i&&e>=r},r.prototype.util=function(){return null!=this._util?this._util:this._util=new e},r.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},r}()}).call(this);
!function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=t.util.clone(e[r]));return a;case"Array":return e.slice()}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var r in n)a[r]=n[r];return a},insertBefore:function(e,n,a,r){r=r||t.languages;var i=r[e],s={};for(var l in i)if(i.hasOwnProperty(l)){if(l==n)for(var g in a)a.hasOwnProperty(g)&&(s[g]=a[g]);s[l]=i[l]}return r[e]=s},DFS:function(e,n){for(var a in e)n.call(e,a,e[a]),"Object"===t.util.type(e)&&t.languages.DFS(e[a],n)}},highlightAll:function(e,n){for(var a,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),i=0;a=r[i++];)t.highlightElement(a,e===!0,n)},highlightElement:function(a,r,i){for(var s,l,g=a;g&&!e.test(g.className);)g=g.parentNode;if(g&&(s=(g.className.match(e)||[,""])[1],l=t.languages[s]),l){a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,g=a.parentNode,/pre/i.test(g.nodeName)&&(g.className=g.className.replace(e,"").replace(/\s+/g," ")+" language-"+s);var o=a.textContent;if(o){o=o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ");var c={element:a,language:s,grammar:l,code:o};if(t.hooks.run("before-highlight",c),r&&self.Worker){var u=new Worker(t.filename);u.onmessage=function(e){c.highlightedCode=n.stringify(JSON.parse(e.data),s),t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(c.element),t.hooks.run("after-highlight",c)},u.postMessage(JSON.stringify({language:c.language,code:c.code}))}else c.highlightedCode=t.highlight(c.code,c.grammar,c.language),t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,i&&i.call(a),t.hooks.run("after-highlight",c)}}},highlight:function(e,a,r){return n.stringify(t.tokenize(e,a),r)},tokenize:function(e,n,a){var r=t.Token,i=[e],s=n.rest;if(s){for(var l in s)n[l]=s[l];delete n.rest}e:for(var l in n)if(n.hasOwnProperty(l)&&n[l]){var g=n[l],o=g.inside,c=!!g.lookbehind,u=0;g=g.pattern||g;for(var p=0;p<i.length;p++){var d=i[p];if(i.length>e.length)break e;if(!(d instanceof r)){g.lastIndex=0;var f=g.exec(d);if(f){c&&(u=f[1].length);var m=f.index-1+u,f=f[0].slice(u),h=f.length,y=m+h,w=d.slice(0,m+1),b=d.slice(y+1),v=[p,1];w&&v.push(w);var k=new r(l,o?t.tokenize(f,o):f);v.push(k),b&&v.push(b),Array.prototype.splice.apply(i,v)}}}}return i},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(n)}}},n=t.Token=function(e,t){this.type=e,this.content=t};if(n.stringify=function(e,a,r){if("string"==typeof e)return e;if("[object Array]"==Object.prototype.toString.call(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var i={type:e.type,content:n.stringify(e.content,a,r),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:r};"comment"==i.type&&(i.attributes.spellcheck="true"),t.hooks.run("wrap",i);var s="";for(var l in i.attributes)s+=l+'="'+(i.attributes[l]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+s+">"+i.content+"</"+i.tag+">"},!self.document)return void self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,r=n.code;self.postMessage(JSON.stringify(t.tokenize(r,t.languages[a]))),self.close()},!1);var a=document.getElementsByTagName("script");a=a[a.length-1],a&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll))}(),Prism.languages.markup={comment:/&lt;!--[\w\W]*?-->/g,prolog:/&lt;\?.+?\?>/,doctype:/&lt;!DOCTYPE.+?>/,cdata:/&lt;!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/gi,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[\{\};:]/g},Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}}),Prism.languages.clike={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/gi,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|&lt;=?|>=?|={1,3}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|throw|catch|finally|null|break|continue)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}}),Prism.hooks.add("after-highlight",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&-1!==t.className.indexOf("line-numbers")){var n,a=1+e.code.split("\n").length;lines=new Array(a),lines=lines.join("<span></span>"),n=document.createElement("span"),n.className="line-numbers-rows",n.innerHTML=lines,t.hasAttribute("data-start")&&(t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)),e.element.appendChild(n)}});
