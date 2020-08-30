import { x, xrender } from './modules/xscript.mjs';
import { xutils } from './modules/xutils.mjs';
import { ani } from './modules/ani.mjs';
import { xviews } from './views/xviews.mjs';
import { xdata } from './data/xdata.mjs';

window.cached = {}
//cached reference to app-main object
let cnv = [x('canvas', {
  class: 'cnv',
  style: 'width:100%;height:100%;'

}),
x('canvas', {
  class: 'cnv',
  style: 'width:100%;'
})],
bg_audio = x('audio', {
  class: 'hidden',
  src: './app/audio/bg-audio.mp3'
}),
app_main = x('div', {class:'app-main'});

document.onclick = function(){
  document.onclick = null
  bg_audio.play();
}

window.rmaudio = function(){
  window.rmaudio = null;
  bg_audio.remove();
}

// app default functions
let defaults = Object.assign(xdata.default, {
  app_main: app_main,
  each: {
    before: function(dest) {
      // return false;  cancel rout
      return true; // continue to rout
    },
    after: function(dest) {

      let title = dest.slice(1),
      evt = new CustomEvent('bc-ud', {detail: title});
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      document.title = title;
      window.dispatchEvent(evt);
    }
  },
  init: function(){
    document.body.classList.add('o0')
    document.body.append(...cnv, bg_audio);
    ani(cnv);

    xutils.build(xdata, xviews['build'](app_main));

    setTimeout(function(){

      document.body.classList.add('fadeIn')
      setTimeout(function(){
        document.body.removeAttribute('class')
      },2000)
    },1000)

    return this;
  },
  render: function(stream, path, data, cb){
    xrender(stream, xviews[path], data, xdata[path], cb);
    return this;
  }
})

export { defaults, app_main }
