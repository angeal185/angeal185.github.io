import { x } from '../modules/xscript.mjs';
import { xdata } from '../data/xdata.mjs';

const tpl = {
  //nav
  menu_main(router){
    let nav_left = x('div', {class: 'nav-left col-6 d-flex'},
      x('div', {
        class: 'nav-lnk icon-bars mr-2 sh-95',
        onclick(){
          window.dispatchEvent(new Event("toggle-sidebar"));
        }
      }),
      x('span', 'Ben Eaves')
    ),
    nav_right = x('div', {class: 'nav-right col-6'}),
    nav_sb = x('div', {class: 'nav-sb'},
      x('div', {class: 'sb-body'})
    ),
    items = xdata.base.nav,
    sb_items = xdata.base.nav_sb;

    for (let i = 0; i < items.length; i++) {
      nav_right.append(x('div', {
        class: 'nav-lnk sh-95 icon-'+ items[i].ico,
        onclick(){
          router.rout('/'+ items[i].name)
        }
      }))

    }


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
        class: 'icon-github cp ml-2',
        title: 'github profile',
        onclick(){

        }
      })
    )
  },
  repo_tpl(res){
    return x('div', {class: 'col-lg-6 mb-4'},
      x('div', {class: 'card'},
        x('div', {class: 'card-body'},
          x('h4', x('a', {
            target: '_blank',
            href: res.html_url
          },res.name)),
          x('p', res.description || 'no description provided'),
          x('h6', 'Created: ', new Date(res.created_at).toLocaleString()),
          x('h6', 'Updated: ', new Date(res.updated_at).toLocaleString()),
          x('h6', 'Language: ', res.language || 'other'),
          x('small', {class:'link-txt'}, res.git_url || '')
        )
      )
    )
  },
  lnk_tpl(res, i){
    return x('div', {class: 'col-lg-6 mb-4'},
      x('div', {class: 'card'},
        x('div', {class: 'card-body'},
          x('h4', res.title),
          x('h5', res.description),
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
      x('h4', res.organization, x('small', {class:'float-right'}, res.duration)),
      x('h5', res.title),
      x('h6', 'Duties:', function(){
        let spn = x('span', {class: 'float-right text-right'});
        for (let j = 0; j < res.duties.length; j++) {
          spn.append(x('span', {class: 'badge'}, res.duties[j]))
        }
        return spn;
      }),
      x('h6', 'Languages:', function(){
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
      x('h4', res.title, x('small', {class:'float-right'}, res.date)),
      x('h5', res.organization)
    )
  },
  lg_active(str){
    return x('div', {class:'list-group mb-4'},
      x('div', {class:'list-group-item active'}, str)
    )
  }
}

export { tpl }
