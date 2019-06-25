"use strict";
const $ = require("../config.js");

const lintSrc2Console = function() {
	return $.gulp.src([$.src + "/*.js"])
		.pipe($.eslint({config: ".eslintrc"}))
		.pipe($.eslint.format())
		.pipe($.eslint.failAfterError());
};
lintSrc2Console.description = "runs ESLint on all the source modulesbut displays output on console rather than in a report";

const lintSrc = function() {
	console.log("Checking Source Code for Lint");
	$.fs.ensureDirSync("reports");
	return $.gulp.src([$.src + "/*.js"])
		.pipe($.eslint({config: ".eslintrc"}))
		.pipe($.eslint.format("html", $.fs.createWriteStream("reports/LintReport_Src.html")))
		.pipe($.notify({ message: "LINT task complete, saving report in \"reports/LintReport_Src.html\".", onLast:true }));
};
lintSrc.description = "runs ESLint on all the source modules";

$.gulp.task("lintSrc", lintSrc);
// $.gulp.task("lintSrc2Console", lintSrc2Console);
