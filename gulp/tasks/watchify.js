"use strict";
const $ = require("../config.js");


const devFnc = function(cb) {
	$.deprecated("Watchify");
	cb();
};
devFnc.description = $.deprecated.description;
$.gulp.task("Watchify", devFnc);
