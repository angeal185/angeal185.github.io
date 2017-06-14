var gulp = require("gulp"),
config 		= require("./gulp-tasks/config.json"),
requireDir  = require("require-dir"),
gutil 		= require("gulp-util"),
concat 		= require("gulp-concat"),
uglify 		= require("gulp-uglify"),
stylus 		= require("gulp-stylus"),
coffee 		= require("gulp-coffee"),				
stylus 		= require("gulp-stylus"),
concatCss 	= require("gulp-concat-css"), 			
minifyCSS 	= require("gulp-minify-css"), 			
htmlmin 	= require("gulp-htmlmin"),			
concat 		= require("gulp-concat"), 			
imagemin 	= require("gulp-imagemin"), 			
jshint 		= require("gulp-jshint"), 				
jsonlint 	= require("gulp-jsonlint"),
stylish 	= require("jshint-stylish"), 		
notify 		= require("gulp-notify"),		
rename 		= require("gulp-rename"),
chalk 		= require("chalk"); 
requireDir("./gulp-tasks", {recurse: true});

//default server with nodemon and watch
gulp.task("default", ["start","Watch"], function() {
	console.log(chalk.blue('Server listening with tasks:'),chalk.green(' Start'),chalk.red(' &&'),chalk.green(' Watch'))
});


gulp.task("merge", ["jsLint","joinModels", "joinJs"], function(){});