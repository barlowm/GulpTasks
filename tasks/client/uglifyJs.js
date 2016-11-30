"use strict";

const $      = require("../../config");
const minify = require("./minifyCss");

$.gulp.task(
	"uglifyJs",
	`Minifies the compiled script file and copies it to the \"${minify.jsDest}\" folder`,
	["js", "browserify"], 
	function() {
		return $.gulp.src($.config.minify.jsSrc)
			.pipe($.uglify())
			.pipe($.gulp.dest($.config.minify.jsDest))
			.pipe($.size());
	}
);
