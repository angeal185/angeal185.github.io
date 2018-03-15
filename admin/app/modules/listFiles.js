const fs = require('fs'),
modJSON = require('./modJSON'),
fileList = require('../data/files');

exports.listFiles = function(i) {
  var items = [];
  fs.readdir("./admin/public/" + i, function(err, files) {

    if (err) {

    console.log(err);

    return;
  }

  files.forEach(function(f) {
    items.push(f)
  });

  function remove(arr, what) {
      var found = arr.indexOf(what);

      while (found !== -1) {
          arr.splice(found, 1);
          found = arr.indexOf(what);
      }
  }

  remove(items, 'redactor');
  remove(items, 'src-min-noconflict');
  //arr = ij.filter(e => e !== el);
  //console.log(items)

  modJSON.path("./admin/app/data/files")
    .modify(i, items)


//console.log(fileList.js)


  });
};

exports.gulp = function(i) {
  var items = [];
  fs.readdir("./gulp-tasks", function(err, files) {
    if (err) {
    console.log(err);
    return;
    }
    files.forEach(function(f) {
      items.push(f)
    });
    items.push('gulpfile.js');
    modJSON.path("./admin/app/data/files")
      .modify(i, items)
  });
};

exports.templates = function(i) {
  var items = [];
  fs.readdir("./admin/views/"+i, function(err, files) {

    if (err) {

    console.log(err);

    return;
  }

  files.forEach(function(f) {
    items.push(f)
  });

  function remove(arr, what) {
      var found = arr.indexOf(what);

      while (found !== -1) {
          arr.splice(found, 1);
          found = arr.indexOf(what);
      }
  }

  console.log(items)

  modJSON.path("./admin/app/data/files")
    .modify("views["+i+"]", items)

  });
};

exports.templatesMain = function(i) {
  var items = [];
  fs.readdir("./admin/views", function(err, files) {

    if (err) {

    console.log(err);

    return;
  }

  files.forEach(function(f) {
    items.push(f)
  });

  function remove(arr, i) {
      var found = arr.indexOf(i);

      while (found !== -1) {
          arr.splice(found, 1);
          found = arr.indexOf(i);
      }
  }

  remove(items, 'includes');
  remove(items, 'macros');
  remove(items, 'elements');

  console.log(items)

  modJSON.path("./admin/app/data/files")
    .modify("views["+i+"]", items)

  });
};
