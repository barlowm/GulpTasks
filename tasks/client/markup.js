"use strict";

const $ = require("../../config.js");
const markup = {
	src: $.config.srcF + "/index.html",
	dest: $.config.dest
};
// dependant on clean
$.gulp.task(
	"markup", 
	`Copies all HTML Markup files to the \"${markup.dest}\" folder`,
	[],
	function() {
		return $.gulp.src(markup.src)
			.pipe($.gulp.dest(markup.dest))
			.pipe($.browserSync.reload({stream:true}));
	}
);
