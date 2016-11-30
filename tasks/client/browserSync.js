"use strict";

const $ = require("../../config.js");
const browserSync = {
	server: {
		baseDir: $.config.dest
	},
	files: $.config.dest + "/**/*",
	port: process.env.PORT
};

$.gulp.task(
	"browserSync", 
	"Synchronizes the browser with the source code recompile",
	[],
	function() {
		$.browserSync(browserSync);
	}
);
