"use strict";

/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/
const $ = require("../config");

$.gulp.task(
	"watch", 
	"Watches for (and recompiles if necessary) any change in any of the source files",	
	[ "watchify", "browserSync" ], 
	function() {
		$.gulp.watch($.config.src, ["lintSrc", "markup", "js"]);
		$.gulp.watch($.config.src + "/images", ["images"]);
		$.gulp.watch($.config.src + "/styles", ["less"]);
	}
);

$.gulp.task(
	"w", 
	"Watches for (and recompiles if necessary) any change in any of the source files",
	[ "js", "browserSync" ], 
	function() {
		$.gulp.watch($.config.src, ["lintSrc", "markup", "js"]);
		$.gulp.watch($.config.src + "/images", ["images"]);
		$.gulp.watch($.config.src + "/styles", ["less"]);
	}
);


$.gulp.task(
	"w2", 
	"Watches for (and recompiles if necessary) any change in any of the source files",
	[ "js", "browserSync" ], 
	function() {
		$.gulp.watch($.config.src + "/scripts", ["js"]);
	}
);

