import { x } from '../modules/xscript.mjs';
import { xdata } from '../data/xdata.mjs';

const tpl = {
  //nav
  menu_main(router){
    let nav_left = x('div', {class: 'nav-left col-6 d-flex'},
      x('div', {
        class: 'nav-lnk ico-bars mr-2',
        onclick(){
          window.dispatchEvent(new Event("toggle-sidebar"));
        }
      },x('span'),x('span'),x('span')),
      x('span', {class: 'logo-trans'},'Ben Eaves')
    ),
    nav_right = x('div', {class: 'nav-right col-6'},
      x('div', {
        class: 'nav-lnk sh-95 icon-envelope',
        title: 'contact',
        onclick(){
          window.open('mailto://'+ xdata.base.email)
        }
      })
    ),
    nav_sb = x('div', {class: 'nav-sb'},
      x('div', {class: 'sb-body'})
    ),
    items = xdata.base.nav,
    sb_items = xdata.base.nav_sb;



    for (let i = 0; i < sb_items.length; i++) {
      nav_sb.firstChild.append(x('div', {
          class: 'sb-lnk',
          onclick(){
            window.dispatchEvent(new Event("toggle-sidebar"));
            router.rout('/'+ sb_items[i])
          }
        },
        sb_items[i],
        x('span', {class:'icon-chevron-right float-right'})
      ))
    }


    window.addEventListener('toggle-sidebar', function(evt){
      let txt = nav_left.lastChild.textContent;
      nav_left.firstChild.classList.toggle('open');
      nav_left.parentNode.classList.toggle('red-txt');
      nav_left.lastChild.classList.toggle('logo-txt');
      if(txt === 'Ben Eaves'){
        nav_left.lastChild.textContent = 'Portfolio'
      } else {
        nav_left.lastChild.textContent = 'Ben Eaves'
      }
      nav_sb.classList.toggle('active')
    })


    return x('nav', {class: 'navbar fixed-top menu-nav'},
      x('div', {class: 'row'},
        nav_left, nav_right
      ),
      nav_sb
    );

  },
  bnav_lnks(router){


    return x('span', {class: 'b-lnks'},
      x('span', {
        class: 'icon-volume-up cp ml-2',
        title: 'kill audio',
        onclick(evt){
            window.rmaudio();
            evt.target.remove()
        }
      }),
      x('span', {
        class: 'icon-rss cp ml-2',
        title: 'atom feeds',
        onclick(){
          router.rout('/atom', {})
        }
      }),
      x('span', {
        class: 'icon-linkedin cp ml-2',
        title: 'linkedin profile',
        onclick(){
          window.open(xdata.base.linkedin)
        }
      }),
      x('span', {
        class: 'icon-codepen cp ml-2',
        title: 'codepen profile',
        onclick(){
          window.open(xdata.base.codepen)
        }
      }),
      x('span', {
        class: 'icon-github cp ml-2',
        title: 'github profile',
        onclick(){
          window.open(xdata.base.github)
        }
      }),
      x('span', {
        class: 'icon-npm cp ml-2',
        title: 'npm profile',
        onclick(){
          window.open(xdata.base.npm)
        }
      })
    )
  },
  repo_tpl(res){
    return x('div', {class: 'col-lg-6 mb-4'},
      x('div', {class: 'card'},
        x('div', {class: 'card-body'},
          x('h3', x('a', {
            class: 'link-txt font-weight-bold',
            title: 'View codebase',
            target: '_blank',
            href: res.html_url
          },res.name)),
          x('h5', {class: 'font-weight-normal mb-4'}, res.description || 'no description provided'),
          x('span', {class: 'icon-calendar black-txt d-block fs1 cp', title: 'Created'},
            x('span', {class: 'ml-2 red-txt'}, new Date(res.created_at).toLocaleString())
          ),
          x('span', {class: 'icon-calendar black-txt d-block fs1 cp', title: 'Last updated'},
            x('span', {class: 'ml-2 red-txt'}, new Date(res.updated_at).toLocaleString())
          ),
          x('span', {class: 'icon-code black-txt fs1 d-block cp', title: 'Language'},
            x('span', {class: 'ml-2 red-txt badge'}, res.language || 'other')
          ),
          x('span', {class:'icon-git-alt black-txt fs1 d-block cp', title: 'git url'},
            x('small', {class:'ml-2 link-txt'}, res.git_url || '')
          )

        )
      )
    )
  },
  lnk_tpl(res, i){
    return x('div', {class: 'col-lg-6 mb-4'},
      x('div', {class: 'card'},
        x('div', {class: 'card-body'},
          x('h4', res.title),
          x('h5', {class: 'font-weight-light'},res.description),
          function(){
            if(i < 6){
              return x('a', {
                target: '_blank',
                href: res.url,
                title: res.url,
              }, res.url.split('//')[1])
            } else {
              return x('h6', {class:'link-txt'}, res.url)
            }
          }
        )
      )
    )
  },
  resume_tpl(res){
    return x('div',{class:'list-group-item'},
      x('h4', {class: 'link-txt font-weight-bold'}, res.organization,
        x('small', {class:'float-right red-txt font-weight-light'}, res.duration)
      ),
      x('h5', {class: 'font-weight-normal'}, res.title),
      x('h6', {class: 'font-weight-light'}, 'Duties:', function(){
        let spn = x('span', {class: 'float-right text-right'});
        for (let j = 0; j < res.duties.length; j++) {
          spn.append(x('span', {class: 'badge'}, res.duties[j]))
        }
        return spn;
      }),
      x('h6', {class: 'font-weight-light'}, 'Languages:', function(){
        let spn = x('span', {class: 'float-right text-right'});
        for (let j = 0; j < res.languages.length; j++) {
          spn.append(x('span', {class: 'badge'}, res.languages[j]))
        }
        return spn;
      })
    )
  },
  education_tpl(res){
    return x('div',{class:'list-group-item'},
      x('h4', {class: 'link-txt font-weight-bold'}, res.title,
        x('small', {class:'float-right red-txt font-weight-light'}, res.date)
      ),
      x('h5', {class: 'font-weight-normal'}, res.organization)
    )
  },
  lg_active(str){
    return x('div', {class:'list-group mb-4'},
      x('div', {class:'list-group-item active'}, str)
    )
  },
  head_card(str){
    return x('div', {class: 'card mb-4'},
      x('div', {class: 'card-body'},
        x('h4', str))
    )
  },
  dash_card(item, router){
    return x('div', {class:'col-6 col-lg-3'},
      x('div', {
          class:'card sh-95 cp mb-4 text-center',
          onclick(){
            router.rout('/'+ item.title)
          }
        },
        x('div', {class:'card-body'},
          x('h3', {class: 'link-txt capital'},item.title
          ),
          x('h6', item.description)
        )
      )
    )
  },
  ani_img(res){
    return x('div', {class: 'col-6 col-lg-3'},
      x('img', {
        title: res.title,
        class: 'img-fluid ani-img sh-95 mb-4',
        src: xdata.default.origin + res.url,
        onclick(){
          window.open(xdata.default.origin + res.link)
        }
      })
    )
  }
}

export { tpl }
