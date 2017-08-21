"use strict";

const $ = require("../../config.js");


/********************************************************************************/
const sFontFiles = [
	$.config.src + "/fonts/*",
	$.nodeModules + "/font-awesome/fonts/**/*" //add paths to other libraries if you add them
];
const dFontFiles = $.config.dest + "/fonts";

const FontsFnc = function() {
	console.log("------------------ Reloading Fonts ------------------");
	// let bs = browserSync.get("Server");
	let combined = $.combiner.obj([
		$.gulp.src(sFontFiles),
		$.changed(dFontFiles),
		$.gulp.dest(dFontFiles)
	]);
	combined.on("error", console.error.bind(console));
	return combined;
};

$.gulp.task(
	"fonts",
	`Copies any fonts from the ${sFontFiles} folders to the ${dFontFiles} folder`,
	[],
	FontsFnc
);
