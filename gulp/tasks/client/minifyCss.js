"use strict";

const $ = require("../../config.js");

const minify = {
	cssSrc: $.config.dest + "/css/*.css",
	cssDest: $.config.Staging + "/css/",
	jsSrc: $.config.dest + "/*.js",
	jsDest: $.config.Staging + "/"
};

$.gulp.task(
	"minifyCss", 
	`Minifies all the CSS files and copies the result to the \"${minify.cssDest}" folder`,
	["less"], function() {
		return $.gulp.src(minify.cssSrc)
			.pipe($.minifyCSS({keepBreaks:true}))
			.pipe($.gulp.dest(minify.cssDest))
			.pipe($.size());
	}
);

module.exports = { minify: minify };
