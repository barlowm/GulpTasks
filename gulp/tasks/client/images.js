"use strict";

const $ = require("../../config.js");

/********************************************************************************/
const sImageFiles = $.config.src + "/images/*";
const dImageFiles = $.config.dest + "/images";

const ImageFnc = function() {
	console.log("------------------ Reloading Images ------------------");
	$.gulp.src(sImageFiles)
		.pipe($.gulp.dest(dImageFiles));
};

$.gulp.task(
	"images",
	`Copies and minimizes any images from the ${sImageFiles} folder to the ${dImageFiles} folder`,
	[],
	ImageFnc
);
