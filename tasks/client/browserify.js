"use strict";

const $ = require("../../config.js");

const browserify = {
	src: $.config.src,
	dest: $.config.dest,
	srcFile: $.config.srcApp,
	outptFileName: "index.js",
	options: {
		debug: true,
		paths: [
			$.nodeModules + "/"
		]
	},

	// A separate bundle will be generated for each
	// bundle config in the list below
	bundleConfigs: {
		entries: $.config.srcApp,
		dest: $.config.dest,
		outputName: "index.js",
		// Additional file extentions to make optional
		extensions: [".ejs", ".hbs"],
		// list of modules to make require-able externally
		// require: ["jquery", "lodash", "keymaster"]
	}
};

const browserifyTask = function(callback, devMode) {
	console.log("Starting browserifyTask");
	$.hbsfy.configure({
		extensions: ["hbs"]
	});

	$.browserify(browserify.srcFile, browserify.options )
		.transform($.hbsfy)
		.bundle()
		.pipe($.source(browserify.outptFileName))
		.pipe($.gulp.dest(browserify.dest));
	console.log("browserifyTask COMPLETE");
};


$.gulp.task(
	"browserify", 
	`Compiles all the script files into a single ${browserify.outptFileName} in the ${browserify.dest} folder`,
	[],
	browserifyTask);

// Exporting the task so we can call it directly in our watch task, with the "devMode" option
module.exports = {browserify: browserify, browserifyTask: browserifyTask};
