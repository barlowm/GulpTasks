"use strict";

const $ = require("../config.js");

// Run this to compress all the things!
//$.gulp.task("dev", ["markup", "images", "fonts", "minifyCss", "uglifyJs"]);
// ["lint", "markup", "less", "images", "fonts", "w"],
// ["js", "markup", "less", "images", "fonts", "w"],

// $.gulp.task(
// 	"dev",
// 	"Runs all the development tasks",
// 	["js", "markup", "less", "images", "fonts", "w"],
// 	function() {}	// Used for completeness of the task parameters (but not required)
// );


const devFnc = function(cb) {
	$.deprecated("Dev");
	cb();
};
devFnc.description = $.deprecated.description;
$.gulp.task("dev", devFnc);
