var gulp 	= require("gulp"),
config 		= require("./config.json"),
uglify 		= require("gulp-uglify"),
concat 		= require("gulp-concat"),
notify 		= require("gulp-notify");

gulp.task("joinJs", function(){
    return gulp.src(config.joinJs)
        .pipe(concat("main.js"))
        .pipe(gulp.dest("main/js"))
        //.pipe(uglify())
        .pipe(gulp.dest("main/js"))
		.pipe(notify("Task joinJs complete."));
});
