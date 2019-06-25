"use strict";
const $ = require("../config.js");
const exec = require("child_process").exec;

const prodPrep = function(cb) {
	console.log("Running npm-check");
	exec("npm-check", function (err, stdout, stderr) {
		console.log(stdout);
		cb();
	});
};
prodPrep.description = "Pre-Prod: Parse package.json and remove unused packages";

$.gulp.task("prod_prep",prodPrep);
