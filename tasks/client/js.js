"use strict";
const $ = require("../../config.js");
const browse = require("./browserify");

// let b = $.watchify($.browserify(browse.browserify.bundleConfigs)); 
let b = $.browserify(browse.bundleConfigs); 

// b.on("update", bundle);   // on any dep update, runs the bundler
b.on("log", $.gutil.log); // output build logs to terminal

function bundle() {
	console.log("Running the BUNDLE process");
	return b
		.transform($.hbsfy)
		.bundle()
		.on("error", $.gutil.log.bind($.gutil, "Browserify Error"))    // log errors if they happen
		.pipe($.source($.config.browserify.outptFileName))
		.pipe($.buffer())// optional, remove if you don"t need to buffer file contents
		.pipe($.sourcemaps.init({loadMaps: true})) // loads map from browserify file// optional, remove if you dont want sourcemaps
		.pipe($.sourcemaps.write("./")) // writes .map file
		.pipe($.gulp.dest($.config.dest));
}

$.gulp.task(
	"js", 
	`Compiles all the script files into a single ${browse.browserify.outptFileName} in the ${$.config.dest} folder`,
	[],
	bundle
); // so you can run `gulp js` to build the file

module.exports = bundle;