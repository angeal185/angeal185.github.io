var gulp = require('gulp'),
nodemon = require("gulp-nodemon");

// Task to watch for changes and reload server
gulp.task('admin', function () {
  nodemon({
    script: './admin/app/bin/www'
  })
})

