var gulp 	= require("gulp"),
config 		= require("./config.json"),
uglify 		= require("gulp-uglify"),
concat 		= require("gulp-concat"),
notify 		= require("gulp-notify");

gulp.task("final", function(){
    return gulp.src(config.joinFinal)
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(gulp.dest("app/js/main/js"))
		.pipe(notify("Task final complete."));
});
