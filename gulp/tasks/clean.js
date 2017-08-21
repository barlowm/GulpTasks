"use strict";

const $ = require("../config.js");

const cleanTask = function (done) {
	$.del([$.config.dest + "/**"], done);
};

$.gulp.task(
	"clean",
	"Cleans out the ${$.config.dest} folder",
	[],
	cleanTask
);
