var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
	stylus = require('gulp-stylus');
	
gulp.task('join', function(){
    return gulp.src(['models/general.json','models/header.json','models/template.json','models/nodejs.json','models/javascript.json','models/python.json','models/php.json','models/skills.json','models/resume.json'])
        .pipe(concat('concat.js'))
        .pipe(gulp.dest('models'))
        .pipe(uglify())
        .pipe(gulp.dest('models'));
});

gulp.task('stylus', function () {
  return gulp.src('static/css/styles.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('static/css/'));
});

gulp.task('default', ['join', 'stylus'], function(){
	
});