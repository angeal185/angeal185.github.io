var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
	stylus = require('gulp-stylus');
	requireDir  = require("require-dir"),
	coffee 		= require("gulp-coffee"),				// Compile coffee into js
	stylus 		= require("gulp-stylus"), 				// Compile Stylus into CSS
	concatCss 	= require("gulp-concat-css"), 			// Concat CSS into single file
	minifyCSS 	= require("gulp-minify-css"), 			// Minify the CSS
	htmlmin 	= require("gulp-htmlmin"); 				// Minify .hbs files
	concat 		= require("gulp-concat"), 				// Join all JS files together to save space
	uglify 		= require("gulp-uglify"), 				// Minify JavaScript
	imagemin 	= require("gulp-imagemin"), 			// Minify images
	jshint 		= require("gulp-jshint"), 				// Debug JS files
	jsonlint 	= require("gulp-jsonlint"),
	gutil 		= require("gulp-util"),
	stylish 	= require("jshint-stylish"), 			// More stylish debugging
	notify 		= require("gulp-notify"),				// Notify msg on completion of tasks
	//git 		= require("gulp-git"),
	rename 		= require("gulp-rename"),
	chalk 		= require("chalk");
	
gulp.task('joinModels', function(){
    return gulp.src(['models/data.js','models/template.js','models/codepen.js'])
        .pipe(concat('concat.js'))
        .pipe(gulp.dest('models'))
        .pipe(uglify())
        .pipe(gulp.dest('models'));
});

gulp.task('joinJs', function(){
    return gulp.src([
			"controllers/init.js",
			"static/js/cmd.min.js",
			"controllers/routes.js",
			"static/js/animate.js",
			"static/js/toastr.min.js",
			"static/js/app-concat.min.js",
			"static/js/cnv.min.js",
			"controllers/cache.min.js",
			"static/js/scroll.js"
			])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('static/js'))
        .pipe(uglify())
        .pipe(gulp.dest('static/js'));
});

gulp.task("joinCss", function () {
	gulp.src("static/css/styles.css")
		.pipe(minifyCSS())
		.pipe(rename({suffix: ".min",}))
		.pipe(gulp.dest("static/css"))
		.pipe(notify("Task ConcatCss complete."));
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