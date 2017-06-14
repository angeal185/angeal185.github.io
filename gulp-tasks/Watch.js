var gulp = require("gulp"),
config 		= require("./config.json");

// Task to watch for changes in the project
gulp.task("Watch", function (callback) {
    gulp.watch("./app/models/**/*.js", ["joinModels"]);
	gulp.watch("./app/js" + [config.joinJs], ["joinJs"]);
	gulp.watch("./app/css/**/*.css", ["minCss"]);
	callback();
});