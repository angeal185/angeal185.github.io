var gulp 	= require("gulp"),
config 		= require("./config.json"),
uglify 		= require("gulp-uglify"),
concat 		= require("gulp-concat"),
notify 		= require("gulp-notify");

gulp.task("joinJs", function(){
    return gulp.src(config.joinJs)
        .pipe(concat("app.js"))
        .pipe(gulp.dest("app/js"))
        //.pipe(uglify())
        .pipe(gulp.dest("app/js"))
		.pipe(notify("Task joinJs complete."));
});
