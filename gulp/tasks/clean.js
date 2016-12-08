"use strict";

const $ = require("../config.js");

const cleanTask = function (done) {
	if ($.argv.clean === true || $.argv.c) {
		$.del([
			$.config.dest + "/**"
		], done);
	} else {
		$.gutil.log($.gutil.colors.yellow("Exiting without cleaning."), "(run gulp -c to clean before building)");
		done();
	}
};

$.gulp.task(
	"clean", 
	`Cleans out the ${$.config.dest} folder (only runs if \"-c\" option is used)`,
	[],
	cleanTask);

module.exports = cleanTask;
