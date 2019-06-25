"use strict";
const $ = require("../config.js");

const cleanTask = function (done) {
	if ($.argv.argv.c) {
		$.del([
			$.dest + "/**"
		], done);
	} else {
		$.log($.colors.yellow("Exiting without cleaning."), "(run gulp -c to clean before building)");
	}
	done();
};
cleanTask.description = `Cleans out the ${$.dest} folder (only runs if \"-c\" option is used)`

$.gulp.task("clean", cleanTask);
