"use strict";
const $ = require("../config.js");

const lintGulp = function() {
	console.log("Checking Gulp Code for Lint");
	$.fs.ensureDirSync("reports");
	return $.gulp.src("./gulp/**/*.js")
	.pipe($.eslint({config: ".eslintrc"}))
	.pipe($.eslint.format("html", $.fs.createWriteStream("reports/LintReport_Gulp.html")))
	.pipe($.gulp.dest($.config.dest))
	.pipe($.notify({ message: "LINT task complete, saving report in \"reports/LintReport_Gulp.html\".", onLast:true }));
};

$.gulp.task(
	"lintGulp", 
	"runs ESLint on all the Gulp task modules",
	[],
	lintGulp
	);