"use strict";
const $ = require("../../config.js");

$.gulp.task(
	"test",
	"Runs all MOCHA tests AFTER Stripping all the debug/console.log statements - requires strip dependancy",
	[],
	function () {
		return $.gulp
		.src(["tests/*.js"], {read: false})
		.pipe($.mocha({
			reporter: "mochawesome",
			reporterOptions: {
				reportDir: "reports",
				reportName: "TestReports",
				reportTitle: "Test Report",
				inlineAssets: true
			}
		}));
	});

$.gulp.task(
	"tests",
	"Runs all MOCHA tests",
	[],
	function () {
		return $.gulp
		.src(["tests/*.js"], {read: false})
		.pipe($.mocha({
			reporter: "mochawesome",
			reporterOptions: {
				reportDir: "reports",
				reportName: "TestReports",
				reportTitle: "Test Report",
				inlineAssets: true
			}
		}));
	}
);
