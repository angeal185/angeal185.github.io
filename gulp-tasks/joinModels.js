var gulp 	= require("gulp"),
config 		= require("./config.json"),
uglify 		= require("gulp-uglify"),			
concat 		= require("gulp-concat"), 		
notify 		= require("gulp-notify");

gulp.task("joinModels", function(){
    return gulp.src(config.joinModels)
        .pipe(concat("concat.js"))
        .pipe(gulp.dest("app/models"))
        .pipe(uglify())
        .pipe(gulp.dest("app/models"))
		.pipe(notify("Task joinModels complete."));
});

