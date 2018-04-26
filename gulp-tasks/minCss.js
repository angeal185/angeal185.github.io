var gulp 	= require("gulp"),
minifyCSS 	= require("gulp-minify-css"), 			
rename 		= require("gulp-rename"),  		
notify 		= require("gulp-notify");

gulp.task("minCss", function () {
	gulp.src("app/css/styles.css")
		.pipe(minifyCSS())
		.pipe(rename({suffix: ".min",}))
		.pipe(gulp.dest("app/css"))
		.pipe(notify("Task ConcatCss complete."));
});