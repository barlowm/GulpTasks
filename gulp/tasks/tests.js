"use strict";
const $ = require("../config.js");

const test = function() {
	return $.gulp
		.src(["./tests/basic/*.js"], {read: false})
		.pipe($.mocha(
			{
				reporter: "mochawesome",
				reporterOptions: {
					reportDir: "reports",
					reportName: "Module Test Reports",
					reportFilename: "VSR Audit Module Tests",
					reportTitle: "VSR Audit System Modules Test Report",
					inlineAssets: true
				}
			}
		));
};
test.description = "Runs MOCHA Tests";

$.gulp.task("test",test);
