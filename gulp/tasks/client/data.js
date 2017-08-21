"use strict";

const $ = require("../../config.js");

const sDataFiles = [
	"./data_files/*"
];
const dDataFiles = $.config.dest;

const DataFnc = function() {
	console.log("------------------ Copying Data Files ------------------");
	let combined = $.combiner.obj([
		$.gulp.src(sDataFiles),
		$.gulp.dest($.config.dest + "/data_files")
	]);
	combined.on("error", console.error.bind(console));
	return combined;
};

$.gulp.task(
	"data",
	"Check and load any data files into the build folder",
	[],
	DataFnc
);