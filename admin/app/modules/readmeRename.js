const fs = require('fs');

function renameMds(i,e){
  fs.rename('./node_modules/'+i+'/'+e, './node_modules/'+i+'/Readme.md', function(err) {
    if (err) {

    } else {
      console.log('converted')
    }
  })
}

exports.readmeRename = function(i) {
  var items = [];
  fs.readdir("./node_modules", function(err, files) {
    if (err) {
    console.log(err);
    return;
    }
    files.forEach(function(f) {
      //items.push('./node_modules/'+f+'/readme.md')
      renameMds(f,'readme.md');
      renameMds(f,'README.md');
      renameMds(f,'README.markdown');
      renameMds(f,'Readme.markdown');
      renameMds(f,'readme.markdown');
    });
  });
}
