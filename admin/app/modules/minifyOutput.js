var Minifier = require('html-minifier'),
htmlMin = require('../config/htmlMin');

module.exports = exports = function(req, res, next) {
  res.oldRender = res.render;
  res.render = function(view, options) {
    this.oldRender(view, options, function(err, html) {
      if (err) {
        throw err;
      }
      html = Minifier.minify(html, htmlMin);
      res.send(html);
    });
  };
  next();
};
