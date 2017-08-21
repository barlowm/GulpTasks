"use strict";

const $ = require("../../config.js");

const PagesFnc = function() {
	console.log("------------------ Reloading Pages ------------------");

	$.gulp.src($.config.src + "/*.html")
		.pipe($.gulp.dest($.config.dest))
		.pipe($.connect.reload());
};

$.gulp.task(
	"pages",
	"Check and load any HTML pages into the build folder",
	[],
	PagesFnc
);
