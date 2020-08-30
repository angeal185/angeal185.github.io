import { x } from './xscript.mjs';
import { xdata } from '../data/xdata.mjs';
import { tpl } from '../views/tpl.mjs';

const wcs = window.crypto.subtle;

const utils = {
  get(src, options, cb){
    fetch(new Request(src,options)).then(function(res){
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        return Promise.reject(new Error(res.statusText))
      }
    }).then(function(data){
      cb(false, data);
    }).catch(function(err){
      cb(err)
    })
  },
  truncate(str, len){
    return str.slice(0, len) + '...'
  },
  empty: function(i){
    while (i.firstChild) {
      i.removeChild(i.firstChild);
    }
    return i
  },
  debounce(func, wait, immediate) {
    let timeout;
    return function() {
      let context = this, args = arguments,
      later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      },
      callNow = immediate && !timeout;

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow){
        func.apply(context, args);
      }
    }
  },
  hash(str, cb){
    wcs.digest({name: "SHA-512"},utils.str2u8(str))
    .then(function(hash){
      cb(false, new Uint8Array(hash));
    })
    .catch(function(err){
      cb(err)
    });
  },
  pbkdf2(pass,cb){

    wcs.importKey('raw', Uint8Array.from(pass.slice(0,32)),{name: 'PBKDF2'},false,['deriveBits'])
    .then(function(key) {
      wcs.deriveBits({
        "name": "PBKDF2",
        salt: Uint8Array.from(pass.slice(32)),
        iterations: 10000,
        hash: {name: "SHA-512"}},
        key, 256
      )
      .then(function(bits){
        cb(false, new Uint8Array(bits));
      })
      .catch(function(err){
        cb(err);
      });
    })
    .catch(function(err){
      cb(err);
    });
  },
  str2u8(str) {
    return new TextEncoder().encode(str);
  },
  u82str(str){
    return new TextDecoder().decode(str)
  },
  arr2hex(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
      str+= ('0' + (arr[i] & 0xFF).toString(16)).slice(-2);
    }
    return str;
  },
  hex2arr(str) {
    let arr = [];
    for (var i = 0; i < str.length; i += 2) {
      arr.push(parseInt(str.substr(i, 2), 16));
    }
    return arr;
  },
  checkSpecial(str){
   return !/[~`!#$%\^&*+=\\\[\]\\';,/{}|\\":<>\?]/g.test(str);
 },
 toast: function(i, msg){
   const toast = x('div', {
      id: 'toast',
      class: 'alert alert-'+ i,
       role: "alert"
   }, msg);
   document.body.append(toast);
   setTimeout(function(){
     toast.classList.add('fadeout');
     setTimeout(function(){
       toast.remove();
     },1000)
   },3000)
   return;
 },
 add_sp: function(item, text){
   item.append(x('span',{class: 'spinner-grow spinner-grow-sm mr-1'}));
 },
 remove_sp: function(item, text){
   setTimeout(function(){
     item.lastChild.remove();
   },1000)
 },
 shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  },
  sanitizeURI(str){
    try {
      if(typeof str !== 'string'){
        return false;
      }
      str = decodeURIComponent(str);
      let url = new URL(str);
      if(url.protocol !== 'https:' || url.search || str.split('?').length > 1){
        return false;
      }
      url = null;
      return encodeURI(str);
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

export { utils }
