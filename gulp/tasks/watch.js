"use strict";
const $ = require("../config.js");


const devFnc = function(cb) {
	$.deprecated("Watch");
	cb();
};
devFnc.description = $.deprecated.description;
$.gulp.task("Watch", devFnc);
