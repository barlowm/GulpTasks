"use strict";

const $ = require("../config.js");


const jsFnc = function(cb) {
	console.log("------------------ Building Scripts ------------------");
	console.log(`Output Script File: ${$.main_script}`);
	console.log(`Source Files: ${$.main_script_assets}`);
	console.log(`Dest Folder: ${$.script_dest}`);

	// Note in this task, we're using Browserify to transform, concatinate, and pipe the output rather than $.gulp
	$.browserify($.main_script_assets)
		.bundle()
		.pipe($.source($.main_script))
		.pipe($.gulp.dest($.script_dest));
	cb();
};
jsFnc.description = "Combine any Script files into a single file and move combined file into the build folder";
$.gulp.task("js", jsFnc);


const cssFnc = function(cb) {
	console.log("------------------ Building CSS ------------------");
	console.log(`Source Files: ${$.style_assets}`);
	console.log(`Dest Folder: ${$.style_dest}`);

	$.gulp
		.src($.style_assets)
		.pipe($.concat("common.css"))
		.pipe($.gulp.dest($.style_dest));
	cb();
};
cssFnc.description = "Combine any CSS files into a single file and move combined file into the build folder";
$.gulp.task("css", cssFnc);


const htmlFnc = function(cb) {
	console.log("------------------ Building HTML ------------------");
	$.gulp.src($.page_assets).pipe($.gulp.dest($.page_dest));
	cb();
};
htmlFnc.description = "Copy any HTML pages into the build folder";
$.gulp.task("html", htmlFnc);


const done = function(cb) {
	console.log("------------------ Build Complete ------------------");
	cb();
};

const buildFnc = $.gulp.series(htmlFnc, cssFnc, jsFnc, done);
buildFnc.description = "Build the entire application by running individual processes";
$.gulp.task("build", buildFnc);

