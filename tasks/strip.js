"use strict";
const $ = require("../config.js");

$.gulp.task(
	"strip", 
	"Strips console and debugger statements from source and pipes it to dest",
	[],
	function () {
	return $.gulp
		.src([$.config.src + "/**/*.js"])
		.pipe($.stripDebug())
		.pipe($.gulp.dest($.config.dest));
});

