"use strict";
const $ = require("../config.js");


const devFnc = function(cb) {
	$.deprecated("Strip");
	cb();
};
devFnc.description = $.deprecated.description;
$.gulp.task("Strip", devFnc);
