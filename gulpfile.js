var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
	stylus = require('gulp-stylus');
	requireDir  = require("require-dir"),
	coffee 		= require("gulp-coffee"),				
	stylus 		= require("gulp-stylus"),
	concatCss 	= require("gulp-concat-css"), 			
	minifyCSS 	= require("gulp-minify-css"), 			
	htmlmin 	= require("gulp-htmlmin"); 				
	concat 		= require("gulp-concat"), 			
	uglify 		= require("gulp-uglify"), 			
	imagemin 	= require("gulp-imagemin"), 			
	jshint 		= require("gulp-jshint"), 				
	jsonlint 	= require("gulp-jsonlint"),
	gutil 		= require("gulp-util"),
	stylish 	= require("jshint-stylish"), 		
	notify 		= require("gulp-notify"),		
	//git 		= require("gulp-git"),
	rename 		= require("gulp-rename"),
	chalk 		= require("chalk");
	
gulp.task('joinModels', function(){
    return gulp.src(['app/models/data.js','app/models/template.js','app/models/codepen.js'])
        .pipe(concat('concat.js'))
        .pipe(gulp.dest('app/models'))
        .pipe(uglify())
        .pipe(gulp.dest('app/models'));
});

gulp.task('joinJs', function(){
    return gulp.src([
			"app/js/init.js",
			"app/js/cmd.js",
			"app/js/routes.js",
			"app/js/animate.js",
			"app/js/toastr.min.js",
			"app/js/app-concat.min.js",
			"app/js/cnv.min.js",
			"app/js/cache.min.js",
			"app/js/scroll.js"
			])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('app/js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task("joinCss", function () {
	gulp.src("app/css/styles.css")
		.pipe(minifyCSS())
		.pipe(rename({suffix: ".min",}))
		.pipe(gulp.dest("app/css"))
		.pipe(notify("Task ConcatCss complete."));
});

gulp.task('stylus', function () {
  return gulp.src('app/css/styles.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('app/css/'));
});

gulp.task('default', ['join', 'stylus'], function(){
	
});