"use strict";
const $ = require("../config.js");

const lintTests = function() {
	console.log("Checking Test Code for Lint");
	$.fs.ensureDirSync("reports");
	return $.gulp.src("./tests/**/*.js")
		.pipe($.eslint({config: ".eslintrc"}))
		.pipe($.eslint.format("html", $.fs.createWriteStream("reports/LintReport_Tests.html")))
		.pipe($.notify({ message: "LINT task complete, saving report in \"reports/LintReport_Tests.html\".", onLast:true }));
};
lintTests.description = "runs ESLint on all the test modules";

$.gulp.task("lintTests", lintTests);
