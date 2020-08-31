import { x } from '../modules/xscript.mjs';
import { xdata } from '../data/xdata.mjs';
import { router } from '../modules/jsnode.mjs';
import { utils } from '../modules/utils.mjs';
import { tpl } from './tpl.mjs';

const xviews = {
  build(app_main){

    let toTop = x('div', {
      class: 'totop icon-chevron-up sh-95 hidden',
      onclick: function(){
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }),bc = x('span', {class: 'bc'},
      xdata.default.title,
      x('span')
    ),
    bc_tpl = x('span'),
    item = x('main-view',
      tpl.menu_main(router),
      x('div', {class: 'app-main container-fluid'},
        app_main,
        x('div',{class: 'b-nav'},
          toTop,
          bc,
          tpl.bnav_lnks(router)
        )
      )
    )

    window.addEventListener('scroll', utils.debounce(function(evt){
       let top = window.pageYOffset || document.scrollTop
       if(top === NaN || !top){
         toTop.classList.add('hidden')
       } else if(toTop.classList.contains('hidden')){
         toTop.classList.remove('hidden');
       }
       top = null;
       return;
    }, 250))

    window.addEventListener('bc-ud', function(evt){
      let arr = [],
      items = evt.detail.split('/');
      for (let i = 0; i < items.length; i++) {
        items[i] = items[i].split('?')[0];
        arr.push(x('span',
          x('i', {class: 'icon-chevron-right'},
          items[i]
        )))
      }
      utils.empty(bc.lastChild).append(...arr)
    })

    xviews.build = null;
    return item
  },
  error(stream, data){
    return x('code', stream.js(data))
  },
  dashboard(stream, data){
    if(window.cached.dashboard){
      console.log('loading dashboard cache')
      return window.cached.dashboard;
    }
    let item = x('div');

    utils.get(data.url, xdata.default.stream.fetch, function(err,res){
      if(err){
        utils.toast('danger', 'failed to load dashboard data');
        return console.error(err);
      }


      let nav_row = x('div', {class: 'row mb-4 justify-content-center'}),
      recent_div = x('div', {class: 'row'}),
      favorite_div = x('div', {class: 'row'}),
      animations_div = x('div', {class: 'row'});

      for (let i = 0; i < data.nav.length; i++) {
        nav_row.append(tpl.dash_card(data.nav[i],router))
      }

      for (let i = 0; i < res.recent_works.length; i++) {
        recent_div.append(tpl.repo_tpl(res.recent_works[i]));
      }

      for (let i = 0; i < res.favorite_works.length; i++) {
        favorite_div.append(tpl.repo_tpl(res.favorite_works[i]));
      }

      for (let i = 0; i < res.favorite_animations.length; i++) {
        animations_div.append(tpl.ani_img(res.favorite_animations[i]));
      }

      item.append(
        nav_row,
        tpl.head_card('Recent works'),
        recent_div,
        tpl.head_card('Favorite works'),
        favorite_div,
        tpl.head_card('Favorite animations'),
        animations_div
      );

      window.cached.dashboard = item;
    })

    return item;
  },
  animations(stream, data){
    if(window.cached.animations){
      console.log('loading skills cache')
      return window.cached.animations;
    }
    let item = x('div', {class: 'row justify-content-center'});

    utils.get(data.url, xdata.default.stream.fetch, function(err,res){
      if(err){
        utils.toast('danger', 'failed to load animations data');
        return console.error(err);
      }

      let arr = [];
      for (let i = 0; i < res.length; i++) {
        arr.push(tpl.ani_img(res[i]))
      }

      item.append(...arr);
      window.cached.animations = item;
    })

    return item;
  },
  skills(stream, data){
    if(window.cached.skills){
      console.log('loading skills cache')
      return window.cached.skills;
    }
    let item = x('div');

    utils.get(data.url, xdata.default.stream.fetch, function(err,res){
      if(err){
        utils.toast('danger', 'failed to load skills data');
        return console.error(err);
      }
      let items = Object.keys(res);

      for (let i = 1; i < items.length; i++) {
        item.append(
          x('div', {class:'card mb-4'},
            x('div', {class:'card-header'},
              x('h4', {class: 'capital'},items[i].replace(/_/g, ' '),
                x('span', {class: 'float-right fs1 red-txt'}, res.note[items[i]])
              )
            ),
            function(){
              let div = x('div', {class:'card-body'});
              for (let j = 0; j < res[items[i]].length; j++) {
                div.append(x('span', {class: 'badge sh-95 fs1 mb-1'}, res[items[i]][j]))
              }
              return div
            }
          )
        )
      }

      window.cached.skills = item;
    })

    return item;
  },
  works(stream, data){
    if(window.cached.works){
      console.log('loading works cache')
      return window.cached.works;
    }
    let item = x('div');

    utils.get(data.url, xdata.default.stream.fetch, function(err,res){
      if(err){
        utils.toast('danger', 'failed to load links data');
        return console.error(err);
      }
      let div = x('div', {class: 'row'});
      for (let i = 0; i < res.length; i++) {
        div.append(tpl.repo_tpl(res[i]));
      }
      item.append(div);
      window.cached.works = item;
    })

    return item;
  },
  links(stream, data){
    if(window.cached.links){
      console.log('loading links cache')
      return window.cached.links;
    }
    let item = x('div');

    utils.get(data.url, xdata.default.stream.fetch, function(err,res){
      if(err){
        utils.toast('danger', 'failed to load links data');
        return console.error(err);
      }
      let div = x('div', {class: 'row'});
      for (let i = 0; i < res.length; i++) {
        div.append(tpl.lnk_tpl(res[i], i));
      }
      item.append(div);
      window.cached.links = item;
    })
    return item;
  },
  events(stream, data){
    if(window.cached.links){
      console.log('loading links cache')
      return window.cached.links;
    }
    let item = x('div', {class: 'row justify-content-center'});

    utils.get(data.profile, xdata.default.stream.cors, function(err,userData){
      if(err){
        utils.toast('danger', 'failed to load profile data');
        return console.error(err);
      }

      let div = tpl.lg_active('Recent events')

      utils.get(data.url, xdata.default.stream.cors, function(err,res){
        if(err){
          utils.toast('danger', 'failed to load events data');
          return console.error(err);
        }

        for (let i = 0; i < res.length; i++) {
          div.append(tpl.event_tpl(res[i]))
        }

        item.append(
          tpl.profile_card(userData),
          x('div', {class: 'col-8'},div)
        );
        window.cached.links = item;
      })
    })
    return item;
  },
  about(stream, data){
    if(window.cached.about){
      console.log('loading about cache')
      return window.cached.about;
    }
    let item = x('div');

    utils.get(data.url, xdata.default.stream.fetch, function(err,res){
      if(err){
        utils.toast('danger', 'failed to load about data')
        return console.error(err)
      }

      let about_body = tpl.lg_active('Personal data'),
      job_body = tpl.lg_active('Job preferences'),
      about_keys = Object.keys(res.about_me);

      for (let i = 0; i < about_keys.length; i++) {
        if(typeof res.about_me[about_keys[i]] === 'string'){
          about_body.append(x('span', {class:'list-group-item'},
            x('span', {class: 'capital'}, about_keys[i].replace(/_/g, ' ')),
            x('span', {class: 'float-right text-right'}, res.about_me[about_keys[i]])
          ))
        } else {
          let div = x('span', {class: 'float-right text-right'});

          for (let j = 0; j < res.about_me[about_keys[i]].length; j++) {
            div.append(x('span', {class: 'badge'}, res.about_me[about_keys[i]][j]))
          }

          about_body.append(x('span', {class:'list-group-item'},
            x('span', {class: 'capital'},about_keys[i].replace(/_/g, ' ')), div
          ))
        }
      }

      for (let i = 0; i < res.job_preferences.length; i++) {
        if(typeof res.job_preferences[i].response === 'string'){
          job_body.append(x('span', {class:'list-group-item'},
              x('span', {class: 'capital'}, res.job_preferences[i].title),
              x('span', {class: 'float-right text-right'}, res.job_preferences[i].response)
          ))
        } else {
          let div = x('span', {class: 'float-right text-right'});
          for (let j = 0; j < res.job_preferences[i].response.length; j++) {
            div.append(x('span', {class: 'badge'}, res.job_preferences[i].response[j]));
          }
          job_body.append(x('span', {class:'list-group-item'},
            x('span', {class: 'capital'},res.job_preferences[i].title),
            div)
          );
        }
      }

      item.append(about_body,job_body);
      window.cached.about = item;
    })

    return item;
  },
  blog(stream, data){
    let item = x('div', {class: 'row'},
      x('div', {class: 'col-lg-9'})
    )

    if(window.caches.blog){
      item.append(window.caches.blog);
    }

    utils.get(data.url, xdata.default.stream.fetch, function(err,res){
      if(err){
        utils.toast('danger', 'failed to load blog data');
        return console.error(err);
      }

      if(!window.caches.blog){
        let cats = tpl.lg_active('Categories'),
        tags = tpl.lg_active('Tags'),
        cats_div = x('div', {class:'list-group-item'}),
        tags_div = x('div', {class:'list-group-item'});

        for (let i = 0; i < res.categories.length; i++) {
          cats_div.append(x('span', {
            class: 'badge sh-95 mb-2 cp',
            onclick(){
              router.rout('/blog?category='+ encodeURIComponent(res.categories[i]))
            }
          }, res.categories[i]))
        }
        for (let i = 0; i < res.tags.length; i++) {
          tags_div.append(x('span', {
            class: 'badge sh-95 mb-2 cp',
            onclick(){
              router.rout('/blog?tag='+ encodeURIComponent(res.tags[i]))
            }
          }, res.tags[i]))
        }

        cats.append(cats_div);
        tags.append(tags_div);

        let sbr = x('div', {class: 'col-lg-3'},cats, tags)

        window.caches.blog = sbr;
        item.append(sbr);
      }

      let post_div = x('div'),
      fltr = null;

      if(data.category){
        fltr = decodeURIComponent(data.category);
        for (let i = 0; i < res.posts.length; i++) {
          if(res.posts[i].category === fltr){
            post_div.append(tpl.blog_post(res.posts[i],router))
          }
        }
      } else if(data.tag){
        fltr = decodeURIComponent(data.tag);
        for (let i = 0; i < res.posts.length; i++) {
          if(res.posts[i].tags.indexOf(fltr) !== -1){
            post_div.append(tpl.blog_post(res.posts[i],router))
          }
        }
      } else if(data.author){
        fltr = decodeURIComponent(data.author);
        for (let i = 0; i < res.posts.length; i++) {
          if(res.posts[i].author === fltr){
            post_div.append(tpl.blog_post(res.posts[i],router))
          }
        }
      } else {
        for (let i = 0; i < res.posts.length; i++) {
          post_div.append(tpl.blog_post(res.posts[i],router))
        }
      }

      item.firstChild.append(post_div)
    })

    return item;
  },
  resume(stream, data){
    if(window.cached.resume){
      console.log('loading resume cache')
      return window.cached.resume;
    }
    let item = x('div');

    utils.get(data.url, xdata.default.stream.fetch, function(err,res){
      if(err){
        utils.toast('danger', 'failed to load about data');
        return console.error(err);
      }

      let resume_body = tpl.lg_active('Resume'),
      education_body = tpl.lg_active('Education');

      for (let i = 0; i < res.resume.length; i++) {
        resume_body.append(tpl.resume_tpl(res.resume[i]));
      }

      for (let i = 0; i < res.education.length; i++) {
        education_body.append(tpl.education_tpl(res.education[i]));
      }

      item.append(resume_body,education_body);
      window.cached.resume = item;
    })

    return item;
  }
}

export { xviews }
