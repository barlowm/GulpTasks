"use strict";

const $ = require("../../config.js");
const fonts ={
	src: [
		$.config.src + "/fonts/**/*",
		$.nodeModules + "/font-awesome/fonts/**/*" //add paths to other libraries if you add them
	],
	dest: $.config.dest + "/fonts"
};

// dependant on clean
$.gulp.task(
	"fonts", 
	`Copies any fonts from the ${fonts.src} to the ${fonts.dest} folder`,
	[],
	function() {
		return $.gulp.src(fonts.src)
			.pipe($.changed(fonts.dest)) // Ignore unchanged files
			.pipe($.gulp.dest(fonts.dest))
			.pipe($.browserSync.reload({stream:true}));
	}
);
