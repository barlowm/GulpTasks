"use strict";
const $ = require("../config.js");


const devFnc = function(cb) {
	$.deprecated("Staging");
	cb();
};
devFnc.description = $.deprecated.description;
$.gulp.task("Staging", devFnc);
