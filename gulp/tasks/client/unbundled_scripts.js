"use strict";

const $ = require("../../config.js");

const srcUnbundleScripts = [
	"./node_modules/php-date-formatter/js/*"
];

const DataFnc = function() {
	console.log("------------------ Copying Unbundled Scripts ------------------");
	const combined = $.combiner.obj([
		$.gulp.src(srcUnbundleScripts),
		$.gulp.dest($.config.dest)
	]);
	combined.on("error", console.error.bind(console));
	return combined;
};

$.gulp.task(
	"unbundled_scripts",
	"Check and load any unbundled scripts into the build folder",
	[],
	DataFnc
);
