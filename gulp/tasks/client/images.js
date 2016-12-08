"use strict";

const $ = require("../../config.js");

const images = {
	src: $.config.src + "/images/**/*",
	dest: $.config.dest + "/images"
};

// dependant on clean
$.gulp.task(
	"images", 
	`Copies and minimizes any images to the ${images.dest} folder`,
	[],
	function() {
		return $.gulp.src(images.src)
			.pipe($.changed(images.dest)) // Ignore unchanged files
			.pipe($.imagemin()) // Optimize
			.pipe($.gulp.dest(images.dest))
			.pipe($.browserSync.reload({stream:true}));
	}
);
