function ani(cnv) {

  Object.getOwnPropertyNames(Math).map(function(p) {
    window[p] = Math[p];
  });

  var HEX_CRAD = 24,
    HEX_BG = '#141414',
    HEX_HL = '#282828',
    HEX_HLW = 2,
    HEX_GAP = 4,
    NEON_PALETE = [
      '#384046', '#395622',
      '#c384a6', '#b35c27',
      '#ffff67', '#ccff66',
      '#237823', '#fe99ff',
      '#23a648', '#fe349a',
      '#cc99fe', '#6599ff',
      '#000000', '#ffffff'
    ],
    T_SWITCH = 32,
    unit_x = 3 * HEX_CRAD + HEX_GAP * sqrt(3),
    unit_y = HEX_CRAD * sqrt(3) * .5 + .5 * HEX_GAP,
    off_x = 1.5 * HEX_CRAD + HEX_GAP * sqrt(3) * .5,
    wp = NEON_PALETE.map(function(c) {
      var num = parseInt(c.replace('#', ''), 16);

      return {
        'r': num >> 16 & 0xFF,
        'g': num >> 8 & 0xFF,
        'b': num & 0xFF
      };
    }),
    nwp = wp.length,
    csi = 0,
    f = 1 / T_SWITCH,
    c = cnv,
    n = c.length,
    w, h, _min,
    ctx = [],
    grid, source = null,
    t = 0,
    request_id = null;

  var GridItem = function(x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.points = {
      'hex': [],
      'hl': []
    };

    this.init = function() {
      var x, y, a, ba = Math.PI / 3,
        ri = HEX_CRAD - .5 * HEX_HLW;
      for (var i = 0; i < 6; i++) {
        a = i * ba;
        x = this.x + HEX_CRAD * cos(a);
        y = this.y + HEX_CRAD * sin(a);
        this.points.hex.push({
          'x': x,
          'y': y
        });

        if (i > 2) {
          x = this.x + ri * cos(a);
          y = this.y + ri * sin(a);
          this.points.hl.push({
            'x': x,
            'y': y
          });
        }
      }
    };

    this.draw = function(ct) {
      for (var i = 0; i < 6; i++) {
        ct[(i === 0 ? 'move' : 'line') + 'To'](
          this.points.hex[i].x,
          this.points.hex[i].y
        );
      }
    };

    this.highlight = function(ct) {
      for (var i = 0; i < 3; i++) {
        ct[(i === 0 ? 'move' : 'line') + 'To'](
          this.points.hl[i].x,
          this.points.hl[i].y
        );
      }
    };

    this.init();
  };

  var Grid = function(rows, cols) {
    this.cols = cols || 16;
    this.rows = rows || 16;
    this.items = [];
    this.n = this.items.length;
    this.init = function() {
      var x, y;
      for (var row = 0; row < this.rows; row++) {
        y = row * unit_y;
        for (var col = 0; col < this.cols; col++) {
          x = ((row % 2 == 0) ? 0 : off_x) + col * unit_x;
          this.items.push(new GridItem(x, y));
        }
      }
      this.n = this.items.length;
    };

    this.draw = function(ct) {
      ct.fillStyle = HEX_BG;
      ct.beginPath();
      for (var i = 0; i < this.n; i++) {
        this.items[i].draw(ct);
      }
      ct.closePath();
      ct.fill();
      ct.strokeStyle = HEX_HL;
      ct.beginPath();
      for (var i = 0; i < this.n; i++) {
        this.items[i].highlight(ct);
      }
      ct.closePath();
      ct.stroke();
    };
    this.init();
  };

  var init = function() {
    var s = getComputedStyle(c[0]),
      rows, cols;

    w = ~~s.width.split('px')[0];
    h = ~~s.height.split('px')[0];
    _min = .75 * min(w, h);
    rows = ~~(h / unit_y) + 2;
    cols = ~~(w / unit_x) + 2;
    for (var i = 0; i < n; i++) {
      c[i].width = w;
      c[i].height = h;
      ctx[i] = c[i].getContext('2d');
    }
    grid = new Grid(rows, cols);
    grid.draw(ctx[1]);
    if (!source) {
      source = {
        'x': ~~(w / 2),
        'y': ~~(h / 2)
      };
    }
    neon();
  };

  var neon = function() {
    var k = (t % T_SWITCH) * f,
      rgb = {
        'r': ~~(wp[csi].r * (1 - k) +
          wp[(csi + 1) % nwp].r * k),
        'g': ~~(wp[csi].g * (1 - k) +
          wp[(csi + 1) % nwp].g * k),
        'b': ~~(wp[csi].b * (1 - k) +
          wp[(csi + 1) % nwp].b * k)
      },
      rgb_str = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')',
      light = ctx[0].createRadialGradient(
        source.x, source.y, 0,
        source.x, source.y, .875 * _min
      ),
      stp;
    stp = .5 - .5 * sin(7 * t * f) * cos(5 * t * f) * sin(3 * t * f);
    light.addColorStop(0, rgb_str);
    light.addColorStop(stp, 'rgba(0,0,0,.1)');
    fillBackground('rgba(0,0,0,.02)');
    fillBackground(light);
    t++;
    if (t % T_SWITCH === 0) {
      csi++;
      if (csi === nwp) {
        csi = 0;
        t = 0;
      }
    }
    request_id = window.requestAnimationFrame(neon);
  };
  var fillBackground = function(bg_fill) {
    ctx[0].fillStyle = (bg_fill);
    ctx[0].beginPath();
    ctx[0].rect(0, 0, w, h);
    ctx[0].closePath();
    ctx[0].fill();
  };
  init();

  window.addEventListener('resize', init, false);
  window.addEventListener('mousemove', function(e) {
    source = {
      'x': e.clientX,
      'y': e.clientY
    };
  }, false);
}


function loader(){
  document.body.style.display = 'none'

  let dv = document.createElement('div'),
  ul = document.createElement('ul'),
  li = document.createElement('li'),
  arr = 'Loading'.split(''),
  count = 0,
  item;

  loader = dv.cloneNode();
  loader.id = 'loader';
  dv.id = 'smoke';
  dv.append(ul);
  loader.append(dv);

  for (let i = 0; i < arr.length; i++) {
    item = li.cloneNode();
    item.innerText = arr[i]
    ul.append(item)
  }

  document.body.append(loader)
  setTimeout(function(){
    document.body.removeAttribute('style')
  }, 250)


  let x = setInterval(function(){
    ul.children[count].style.animation = 'smoke 1s linear forwards'
    count++
    if(count === arr.length){
      clearInterval(x)
      setTimeout(function(){
      window.dispatchEvent(new Event('resize'));
       loader.remove();
      },1000)
    }
  },500)
}

export { ani, loader }
