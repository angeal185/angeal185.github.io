var gulp = require("gulp"),
imagemin 	= require("gulp-imagemin"),
notify 		= require("gulp-notify");

// Task to minify images into build
gulp.task("minImg", function() {
	gulp.src("./app/img/*/**")
		.pipe(imagemin({
		progressive: true
		}))
		.pipe(gulp.dest("./app/img/"))
		.pipe(notify("Task images complete."));
});