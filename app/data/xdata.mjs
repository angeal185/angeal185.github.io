
const xdata = {
  default:{
    title: 'Portfolio',
    version: '1.0.0', // don't delete me
    origin: 'https://angeal185.github.io',
    params: true,
    error: '/error',
    base_path: '/dashboard',
    webmanifest: './manifest.webmanifest',
    base_script_name: 'main',
    meta: [{
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    }],
    styles:[{
      href: './app/css/bootstrap.min.css',
      rel: 'stylesheet'
    },{
      href: './app/css/main.css',
      rel: 'stylesheet'
    },{
      rel: 'shortcut icon',
      href: './favicon.png',
      type: 'image/x-icon'
    },{
      rel:'alternate',
      href: 'https://github.com/angeal185.atom',
      type: 'application/atom+xml',
      title: 'ben eaves - recent activity feed'
    }],
    js_head:[],
    js_body:[],
    storage: {
      max_age: 9999999999,
      prefix: 'rt'
    },
    stream: {
      download: {
        type: 'text/plain',
        charset: 'utf-8'
      },
      fetch: {
        method: 'GET',
        mode: 'no-cors',
        redirect: 'error',
        referrer: 'no-referrer',
        //integrity: 'sha384-'
        headers: {
          'Content-Type': 'application/json',
          'Sec-Fetch-Dest': 'object'
        }
      },
      cors: {
        method: 'GET',
        mode: 'cors',
        redirect: 'error',
        referrer: 'no-referrer',
        headers: {
          'Content-Type': 'application/json',
          'Sec-Fetch-Dest': 'object'
        }
      }
    }
  },
  base:{
    nav:[{
      name: 'contact',
      ico: 'envelope'
    }],
    nav_sb: ['dashboard', 'works', 'animations', 'skills', 'about', 'resume', 'blog', 'links'],
    animations: 'https://angeal185.github.io/animated-ajax-carosel-portfolio',
    email: 'beneaves@protonmail.com',
    linkedin: 'https://www.linkedin.com/in/ben-eaves-996991125',
    github: 'https://github.com/angeal185',
    codepen: 'https://codepen.io/angeal185',
    npm: 'https://www.npmjs.com/~angeal185',
    atom: 'https://github.com/angeal185.atom'

  },
  dashboard: {
    msg: 'dashboard page',
    url: "./api/dashboard.json",
    nav: [{
      title: 'works',
      description: 'public works portfolio'
    }, {
      title: 'animations',
      description: 'js animations portfolio'
    }, {
      title: 'skills',
      description: 'My skills list'
    }, {
      title: 'about',
      description: 'About me'
    }, {
      title: 'resume',
      description: 'My resume'
    }, {
      title: 'blog',
      description: 'My blog'
    }, {
      title: 'links',
      description: 'My portfolio related links'
    }]
  },
  about: {
    msg: 'About',
    url: "./api/about.json"
  },
  works: {
    msg: 'works page',
    url: "./api/works.json"
  },
  animations: {
    msg: 'animations page',
    url: "./api/animations.json"
  },
  skills: {
    msg: 'skills page',
    url: "./api/skills.json"
  },
  events: {
    msg: 'events page',
    url: 'https://api.github.com/users/angeal185/events',
    profile: 'https://api.github.com/users/angeal185'
  },
  blog: {
    msg: 'silence is golden',
    url: "./api/blog.json"
  },
  resume: {
    msg: 'Resume',
    url: "./api/resume.json"
  },
  links: {
    msg: 'links page',
    url: "./api/links.json"
  }
}

export { xdata }
